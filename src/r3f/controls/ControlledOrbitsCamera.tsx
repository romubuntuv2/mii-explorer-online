import { OrbitControls } from '@react-three/drei'
import { useFrame } from '@react-three/fiber'
import React, { useRef } from 'react'
import { Vector3 } from 'three'


const ControlledOrbitsCamera = ({position}:{position:Vector3|undefined}) => {

    const orbitsRef = useRef(null)

    useFrame(()=> {
        if(orbitsRef.current && position !== undefined) {
            // @ts-expect-error: orbitsRef.current might be null
            orbitsRef.current.target.copy(position)
            // @ts-expect-error: orbitsRef.current might be null
            orbitsRef.current.update();
        }
    })


  return <OrbitControls ref={orbitsRef} />
}

export default ControlledOrbitsCamera