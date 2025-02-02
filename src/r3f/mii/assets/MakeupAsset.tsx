import React, { useEffect, useMemo, useRef } from 'react'
import { MiiElement } from '../MiiRendered';
import { BufferGeometry, Group, Material, Mesh, Object3D } from 'three';
import { useGLTF } from '@react-three/drei';
import { pb } from '@/pocketbase/getPocketBase';
import { usePocketBaseStore } from '@/stores/PocketBaseStore';

const MakeupAsset  = ({miiElement, bone}:{miiElement:MiiElement, bone:Object3D}) => {

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
    {element.name == "Makeup_1" || element.name == "Wrinkles_1" ? <></>:
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