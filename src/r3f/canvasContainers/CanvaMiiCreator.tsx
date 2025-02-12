'use client'
import { Center, Environment, OrbitControls } from '@react-three/drei'
import { Canvas, useThree } from '@react-three/fiber'
import React from 'react'
import styled from 'styled-components'
import WuhuIsland from '../env/WuhuIsland'
import { WuhuIslandBlender } from '../env/WuhuIslandBlender'
import { Physics } from '@react-three/rapier'
import { EffectComposer, Noise } from '@react-three/postprocessing'
import { ACESFilmicToneMapping, SRGBColorSpace } from 'three'

const CanvaMiiCreator = ({width, height, children}:{width:string, height:string,children:JSX.Element}) => {
  
  function CameraOffset() {
    const { camera } = useThree()
    
    // Décalage horizontal de 30% vers la droite
    camera.setViewOffset(
      window.innerWidth, // largeur totale
      window.innerHeight, // hauteur totale
      window.innerWidth * 0.3, // décalage X
      0, // décalage Y
      window.innerWidth,
      window.innerHeight
    )
  
    return null
  }


  
  return (
    <Container width={width} height={height}>
    <Canvas shadows
    gl={{
      toneMapping: ACESFilmicToneMapping,
      outputColorSpace: SRGBColorSpace,
      shadowMapEnabled: true
    }}
    camera={{near:0.1, far:100000}}
    >
      <CameraOffset/>
          <EffectComposer>
          <Noise opacity={0} />
          </EffectComposer>
    
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
      <group scale={0.5} position={[123,-8.1,29]} >
      <WuhuIslandBlender position={[0,-50,0]} />
      <WuhuIsland position={[0,-50,0]} scale={0.008}  />
      </group>
      </Physics>

            {/* <Center> */}
            <group scale={1.5} position={[0,1.66,0]}>
              {/* <group position={[0,0,0]}> */}
              {children}
              {/* </group> */}
            </group>
            {/* </Center> */}
            <ambientLight intensity={0.5} />
            <OrbitControls  enablePan={false} target={[0, 0, 0]}
            minDistance={2} maxDistance={10} />
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



export default CanvaMiiCreator