import WuhuIsland from '@/r3f/env/WuhuIsland'
import { WuhuIslandBlender } from '@/r3f/env/WuhuIslandBlender'
import MiiRendered from '@/r3f/mii/MiiRendered'
import { useMainMenuStore } from '@/stores/MainMenuStore'
import { useMiiCreatorStore } from '@/stores/MiiCreatorStore'
import { CameraControls, Center, Environment, OrbitControls, PerspectiveCamera } from '@react-three/drei'
import { Camera, Canvas, useFrame, useThree } from '@react-three/fiber'
import { EffectComposer, Noise } from '@react-three/postprocessing'
import { Physics } from '@react-three/rapier'
import React, { Suspense, useEffect, useRef } from 'react'
import { ACESFilmicToneMapping, Object3D, SRGBColorSpace } from 'three'
import { useSpring, animated } from '@react-spring/three'

const BackgroundCanva = () => {

  const {isCustomMii, menu} = useMainMenuStore();
  const {mii} = useMiiCreatorStore();



  const CameraHandler = ()=> {
    const {camera} = useThree()

    function CameraOffset() {

      useEffect(() => {
        camera.setViewOffset(
          window.innerWidth,
          window.innerHeight,
          window.innerWidth * 0.3,
          0,
          window.innerWidth,
          window.innerHeight
        )
        return () => camera.clearViewOffset()
      }, [camera])
      return null
    }

    const {isCustomMii} = useMainMenuStore();

    const controlsRef = useRef(null)

    const { cameraPosition, targetPosition } = useSpring({
      cameraPosition: isCustomMii() ? [-172, 15.5, 41] : [500, 100, 0],
      targetPosition: isCustomMii() ? [-172, 12, 39] : [0, 0, 0],
      config: { mass: 1, tension: 280, friction: 120 }
    })
  
    useFrame(() => {
      if (controlsRef.current) {
        controlsRef.current.setLookAt(
          ...cameraPosition.get(),
          ...targetPosition.get(),
          true
        )
      }
    })


    

    return <>
        {isCustomMii() && <CameraOffset />}
        

        <CameraControls
        ref={controlsRef}
        makeDefault
        minDistance={isCustomMii() ? 2 : 500}
        maxDistance={isCustomMii() ? 10 : 500}
        enableRotate={isCustomMii()}
        enableZoom={isCustomMii()}
        enablePan={false}
      />

    </>

  }



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




  return <Canvas shadows
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
    
          <directionalLight color={'#FCA966'}
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


        <OrbitControls 
        rotateSpeed={2000} autoRotate={true}
        enablePan={false} enableRotate={false}
        enableZoom={false}
        />


      



        
    </Canvas>
}



export default BackgroundCanva