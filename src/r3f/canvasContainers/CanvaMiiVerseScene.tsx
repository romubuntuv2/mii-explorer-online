import { Environment, Sky} from '@react-three/drei'
import { Canvas } from '@react-three/fiber'
import React, { useEffect } from 'react'
import { DoubleSide } from 'three'
import { Mii1 } from '@/data/defaultsMii'
import MiiControlled from '../mii/MiiControlled'
import { Physics, RigidBody } from '@react-three/rapier'
import { SocketUser, useSocketStore } from '@/stores/SocketStore'
import { socket } from '@/socket/socket'
import MiiSocketed from '../mii/MiiSocketed'


const CanvaMiiVerseScene = () => {     

  const {emitSpawned,updateUsers, users} = useSocketStore()

  useEffect(()=> {
    const user:SocketUser = {name:'dimitri', mii:Mii1, id:socket?.id, position:[0,0,0]}
    emitSpawned(user)

    socket.on('updateUsers', (users) => {updateUsers(users)})
  },[])


  return (
    <Canvas>
        <Environment preset='sunset' />
        <Sky distance={450000} sunPosition={[0, 1, 0]} inclination={0} azimuth={0.80}/>


        {users.map((user) => {
          if(user.id !== socket.id) {
            return <MiiSocketed key={user.id} user={user} />
          }
        })}


        <Physics debug>
          <MiiControlled mii={Mii1} />
          <RigidBody colliders="cuboid" >
          <mesh rotation={[Math.PI/2,0,0]} position={[0,-5,0]} >
              <planeGeometry args={[10,10]}/>
              <meshBasicMaterial color={'red'} side={DoubleSide} />
          </mesh>
          </RigidBody>
        </Physics>
    </Canvas>
  )
}

export default CanvaMiiVerseScene