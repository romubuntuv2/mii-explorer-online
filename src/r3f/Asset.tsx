
import { useGLTF } from '@react-three/drei'
import React, { useMemo } from 'react'
import { BufferGeometry, Material, Skeleton } from 'three'
import * as THREE from 'three'
import { MiiElement } from './mii/MiiRendered'
import { pb } from '@/pocketbase/getPocketBase'

const Asset = ({miiElement, skeleton}:{miiElement:MiiElement, skeleton:Skeleton}) => {



    const {scene} = useGLTF(pb.files.getURL(miiElement.element, miiElement.element.glb));


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
        <meshBasicMaterial color={miiElement.color} />
    </skinnedMesh>
    ))}
    </group>





  return <></>
}

export default Asset