import { SocketUser } from '@/stores/SocketStore'
import React, { use, useEffect, useRef } from 'react'
import MiiRendered from './MiiRendered'
import { Mii2 } from '@/data/defaultsMii'
import { Group, Vector3 } from 'three'
import { CuboidCollider, RigidBody } from '@react-three/rapier'



const MiiSocketed = ({user}:{user:SocketUser}) => {

  const ref = useRef<Group>(null);



  useEffect(()=> {
    if(!ref.current || user.pointToLookAt == undefined) return;
    ref.current.lookAt(new Vector3(user.pointToLookAt[0],user.pointToLookAt[1],user.pointToLookAt[2]))
  },[user.pointToLookAt])

  useEffect(()=> {
    console.log(user.position)
  },)


  return <group scale={1.5} ref={ref} position={user.position}  >
    <MiiRendered mii={user.mii} msg={user.msg} animationString={user.currentAnimation} />
  </group>



  // return <RigidBody 

  // position={user.position}  colliders={false}  >
  // <group ref={ref}  >
  //   <MiiRendered mii={Mii2} msg={user.msg} animationString={user.currentAnimation} />
  // </group>
  // <CuboidCollider args={[0.4,1,0.4]} position={[0,-1,0]} />
  // </RigidBody>
}

export default MiiSocketed