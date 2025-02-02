import React, { useEffect, useMemo, useRef} from 'react'
import { Center, Svg} from '@react-three/drei'
import * as THREE from 'three'



import { MiiFaceElement } from '../MiiRendered'
import { TransformInterpolate } from '@/utils/utilsFunctions'
import { pb } from '@/pocketbase/getPocketBase'
import { usePocketBaseStore } from '@/stores/PocketBaseStore'



const MouthAsset = ({faceElement,bone}:{faceElement:MiiFaceElement,bone:THREE.Object3D}) => {

    const {getAsset} = usePocketBaseStore();
    const element = useMemo(()=> {
        return getAsset(faceElement.elementID)
    }, [faceElement.elementID, getAsset])

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
    return TransformInterpolate(input, [0,1],[0,40])
  }

  const handleScale = (inputGlobalScale:number, inputShrink:number) => {
    const globalScale = TransformInterpolate(inputGlobalScale, [0,1], [0.1,0.9])
    const shrinkScale = TransformInterpolate(inputShrink, [0,1], [-0.2,0.3])
    const scale:[number, number, number] = [globalScale,globalScale+shrinkScale,globalScale]
    return scale
  }




  return <group    scale={handleScale(faceElement.scale, faceElement.shrink)}
  position={[0,handleVerticalPosition(faceElement.verticalPos),25]} 
  ref={groupRef} >
    <Center>
    <Svg ref={svgRef}
 
    src={pb.files.getURL(element,element.svg)} />
    </Center>
  </group>
}


export default MouthAsset;




