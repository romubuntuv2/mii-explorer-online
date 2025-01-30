import React, { useEffect, useMemo, useRef } from 'react'
import { BufferGeometry, Group, Material, Mesh, Object3D } from 'three';
import { MiiElement } from '../MiiRendered';
import { useGLTF } from '@react-three/drei';
import { pb } from '@/pocketbase/getPocketBase';


const MustacheAsset = ({miiElement, bone}:{miiElement:MiiElement, bone:Object3D}) => {

    const groupRef = useRef<Group>(null)
    const {scene} = useGLTF(pb.files.getURL(miiElement.element, miiElement.element.glb));

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

  return <group ref={groupRef} scale={100} position={[0,20,25]} >
    {miiElement.element.name == "Mustache_1" ? <></>:
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
export default MustacheAsset