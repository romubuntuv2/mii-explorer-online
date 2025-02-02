import React, { useEffect, useMemo, useRef } from 'react'
import { BufferGeometry, Group, Material, Mesh, Object3D } from 'three';
import { MiiFaceElement } from '../MiiRendered';
import { useGLTF } from '@react-three/drei';
import { pb } from '@/pocketbase/getPocketBase';
import { usePocketBaseStore } from '@/stores/PocketBaseStore';
import { TransformInterpolate } from '@/utils/utilsFunctions';


const MustacheAsset = ({miiElement, bone}:{miiElement:MiiFaceElement, bone:Object3D}) => {

    const {getAsset} = usePocketBaseStore();
    const element = useMemo(()=> {
        return getAsset(miiElement.elementID)
    }, [miiElement.elementID, getAsset])

    const groupRef = useRef<Group>(null)
    const {scene} = useGLTF(pb.files.getURL(element, element.glb));

    const assetItems = useMemo(()=> {
        const items:{geometry:BufferGeometry, material:Material|Material[]}[] = [];
        scene.traverse((child) => {
            if((child as Mesh).isMesh) {
                items.push({
                    geometry:(child as Mesh).geometry,
                    material:(child as Mesh).material
                })
            }
        })
        return items[0];
    }, [scene])


    useEffect(()=> {
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
        const globalScale = TransformInterpolate(inputGlobalScale, [0,1], [80,120])
        const scale:[number, number, number] = [globalScale,globalScale,globalScale]
        return scale
      }
    

  return <group ref={groupRef} 
  scale={handleScale(miiElement.scale)}
  position={[0,handleVerticalPosition(miiElement.verticalPos),25]} 
  >
    {element.name == "Mustache_1" ? <></>:
    <mesh
        geometry={assetItems.geometry}
        material={assetItems.material}
    >
    </mesh>
    }
    </group>

}
export default MustacheAsset