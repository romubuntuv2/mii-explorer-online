import React, { useEffect, useMemo, useRef, useState } from 'react'
import { MiiFaceElement } from '../MiiRendered'
import { Group, Material, Mesh, Object3D, BufferGeometry, MeshStandardMaterial, Color } from 'three'
import { useGLTF } from '@react-three/drei'
import { TransformInterpolate } from '@/utils/utilsFunctions'
import { pb } from '@/pocketbase/getPocketBase'

const NoseAsset = ({miiElement, bone}:{miiElement:MiiFaceElement, bone:Object3D}) => {

    const groupRef = useRef<Group>(null)
    const {scene} = useGLTF(pb.files.getURL(miiElement.element, miiElement.element.glb));

    const [material, setMaterial] = useState<MeshStandardMaterial>()

    const assetItems = useMemo(()=> {
        const items:{geometry:BufferGeometry, material:Material|Material[]}[] = [];
        scene.traverse((child) => {
            if((child as Mesh).isMesh) {
                items.push({
                    geometry:(child as Mesh).geometry,
                    material:(child as Mesh).material
                })
                if(((child as Mesh).material as Material).name === "mii skin") {
                    setMaterial((child as Mesh).material as MeshStandardMaterial)
                }
            }
        })
        return items;
    }, [scene])

    useEffect(()=> {
    if(bone) {
        if (groupRef.current) {
        bone.add(groupRef.current)
        }
    }
    },[bone])

    useEffect(()=> {
        if(material) {
            material.color = new Color(miiElement.color);
        }
    },[miiElement.color,material])

    const handleVerticalPosition = (input:number) => {
        return TransformInterpolate(input, [0,1], [10,50])
    }

    const handleScale = (inputGlobalScale:number, inputShrink:number) => {
      const globalScale = TransformInterpolate(inputGlobalScale, [0,1], [80,120])
      const shrinkScale = TransformInterpolate(inputShrink, [0,1], [-25,25])
      const scale:[number, number, number] = [globalScale,globalScale+shrinkScale,globalScale]
      return scale
    }


  return  <group ref={groupRef} 
//   scale={100} 
    scale={handleScale(miiElement.scale, miiElement.shrink)} 
    position={[0,handleVerticalPosition(miiElement.verticalPos),25]} >
    {assetItems.map((item, index) => (
    <mesh 
        key={index}
        material={item.material}
        geometry={item.geometry}
        castShadow
        receiveShadow
    >
    </mesh>
    ))}
    </group>

}

export default NoseAsset