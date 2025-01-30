import React, { useEffect, useRef} from 'react'
import { Center, Svg} from '@react-three/drei'
import * as THREE from 'three'



import { MiiFaceElement } from '../MiiRendered'
import { TransformInterpolate } from '@/utils/utilsFunctions'
import { pb } from '@/pocketbase/getPocketBase'



const MouthAsset = ({faceElement,bone}:{faceElement:MiiFaceElement,bone:THREE.Object3D}) => {
  const groupRef = useRef<THREE.Group>(null);
  const svgRef = useRef<THREE.Object3D>(null)

  useEffect(()=>{
    if(bone) {
      if (groupRef.current) {
        bone.add(groupRef.current)
      }
    }
  },[bone])


  const handleVerticalPosition = (input:number) => {
    return TransformInterpolate(input, [0,1],[0,50])
  }

  const handleScale = (inputGlobalScale:number, inputShrink:number) => {
    const globalScale = TransformInterpolate(inputGlobalScale, [0,1], [0.3,0.9])
    const shrinkScale = TransformInterpolate(inputShrink, [0,1], [-0.2,0.3])
    const scale:[number, number, number] = [globalScale,globalScale+shrinkScale,globalScale]
    return scale
  }




  return <group    scale={handleScale(faceElement.scale, faceElement.shrink)}
  position={[0,handleVerticalPosition(faceElement.verticalPos),25]} 
  ref={groupRef} >
    <Center>
    <Svg ref={svgRef}
 
    src={pb.files.getURL(faceElement.element,faceElement.element.svg)} />
    </Center>
  </group>
}


export default MouthAsset;




