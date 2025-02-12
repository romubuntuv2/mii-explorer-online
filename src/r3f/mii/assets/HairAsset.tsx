import React, { useEffect, useMemo, useRef, useState } from 'react'
import { MiiElement } from '../MiiRendered'
import { useGLTF } from '@react-three/drei';
import { BufferGeometry, DoubleSide, Group, Material, Mesh, Object3D } from 'three';
import { pb } from '@/pocketbase/getPocketBase';
import { usePocketBaseStore } from '@/stores/PocketBaseStore';


const smallCalvas = ["165rxdphf6u9cwe","tbu8fjdftyajr9g","bt31voar63s2mp6"]

const bigCalvas = ["pbddmgmfgmnxmdi","lfw07ybdbnzzt5i","fwv9sk72aapm3hs","fitr8bbih8xx14s"]

const HairAsset = ({miiElement, bone, miiHead}:{miiElement:MiiElement, bone:Object3D,miiHead:MiiElement}) => {

    const {getAsset} = usePocketBaseStore();
    const element = useMemo(()=> {
        return getAsset(miiElement.elementID)
    }, [miiElement.elementID, getAsset])

    const groupRef = useRef<Group>(null)
    const {scene} = useGLTF(pb.files.getURL(element, element.glb));
    const [positionY, setPositionY] = useState(0)

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

    useEffect(()=> {
        const id = miiHead.elementID
        if(smallCalvas.includes(id)) {
            setPositionY(5);
        } else if(bigCalvas.includes(id)) {
            setPositionY(6);
        } else {
            setPositionY(0);
        }
    },[miiHead.elementID])


  return <group  castShadow ref={groupRef} scale={81+(positionY/2)} position={[0,62+positionY,0]} >
    <mesh
        geometry={assetItems.geometry}
        castShadow   
    >
        <meshStandardMaterial transparent={element.name == "Hair_54"?true:false} opacity={element.name == "Hair_54"?0:1} side={DoubleSide} color={miiElement.color} />
    </mesh>
    </group>

}

export default HairAsset