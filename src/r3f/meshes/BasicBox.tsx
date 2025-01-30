import { useFrame } from '@react-three/fiber';
import React, { useRef } from 'react'
import * as THREE from 'three'


const BasicBox = () => {  
  const ref = useRef<THREE.Mesh>(null);

    useFrame((state, delta)=> {
        if(ref.current == undefined) return;
        ref.current.rotation.x += delta;
    })

  return (
    <mesh ref={ref} position={[0,0,0]} scale={[1,2,4]} rotation={[0,8,122]} >
        <boxGeometry />
        <meshBasicMaterial attach="material" args={[{ color:'red' }]} />
    </mesh>
  )
}

export default BasicBox