import React, { useEffect, useRef, useState } from 'react'
import MiiRendered, { Mii } from './MiiRendered'
import useControls from '../controls/useControls'
import { useFrame, useThree } from '@react-three/fiber'
import { Group, MathUtils, Object3D, Vector2, Vector3 } from 'three'
import { CollisionTarget, CuboidCollider, RapierRigidBody, RigidBody, vec3 } from '@react-three/rapier'
import { useSocketStore } from '@/stores/SocketStore'
import { useControlsStore } from '@/stores/ControlsStore'



const MII_WALK_SPEED = 5.0;
const MII_RUN_SPEED = 10.0;
const MII_JUMP= 5.0;
const CAMERA_INERTIA = 0.95;

const MiiControlled = ({mii}:{mii:Mii}) => {

  const {setMsg, msg, tpPosition, setTP, animation, stopAnimation} = useControlsStore();
  const {emitMove, emitRotate, isLocalOnly, emitMessage, emitAnimation, mySocket, isSpawned} = useSocketStore()

  const rb = useRef<RapierRigidBody>(null);
  const mesh = useRef<Group>(null);

  const cameraStatus = useRef({
    velocity:new Vector2(0,0),
    distance:3,
  })

  const {camera, gl} = useThree();
  const {mouseHandler, arrowsHandler, haveJumped} = useControls();

  const [currentAnimation, setAnimation] = useState<string>("idle")
  const [isGrounded, setIsGrounded] = useState<boolean>(false);
  const [canMove, setCanMove] = useState(true);
  const [interval, setNewInterval] = useState<NodeJS.Timeout | null>(null);

  const applyAnimation = (animationString:string) => {
    setAnimation(animationString)
    emitAnimation(animationString)
  }


  useEffect(()=> {
    if(msg == undefined || !mySocket.connected || !isSpawned) return
    if(msg.length > 0) {
      if(interval) clearInterval(interval);
      const newInterval = setInterval(()=> {
        setMsg("");
      },10000)
      setNewInterval(newInterval);
    }
    emitMessage(msg);
  },[msg])


  const HandleCamera = (rbPosition:Vector3) => {
    const cameraTarget = new Vector3(rbPosition.x, rbPosition.y-1, rbPosition.z);

    // //CAMERA MOVE
    const distance = camera.position.distanceTo(rbPosition);
    const offset = new Vector3().subVectors(camera.position, rbPosition);
    offset.normalize().multiplyScalar(distance);
    camera.position.copy(rbPosition).add(offset);
    camera.lookAt(cameraTarget);


    //CAMERA ZOOM
    const dist = camera.position.distanceTo(cameraTarget);
    const newDist = MathUtils.clamp(dist+mouseHandler.wheelDelta, 2,5);
    camera.position.sub(cameraTarget).normalize().multiplyScalar(newDist).add(cameraTarget);
    cameraStatus.current.distance = newDist;

    //CAMERA ROTATION
    const CameraRotate = (cameraTarget:Vector3, mouvX:number, mouvY:number) => {
      const angleX = getCameraAngleMovement(mouvX, gl.domElement.clientWidth);
      const angleY = getCameraAngleMovement(mouvY, gl.domElement.clientHeight);

  
      camera.position.sub(cameraTarget)
      camera.position.applyAxisAngle(new Vector3(0, 1, 0), -angleX);
      camera.position.applyAxisAngle(new Vector3(1, 0, 0).applyQuaternion(camera.quaternion), -angleY);
      camera.position.add(cameraTarget);
      camera.lookAt(cameraTarget);
    }
    if(mouseHandler.isDown) {
      cameraStatus.current.velocity.x =mouseHandler.movement.x
      cameraStatus.current.velocity.y =mouseHandler.movement.y
      CameraRotate(cameraTarget, mouseHandler.movement.x, mouseHandler.movement.y);
    } else {
      cameraStatus.current.velocity.multiplyScalar(CAMERA_INERTIA)
      if(cameraStatus.current.velocity.length() > 0.001) {
        CameraRotate(cameraTarget, cameraStatus.current.velocity.x, cameraStatus.current.velocity.y);
      } else {
        cameraStatus.current.velocity.set(0, 0)
      }
    }

  }
 

  const HandleMoveMiiRB = (rb:RapierRigidBody) => {
    if(!canMove) return; 
    const rbPosition = vec3(rb.translation())
    if(arrowsHandler.isUp) {
      const currentVel = rb.linvel();
      const directionVector = new Vector3().subVectors(rbPosition,camera.position);
      directionVector.normalize();
      directionVector.multiplyScalar(arrowsHandler.isShift?MII_RUN_SPEED:MII_WALK_SPEED);
      currentVel.x = directionVector.x;
      currentVel.z = directionVector.z;
      rb.setLinvel(currentVel, true)



      if(isGrounded) {
        if(arrowsHandler.isShift) {
          applyAnimation("run")
        } else {
          applyAnimation("walk")
        }
      }


    } else if( !arrowsHandler.isDown && !arrowsHandler.isLeft && !arrowsHandler.isRight && !arrowsHandler.isDown) {
      const linvel = rb.linvel();
      rb.setLinvel(new Vector3(0,linvel.y,0), true)
      if(currentAnimation !== "idle" && isGrounded) {
        applyAnimation("idle")
      }

    }
  }


  const HandleMeshRotation = (mesh:Object3D, rbPos:Vector3) => {
    if(arrowsHandler.isUp) {
      const directionVector = new Vector3().subVectors(rbPos,camera.position);
      directionVector.y = 0;
      directionVector.normalize();
      mesh.lookAt(rbPos.clone().add(directionVector));

      const pointToLookAt = rbPos.clone().add(directionVector)
      emitRotate([pointToLookAt.x, pointToLookAt.y, pointToLookAt.z]);
    }
  }

  const HandleJump = (rb:RapierRigidBody) => {
    if(arrowsHandler.isSpace && isGrounded) {
      setCanMove(false)
      applyAnimation('jump')
      haveJumped();
      setIsGrounded(false);
      setTimeout(()=> {
        const directionVector = new Vector3().subVectors(vec3(rb.translation()),camera.position);
        const currentVel = rb.linvel();
        directionVector.normalize();
        directionVector.multiplyScalar(arrowsHandler.isShift?MII_RUN_SPEED:MII_WALK_SPEED);
        currentVel.x = directionVector.x;
        currentVel.z = directionVector.z;
        currentVel.y += MII_JUMP;
        rb.setLinvel(currentVel, true);
      },800)
    } 
    if(isGrounded && !canMove) {
      setCanMove(true)
    }

  }



  const OnCollisionEnter = (collisionTarget:CollisionTarget) => {
    if(collisionTarget.rigidBodyObject == undefined) return;
    const colliderName = collisionTarget.rigidBodyObject.name;

    if(colliderName == "WuhuIsland") {
      setIsGrounded(true);
    }
  }

  const OnCollisionExit = (collisionTarget:CollisionTarget) => {
    if(collisionTarget.rigidBodyObject == undefined) return;
    const colliderName = collisionTarget.rigidBodyObject.name;

    if(colliderName == "WuhuIsland") {
      setIsGrounded(false);
    }
  }

  
  useFrame(()=> {
    if(!rb.current || !mesh.current  || ((!isSpawned && !isLocalOnly))) return

    const rbPosition = vec3(rb.current.translation());
    HandleCamera(rbPosition)

    if(animation.animating) {
      if(arrowsHandler.isUp) {
        stopAnimation();
      } else {
        return
      }
    }
    HandleMoveMiiRB(rb.current)
    HandleMeshRotation(mesh.current,rbPosition );
    HandleJump(rb.current);
    const newPos = vec3(rb.current.translation())
    emitMove([newPos.x, newPos.y, newPos.z])

  })


  useEffect(()=> {
    if(rb.current && tpPosition != null) {
      rb.current.setTranslation(new Vector3(tpPosition[0],tpPosition[1],tpPosition[2]), true)
      setTP(null)
    }
  },[tpPosition])

  useEffect(()=> {
    if(animation.animating) {
      applyAnimation(animation.animationString)
    }
  }, [animation])

  

  return <group scale={1.5}>
    <RigidBody ref={rb} 
  colliders={false} lockRotations 
          gravityScale={1} type="dynamic"
        onCollisionEnter={({other}) => OnCollisionEnter(other)}
        onCollisionExit={({other}) => OnCollisionExit(other)}
        >
          <group ref={mesh}  >
          <MiiRendered mii={mii} msg={msg} animationString={currentAnimation} />
          </group>
          <CuboidCollider args={[0.4,0.7,0.4]} position={[0,-1.3,0]} />
        </RigidBody>
        </group>
}


const getCameraAngleMovement = (mov:number, dimensions:number) => {
  return 2 * Math.PI * mov / dimensions
}


export default MiiControlled