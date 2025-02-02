import { useGLTF } from '@react-three/drei'
import React, { useMemo } from 'react'
import { BufferGeometry, Material, Skeleton } from 'three'
import * as THREE from 'three'
import { MiiBody } from '../MiiRendered'
import { pb } from '@/pocketbase/getPocketBase'
import { usePocketBaseStore } from '@/stores/PocketBaseStore'


const BodyAsset = ({miiElement, skeleton}:{miiElement:MiiBody, skeleton:Skeleton}) => {

    const {getAsset} = usePocketBaseStore();
    const element = useMemo(()=> {
        return getAsset(miiElement.elementID)
    }, [miiElement.elementID, getAsset])

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
        return items;
    }, [scene])





    return <group  >
    {assetItems.map((item, index) => (
    <skinnedMesh 
        key={index}
        geometry={item.geometry}
        skeleton={skeleton}
        castShadow
        receiveShadow
    >
        <meshStandardMaterial color={index==0?miiElement.upColor:miiElement.downColor} />
    </skinnedMesh>
    ))}
    </group>



}

export default BodyAsset