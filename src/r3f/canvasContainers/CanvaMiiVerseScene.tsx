import { Environment} from '@react-three/drei'
import { Canvas } from '@react-three/fiber'
import React, { useEffect, useMemo, useRef, useState } from 'react'
import { Mii1 } from '@/data/defaultsMii'
import MiiControlled from '../mii/MiiControlled'
import { Physics } from '@react-three/rapier'
import { SocketUser, useSocketStore } from '@/stores/SocketStore'
import { socket } from '@/socket/socket'
import MiiSocketed from '../mii/MiiSocketed'
import { ACESFilmicToneMapping, SRGBColorSpace } from 'three'
import { WuhuIslandBlender } from '../env/WuhuIslandBlender'
import { EffectComposer } from '@react-three/postprocessing'
import { Perf } from 'r3f-perf'
import WuhuIsland from '../env/WuhuIsland'


const CanvaMiiVerseScene = () => {     




  const {emitSpawned,updateUsers, users} = useSocketStore()

  useEffect(()=> {
    const user:SocketUser = {name:'dimitri', mii:Mii1, id:socket?.id, position:[0,0,0], pointToLookAt:[0,0,0], msg:'',currentAnimation:"Idle.001"}
    emitSpawned(user)

    socket.on('updateUsers', (users) => {updateUsers(users)})
  },[])



  const GenerateUsersSocketed = useMemo(()=> {
    return users.map((user) => {
      if(user.id !== socket.id) {
        return <MiiSocketed key={user.id} user={user} />
      }
    })
  },[users])

  return (
    <Canvas shadows
    gl={{
      toneMapping: ACESFilmicToneMapping,
      outputColorSpace: SRGBColorSpace,
      shadowMapEnabled: true
    }}
    camera={{near:0.1, far:100000}}
    >
      {/* <Perf position='top-left' /> */}
      <EffectComposer><></></EffectComposer>
    
        <Environment preset='sunset'  environmentIntensity={0.4} />
        {/* <Sky distance={450000}  sunPosition={[0, 1, 0]} inclination={0} azimuth={0.80}/> */}

        <directionalLight 
        color={'#FCA966'}
  position={[1000, 1500, 1000]}
  intensity={5}
  castShadow
  shadow-mapSize={[8192, 8192]}
  shadow-camera-left={-1000}
  shadow-camera-right={1000}
  shadow-camera-top={1000}
  shadow-camera-bottom={-1000}
  shadow-camera-near={1}
  shadow-camera-far={4000}
  shadow-bias={-0.0001}
/>
        
        {/* <rectAreaLight castShadow color={'white'} intensity={10000} position={[0,100,0]} /> */}


        <Physics>
          <WuhuIslandBlender position={[0,-50,0]} />
          <WuhuIsland position={[0,-50,0]} scale={0.008}  />
          <MiiControlled mii={Mii1} />
          {GenerateUsersSocketed}

        <mesh  position={[0,-52,0]}  rotation={[-Math.PI/2,0,0]}>
          <planeGeometry args={[10000,10000]} />
          <meshStandardMaterial color={'#66b6fc'} />
        </mesh>

        <mesh receiveShadow position={[-74,57,-330]}  rotation={[-Math.PI/2,0,0]}>
          <planeGeometry args={[200,115]} />
          <meshStandardMaterial color={'#66b6fc'} />
        </mesh>
        <mesh receiveShadow position={[-30,57.5,-240]}  rotation={[-Math.PI/2,0,0]}>
          <planeGeometry args={[45,120]} />
          <meshStandardMaterial color={'#66b6fc'} />
        </mesh>

        </Physics>

    </Canvas>
  )
}

export default CanvaMiiVerseScene