import React, { useEffect, useMemo, useRef} from 'react'
import { useGLTF} from '@react-three/drei'
import * as THREE from 'three'



import { MiiFaceElement } from '../MiiRendered'
import { TransformInterpolate } from '@/utils/utilsFunctions'
import { pb } from '@/pocketbase/getPocketBase'
import { usePocketBaseStore } from '@/stores/PocketBaseStore'



const GlassesAsset = ({faceElement,bone}:{faceElement:MiiFaceElement,bone:THREE.Object3D}) => {

    const {getAsset} = usePocketBaseStore();
    const element = useMemo(()=> {
        return getAsset(faceElement.elementID)
    }, [faceElement.elementID, getAsset])

  const groupRef = useRef<THREE.Group>(null);
    const {scene} = useGLTF(pb.files.getURL(element, element.glb));

    const assetItems = useMemo(()=> {
        const items:{geometry:THREE.BufferGeometry, material:THREE.Material|THREE.Material[]}[] = [];
        scene.traverse((child) => {
            if((child as THREE.Mesh).isMesh) {
                items.push({
                    geometry:(child as THREE.Mesh).geometry,
                    material:(child as THREE.Mesh).material
                })
            }
        })
        return items;
    }, [scene])


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

  const handleScale = (inputGlobalScale:number) => {
    const globalScale = TransformInterpolate(inputGlobalScale, [0,1], [50,100])
    const scale:[number, number, number] = [globalScale,globalScale,globalScale]
    return scale
  }




  return <group    
  scale={handleScale(faceElement.scale)}
  position={[0,handleVerticalPosition(faceElement.verticalPos),25]} 
  ref={groupRef} >
    {element.name=="Glasses_1"?<></>:
    assetItems.map((item, index) => (
    <mesh 
        key={index}
        material={item.material}
        geometry={item.geometry}
        castShadow
        receiveShadow
    />
    ))}
  </group>
}


export default GlassesAsset;




