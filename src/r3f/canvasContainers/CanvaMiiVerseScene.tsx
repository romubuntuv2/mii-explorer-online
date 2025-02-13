import { Environment} from '@react-three/drei'
import { Canvas } from '@react-three/fiber'
import React, { useEffect, useMemo } from 'react'
import MiiControlled from '../mii/MiiControlled'
import { Physics } from '@react-three/rapier'
import { SocketUser, useSocketStore } from '@/stores/SocketStore'
import MiiSocketed from '../mii/MiiSocketed'
import { ACESFilmicToneMapping, SRGBColorSpace } from 'three'
import { WuhuIslandBlender } from '../env/WuhuIslandBlender'
import { EffectComposer } from '@react-three/postprocessing'

import { Mii } from '../mii/MiiRendered'
import WuhuIslandNotBlender from '../env/WuhuIslandNotBlender'


const CanvaMiiVerseScene = () => {     

  const {emitSpawned,updateUsers, mySocket,users, localMii, isLocalOnly, toogleSpawn} = useSocketStore()



  useEffect(()=> {
    if(isLocalOnly) return
    const onConnect =()=> {
      if(localMii == undefined) return
      console.log("emit")
      const user:SocketUser = {name:'dimitri', mii:localMii, id:mySocket.id, position:[0,0,0], pointToLookAt:[0,0,0], msg:"",currentAnimation:"idle"}
      emitSpawned(user)
      toogleSpawn()
    }
    
    mySocket.on('connection', onConnect)
    mySocket.on('updateUsers', (users) => {updateUsers(users)})
    mySocket.connect();
    return ()=> {
      mySocket.off('connection', onConnect)
      mySocket.off('updateUsers', (users) => {updateUsers(users)})
    }
  
  },[])



  const GenerateUsersSocketed = useMemo(()=> {
    return users.map((user) => {
      if(user.id !== mySocket.id) {
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
        


        <Physics>
          <WuhuIslandBlender position={[0,-50,0]} />
          <WuhuIslandNotBlender position={[0,-50,0]} scale={0.008}  />
          <MiiControlled mii={localMii as Mii} />
          {!isLocalOnly && GenerateUsersSocketed}

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

        <mesh receiveShadow position={[150,117,-317]}  rotation={[-Math.PI/2,0,0]}>
          <planeGeometry args={[130,130]} />
          <meshStandardMaterial color={'#66b6fc'} />
        </mesh>

        </Physics>

    </Canvas>
  )
}

export default CanvaMiiVerseScene