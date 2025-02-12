
import React from 'react'
import { useGLTF } from '@react-three/drei'
import { Mesh } from 'three'
import { RigidBody } from '@react-three/rapier'

const WuhuIslandNotBlender = ({position, scale}:{position:[number,number,number], scale:number}) => {

  const { nodes, materials } = useGLTF('/models/WuhuIslandNotBlender.glb')
  return (
    <RigidBody type='fixed' collisionGroups={0x00160016}
    colliders={'trimesh'} name='WuhuIsland' lockTranslations lockRotations>
    <group receiveShadow position={position} dispose={null}>
      <group receiveShadow rotation={[-Math.PI / 2, 0, 0]} scale={scale}>
        <group receiveShadow  position={[-1139526.375, -1139353.5, -2169.608]}>
        <mesh
            
            receiveShadow
            geometry={(nodes.Object_3 as Mesh).geometry}
            material={materials.Material_179}
          />


          <mesh
            
            receiveShadow
            geometry={(nodes.Object_4 as Mesh).geometry}
            material={materials.Material_179_0}
          />
          
          <mesh
            
            receiveShadow
            geometry={(nodes.Object_5 as Mesh).geometry}
            material={materials.Material_179_1}
          />
          <mesh
            
            receiveShadow
            geometry={(nodes.Object_6 as Mesh).geometry}
            material={materials.Material_179_2}
          />
          <mesh
            
            receiveShadow
            geometry={(nodes.Object_7 as Mesh).geometry}
            material={materials.Material_179_3}
          />
          <mesh
            
            receiveShadow
            geometry={(nodes.Object_8 as Mesh).geometry}
            material={materials.Material_179_4}
          />
          <mesh
            
            receiveShadow
            geometry={(nodes.Object_9 as Mesh).geometry}
            material={materials.Material_179_5}
          />
          <mesh
            
            receiveShadow
            geometry={(nodes.Object_10 as Mesh).geometry}
            material={materials.Material_179_6}
          />
          <mesh
            
            receiveShadow
            geometry={(nodes.Object_11 as Mesh).geometry}
            material={materials.Material_179_7}
          />
          <mesh
            
            receiveShadow
            geometry={(nodes.Object_12 as Mesh).geometry}
            material={materials.Material_179_8}
          />
          <mesh
            
            receiveShadow
            geometry={(nodes.Object_13 as Mesh).geometry}
            material={materials.Material_179_9}
          />
          <mesh
            
            receiveShadow
            geometry={(nodes.Object_14 as Mesh).geometry}
            material={materials.Material_179_10}
          />
          <mesh
            
            receiveShadow
            geometry={(nodes.Object_15 as Mesh).geometry}
            material={materials.Material_179_11}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={(nodes.Object_16 as Mesh).geometry}
            material={materials.Material_179_12}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={(nodes.Object_17 as Mesh).geometry}
            material={materials.Material_179_13}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={(nodes.Object_18 as Mesh).geometry}
            material={materials.Material_179_14}
          />
          <mesh
            
            receiveShadow
            geometry={(nodes.Object_19 as Mesh).geometry}
            material={materials.Material_179_15}
          />
          <mesh
            
            receiveShadow
            geometry={(nodes.Object_20 as Mesh).geometry}
            material={materials.Material_179_16}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={(nodes.Object_21 as Mesh).geometry}
            material={materials.Material_179_17}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={(nodes.Object_22 as Mesh).geometry}
            material={materials.Material_179_17}
          />
          <mesh
            
            receiveShadow
            geometry={(nodes.Object_23 as Mesh).geometry}
            material={materials.Material_179_18}
          />
          <mesh
            
            receiveShadow
            geometry={(nodes.Object_24 as Mesh).geometry}
            material={materials.Material_179_19}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={(nodes.Object_25 as Mesh).geometry}
            material={materials.Material_179_20}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={(nodes.Object_26 as Mesh).geometry}
            material={materials.Material_179_21}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={(nodes.Object_27 as Mesh).geometry}
            material={materials.Material_179_22}
          />
          <mesh
            
            receiveShadow
            geometry={(nodes.Object_28 as Mesh).geometry}
            material={materials.Material_179_23}
          />
          <mesh
            
            receiveShadow
            geometry={(nodes.Object_29 as Mesh).geometry}
            material={materials.Material_179_24}
          />
          <mesh
            
            receiveShadow
            geometry={(nodes.Object_30 as Mesh).geometry}
            material={materials.Material_179_25}
          />
          <mesh
            
            receiveShadow
            geometry={(nodes.Object_31 as Mesh).geometry}
            material={materials.Material_179_26}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={(nodes.Object_32 as Mesh).geometry}
            material={materials.Material_179_27}
          />
          <mesh
            
            receiveShadow
            geometry={(nodes.Object_33 as Mesh).geometry}
            material={materials.Material_179_28}
          />
          <mesh
            
            receiveShadow
            geometry={(nodes.Object_34 as Mesh).geometry}
            material={materials.Material_179_29}
          />
          <mesh
            
            receiveShadow
            geometry={(nodes.Object_35 as Mesh).geometry}
            material={materials.Material_179_30}
          />
          <mesh
            
            receiveShadow
            geometry={(nodes.Object_36 as Mesh).geometry}
            material={materials.Material_179_31}
          />
          <mesh
            
            receiveShadow
            geometry={(nodes.Object_37 as Mesh).geometry}
            material={materials.Material_179_32}
          />
          <mesh
            
            receiveShadow
            geometry={(nodes.Object_38 as Mesh).geometry}
            material={materials.Material_179_33}
          />
          <mesh //BOAT PART
            
            receiveShadow
            geometry={(nodes.Object_39 as Mesh).geometry}
            material={materials.Material_179_34}
          />
          <mesh //OCEAN
            
            
            geometry={(nodes.Object_40 as Mesh).geometry}
            material={materials.Material_179_35}
          />

          <mesh
            
            receiveShadow
            geometry={(nodes.Object_41 as Mesh).geometry}
            material={materials.Material_179_36}
          />
          <mesh //PASSERELLE
            
            receiveShadow
            geometry={(nodes.Object_42 as Mesh).geometry}
            material={materials.Material_179_37}
          />
          <mesh //WATER RIVIER
            
            
            geometry={(nodes.Object_43 as Mesh).geometry}
            material={materials.Material_179_38}
          />
          <mesh
            
            receiveShadow
            geometry={(nodes.Object_44 as Mesh).geometry}
            material={materials.Material_179_39}
          />
          <mesh
            castShadow            
            receiveShadow
            geometry={(nodes.Object_45 as Mesh).geometry}
            material={materials.Material_179_40}
          />
          <mesh
            
            receiveShadow
            geometry={(nodes.Object_46 as Mesh).geometry}
            material={materials.Material_179_41}
          />
          <mesh // BORDER IN TOWN
            
            receiveShadow
            geometry={(nodes.Object_47 as Mesh).geometry}
            material={materials.Material_179_42}
          />
          <mesh
            
            receiveShadow
            geometry={(nodes.Object_48 as Mesh).geometry}
            material={materials.Material_179_43}
          />
        </group>
      </group>
    </group>
    </RigidBody>
  )
}

export default WuhuIslandNotBlender

useGLTF.preload('/models/WuhuIslandNotBlender.glb')