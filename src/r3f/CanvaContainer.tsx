'use client'
import { Center, Environment, OrbitControls } from '@react-three/drei'
import { Canvas } from '@react-three/fiber'
import React from 'react'
import styled from 'styled-components'

const CanvaContainer = ({width, height, position, children}:{width:string, height:string, position:[number, number, number],children:JSX.Element}) => {
  return (
    <Container width={width} height={height}>
      <Canvas shadows>
      <Environment preset='lobby' environmentIntensity={0.5} />
      <pointLight position={[0,3,2]} castShadow intensity={20}/>
            <mesh 
            castShadow
            receiveShadow
              position={[0,-0.7,0]}
              rotation={[-Math.PI/2,0,0]}
              >
                <planeGeometry args={[2,2]} />
                <meshStandardMaterial transparent opacity={0.4} />
              </mesh>
            <Center>
            <group position={position}>
              {children}

            </group>
            </Center>
            <ambientLight intensity={0.5} />
            <OrbitControls minDistance={1.2} maxDistance={3} />
        </Canvas>
    </Container>
  )
}

const Container = styled.div.attrs<{ width: string; height: string }>(props => ({
  style: {
    width: `${props.width}`,
    height: `${props.height}`,
  }
}))`
`



export default CanvaContainer