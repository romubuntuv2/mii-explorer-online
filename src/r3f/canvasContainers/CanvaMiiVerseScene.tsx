import { OrbitControls } from '@react-three/drei'
import { Canvas } from '@react-three/fiber'
import React, { useEffect } from 'react'
import { DoubleSide } from 'three'
import MiiRendered, { Mii } from '../mii/MiiRendered'
import { useMiiCreatorStore } from '@/stores/MiiCreatorStore'

const CanvaMiiVerseScene = () => {     

    const {fetchTypes, isLoading, mii  } = useMiiCreatorStore()

    useEffect(()=> {
        fetchTypes();
    },[])


  return (
    <Canvas>


        {isLoading?<></>: <MiiRendered mii={mii} />}


        <OrbitControls />
        <mesh rotation={[Math.PI/2,0,0]} position={[0,-5,0]} >
            <planeGeometry args={[10,10]}/>
            <meshBasicMaterial color={'red'} side={DoubleSide} />
        </mesh>
    </Canvas>
  )
}

export default CanvaMiiVerseScene