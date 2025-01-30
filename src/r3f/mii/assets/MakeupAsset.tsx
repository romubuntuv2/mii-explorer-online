import React, { useEffect, useMemo, useRef } from 'react'
import { MiiElement } from '../MiiRendered';
import { BufferGeometry, Group, Material, Mesh, Object3D } from 'three';
import { useGLTF } from '@react-three/drei';
import { pb } from '@/pocketbase/getPocketBase';

const MakeupAsset  = ({miiElement, bone}:{miiElement:MiiElement, bone:Object3D}) => {

    const groupRef = useRef<Group>(null)
    const {scene} = useGLTF(pb.files.getURL(miiElement.element, miiElement.element.glb));

    const assetItems = useMemo(()=> {
        const items:{geometry:BufferGeometry, material:Material|Material[]}[] = [];
        scene.traverse((child) => {
            if((child as Mesh).isMesh) {
                const itemMaterial = (child as Mesh).material as Material;
                (itemMaterial as Material).opacity = 0.5;
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

  return <group ref={groupRef} scale={61} position={[0,30,0]} >
    {miiElement.element.name == "Makeup_1" || miiElement.element.name == "Wrinkles_1" ? <></>:
    <mesh
        geometry={assetItems.geometry}
        material={assetItems.material}
        castShadow
        receiveShadow
    >
    </mesh>
    }
    </group>

}
export default MakeupAsset