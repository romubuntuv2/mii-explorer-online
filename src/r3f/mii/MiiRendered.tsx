
import React, { Suspense, useEffect, useRef } from 'react'
import { useGLTF, useAnimations, useFBX } from '@react-three/drei'
import * as THREE from 'three'
import BodyAsset from './assets/BodyAsset'
import HairAsset from './assets/HairAsset'
import BearAsset from './assets/BearAsset'
import HeadAsset from './assets/HeadAsset'
import FullFaceManager from './assets/FullFaceManager'


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


const MiiRendered = ({mii, animationString, cloned}:{mii:Mii, animationString:string, cloned?:boolean}) => {



  // MAIN ARMATURE
  const group = useRef<THREE.Group>(null)
  const { nodes:MainNodes} = useGLTF('/models/Armature_Plane.glb')
  const MainSkeleton = (MainNodes.Plane as THREE.SkinnedMesh).skeleton;

  //ANIMATIONS
  const {animations:AllAnimations} = useFBX("/animations/Animations.fbx");
  const { actions } = useAnimations(AllAnimations, group)

  useEffect(()=> {
    console.log(animationString)
    actions[animationString]?.reset().fadeIn(0.5).play();
  },[animationString])



  return (
    <group ref={group} dispose={null}>
      <group name="Scene">
        <group name="lp" position={[0,-2,0]}  scale={0.01}>


  

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
  )
}

export default MiiRendered

useGLTF.preload('/models/Armature_Plane.glb')
