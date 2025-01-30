import React, { useEffect, useRef, useState } from 'react'
import { Svg, useGLTF } from '@react-three/drei'
import * as THREE from 'three'



import { MiiFaceElement } from '../MiiRendered'
import { pb } from '@/pocketbase/getPocketBase'



const FaceAsset = ({faceElement,bone}:{faceElement:MiiFaceElement,bone:THREE.Object3D}) => {

  const groupRef = useRef<THREE.Group>(null);
  const svgRef = useRef<THREE.Object3D>(null)

  const [meshesMaterial, setMeshesMaterial] = useState<THREE.MeshStandardMaterial[]>([])

  useEffect(()=>{
    if(bone) {
      if (groupRef.current) {
        bone.add(groupRef.current)
      }
    }
  },[bone])

  useEffect(()=> {
    if(svgRef.current) {
      const meshes:THREE.MeshStandardMaterial[] = []
      svgRef.current.children[0].children.map(child => {
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
    }
  },[])

  useEffect(()=> {
    meshesMaterial.map((material) => {
      material.color = new THREE.Color(faceElement.color)
    })
  },[faceElement.color])

  const handleVerticalPosition = (input:number) => {
    const inputMin = 0
    const inputMax = 1;

    const outputMin = 30
    const outputMax = 50


    const ratio = (input - inputMin) / (inputMax - inputMin);
  
    return outputMin + ratio * (outputMax - outputMin);
  }


  return <group scale={1}  position={[0,handleVerticalPosition(faceElement.verticalPos),25]} ref={groupRef} >
  <Svg ref={svgRef}
  scale={faceElement.scale} 
  src={pb.files.getURL(faceElement.element,faceElement.element.svg)} />
  </group>
}


export default FaceAsset;




useGLTF.preload('/models/FacePlaneglb.glb')
