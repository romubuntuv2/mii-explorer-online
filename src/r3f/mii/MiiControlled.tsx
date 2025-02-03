import React, { useRef, useState } from 'react'
import MiiRendered, { Mii, MiiInstance } from './MiiRendered'
import useControls from '../controls/useControls'
import { useFrame, useThree } from '@react-three/fiber'
import { Group, MathUtils, Object3D, Vector2, Vector3 } from 'three'
import { CuboidCollider, RapierRigidBody, RigidBody, vec3 } from '@react-three/rapier'
import { SocketUser, useSocketStore } from '@/stores/SocketStore'


const CAMERA_INERTIA = 0.95;

const MiiControlled = ({mii, user}:{mii:Mii, user:SocketUser}) => {

  const {emitMove} = useSocketStore()

  const rb = useRef<RapierRigidBody>(null);
  const mesh = useRef<Group>(null);

  const cameraStatus = useRef({
    velocity:new Vector2(0,0),
    distance:3,
  })

  const {camera, gl} = useThree();
  const {mouseHandler, arrowsHandler } = useControls();

  const [currentAnimation, setAnimation] = useState<string>("Idle.001")


  const HandleCamera = (rbPosition:Vector3) => {
    const cameraTarget = new Vector3(rbPosition.x, rbPosition.y-1, rbPosition.z);

    // //CAMERA MOVE
    // const offset = new Vector3().subVectors(camera.position, rbPosition);
    // offset.normalize().multiplyScalar(cameraStatus.current.distance);
    // camera.position.copy(rbPosition).add(offset);
    // camera.lookAt(rbPosition);


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
    const rbPosition = vec3(rb.translation())
    if(arrowsHandler.isUp) {
      const directionVector = new Vector3().subVectors(rbPosition,camera.position);
      directionVector.y = 0;
      directionVector.normalize();
      rb.setLinvel(directionVector, true)

      const distance = camera.position.distanceTo(rbPosition);
      const offset = new Vector3().subVectors(camera.position, rbPosition);
      offset.normalize().multiplyScalar(distance);
      camera.position.copy(rbPosition).add(offset);
      const cameraTarget = new Vector3(rbPosition.x, rbPosition.y-1, rbPosition.z);
      camera.lookAt(cameraTarget);
      setAnimation("Walk")

      const newPos = vec3(rb.translation())
      emitMove([newPos.x, newPos.y, newPos.z])
    } else if( !arrowsHandler.isDown && !arrowsHandler.isLeft && !arrowsHandler.isRight && !arrowsHandler.isDown) {
      if(currentAnimation !== "Idle.001") {
        setAnimation("Idle.001")
      }

    }
  }


  const HandleMeshRotation = (rb:Object3D, rbPos:Vector3) => {
    if(arrowsHandler.isUp) {
      const directionVector = new Vector3().subVectors(rbPos,camera.position);
      directionVector.y = 0;
      directionVector.normalize();
      rb.lookAt(rbPos.clone().add(directionVector));
    }
  }



  useFrame(()=> {
    if(!rb.current || !mesh.current) return

    const rbPosition = vec3(rb.current.translation());
    HandleCamera(rbPosition)
    HandleMoveMiiRB(rb.current)
    HandleMeshRotation(mesh.current,rbPosition );
  })



  return <RigidBody ref={rb} colliders={false} lockRotations  >
          <group ref={mesh} >
          <MiiInstance mii={mii} animationString={currentAnimation} userID={user.id as string} />
          </group>
          <CuboidCollider args={[0.4,1,0.4]} position={[0,-1,0]} />
        </RigidBody>
}


const getCameraAngleMovement = (mov:number, dimensions:number) => {
  return 2 * Math.PI * mov / dimensions
}


export default MiiControlled