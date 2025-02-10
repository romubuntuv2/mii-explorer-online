
import { useGLTF } from '@react-three/drei'
import React, { useEffect, useMemo, useRef } from 'react'
import { BufferGeometry, Material } from 'three'
import * as THREE from 'three'
import { pb } from '@/pocketbase/getPocketBase'
import { MiiElement } from '../MiiRendered'
import { usePocketBaseStore } from '@/stores/PocketBaseStore'



const HeadAsset = ({miiElement, bone}:{miiElement:MiiElement, bone:THREE.Object3D}) => {

    const {getAsset} = usePocketBaseStore();
    const element = useMemo(()=> {
        return getAsset(miiElement.elementID)
    }, [miiElement.elementID, getAsset])

    const groupRef = useRef<THREE.Group>(null)
    const {scene:primScene} = useGLTF(pb.files.getURL(element, element.glb));
    const scene = primScene.clone();

    const assetItems = useMemo(()=> {
        const items:{geometry:BufferGeometry, material:Material|Material[]}[] = [];
        scene.traverse((child) => {
            if((child as THREE.Mesh).isMesh) {
                items.push({
                    geometry:(child as THREE.Mesh).geometry,
                    material:(child as THREE.Mesh).material
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



  return <group castShadow ref={groupRef} scale={80} position={[0,30,0]} >
    <mesh
        geometry={assetItems.geometry}
        castShadow
    >
        <meshStandardMaterial side={THREE.DoubleSide} color={miiElement.color} />
    </mesh>
    </group>

}

export default HeadAsset