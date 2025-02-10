
import React, { Suspense, useEffect, useMemo, useRef } from 'react'
import { useGLTF, useFBX, Html, } from '@react-three/drei'
import * as THREE from 'three'
import BodyAsset from './assets/BodyAsset'
import HairAsset from './assets/HairAsset'
import BearAsset from './assets/BearAsset'
import HeadAsset from './assets/HeadAsset'
import FullFaceManager from './assets/FullFaceManager'
import { SkeletonUtils } from 'three/examples/jsm/Addons.js'
import { useFrame, useGraph } from '@react-three/fiber'
import { MC_StyleContainer } from '@/styles/globalStyles'
import styled from 'styled-components'



export interface MiiFaceElement extends MiiElement {
  verticalPos:number,
  scale:number,
  color:string,
  rotation:number,
  shrink:number,
}

export interface MiiEyes extends MiiFaceElement {
  distanceBetween:number,
}

export interface MiiBody {
  elementID:string,
  upColor:string,
  downColor:string
}

export interface MiiElement {
  elementID:string, 
  color:string
}


export interface Mii {
  mustache:MiiFaceElement,
  wrinkles:MiiElement,
  makeups:MiiElement,
  bear:MiiElement,
  glasses:MiiFaceElement,
  nose:MiiFaceElement,
  eyebrows:MiiEyes,
  eyes:MiiEyes,
  mouth:MiiFaceElement,
  head:MiiElement,
  hair:MiiElement,
  human:MiiBody,
}


const MiiRendered = ({mii, msg, animationString}:{mii:Mii, msg:string, animationString:string}) => {



  // MAIN ARMATURE
  const group = useRef<THREE.Group>(null)
  const { scene} = useGLTF('/models/Armature_Plane.glb')
  // const MainSkeleton = (MainNodes.Plane as THREE.SkinnedMesh).skeleton;

  const clonedSkeleton = useMemo(()=> SkeletonUtils.clone(scene),[scene])
  const {nodes:MainNodes} = useGraph(clonedSkeleton);
  const MainSkeleton = (MainNodes.Plane as THREE.SkinnedMesh).skeleton;


  //ANIMATIONS
  const mixer = useMemo(() => new THREE.AnimationMixer(clonedSkeleton), [clonedSkeleton])
  const {animations:AllAnimations} = useFBX("/animations/Animations.fbx");
  const actions = useMemo(() => {
    const newActions: { [key: string]: THREE.AnimationAction } = {}
    AllAnimations.forEach((clip: THREE.AnimationClip) => {
      newActions[clip.name] = mixer.clipAction(clip)
    })
    return newActions
  }, [mixer, AllAnimations])


  useEffect(() => {
    if (actions[animationString]) {
      actions[animationString].reset().fadeIn(0.5).play()
      return () => {
        actions[animationString].fadeOut(0.5)
      }
    } else {
      console.warn(`Animation "${animationString}" not found`)
    }
  }, [animationString, actions])


  useFrame((state, delta) => {
    mixer.update(delta)
  })

  return <group ref={group} dispose={null} castShadow>
      {msg.length > 0 ?
      <Html position={[0,0,0]}
      occlude
      >
      <Container>
        {msg}
      </Container>
      </Html>
      :<></>}
      <group name="Scene">
        <group name="lp" position={[0,-2,0]}   scale={0.01}>

          {/* //BODY */}
          <Suspense>
            <BodyAsset 
            miiElement={mii.human}
            skeleton={MainSkeleton}
            />
          </Suspense>

          {/* HEAD */}
          <Suspense>
            <HeadAsset 
            miiElement={mii.head}
            bone={MainNodes.mixamorigHead}
            />
          </Suspense>


          <Suspense>
            <HairAsset
            miiElement={mii.hair}
            bone={MainNodes.mixamorigHead}
            />
          </Suspense>

          <Suspense>
            <BearAsset
            miiElement={mii.bear}
            bone={MainNodes.mixamorigHead}
            />
          </Suspense>


          <FullFaceManager mii={mii} bone={MainNodes.mixamorigHead} />
          


          <primitive object={MainNodes.mixamorigHips} />
        </group>
      </group>
    </group>

}

export default MiiRendered



const Container = styled(MC_StyleContainer)`
  min-width: 100px;
  min-height: 40px;
  border-width: 5px;
  justify-content: center;
  display: flex;
  align-items: center;
`

useGLTF.preload('/models/Armature_Plane.glb')
