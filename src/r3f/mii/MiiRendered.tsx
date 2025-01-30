
import React, { Suspense, useEffect, useRef } from 'react'
import { useGLTF, useAnimations, useFBX } from '@react-three/drei'
import * as THREE from 'three'
import { RecordModel } from 'pocketbase'
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
  element:RecordModel,
  upColor:string,
  downColor:string
}

export interface MiiElement {
  element:RecordModel, 
  color:string
}


export interface Mii {
  mustache:MiiElement,
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


const MiiRendered = ({mii}:{mii:Mii}) => {



  // MAIN ARMATURE
  const group = useRef<THREE.Group>(null)
  const { nodes:MainNodes, animations } = useGLTF('/models/Armature_Plane.glb')
  const MainSkeleton = (MainNodes.Plane as THREE.SkinnedMesh).skeleton;

  //ANIMATIONS
  const {animations:DeadAnim} = useFBX("/animations/Dying.fbx")
  const { actions } = useAnimations(animations, group)
  const { actions:DeadActions } = useAnimations(DeadAnim, group)
  useEffect(()=> {
    if(true) {
    actions['WalkAnimation']?.play();
    } else {
    DeadActions['mixamo.com']?.play();
    }
  })

  return (
    <group ref={group} dispose={null}>
      <group name="Scene">
        <group name="lp" position={[0,-2,0]} rotation={[Math.PI / 2, 0, 0]} scale={0.01}>


  

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
