import React, { useEffect, useRef, useState } from 'react'
import { Center, Svg } from '@react-three/drei'
import * as THREE from 'three'



import { MiiEyes } from '../MiiRendered'
import { TransformInterpolate } from '@/utils/utilsFunctions'
import { pb } from '@/pocketbase/getPocketBase'



const EyesAsset = ({eyesElement,bone}:{eyesElement:MiiEyes,bone:THREE.Object3D}) => {

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
    //GET MESH MATERIALS
    if(svgRef1.current && svgRef2.current) {
      const meshes:THREE.MeshStandardMaterial[] = []
      svgRef1.current.children[0].children.map(child => {
        const meshChild = child as THREE.Mesh;
        const material = Array.isArray(meshChild.material) ? meshChild.material[0] : meshChild.material;
        const meshMaterial = material as THREE.MeshStandardMaterial;
        if(meshMaterial.color.b == new THREE.Color("#6C7070").b
        && meshMaterial.color.r == new THREE.Color("#6C7070").r
        && meshMaterial.color.g == new THREE.Color("#6C7070").g) {
          meshes.push(meshMaterial);
        }
      }) 
      svgRef2.current.children[0].children.map(child => {
        const meshChild = child as THREE.Mesh;
        const material = Array.isArray(meshChild.material) ? meshChild.material[0] : meshChild.material;
        const meshMaterial = material as THREE.MeshStandardMaterial;
        if(meshMaterial.color.b == new THREE.Color("#6C7070").b
        && meshMaterial.color.r == new THREE.Color("#6C7070").r
        && meshMaterial.color.g == new THREE.Color("#6C7070").g) {
          meshes.push(meshMaterial);
        }
      }) 
      setMeshesMaterial(meshes)
      meshes.map((material) => {
        material.color = new THREE.Color(eyesElement.color)
      })
    }
  },[eyesElement.element])

  useEffect(()=> {
    meshesMaterial.map((material) => {
      material.color = new THREE.Color(eyesElement.color)
    })
  },[eyesElement.color])



  const handleVerticalPosition = (input:number) => {
    return TransformInterpolate(input, [0,1], [10,50])
  }

  const handleScale = (inputGlobalScale:number, inputShrink:number) => {
    const globalScale = TransformInterpolate(inputGlobalScale, [0,1], [0.3,0.9])
    const shrinkScale = TransformInterpolate(inputShrink, [0,1], [-0.2,0.3])
    const scale:[number, number, number] = [globalScale,globalScale+shrinkScale,globalScale]
    return scale
  }

  const handleDistBetw = (input:number) => {
    return TransformInterpolate(input, [0,1], [-10,20])
  }

  const handleRotation = (input:number) => {
    return TransformInterpolate(input, [0,1], [-Math.PI,Math.PI])
  }


  


  return <group scale={handleScale(eyesElement.scale, eyesElement.shrink)}  position={[0,handleVerticalPosition(eyesElement.verticalPos),25]} ref={groupRef} >
  <Center>
  <Svg ref={svgRef1} position={[-handleDistBetw(eyesElement.distanceBetween),0,0]} rotation={[0,Math.PI,handleRotation(eyesElement.rotation)]}
  src={pb.files.getURL(eyesElement.element,eyesElement.element.svg)} />



  <Svg ref={svgRef2} position={[handleDistBetw(eyesElement.distanceBetween),0,0]} rotation={[0,0,handleRotation(eyesElement.rotation)]}
  src={pb.files.getURL(eyesElement.element,eyesElement.element.svg)} />
  </Center>
  </group>
}


export default EyesAsset;






