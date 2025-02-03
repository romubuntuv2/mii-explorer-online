
import React, { Suspense, useEffect, useMemo, useRef, useState } from 'react'
import { useGLTF, useAnimations, useFBX, Clone } from '@react-three/drei'
import * as THREE from 'three'
import BodyAsset from './assets/BodyAsset'
import HairAsset from './assets/HairAsset'
import BearAsset from './assets/BearAsset'
import HeadAsset from './assets/HeadAsset'
import FullFaceManager from './assets/FullFaceManager'
import { SocketUser } from '@/stores/SocketStore'


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


const MiiRendered = ({ mii, animationString, cloned = false, userID }: { 
  mii: Mii, 
  animationString: string, 
  cloned?: boolean,
  userID: string // Ajout d'un identifiant unique par utilisateur
}) => {
  const group = useRef<THREE.Group>(null)
  const { nodes: MainNodes, scene } = useGLTF('/models/Armature_Plane.glb')
  const [clonedSkeleton, setClonedSkeleton] = useState<THREE.Skeleton>()

  // Clonage profond de l'armature et du skeleton
  const clonedScene = useMemo(() => {
    const clone = scene.clone(true)
    const skinnedMesh = clone.getObjectByName('Plane') as THREE.SkinnedMesh
    setClonedSkeleton(skinnedMesh.skeleton.clone())
    return clone
  }, [scene])

  // Animation spécifique à chaque instance
  const { animations: AllAnimations } = useFBX("/animations/Animations.fbx")
  const { actions } = useAnimations(AllAnimations, group)

  useEffect(() => {
    if (cloned) {
      actions[animationString]?.reset().fadeIn(0.5).play().setLoop(THREE.LoopRepeat, Infinity)
    }
  }, [animationString, cloned])

  return (
    <group ref={group} userData={{ miiID: userID }} dispose={null}>
      <Clone
        object={clonedScene}
        inject={[
          <group key="custom-components" name="lp" position={[0, -2, 0]} scale={0.01}>
            {/* Injection des composants spécifiques avec skeleton cloné */}
            <BodyAsset 
              miiElement={mii.human}
              skeleton={clonedSkeleton as THREE.Skeleton}
              cloned={cloned}
            />
          </group>
        ]}
      />
    </group>
  )
}


export const MiiInstance = React.memo(({ mii, animationString, userID }: { 
  mii: Mii,
  animationString: string,
  userID: string 
}) => {
  return <MiiRendered mii={mii} animationString={animationString} cloned userID={userID} />
})

// Export par défaut maintenu
export default MiiRendered
useGLTF.preload('/models/Armature_Plane.glb')