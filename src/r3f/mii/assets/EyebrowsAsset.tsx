import React, { useEffect, useMemo, useRef, useState } from 'react'
import { Center, Svg } from '@react-three/drei'
import * as THREE from 'three'


import { MiiEyes } from '../MiiRendered'
import { TransformInterpolate } from '@/utils/utilsFunctions'
import { pb } from '@/pocketbase/getPocketBase'
import { usePocketBaseStore } from '@/stores/PocketBaseStore'



const EyebrowsAsset = ({eyesElement,bone}:{eyesElement:MiiEyes,bone:THREE.Object3D}) => {

  const {getAsset} = usePocketBaseStore();
  const element = useMemo(()=> {
      return getAsset(eyesElement.elementID)
  }, [eyesElement.elementID, getAsset])

  const groupRef = useRef<THREE.Group>(null);
  const svgRef1 = useRef<THREE.Object3D>(null)
  const svgRef2 = useRef<THREE.Object3D>(null)

  const [meshesMaterial, setMeshesMaterial] = useState<THREE.MeshStandardMaterial[]>([])


  useEffect(()=>{
    if(bone) {
      if (groupRef.current) {
        bone.add(groupRef.current)
      }
    }
  },[bone])

  useEffect(()=> {
    if(svgRef1.current && svgRef2.current) {
      const meshes:THREE.MeshStandardMaterial[] = []
      svgRef1.current.children[0].children.map(child => {
        const meshChild = child as THREE.Mesh;
        const material = Array.isArray(meshChild.material) ? meshChild.material[0] : meshChild.material;
        const meshMaterial = material as THREE.MeshStandardMaterial;
        meshes.push(meshMaterial);
      }) 
      svgRef2.current.children[0].children.map(child => {
        const meshChild = child as THREE.Mesh;
        const material = Array.isArray(meshChild.material) ? meshChild.material[0] : meshChild.material;
        const meshMaterial = material as THREE.MeshStandardMaterial;
        meshes.push(meshMaterial);
      }) 
      setMeshesMaterial(meshes)
      meshes.map((material) => {
        material.color = new THREE.Color(eyesElement.color)
      })
    }
  },[eyesElement.elementID])

  useEffect(()=> {
    meshesMaterial.map((material) => {
      material.color = new THREE.Color(eyesElement.color)
    })
  },[eyesElement.color])



  const handleVerticalPosition = (input:number) => {
    return TransformInterpolate(input, [0,1], [0,55])
  }
  const handleScale = (inputGlobalScale:number, inputShrink:number) => {
    const globalScale = TransformInterpolate(inputGlobalScale, [0,1], [0.2,0.9])
    const shrinkScale = TransformInterpolate(inputShrink, [0,1], [-0.2,0.3])
    const scale:[number, number, number] = [globalScale,globalScale+shrinkScale,globalScale]
    return scale
  }

  const handleDistBetw = (input:number) => {
    return TransformInterpolate(input, [0,1], [-5,30])
  }

  const handleRotation = (input:number) => {
    return TransformInterpolate(input, [0,1], [-Math.PI,Math.PI])
  }
  


  return <group scale={handleScale(eyesElement.scale,eyesElement.shrink)}  position={[0,handleVerticalPosition(eyesElement.verticalPos),25]} ref={groupRef} >
  {element.name === "Eyebrows_24"?<></>:
  <Center>
  <Svg ref={svgRef1} position={[-handleDistBetw(eyesElement.distanceBetween),0,0]} rotation={[0,Math.PI,handleRotation(eyesElement.rotation)]}
  src={pb.files.getURL(element,element.svg)} />



  <Svg ref={svgRef2} position={[handleDistBetw(eyesElement.distanceBetween),0,0]} rotation={[0,0,handleRotation(eyesElement.rotation)]}
  src={pb.files.getURL(element,element.svg)} />

  </Center>
  }
  </group>
}


export default EyebrowsAsset;






