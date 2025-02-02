import React, { useEffect, useMemo, useRef } from 'react'
import { MiiElement } from '../MiiRendered'
import { useGLTF } from '@react-three/drei';
import { BufferGeometry, DoubleSide, Group, Material, Mesh, Object3D } from 'three';
import { pb } from '@/pocketbase/getPocketBase';
import { usePocketBaseStore } from '@/stores/PocketBaseStore';


const HairAsset = ({miiElement, bone}:{miiElement:MiiElement, bone:Object3D}) => {

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

  return <group ref={groupRef} scale={80} position={[0,60,0]} >
    <mesh
        geometry={assetItems.geometry}
        castShadow   
    >
        <meshStandardMaterial transparent={element.name == "Hair_54"?true:false} opacity={element.name == "Hair_54"?0:1} side={DoubleSide} color={miiElement.color} />
    </mesh>
    </group>

}

export default HairAsset