
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
import styled from 'styled-components'
import { MyColors } from '@/styles/colors'



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
  // const {animations:AllAnimations} = useFBX("/animations/Animations.fbx");
  const {animations:happyIdleAnim} = useFBX("/animations/HappyIdle.fbx");
  const {animations:bowAnim} = useFBX("/animations/Bow.fbx");
  const {animations:danceAnim} = useFBX("/animations/Dance.fbx");
  const {animations:GreetingAnim} = useFBX("/animations/Greeting.fbx");
  const {animations:idleAnim} = useFBX("/animations/Idle.fbx");
  const {animations:jumpAnim} = useFBX("/animations/Jumping.fbx");
  const {animations:runAnim} = useFBX("/animations/Run.fbx");
  const {animations:walkAnim} = useFBX("/animations/Walking.fbx");
  
  const actions = useMemo(() => {
    const newActions: { [key: string]: THREE.AnimationAction } = {}
    newActions['happyIdle']= mixer.clipAction(happyIdleAnim[0])
    newActions['bow']= mixer.clipAction(bowAnim[0])
    newActions['dance']= mixer.clipAction(danceAnim[0])
    newActions['greeting']= mixer.clipAction(GreetingAnim[0])
    newActions['idle']= mixer.clipAction(idleAnim[0])
    newActions['jump']= mixer.clipAction(jumpAnim[0])
    newActions['run']= mixer.clipAction(runAnim[0])
    newActions['walk']= mixer.clipAction(walkAnim[0])
    return newActions
  }, [mixer, happyIdleAnim])


  useEffect(() => {
    if(animationString == "directIdle") {
      actions['idle'].reset().play()
      return () => {
        actions['idle'].fadeOut(0.1)
      }
    } else {
    actions[animationString].reset().fadeIn(0.5).play()
    return () => {
      actions[animationString].fadeOut(0.5)
    }
    }


  }, [animationString, actions])


  useFrame((state, delta) => {
    mixer.update(delta)
  })




  return <group ref={group} dispose={null} castShadow>
      {msg.length > 0 ?
      <Html position={[0,0,0]} occlude >
      <Container>
        <HtmlText>
        {msg}
        </HtmlText>
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
            miiHead={mii.head}
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



const Container = styled.div`
  transform: translateX(-100px);
  min-width: 100px;
  min-height: 40px;
  border-width: 5px;
  justify-content: center;
  display: flex;
  align-items: center;

  border-radius: 10px;
  border: 5px solid white;
  background-color:rgba(94,185,229,0.4);
`

const HtmlText = styled.div`
  font-family: var("--font-ubuntu");
  font-size: 25px;
  margin: 10px;
  color: ${MyColors.darkBlue};
  font-family: var(--font-ubuntu);
  -webkit-text-stroke: 5px #fff;
  paint-order: stroke fill;
`

useGLTF.preload('/models/Armature_Plane.glb')
