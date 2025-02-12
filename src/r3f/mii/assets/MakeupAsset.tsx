import React, { useEffect, useMemo, useRef, useState } from 'react'
import { MiiElement } from '../MiiRendered';
import { BufferGeometry, Group, Material, Mesh, Object3D } from 'three';
import { useGLTF } from '@react-three/drei';
import { pb } from '@/pocketbase/getPocketBase';
import { usePocketBaseStore } from '@/stores/PocketBaseStore';


const bigger = ["m8zf19vybyaotor","pfqty1q215q00p7","tbu8fjdftyajr9g","lfw07ybdbnzzt5i"]
const maxBigger = ["165rxdphf6u9cwe","bt31voar63s2mp6","fwv9sk72aapm3hs","fitr8bbih8xx14s"]

const MakeupAsset  = ({miiElement, bone, headID}:{miiElement:MiiElement, bone:Object3D, headID:string}) => {

    const {getAsset} = usePocketBaseStore();
    const element = useMemo(()=> {
        return getAsset(miiElement.elementID)
    }, [miiElement.elementID, getAsset])

    const groupRef = useRef<Group>(null)
    const {scene} = useGLTF(pb.files.getURL(element, element.glb));
    const [addScale, setAddScale] = useState(0);

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

    useEffect(()=> {
        if(bigger.includes(headID)) {
            setAddScale(5)
        } else if(maxBigger.includes(headID)) {
            setAddScale(10)
        } else {
            setAddScale(0)
        }
    },[headID])

  return <group ref={groupRef} scale={61+addScale} position={[0,30,0]} >
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