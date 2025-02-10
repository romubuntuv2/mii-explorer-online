import WuhuIsland from '@/r3f/env/WuhuIsland'
import { WuhuIslandBlender } from '@/r3f/env/WuhuIslandBlender'
import { Environment, OrbitControls } from '@react-three/drei'
import { Canvas } from '@react-three/fiber'
import { EffectComposer, Noise } from '@react-three/postprocessing'
import { Physics } from '@react-three/rapier'
import React, { Suspense } from 'react'
import { ACESFilmicToneMapping, SRGBColorSpace } from 'three'

const BackgroundCanva = () => {


    const Islands = ()=> {


        return <group 
        scale={0.7}
        position={[0,0,80]} 
        >

        <WuhuIslandBlender position={[0,-50,0]} />
        <WuhuIsland position={[0,-50,0]} scale={0.008}  />
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
        </group>
    }




  return <Suspense>
    <Canvas shadows
    frameloop="demand"
        gl={{
          toneMapping: ACESFilmicToneMapping,
          outputColorSpace: SRGBColorSpace,
          shadowMapEnabled: true
        }}
        camera={{near:0.1, far:100000,
            position:[500,100,0]
        }}
        >
          {/* <Perf position='top-left' /> */}
          <EffectComposer>
          <Noise opacity={0} />
          </EffectComposer>
        
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
        <Physics>
        <Islands />
        </Physics>
        {false?            <OrbitControls  enablePan={false} target={[0, 0, 0]}
                    minDistance={2} maxDistance={10} /> 
                    :
                    
                    <OrbitControls 
                    autoRotate={true} rotateSpeed={5000}
                    enableZoom={false}
                    enablePan={false} enableRotate={false} />}

        
    </Canvas>
    </Suspense>
}



export default BackgroundCanva