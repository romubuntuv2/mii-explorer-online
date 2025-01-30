import React, { useEffect, useMemo, useRef } from 'react'
import { MiiElement } from '../MiiRendered';
import { BufferGeometry, DoubleSide, Group, Material, Mesh, Object3D } from 'three';
import { useGLTF } from '@react-three/drei';
import { pb } from '@/pocketbase/getPocketBase';


const BearAsset  = ({miiElement, bone}:{miiElement:MiiElement, bone:Object3D}) => {

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
        console.log(items)
        return items[0];
    }, [scene])


    useEffect(()=> {
    if(bone) {
        if (groupRef.current) {
        bone.add(groupRef.current)
        }
    }
    },[bone])

  return <group ref={groupRef} scale={90} position={[0,7,15]} >
    <mesh
        geometry={assetItems.geometry}
        castShadow
        receiveShadow
    >
        <meshBasicMaterial transparent={miiElement.element.name == "Bear_1"?true:false} opacity={miiElement.element.name == "Bear_1"?0:1} side={DoubleSide} color={miiElement.color} />
    </mesh>
    </group>

}

export default BearAsset