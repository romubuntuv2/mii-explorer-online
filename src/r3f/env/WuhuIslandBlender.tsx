import React, { useEffect, useRef, useState } from "react";
import { useGLTF } from "@react-three/drei";
import { RigidBody } from "@react-three/rapier";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";
import { Material, Mesh } from "three";

export function WuhuIslandBlender({
  position,
}: {
  position: [number, number, number];
}) {
  const { nodes, materials:gltfMaterials } = useGLTF("/models/WuhuIslandBlender1.glb");

  const cloudsRef = useRef<Mesh>(null);

  useFrame((state, delta) => {
    if (cloudsRef.current) {
      cloudsRef.current.rotation.z += delta * Math.random() * 0.01;
    }
  });

  const [materials, setMaterials] = useState<{[name:string]:Material}>(gltfMaterials);

  useEffect(()=> {
    const newMaterials = gltfMaterials;
    Object.keys(newMaterials).forEach(materialName => {
      if(materialName.includes('tree')) {
        const material = newMaterials[materialName];
        material.opacity = 1;
        material.transparent = true;
        material.depthWrite = true;
        material.depthTest = true;
        material.side = THREE.DoubleSide;
        material.alphaTest = 0.5;
        material.blending = THREE.NormalBlending;
        material.premultipliedAlpha = true;
      }
    });
    setMaterials(newMaterials);

  },[gltfMaterials])



  return (
    <RigidBody
      type="fixed"
      collisionGroups={0x00040004}
      colliders={"trimesh"}
      name="WuhuIsland"
      lockTranslations
      lockRotations
    >
      <group position={position} scale={8} dispose={null}>
        <mesh
          ref={cloudsRef}
          geometry={(nodes.polygon0004 as Mesh as Mesh).geometry}
          material={ materials["mt_za_cloud.001"]}
          rotation={[Math.PI / 2, 0, -1.745]}
          scale={0.01}
        />
        <group rotation={[Math.PI / 2, 0, 0]} scale={0.01}>
          <mesh
            geometry={(nodes.polygon1011 as Mesh).geometry}
            material={materials["mt_sky2.002"]}
          />
          <mesh
            geometry={(nodes.polygon1011_1 as Mesh).geometry}
            material={materials["mt_sky2.001"]}
          />
        </group>

        <mesh
          castShadow
          geometry={(nodes.WindmillA as Mesh).geometry}
          material={materials.mt_Windmill}
          position={[-52.47, 7.816, -10.445]}
          rotation={[Math.PI / 2, 0, -1.012]}
          scale={0.008}
        />
        <mesh
          castShadow
          geometry={(nodes.WindmillA001 as Mesh).geometry}
          material={materials.mt_Windmill}
          position={[-46.336, 7.682, -14.833]}
          rotation={[Math.PI / 2, 0, -0.873]}
          scale={0.008}
        />
        <mesh
          castShadow
          geometry={(nodes.WindmillA002 as Mesh).geometry}
          material={materials.mt_Windmill}
          position={[-49.554, 8.251, -13.56]}
          rotation={[Math.PI / 2, 0, -1.501]}
          scale={0.008}
        />
        <mesh
          castShadow
          geometry={(nodes.WindmillA003 as Mesh).geometry}
          material={materials.mt_Windmill}
          position={[-45.81, 7.569, -21.054]}
          rotation={[Math.PI / 2, 0, -0.698]}
          scale={0.008}
        />
        <mesh
          castShadow
          geometry={(nodes.WindmillA004 as Mesh).geometry}
          material={materials.mt_Windmill}
          position={[-51.75, 7.995, -20.433]}
          rotation={[Math.PI / 2, 0, -Math.PI / 3]}
          scale={0.008}
        />
        <mesh
          castShadow
          geometry={(nodes.WindmillA005 as Mesh).geometry}
          material={materials.mt_Windmill}
          position={[-47.159, 7.216, -28.31]}
          rotation={[Math.PI / 2, 0, -0.087]}
          scale={0.008}
        />
        <mesh
          castShadow
          geometry={(nodes.WindmillA006 as Mesh).geometry}
          material={materials.mt_Windmill}
          position={[-49.474, 6.613, -4.51]}
          rotation={[Math.PI / 2, 0, -0.873]}
          scale={0.008}
        />
        <mesh
          castShadow
          geometry={(nodes.WindmillA007 as Mesh).geometry}
          material={materials.mt_Windmill}
          position={[-44.235, 7.264, -27.311]}
          rotation={[Math.PI / 2, 0, -0.087]}
          scale={0.008}
        />
        <mesh
          castShadow
          geometry={(nodes.WindmillB as Mesh).geometry}
          material={materials["mt_Windmill.001"]}
          position={[-52.47, 7.816, -10.445]}
          rotation={[Math.PI / 2, 0, -1.012]}
          scale={0.008}
        />
        <mesh
          castShadow
          geometry={(nodes.WindmillB001 as Mesh).geometry}
          material={materials["mt_Windmill.001"]}
          position={[-46.336, 7.682, -14.833]}
          rotation={[Math.PI / 2, 0, -0.873]}
          scale={0.008}
        />
        <mesh
          castShadow
          geometry={(nodes.WindmillB002 as Mesh).geometry}
          material={materials["mt_Windmill.001"]}
          position={[-49.554, 8.251, -13.56]}
          rotation={[Math.PI / 2, 0, -1.501]}
          scale={0.008}
        />
        <mesh
          castShadow
          geometry={(nodes.WindmillB003 as Mesh).geometry}
          material={materials["mt_Windmill.001"]}
          position={[-45.81, 7.569, -21.054]}
          rotation={[Math.PI / 2, 0, -0.698]}
          scale={0.008}
        />
        <mesh
          castShadow
          geometry={(nodes.WindmillB004 as Mesh).geometry}
          material={materials["mt_Windmill.001"]}
          position={[-51.75, 7.995, -20.433]}
          rotation={[Math.PI / 2, 0, -Math.PI / 3]}
          scale={0.008}
        />
        <mesh
          castShadow
          geometry={(nodes.WindmillB005 as Mesh).geometry}
          material={materials["mt_Windmill.001"]}
          position={[-47.159, 7.216, -28.31]}
          rotation={[Math.PI / 2, 0, -0.087]}
          scale={0.008}
        />
        <mesh
          castShadow
          geometry={(nodes.WindmillB006 as Mesh).geometry}
          material={materials["mt_Windmill.001"]}
          position={[-49.474, 6.613, -4.51]}
          rotation={[Math.PI / 2, 0, -0.873]}
          scale={0.008}
        />
        <mesh
          castShadow
          geometry={(nodes.WindmillB007 as Mesh).geometry}
          material={materials["mt_Windmill.001"]}
          position={[-44.235, 7.264, -27.311]}
          rotation={[Math.PI / 2, 0, -0.087]}
          scale={0.008}
        />

        <mesh
          castShadow
          receiveShadow
          geometry={(nodes.polygon0006 as Mesh).geometry}
          material={materials.m_table}
          position={[52.749, 1.84, -12.299]}
          rotation={[Math.PI / 2, 0, -Math.PI / 2]}
          scale={0.01}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={(nodes.polygon0007 as Mesh).geometry}
          material={materials.bic_gate}
          position={[26.581, 1.391, 2.043]}
          rotation={[Math.PI / 2, 0, -2.094]}
          scale={0.01}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={(nodes.polygon0008 as Mesh).geometry}
          material={materials.mt_target2}
          position={[-28.778, 4.245, -11.361]}
          rotation={[Math.PI / 2, 0, Math.PI / 2]}
          scale={0.01}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={(nodes.polygon0009 as Mesh).geometry}
          material={materials.mt_circle}
          position={[82.747, 0.605, 32.771]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={0.01}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={(nodes.polygon0010 as Mesh).geometry}
          material={materials.mt_body}
          position={[80.657, 0, -20.39]}
          rotation={[Math.PI / 2, 0, -0.436]}
          scale={0.01}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={(nodes.polygon0011 as Mesh).geometry}
          material={materials.mt_ring_buoy}
          position={[16.17, 0, 95.703]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={0.01}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={(nodes.Tee as Mesh).geometry}
          material={materials.mat_tee}
          position={[-285.125, 2.33, 134.091]}
          rotation={[Math.PI / 2, 0, 0.471]}
          scale={0.07}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={(nodes.Tee001 as Mesh).geometry}
          material={materials.mat_tee}
          position={[-275.001, 1.264, 122.557]}
          rotation={[Math.PI / 2, 0, 0.157]}
          scale={0.07}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={(nodes.Tee002 as Mesh).geometry}
          material={materials.mat_tee}
          position={[-271.223, 1.86, 143.911]}
          rotation={[Math.PI / 2, 0, 0.175]}
          scale={0.07}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={(nodes.Tee003 as Mesh).geometry}
          material={materials.mat_tee}
          position={[-316.93, 2.008, 136.311]}
          rotation={[Math.PI / 2, 0, 1.836]}
          scale={0.07}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={(nodes.Tee004 as Mesh).geometry}
          material={materials.mat_tee}
          position={[-334.862, 1.84, 131.852]}
          rotation={[Math.PI / 2, 0, 0.143]}
          scale={0.07}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={(nodes.Tee005 as Mesh).geometry}
          material={materials.mat_tee}
          position={[-321.168, 2.72, 145.493]}
          rotation={[Math.PI / 2, 0, 2.019]}
          scale={0.07}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={(nodes.Tee006 as Mesh).geometry}
          material={materials.mat_tee}
          position={[-338.368, 1.79, 157.481]}
          rotation={[Math.PI / 2, 0, 2.073]}
          scale={0.07}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={(nodes.Tee007 as Mesh).geometry}
          material={materials.mat_tee}
          position={[-305.859, 1.835, 189.65]}
          rotation={[Math.PI / 2, 0, -0.346]}
          scale={0.07}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={(nodes.Tee008 as Mesh).geometry}
          material={materials.mat_tee}
          position={[-291.483, 2.284, 175.177]}
          rotation={[Math.PI / 2, 0, 0.328]}
          scale={0.07}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={(nodes.GolfFlag as Mesh).geometry}
          material={materials.M_flag}
          position={[-331.123, 0.537, 161.929]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={0.1}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={(nodes.GolfFlag001 as Mesh).geometry}
          material={materials.M_flag}
          position={[-309.807, 0.347, 173.117]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={0.1}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={(nodes.GolfFlag002 as Mesh).geometry}
          material={materials.M_flag}
          position={[-289.841, 1.169, 152.826]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={0.1}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={(nodes.GolfFlag003 as Mesh).geometry}
          material={materials.M_flag}
          position={[-282.51, 1.437, 163.153]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={0.1}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={(nodes.GolfFlag004 as Mesh).geometry}
          material={materials.M_flag}
          position={[-298.153, 2.127, 202.61]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={0.1}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={(nodes.GolfFlag005 as Mesh).geometry}
          material={materials.M_flag}
          position={[-331.163, 0.171, 147.698]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={0.1}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={(nodes.GolfFlag006 as Mesh).geometry}
          material={materials.M_flag}
          position={[-274.039, 0.591, 129.158]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={0.1}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={(nodes.GolfFlag007 as Mesh).geometry}
          material={materials.M_flag}
          position={[-307.451, 1.436, 138.06]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={0.1}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={(nodes.GolfFlag008 as Mesh).geometry}
          material={materials.M_flag}
          position={[-299.21, 1.445, 153.356]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={0.1}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={(nodes.polygon0005 as Mesh).geometry}
          material={materials.mt_airship}
          position={[-22.45, 10.714, 8.5]}
          rotation={[Math.PI / 2, 0, -1.396]}
          scale={0.01}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={(nodes.polygon1002 as Mesh).geometry}
          material={materials.mt_airship_wii}
          position={[-22.45, 10.714, 8.5]}
          rotation={[Math.PI / 2, 0, -1.396]}
          scale={0.01}
        />
        <mesh
          castShadow
          geometry={(nodes.FlagA as Mesh).geometry}
          material={materials.M_FlagA}
          position={[49.019, 2.9, -5.587]}
          rotation={[Math.PI / 2, 0, Math.PI / 2]}
          scale={0.012}
        />
        <mesh
          castShadow
          geometry={(nodes.FlagA001 as Mesh).geometry}
          material={materials.M_FlagA}
          position={[16.27, 1.25, 69.95]}
          rotation={[Math.PI / 2, 0, 2.618]}
          scale={0.01}
        />
        <mesh
          castShadow
          geometry={(nodes.FlagA3 as Mesh).geometry}
          material={materials["M_FlagA.001"]}
          position={[18.02, 1.017, 95.694]}
          rotation={[Math.PI / 2, 0, -Math.PI / 2]}
          scale={0.01}
        />
        <mesh
          castShadow
          geometry={(nodes.FlagA3001 as Mesh).geometry}
          material={materials["M_FlagA.001"]}
          position={[14.32, 1.015, 95.694]}
          rotation={[Math.PI / 2, 0, -Math.PI / 2]}
          scale={0.01}
        />
        <mesh
          castShadow
          geometry={(nodes.Parasol as Mesh).geometry}
          material={materials.mt_parasol_00}
          position={[52.038, 1.789, -12.644]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={0.01}
        />
        <mesh
          castShadow
          geometry={(nodes.Parasol001 as Mesh).geometry}
          material={materials["mt_parasol_00.001"]}
          position={[52.525, 1.789, -10.247]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={0.01}
        />
        <mesh
          castShadow
          geometry={(nodes.Parasol002 as Mesh).geometry}
          material={materials["mt_parasol_00.002"]}
          position={[50.406, 1.789, -10.645]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={0.01}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={(nodes.Parasol003 as Mesh).geometry}
          material={materials["mt_parasol_00.001"]}
          position={[49.06, 1.789, -13.706]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={0.01}
        />
        <mesh
          castShadow
          geometry={(nodes.Parasol004 as Mesh).geometry}
          material={materials["mt_parasol_00.002"]}
          position={[50.842, 1.789, -14.758]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={0.01}
        />
        <mesh
          castShadow
          geometry={(nodes.Parasol005 as Mesh).geometry}
          material={materials.mt_parasol_00}
          position={[57.659, 0.336, -18.455]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={0.015}
        />
        <mesh
          castShadow
          geometry={(nodes.Parasol006 as Mesh).geometry}
          material={materials["mt_parasol_00.001"]}
          position={[58.201, 0.318, -16.109]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={0.015}
        />
        <mesh
          castShadow
          geometry={(nodes.Parasol007 as Mesh).geometry}
          material={materials["mt_parasol_00.002"]}
          position={[58.334, 0.361, -13.469]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={0.015}
        />
        <mesh
          castShadow
          geometry={(nodes.Parasol008 as Mesh).geometry}
          material={materials["mt_parasol_00.001"]}
          position={[59.277, 0.331, -10.575]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={0.015}
        />
        <mesh
          castShadow
          geometry={(nodes.Parasol009 as Mesh).geometry}
          material={materials["mt_parasol_00.002"]}
          position={[89.857, 0.395, 73.961]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={0.015}
        />
        <mesh
          castShadow
          geometry={(nodes.Parasol010 as Mesh).geometry}
          material={materials["mt_parasol_00.001"]}
          position={[91.201, 0.412, 71.598]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={0.015}
        />
        <mesh
          castShadow
          geometry={(nodes.Parasol011 as Mesh).geometry}
          material={materials["mt_parasol_00.002"]}
          position={[81.392, 0.396, 51.269]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={0.015}
        />
        <mesh
          castShadow
          geometry={(nodes.Parasol012 as Mesh).geometry}
          material={materials.mt_parasol_00}
          position={[81.054, 0.358, 49.426]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={0.015}
        />
        <mesh
          castShadow
          geometry={(nodes.Parasol013 as Mesh).geometry}
          material={materials["mt_parasol_00.002"]}
          position={[80.746, 0.321, 47.755]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={0.015}
        />
        <mesh
          castShadow
          geometry={(nodes.Parasol014 as Mesh).geometry}
          material={materials.mt_parasol_00}
          position={[62.073, 0.19, 17.691]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={0.015}
        />
        <mesh
          castShadow
          geometry={(nodes.Parasol015 as Mesh).geometry}
          material={materials["mt_parasol_00.001"]}
          position={[60.368, 0.29, 15.986]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={0.015}
        />
        <mesh
          castShadow
          geometry={(nodes.Parasol016 as Mesh).geometry}
          material={materials.mt_parasol_00}
          position={[57.526, 0.29, 14.622]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={0.015}
        />
        <mesh
          castShadow
          geometry={(nodes.HotAirBallon as Mesh).geometry}
          material={materials.ballooon_tex}
          position={[48.01, 28.245, 99.937]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={0.01}
        />
        <mesh
          castShadow
          geometry={(nodes.HotAirBallon001 as Mesh).geometry}
          material={materials["ballooon_tex.001"]}
          position={[-24.831, 30.694, -85.732]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={0.01}
        />
        <mesh
          castShadow
          geometry={(nodes.HotAirBallon002 as Mesh).geometry}
          material={materials["ballooon_tex.002"]}
          position={[61.729, 18, 60.847]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={0.01}
        />

        <mesh
          castShadow
          geometry={(nodes.Car as Mesh).geometry}
          material={materials.mt_car_00}
          position={[-300.286, 2.266, 167.156]}
          rotation={[Math.PI / 2, 0, 2.531]}
          scale={0.01}
        />
        <mesh
          castShadow
          geometry={(nodes.Car001 as Mesh).geometry}
          material={materials["mt_car_00.001"]}
          position={[-23.751, 1.69, 8.279]}
          rotation={[Math.PI / 2, 0, -Math.PI / 4]}
          scale={0.01}
        />
        <mesh
          castShadow
          geometry={(nodes.Car002 as Mesh).geometry}
          material={materials["mt_car_00.002"]}
          position={[-18.34, 0.69, 20.392]}
          rotation={[Math.PI / 2, 0, 1.222]}
          scale={0.01}
        />
        <mesh
          castShadow
          geometry={(nodes.Car003 as Mesh).geometry}
          material={materials.mt_car_00}
          position={[-18.429, 0.69, 20.907]}
          rotation={[Math.PI / 2, 0, 1.222]}
          scale={0.01}
        />
        <mesh
          castShadow
          geometry={(nodes.Car004 as Mesh).geometry}
          material={materials["mt_car_00.002"]}
          position={[-23.318, 0.69, 32.216]}
          rotation={[Math.PI / 2, 0, -0.873]}
          scale={0.01}
        />
        <mesh
          castShadow
          geometry={(nodes.Car005 as Mesh).geometry}
          material={materials["mt_car_00.001"]}
          position={[-15.269, 0.72, 34.259]}
          rotation={[Math.PI / 2, 0, 0.087]}
          scale={0.01}
        />
        <mesh
          castShadow
          geometry={(nodes.Car006 as Mesh).geometry}
          material={materials.mt_car_00}
          position={[-14.618, 0.72, 34.561]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={0.01}
        />
        <mesh
          castShadow
          geometry={(nodes.Car007 as Mesh).geometry}
          material={materials["mt_car_00.001"]}
          position={[59.362, 0.64, 7.029]}
          rotation={[Math.PI / 2, 0, -1.92]}
          scale={0.01}
        />
        <mesh
          castShadow
          geometry={(nodes.Car008 as Mesh).geometry}
          material={materials.mt_car_00}
          position={[59.514, 0.646, 6.486]}
          rotation={[Math.PI / 2, 0, -2.094]}
          scale={0.01}
        />
        <mesh
          castShadow
          geometry={(nodes.Car009 as Mesh).geometry}
          material={materials["mt_car_00.001"]}
          position={[88.082, 0.602, 70.313]}
          rotation={[Math.PI / 2, 0, Math.PI / 3]}
          scale={0.01}
        />
        <mesh
          castShadow
          geometry={(nodes.Car010 as Mesh).geometry}
          material={materials.mt_car_00}
          position={[88.771, 0.593, 72.271]}
          rotation={[Math.PI / 2, 0, -0.698]}
          scale={0.01}
        />
        <mesh
          castShadow
          geometry={(nodes.Car011 as Mesh).geometry}
          material={materials["mt_car_00.001"]}
          position={[47.34, 1.781, -7.761]}
          rotation={[Math.PI / 2, 0, -Math.PI / 6]}
          scale={0.01}
        />
        <mesh
          castShadow
          geometry={(nodes.Car012 as Mesh).geometry}
          material={materials.mt_car_00}
          position={[-14.15, 3.519, -15.743]}
          rotation={[Math.PI / 2, 0, 2.443]}
          scale={0.01}
        />
        <mesh
          castShadow
          geometry={(nodes.Car013 as Mesh).geometry}
          material={materials["mt_car_00.002"]}
          position={[-48.747, 7.723, -20.769]}
          rotation={[Math.PI / 2, 0, -2.356]}
          scale={0.01}
        />
        <mesh
          castShadow
          geometry={(nodes.Car014 as Mesh).geometry}
          material={materials["mt_car_00.001"]}
          position={[4.327, 2.442, 0.017]}
          rotation={[Math.PI / 2, 0, 2.269]}
          scale={0.01}
        />
        <mesh
          castShadow
          geometry={(nodes.Car015 as Mesh).geometry}
          material={materials["mt_car_00.002"]}
          position={[-8.037, 4.05, -68.646]}
          rotation={[Math.PI / 2, 0, 2.967]}
          scale={0.01}
        />
        <mesh
          castShadow
          geometry={(nodes.Car016 as Mesh).geometry}
          material={materials["mt_car_00.001"]}
          position={[-7.579, 3.956, -68.057]}
          rotation={[Math.PI / 2, 0, -2.88]}
          scale={0.01}
        />
        <mesh
          castShadow
          geometry={(nodes.Car017 as Mesh).geometry}
          material={materials["mt_car_00.002"]}
          position={[-19.268, 1.689, 11.165]}
          rotation={[Math.PI / 2, 0, -2.793]}
          scale={0.01}
        />
        <mesh
          castShadow
          geometry={(nodes.Car018 as Mesh).geometry}
          material={materials.mt_car_00}
          position={[26.17, 1.384, 4.058]}
          rotation={[1.509, 0.124, -1.501]}
          scale={0.01}
        />
        <mesh
          castShadow
          geometry={(nodes.Car019 as Mesh).geometry}
          material={materials["mt_car_00.001"]}
          position={[31.484, 5.414, -13.607]}
          rotation={[1.875, -0.207, 2.562]}
          scale={0.01}
        />
        <mesh
          castShadow
          geometry={(nodes.Car020 as Mesh).geometry}
          material={materials.mt_car_00}
          position={[-5.722, 0.8, 22.108]}
          rotation={[1.549, 0.052, -Math.PI / 2]}
          scale={0.01}
        />
        <mesh
          castShadow
          geometry={(nodes.Car021 as Mesh).geometry}
          material={materials["mt_car_00.002"]}
          position={[57.619, 0.752, -7.69]}
          rotation={[1.543, -0.146, -2.796]}
          scale={0.01}
        />
        <mesh
          castShadow
          geometry={(nodes.Car022 as Mesh).geometry}
          material={materials.mt_car_00}
          position={[58.42, 0.628, -6.326]}
          rotation={[1.588, -0.067, -2.975]}
          scale={0.01}
        />
        <mesh
          castShadow
          geometry={(nodes.Car023 as Mesh).geometry}
          material={materials["mt_car_00.001"]}
          position={[-51.275, 4.784, 8.447]}
          rotation={[Math.PI / 2, 0, Math.PI / 4]}
          scale={0.01}
        />
        <mesh
          castShadow
          geometry={(nodes.Car024 as Mesh).geometry}
          material={materials.mt_car_00}
          position={[-3.359, 3.91, -67.868]}
          rotation={[Math.PI / 2, 0, -2.269]}
          scale={0.01}
        />
        <mesh
          castShadow
          geometry={(nodes.Car025 as Mesh).geometry}
          material={materials["mt_car_00.002"]}
          position={[-33.57, 4.771, -9.145]}
          rotation={[1.398, 0.065, -1.309]}
          scale={0.01}
        />
        <mesh
          castShadow
          geometry={(nodes.Car026 as Mesh).geometry}
          material={materials.mt_car_00}
          position={[-34.085, 4.763, -8.704]}
          rotation={[1.58, 0.151, -1.049]}
          scale={0.01}
        />
        <mesh
          castShadow
          geometry={(nodes.Car027 as Mesh).geometry}
          material={materials["mt_car_00.001"]}
          position={[-44.305, 5.038, 0.405]}
          rotation={[Math.PI / 2, 0, -Math.PI / 4]}
          scale={0.01}
        />
        <mesh
          castShadow
          geometry={(nodes.Car028 as Mesh).geometry}
          material={materials.mt_car_00}
          position={[-41.269, 4.639, -3.923]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={0.01}
        />
        <mesh
          castShadow
          geometry={(nodes.Car029 as Mesh).geometry}
          material={materials["mt_car_00.001"]}
          position={[-19.356, 2.946, -0.52]}
          rotation={[1.618, -0.114, 1.92]}
          scale={0.01}
        />
        <mesh
          castShadow
          geometry={(nodes.Car030 as Mesh).geometry}
          material={materials["mt_car_00.002"]}
          position={[-18.013, 2.785, -0.576]}
          rotation={[1.605, -0.136, 2.269]}
          scale={0.01}
        />
        <mesh
          castShadow
          geometry={(nodes.Car031 as Mesh).geometry}
          material={materials.mt_car_00}
          position={[10.367, 18.745, -55.46]}
          rotation={[1.607, 0.233, -2.199]}
          scale={0.01}
        />
        <mesh
          castShadow
          geometry={(nodes.Cruiser as Mesh).geometry}
          material={materials.mt_town_new_test12}
          position={[57.129, -0.003, 62.719]}
          rotation={[Math.PI / 2, 0, 1.745]}
          scale={0.013}
        />
        <mesh
          castShadow
          geometry={(nodes.Cruiser001 as Mesh).geometry}
          material={materials.mt_town_new_test12}
          position={[-33.972, -0.002, -55.824]}
          rotation={[Math.PI / 2, 0, Math.PI / 2]}
          scale={0.012}
        />
        <mesh
          castShadow
          geometry={(nodes.Cruiser002 as Mesh).geometry}
          material={materials.mt_town_new_test12}
          position={[-8.144, -0.003, 31.647]}
          rotation={[Math.PI / 2, 0, -Math.PI / 2]}
          scale={0.012}
        />
        <mesh
          castShadow
          geometry={(nodes.Cruiser003 as Mesh).geometry}
          material={materials.mt_town_new_test12}
          position={[-26.472, -0.003, -71.535]}
          rotation={[Math.PI / 2, 0, -2.967]}
          scale={0.013}
        />
        <mesh
          castShadow
          geometry={(nodes.Cruiser004 as Mesh).geometry}
          material={materials.mt_town_new_test12}
          position={[-302.718, -0.003, 122.43]}
          rotation={[Math.PI / 2, 0, -0.873]}
          scale={0.013}
        />
        <mesh
          castShadow
          geometry={(nodes.Cruiser005 as Mesh).geometry}
          material={materials.mt_town_new_test12}
          position={[-350.407, -0.003, 164.177]}
          rotation={[Math.PI / 2, 0, -Math.PI / 2]}
          scale={0.013}
        />
        <mesh
          castShadow
          geometry={(nodes.Cruiser006 as Mesh).geometry}
          material={materials.mt_town_new_test12}
          position={[40.897, -0.003, -58.979]}
          rotation={[Math.PI / 2, 0, 0.873]}
          scale={0.013}
        />
        <mesh
          castShadow
          geometry={(nodes.Cruiser007 as Mesh).geometry}
          material={materials.mt_town_new_test12}
          position={[-18.403, -0.003, -135.977]}
          rotation={[Math.PI / 2, 0, Math.PI]}
          scale={0.013}
        />
        <mesh
          castShadow
          geometry={(nodes.Cruiser008 as Mesh).geometry}
          material={materials.mt_town_new_test12}
          position={[-17.317, -0.003, -134.948]}
          rotation={[Math.PI / 2, 0, Math.PI]}
          scale={0.013}
        />
        <mesh
          castShadow
          geometry={(nodes.Cruiser009 as Mesh).geometry}
          material={materials.mt_town_new_test12}
          position={[-13.044, -0.003, -136.16]}
          rotation={[Math.PI / 2, 0, 2.967]}
          scale={0.013}
        />
        <mesh
          castShadow
          geometry={(nodes.Cruiser010 as Mesh).geometry}
          material={materials.mt_town_new_test12}
          position={[-111.535, -0.003, -89.171]}
          rotation={[Math.PI / 2, 0, -0.698]}
          scale={0.013}
        />
        <mesh
          castShadow
          geometry={(nodes.Cruiser011 as Mesh).geometry}
          material={materials.mt_town_new_test12}
          position={[-186.903, -0.003, 55.701]}
          rotation={[Math.PI / 2, 0, -1.833]}
          scale={0.013}
        />
        <mesh
          castShadow
          geometry={(nodes.Cruiser012 as Mesh).geometry}
          material={materials.mt_town_new_test12}
          position={[-182.566, -0.003, 53.911]}
          rotation={[Math.PI / 2, 0, 1.92]}
          scale={0.013}
        />
        <mesh
          castShadow
          geometry={(nodes.Cruiser013 as Mesh).geometry}
          material={materials.mt_town_new_test12}
          position={[-113.908, -0.003, 52.109]}
          rotation={[Math.PI / 2, 0, -1.222]}
          scale={0.013}
        />
        <mesh
          castShadow
          geometry={(nodes.Cruiser014 as Mesh).geometry}
          material={materials.mt_town_new_test12}
          position={[-110.44, -0.003, 53.367]}
          rotation={[Math.PI / 2, 0, Math.PI / 2]}
          scale={0.013}
        />
        <mesh
          castShadow
          geometry={(nodes.Cruiser015 as Mesh).geometry}
          material={materials.mt_town_new_test12}
          position={[-113.761, -0.003, 54.089]}
          rotation={[Math.PI / 2, 0, -1.484]}
          scale={0.013}
        />
        <mesh
          castShadow
          geometry={(nodes.Cruiser016 as Mesh).geometry}
          material={materials.mt_town_new_test12}
          position={[84.434, -0.003, -20.017]}
          rotation={[Math.PI / 2, 0, 1.396]}
          scale={0.013}
        />
        <mesh
          castShadow
          geometry={(nodes.Cruiser017 as Mesh).geometry}
          material={materials.mt_town_new_test12}
          position={[12.166, -0.003, 94.109]}
          rotation={[Math.PI / 2, 0, -1.222]}
          scale={0.013}
        />
        <mesh
          castShadow
          geometry={(nodes.Cruiser018 as Mesh).geometry}
          material={materials.mt_town_new_test12}
          position={[-45.594, -0.003, 15.451]}
          rotation={[Math.PI / 2, 0, -1.309]}
          scale={0.013}
        />
        <mesh
          castShadow
          geometry={(nodes.Cruiser019 as Mesh).geometry}
          material={materials.mt_town_new_test12}
          position={[99.674, -0.003, 26.241]}
          rotation={[Math.PI / 2, 0, 2.094]}
          scale={0.013}
        />
        <mesh
          castShadow
          geometry={(nodes.Cruiser020 as Mesh).geometry}
          material={materials.mt_town_new_test12}
          position={[21.876, -0.003, 28.808]}
          rotation={[Math.PI / 2, 0, -0.175]}
          scale={0.013}
        />
        <mesh
          castShadow
          geometry={(nodes.Cruiser021 as Mesh).geometry}
          material={materials.mt_town_new_test12}
          position={[-273.012, -0.003, 176.543]}
          rotation={[Math.PI / 2, 0, -1.222]}
          scale={0.013}
        />
        <mesh
          castShadow
          geometry={(nodes.Cruiser022 as Mesh).geometry}
          material={materials.mt_town_new_test12}
          position={[49.605, -0.003, 29.821]}
          rotation={[Math.PI / 2, 0, -0.436]}
          scale={0.013}
        />
        <mesh
          castShadow
          geometry={(nodes.Cruiser023 as Mesh).geometry}
          material={materials.mt_town_new_test12}
          position={[-20.188, -0.013, -134.922]}
          rotation={[Math.PI / 2, 0, -3.054]}
          scale={0.013}
        />
        <mesh
          castShadow
          geometry={(nodes.Cruiser024 as Mesh).geometry}
          material={materials.mt_town_new_test12}
          position={[-14.657, -0.013, -135.987]}
          rotation={[Math.PI / 2, 0, -3.054]}
          scale={0.013}
        />
        <mesh
          castShadow
          geometry={(nodes.Cruiser025 as Mesh).geometry}
          material={materials.mt_town_new_test12}
          position={[-186.26, -0.013, 52.66]}
          rotation={[Math.PI / 2, 0, -Math.PI / 2]}
          scale={0.013}
        />
        <mesh
          castShadow
          geometry={(nodes.Cruiser026 as Mesh).geometry}
          material={materials.mt_town_new_test12}
          position={[-179.107, -0.013, 48.881]}
          rotation={[Math.PI / 2, 0, 0.611]}
          scale={0.013}
        />
        <mesh
          castShadow
          geometry={(nodes.Cruiser027 as Mesh).geometry}
          material={materials.mt_town_new_test12}
          position={[-110.408, -0.013, 51.893]}
          rotation={[Math.PI / 2, 0, 1.222]}
          scale={0.013}
        />
        <mesh
          castShadow
          geometry={(nodes.Yacht as Mesh).geometry}
          material={materials.mt_yacht}
          position={[99.751, -0.02, 22.405]}
          rotation={[Math.PI / 2, 0, -2.182]}
          scale={0.013}
        />
        <mesh
          castShadow
          geometry={(nodes.Yacht001 as Mesh).geometry}
          material={materials["mt_yacht.001"]}
          position={[109.31, -0.02, 84.22]}
          rotation={[Math.PI / 2, 0, -1.396]}
          scale={0.013}
        />
        <mesh
          castShadow
          geometry={(nodes.Yacht002 as Mesh).geometry}
          material={materials.mt_yacht}
          position={[-255.745, -0.02, 112.308]}
          rotation={[Math.PI / 2, 0, 0.873]}
          scale={0.013}
        />
        <mesh
          castShadow
          geometry={(nodes.Yacht003 as Mesh).geometry}
          material={materials["mt_yacht.002"]}
          position={[25.753, -0.02, 28.603]}
          rotation={[Math.PI / 2, 0, 0.698]}
          scale={0.013}
        />
        <mesh
          castShadow
          geometry={(nodes.Yacht004 as Mesh).geometry}
          material={materials["mt_yacht.001"]}
          position={[58.714, -0.02, 59.124]}
          rotation={[Math.PI / 2, 0, 2.618]}
          scale={0.013}
        />
        <mesh
          castShadow
          geometry={(nodes.Yacht005 as Mesh).geometry}
          material={materials["mt_yacht.002"]}
          position={[-9.129, -0.02, 29.985]}
          rotation={[Math.PI / 2, 0, 0.611]}
          scale={0.013}
        />
        <mesh
          castShadow
          geometry={(nodes.Yacht006 as Mesh).geometry}
          material={materials.mt_yacht}
          position={[-7.022, -0.02, 26.931]}
          rotation={[Math.PI / 2, 0, Math.PI / 6]}
          scale={0.013}
        />
        <mesh
          castShadow
          geometry={(nodes.Yacht007 as Mesh).geometry}
          material={materials["mt_yacht.001"]}
          position={[-309.973, -0.02, 203.213]}
          rotation={[Math.PI / 2, 0, Math.PI / 6]}
          scale={0.013}
        />
        <mesh
          castShadow
          geometry={(nodes.Yacht008 as Mesh).geometry}
          material={materials["mt_yacht.002"]}
          position={[-269.489, -0.02, 172.927]}
          rotation={[Math.PI / 2, 0, -1.222]}
          scale={0.013}
        />
        <mesh
          castShadow
          geometry={(nodes.Yacht009 as Mesh).geometry}
          material={materials.mt_yacht}
          position={[-347.479, -0.02, 159.267]}
          rotation={[Math.PI / 2, 0, -0.873]}
          scale={0.013}
        />
        <mesh
          castShadow
          geometry={(nodes.Yacht010 as Mesh).geometry}
          material={materials["mt_yacht.001"]}
          position={[-16.251, -0.02, -136.509]}
          rotation={[Math.PI / 2, 0, Math.PI]}
          scale={0.013}
        />
        <mesh
          castShadow
          geometry={(nodes.Yacht011 as Mesh).geometry}
          material={materials["mt_yacht.002"]}
          position={[-21.497, -0.02, -136.27]}
          rotation={[Math.PI / 2, 0, -3.054]}
          scale={0.013}
        />
        <mesh
          castShadow
          geometry={(nodes.Yacht012 as Mesh).geometry}
          material={materials["mt_yacht.002"]}
          position={[-113.31, -0.02, -86.108]}
          rotation={[Math.PI / 2, 0, -2.182]}
          scale={0.013}
        />
        <mesh
          castShadow
          geometry={(nodes.Yacht013 as Mesh).geometry}
          material={materials["mt_yacht.001"]}
          position={[-113.967, -0.02, -89.079]}
          rotation={[Math.PI / 2, 0, -Math.PI / 3]}
          scale={0.013}
        />
        <mesh
          castShadow
          geometry={(nodes.Yacht014 as Mesh).geometry}
          material={materials.mt_yacht}
          position={[-183.242, -0.02, 50.447]}
          rotation={[Math.PI / 2, 0, -0.873]}
          scale={0.013}
        />
        <mesh
          castShadow
          geometry={(nodes.Yacht015 as Mesh).geometry}
          material={materials["mt_yacht.001"]}
          position={[79.451, -0.02, -17.017]}
          rotation={[Math.PI / 2, 0, -2.793]}
          scale={0.013}
        />
        <mesh
          castShadow
          geometry={(nodes.Yacht016 as Mesh).geometry}
          material={materials["mt_yacht.002"]}
          position={[19.364, -0.02, 97.162]}
          rotation={[Math.PI / 2, 0, -1.833]}
          scale={0.013}
        />
        <mesh
          castShadow
          geometry={(nodes.Yacht017 as Mesh).geometry}
          material={materials["mt_yacht.001"]}
          position={[-45.778, -0.02, 29.245]}
          rotation={[Math.PI / 2, 0, -2.793]}
          scale={0.013}
        />
        <mesh
          castShadow
          geometry={(nodes.Yacht018 as Mesh).geometry}
          material={materials.mt_yacht}
          position={[-48.797, -0.02, 17.924]}
          rotation={[Math.PI / 2, 0, -Math.PI / 6]}
          scale={0.013}
        />
        <mesh
          castShadow
          geometry={(nodes.Whale as Mesh).geometry}
          material={materials.mt_whale}
          position={[21.423, 0, -103.648]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={0.01}
        />
        <mesh
          castShadow
          geometry={(nodes.Whale001 as Mesh).geometry}
          material={materials.mt_whale}
          position={[-24.767, 0, 163.683]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={0.01}
        />
        <mesh
          castShadow
          geometry={(nodes.Whale002 as Mesh).geometry}
          material={materials.mt_whale}
          position={[182.378, 0, -21.764]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={0.01}
        />
        <mesh
          castShadow
          geometry={(nodes.Whale003 as Mesh).geometry}
          material={materials.mt_whale}
          position={[-217.999, 0, -107.202]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={0.01}
        />
        <mesh
          castShadow
          geometry={(nodes.Whale004 as Mesh).geometry}
          material={materials.mt_whale}
          position={[-160.778, 0, 58.477]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={0.01}
        />
        <mesh
          castShadow
          geometry={(nodes.Whale005 as Mesh).geometry}
          material={materials.mt_whale}
          position={[-337.942, 0, 220.13]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={0.01}
        />
        <mesh
          castShadow
          geometry={(nodes.Whale006 as Mesh).geometry}
          material={materials.mt_whale}
          position={[-183.702, 0, 150.789]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={0.01}
        />
        <mesh
          castShadow
          geometry={(nodes.Whale007 as Mesh).geometry}
          material={materials.mt_whale}
          position={[-28, 0, -157]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={0.01}
        />
        <mesh
          castShadow
          geometry={(nodes.Kayak as Mesh).geometry}
          material={materials.mt_canue_obj}
          position={[2, 13.49, -38.093]}
          rotation={[Math.PI / 2, 0, -2.793]}
          scale={0.015}
        />
        <mesh
          castShadow
          geometry={(nodes.Kayak001 as Mesh).geometry}
          material={materials.mt_canue_obj}
          position={[-18.557, 13.49, -45.456]}
          rotation={[Math.PI / 2, 0, -Math.PI / 4]}
          scale={0.015}
        />
        <mesh
          castShadow
          geometry={(nodes.Kayak002 as Mesh).geometry}
          material={materials.mt_canue_obj}
          position={[-140.012, 0, 150]}
          rotation={[Math.PI / 2, 0, 1.309]}
          scale={0.015}
        />
        <mesh
          castShadow
          geometry={(nodes.Kayak003 as Mesh).geometry}
          material={materials.mt_canue_obj}
          position={[-14.979, 13.49, -36.254]}
          rotation={[Math.PI / 2, 0, Math.PI / 4]}
          scale={0.015}
        />
        <mesh
          castShadow
          geometry={(nodes.Kayak004 as Mesh).geometry}
          material={materials.mt_canue_obj}
          position={[1.253, 13.49, -39.003]}
          rotation={[Math.PI / 2, 0, Math.PI / 2]}
          scale={0.015}
        />
        <mesh
          castShadow
          geometry={(nodes.Kayak005 as Mesh).geometry}
          material={materials.mt_canue_obj}
          position={[-18.153, 13.49, -41.894]}
          rotation={[Math.PI / 2, 0, 0.401]}
          scale={0.015}
        />
        <mesh
          castShadow
          geometry={(nodes.KayakR as Mesh).geometry}
          material={materials["mt_canue_obj.001"]}
          position={[-11.711, 13.49, -41.417]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={0.015}
        />
        <mesh
          castShadow
          geometry={(nodes.KayakR001 as Mesh).geometry}
          material={materials["mt_canue_obj.001"]}
          position={[-6.613, 13.49, -40.273]}
          rotation={[Math.PI / 2, 0, -0.96]}
          scale={0.015}
        />
        <mesh
          castShadow
          geometry={(nodes.KayakR002 as Mesh).geometry}
          material={materials["mt_canue_obj.001"]}
          position={[-15.004, 13.49, -35.335]}
          rotation={[Math.PI / 2, 0, 1.134]}
          scale={0.015}
        />
        <mesh
          castShadow
          geometry={(nodes.KayakR003 as Mesh).geometry}
          material={materials["mt_canue_obj.001"]}
          position={[-8.437, 13.49, -43.236]}
          rotation={[Math.PI / 2, 0, 2.182]}
          scale={0.015}
        />
        <mesh
          castShadow
          geometry={(nodes.Hawk as Mesh).geometry}
          material={materials.WS2_common_hawk_mt_WS2_hawk}
          position={[33.652, 24.348, -30.902]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={0.005}
        />
        <mesh
          castShadow
          geometry={(nodes.Hawk001 as Mesh).geometry}
          material={materials.WS2_common_hawk_mt_WS2_hawk}
          position={[19.019, 38.138, -28.537]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={0.005}
        />
        <mesh
          castShadow
          geometry={(nodes.Hawk002 as Mesh).geometry}
          material={materials.WS2_common_hawk_mt_WS2_hawk}
          position={[27.067, 43.356, -38.965]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={0.005}
        />
        <mesh
          castShadow
          geometry={(nodes.Hawk003 as Mesh).geometry}
          material={materials.WS2_common_hawk_mt_WS2_hawk}
          position={[27.983, 27.711, -51.327]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={0.005}
        />
        <mesh
          castShadow
          geometry={(nodes.Hawk004 as Mesh).geometry}
          material={materials.WS2_common_hawk_mt_WS2_hawk}
          position={[5.938, 32.834, -40.968]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={0.005}
        />
        <mesh
          castShadow
          geometry={(nodes.Hawk005 as Mesh).geometry}
          material={materials.WS2_common_hawk_mt_WS2_hawk}
          position={[-6.908, 25.28, -52.282]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={0.005}
        />
        <mesh
          castShadow
          geometry={(nodes.Hawk006 as Mesh).geometry}
          material={materials.WS2_common_hawk_mt_WS2_hawk}
          position={[17.921, 49.119, -39.217]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={0.005}
        />
        <mesh
          castShadow
          geometry={(nodes.Hawk007 as Mesh).geometry}
          material={materials.WS2_common_hawk_mt_WS2_hawk}
          position={[10.352, 45.168, -34.745]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={0.005}
        />
        <mesh
          castShadow
          geometry={(nodes.Hawk008 as Mesh).geometry}
          material={materials.WS2_common_hawk_mt_WS2_hawk}
          position={[11.536, 38.138, -48.578]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={0.005}
        />
        <mesh
          castShadow
          geometry={(nodes.Hawk009 as Mesh).geometry}
          material={materials.WS2_common_hawk_mt_WS2_hawk}
          position={[29.867, 32.834, -30.638]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={0.005}
        />
        <mesh
          castShadow
          geometry={(nodes.Hawk010 as Mesh).geometry}
          material={materials.WS2_common_hawk_mt_WS2_hawk}
          position={[0.746, 23.894, -26.367]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={0.005}
        />
        <mesh
          castShadow
          geometry={(nodes.Hawk011 as Mesh).geometry}
          material={materials.WS2_common_hawk_mt_WS2_hawk}
          position={[-37.572, 14.367, -35.868]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={0.005}
        />
        <mesh
          castShadow
          geometry={(nodes.Hawk012 as Mesh).geometry}
          material={materials.WS2_common_hawk_mt_WS2_hawk}
          position={[-28.23, 14.367, -27.476]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={0.005}
        />
        <mesh
          castShadow
          geometry={(nodes.Hawk013 as Mesh).geometry}
          material={materials.WS2_common_hawk_mt_WS2_hawk}
          position={[-37.097, 14.367, -21.142]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={0.005}
        />
        <mesh
          castShadow
          geometry={(nodes.Bird as Mesh).geometry}
          material={materials.mt_bird}
          position={[-301.086, 4.995, 198.471]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={[0.005, 0.005, 0.002]}
        />
        <mesh
          castShadow
          geometry={(nodes.Bird001 as Mesh).geometry}
          material={materials.mt_bird}
          position={[-338.08, 5.814, 147.682]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={[0.005, 0.005, 0.002]}
        />
        <mesh
          castShadow
          geometry={(nodes.Bird002 as Mesh).geometry}
          material={materials.mt_bird}
          position={[69.385, 3.382, 47.468]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={[0.005, 0.005, 0.002]}
        />
        <mesh
          castShadow
          geometry={(nodes.Bird003 as Mesh).geometry}
          material={materials.mt_bird}
          position={[-277.63, 11.329, 180.609]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={[0.005, 0.005, 0.002]}
        />
        <mesh
          castShadow
          geometry={(nodes.Bird004 as Mesh).geometry}
          material={materials.mt_bird}
          position={[56.187, 11.863, 29.827]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={[0.005, 0.005, 0.002]}
        />
        <mesh
          castShadow
          geometry={(nodes.Bird005 as Mesh).geometry}
          material={materials.mt_bird}
          position={[66.492, 3.08, -0.517]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={[0.005, 0.005, 0.002]}
        />
        <mesh
          castShadow
          geometry={(nodes.Bird006 as Mesh).geometry}
          material={materials.mt_bird}
          position={[11.393, 1.283, 21.045]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={[0.005, 0.005, 0.002]}
        />
        <mesh
          castShadow
          geometry={(nodes.Bird007 as Mesh).geometry}
          material={materials.mt_bird}
          position={[24.127, 15.224, 25.541]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={[0.005, 0.005, 0.002]}
        />
        <mesh
          castShadow
          geometry={(nodes.Bird008 as Mesh).geometry}
          material={materials.mt_bird}
          position={[-29.995, 8.837, -71.616]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={[0.005, 0.005, 0.002]}
        />
        <mesh
          castShadow
          geometry={(nodes.Bird009 as Mesh).geometry}
          material={materials.mt_bird}
          position={[-18.907, 3.982, 39.61]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={[0.005, 0.005, 0.002]}
        />
        <mesh
          castShadow
          geometry={(nodes.Bird010 as Mesh).geometry}
          material={materials.mt_bird}
          position={[-249.311, 9.118, 120.947]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={[0.005, 0.005, 0.002]}
        />
        <mesh
          castShadow
          geometry={(nodes.Bird011 as Mesh).geometry}
          material={materials.mt_bird}
          position={[-34.049, 8.268, -56.684]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={[0.005, 0.005, 0.002]}
        />
        <mesh
          castShadow
          geometry={(nodes.Bird012 as Mesh).geometry}
          material={materials.mt_bird}
          position={[-274.759, 5.548, 124.195]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={[0.005, 0.005, 0.002]}
        />
        <mesh
          castShadow
          geometry={(nodes.Bird013 as Mesh).geometry}
          material={materials.mt_bird}
          position={[57.85, 7.691, -23.627]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={[0.005, 0.005, 0.002]}
        />
        <mesh
          castShadow
          geometry={(nodes.Bird014 as Mesh).geometry}
          material={materials.mt_bird}
          position={[-59.211, 15.533, -105.656]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={[0.005, 0.005, 0.002]}
        />
        <mesh
          castShadow
          geometry={(nodes.Bird015 as Mesh).geometry}
          material={materials.mt_bird}
          position={[41.276, 8.372, -54.808]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={[0.005, 0.005, 0.002]}
        />
        <mesh
          castShadow
          geometry={(nodes.Bird016 as Mesh).geometry}
          material={materials.mt_bird}
          position={[61.578, 10.622, -35.456]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={[0.005, 0.005, 0.002]}
        />
        <mesh
          castShadow
          geometry={(nodes.Bird017 as Mesh).geometry}
          material={materials.mt_bird}
          position={[-1.095, 1.774, -94.138]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={[0.005, 0.005, 0.002]}
        />
        <mesh
          castShadow
          geometry={(nodes.Bird018 as Mesh).geometry}
          material={materials.mt_bird}
          position={[-268.557, 3.934, 173.387]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={[0.005, 0.005, 0.002]}
        />
        <mesh
          castShadow
          geometry={(nodes.Bird019 as Mesh).geometry}
          material={materials.mt_bird}
          position={[81.605, 3.479, 24.388]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={[0.005, 0.005, 0.002]}
        />
        <mesh
          castShadow
          geometry={(nodes.Bird020 as Mesh).geometry}
          material={materials.mt_bird}
          position={[-78.021, 14.949, 9.431]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={[0.005, 0.005, 0.002]}
        />
        <mesh
          castShadow
          geometry={(nodes.Bird021 as Mesh).geometry}
          material={materials.mt_bird}
          position={[-39.489, 7.065, -65.357]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={[0.005, 0.005, 0.002]}
        />
        <mesh
          castShadow
          geometry={(nodes.Bird022 as Mesh).geometry}
          material={materials.mt_bird}
          position={[-63.644, 15.71, 2.06]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={[0.005, 0.005, 0.002]}
        />
        <mesh
          castShadow
          geometry={(nodes.Bird023 as Mesh).geometry}
          material={materials.mt_bird}
          position={[-66.848, 13.66, -9.134]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={[0.005, 0.005, 0.002]}
        />
        <mesh
          castShadow
          geometry={(nodes.Bird024 as Mesh).geometry}
          material={materials.mt_bird}
          position={[68.238, 2.977, -136.677]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={[0.005, 0.005, 0.002]}
        />
        <mesh
          castShadow
          geometry={(nodes.Bird025 as Mesh).geometry}
          material={materials.mt_bird}
          position={[-107.432, 14.401, -70.587]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={[0.005, 0.005, 0.002]}
        />
        <mesh
          castShadow
          geometry={(nodes.Bird026 as Mesh).geometry}
          material={materials.mt_bird}
          position={[37.07, 7.24, -64.213]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={[0.005, 0.005, 0.002]}
        />
        <mesh
          castShadow
          geometry={(nodes.Bird027 as Mesh).geometry}
          material={materials.mt_bird}
          position={[90.619, 10.015, 49.956]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={[0.005, 0.005, 0.002]}
        />
        <mesh
          castShadow
          geometry={(nodes.Bird028 as Mesh).geometry}
          material={materials.mt_bird}
          position={[-69.057, 15.132, -44.919]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={[0.005, 0.005, 0.002]}
        />
        <mesh
          castShadow
          geometry={(nodes.Bird029 as Mesh).geometry}
          material={materials.mt_bird}
          position={[68.706, 15.679, 79.215]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={[0.005, 0.005, 0.002]}
        />
        <mesh
          castShadow
          geometry={(nodes.Bird030 as Mesh).geometry}
          material={materials.mt_bird}
          position={[49.001, 15.946, 99.265]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={[0.005, 0.005, 0.002]}
        />
        <mesh
          castShadow
          geometry={(nodes.Bird031 as Mesh).geometry}
          material={materials.mt_bird}
          position={[-52.083, 8.522, 120.951]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={[0.005, 0.005, 0.002]}
        />
        <mesh
          castShadow
          geometry={(nodes.Bird032 as Mesh).geometry}
          material={materials.mt_bird}
          position={[99.737, 3.804, 66.079]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={[0.005, 0.005, 0.002]}
        />
        <mesh
          castShadow
          geometry={(nodes.Bird033 as Mesh).geometry}
          material={materials.mt_bird}
          position={[-78.007, 16.153, -3.459]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={[0.005, 0.005, 0.002]}
        />
        <mesh
          castShadow
          geometry={(nodes.Bird034 as Mesh).geometry}
          material={materials.mt_bird}
          position={[-48.633, 7.827, 13.772]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={[0.005, 0.005, 0.002]}
        />
        <mesh
          castShadow
          geometry={(nodes.Bird035 as Mesh).geometry}
          material={materials.mt_bird}
          position={[10.224, 16.153, -102.152]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={[0.005, 0.005, 0.002]}
        />
        <mesh
          castShadow
          geometry={(nodes.Bird036 as Mesh).geometry}
          material={materials.mt_bird}
          position={[90.43, 14.949, -128.671]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={[0.005, 0.005, 0.002]}
        />
        <mesh
          castShadow
          geometry={(nodes.Bird037 as Mesh).geometry}
          material={materials.mt_bird}
          position={[7.246, 2.775, -95.198]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={[0.005, 0.005, 0.002]}
        />
        <mesh
          castShadow
          geometry={(nodes.Bird038 as Mesh).geometry}
          material={materials.mt_bird}
          position={[-302.069, 3.029, 133.77]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={[0.005, 0.005, 0.002]}
        />
        <mesh
          castShadow
          geometry={(nodes.Bird039 as Mesh).geometry}
          material={materials.mt_bird}
          position={[-7.364, 3.572, 32.887]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={[0.005, 0.005, 0.002]}
        />
        <mesh
          castShadow
          geometry={(nodes.tugboat as Mesh).geometry}
          material={materials.mt_tugboat}
          position={[16.395, 0.05, 69.676]}
          rotation={[Math.PI / 2, 0, 2.618]}
          scale={0.01}
        />
        <mesh
          castShadow
          geometry={(nodes.tugboat001 as Mesh).geometry}
          material={materials["mt_tugboat.001"]}
          position={[16.395, 0.05, 69.676]}
          rotation={[Math.PI / 2, 0, 2.618]}
          scale={0.01}
        />
        <mesh
          castShadow
          geometry={(nodes.tugboat002 as Mesh).geometry}
          material={materials["mt_tugboat.002"]}
          position={[16.395, 0.05, 69.676]}
          rotation={[Math.PI / 2, 0, 2.618]}
          scale={0.01}
        />
        <mesh
          castShadow
          geometry={(nodes.tugboat003 as Mesh).geometry}
          material={materials["mt_tugboat.003"]}
          position={[16.395, 0.05, 69.676]}
          rotation={[Math.PI / 2, 0, 2.618]}
          scale={0.01}
        />
        <mesh
          castShadow
          geometry={(nodes.Liner as Mesh).geometry}
          material={materials.lambert2z}
          position={[-80.96, 0, 106.497]}
          rotation={[Math.PI / 2, 0, 1.396]}
          scale={0.01}
        />

        <mesh
          castShadow
          geometry={(nodes.TreeA as Mesh).geometry}
          material={materials.mt_treeA}
          position={[-24.343, 4.556, -13.165]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={0.011}
        />
        <mesh
          castShadow
          geometry={(nodes.TreeA001 as Mesh).geometry}
          material={materials.mt_treeA}
          position={[-21.901, 4.37, -13.492]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={0.01}
        />
        <mesh
          castShadow
          geometry={(nodes.TreeA002 as Mesh).geometry}
          material={materials.mt_treeA}
          position={[-26.349, 4.773, -13.499]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={0.01}
        />
        <mesh
          castShadow
          geometry={(nodes.TreeA003 as Mesh).geometry}
          material={materials.mt_treeA}
          position={[37.766, 5.557, -22.548]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={0.01}
        />
        <mesh
          castShadow
          geometry={(nodes.TreeA004 as Mesh).geometry}
          material={materials.mt_treeA}
          position={[38.42, 4.423, -17.09]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={0.012}
        />
        <mesh
          castShadow
          geometry={(nodes.TreeA005 as Mesh).geometry}
          material={materials.mt_treeA}
          position={[40.818, 9.413, -27.722]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={0.012}
        />
        <mesh
          castShadow
          geometry={(nodes.TreeA006 as Mesh).geometry}
          material={materials.mt_treeA}
          position={[42.905, 7.968, -26.238]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={0.01}
        />
        <mesh
          castShadow
          geometry={(nodes.TreeA007 as Mesh).geometry}
          material={materials.mt_treeA}
          position={[38.754, 9.706, -32.229]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={0.01}
        />
        <mesh
          castShadow
          geometry={(nodes.TreeA008 as Mesh).geometry}
          material={materials.mt_treeA}
          position={[36.43, 2.288, -5.291]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={0.01}
        />
        <mesh
          castShadow
          geometry={(nodes.TreeA009 as Mesh).geometry}
          material={materials.mt_treeA}
          position={[35.171, 4.351, -12.092]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={0.01}
        />
        <mesh
          castShadow
          geometry={(nodes.TreeA010 as Mesh).geometry}
          material={materials.mt_treeA}
          position={[28.929, 6.891, -16.485]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={0.011}
        />
        <mesh
          castShadow
          geometry={(nodes.TreeA011 as Mesh).geometry}
          material={materials.mt_treeA}
          position={[23.939, 8.204, -15.763]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={0.01}
        />
        <mesh
          castShadow
          geometry={(nodes.TreeA012 as Mesh).geometry}
          material={materials.mt_treeA}
          position={[24.995, 8.217, -17.923]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={0.012}
        />
        <mesh
          castShadow
          geometry={(nodes.TreeA013 as Mesh).geometry}
          material={materials.mt_treeA}
          position={[22.079, 9.116, -22.453]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={0.01}
        />
        <mesh
          castShadow
          geometry={(nodes.TreeA014 as Mesh).geometry}
          material={materials.mt_treeA}
          position={[15.402, 9.494, -14.82]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={0.011}
        />
        <mesh
          castShadow
          geometry={(nodes.TreeA015 as Mesh).geometry}
          material={materials.mt_treeA}
          position={[12.014, 10.082, -11.206]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={0.013}
        />
        <mesh
          castShadow
          geometry={(nodes.TreeA016 as Mesh).geometry}
          material={materials.mt_treeA}
          position={[17.929, 9.295, -14.636]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={0.01}
        />
        <mesh
          castShadow
          geometry={(nodes.TreeA017 as Mesh).geometry}
          material={materials.mt_treeA}
          position={[10.089, 5.858, -4.432]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={0.012}
        />
        <mesh
          castShadow
          geometry={(nodes.TreeA018 as Mesh).geometry}
          material={materials.mt_treeA}
          position={[13.421, 5.466, -7.419]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={0.011}
        />
        <mesh
          castShadow
          geometry={(nodes.TreeA019 as Mesh).geometry}
          material={materials.mt_treeA}
          position={[16.914, 5.716, -10.253]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={0.01}
        />
        <mesh
          castShadow
          geometry={(nodes.TreeA020 as Mesh).geometry}
          material={materials.mt_treeA}
          position={[28.086, 5.005, -9.839]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={0.01}
        />
        <mesh
          castShadow
          geometry={(nodes.TreeA021 as Mesh).geometry}
          material={materials.mt_treeA}
          position={[25.066, 5.697, -11.272]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={0.01}
        />
        <mesh
          castShadow
          geometry={(nodes.TreeA022 as Mesh).geometry}
          material={materials.mt_treeA}
          position={[20.772, 1.773, -2.849]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={0.01}
        />
        <mesh
          castShadow
          geometry={(nodes.TreeA023 as Mesh).geometry}
          material={materials.mt_treeA}
          position={[15.797, 1.955, -2.949]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={0.01}
        />
        <mesh
          castShadow
          geometry={(nodes.TreeA024 as Mesh).geometry}
          material={materials.mt_treeA}
          position={[26.26, 1.822, -4.055]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={0.012}
        />
        <mesh
          castShadow
          geometry={(nodes.TreeA025 as Mesh).geometry}
          material={materials.mt_treeA}
          position={[-48.251, 6.749, -38.462]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={0.01}
        />
        <mesh
          castShadow
          geometry={(nodes.TreeA026 as Mesh).geometry}
          material={materials.mt_treeA}
          position={[-47.658, 6.928, -40.19]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={0.011}
        />
        <mesh
          castShadow
          geometry={(nodes.TreeA027 as Mesh).geometry}
          material={materials.mt_treeA}
          position={[-17.675, 3.69, -20.092]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={0.011}
        />
        <mesh
          castShadow
          geometry={(nodes.TreeA028 as Mesh).geometry}
          material={materials.mt_treeA}
          position={[-11.123, 3.69, -27.871]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={0.012}
        />
        <mesh
          castShadow
          geometry={(nodes.TreeA029 as Mesh).geometry}
          material={materials.mt_treeA}
          position={[-9.228, 3.708, -27.204]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={0.011}
        />
        <mesh
          castShadow
          geometry={(nodes.TreeA030 as Mesh).geometry}
          material={materials.mt_treeA}
          position={[-10.944, 3.634, -20.847]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={0.01}
        />
        <mesh
          castShadow
          geometry={(nodes.TreeA031 as Mesh).geometry}
          material={materials.mt_treeA}
          position={[38.335, 8.87, -26.198]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={0.011}
        />
        <mesh
          castShadow
          geometry={(nodes.TreeA032 as Mesh).geometry}
          material={materials.mt_treeA}
          position={[34.712, 2.51, -5.261]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={0.011}
        />
        <mesh
          castShadow
          geometry={(nodes.TreeA033 as Mesh).geometry}
          material={materials.mt_treeA}
          position={[8.146, 5.948, -4.712]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={0.01}
        />
        <mesh
          castShadow
          geometry={(nodes.TreeA034 as Mesh).geometry}
          material={materials.mt_treeA}
          position={[26.499, 4.428, -8.415]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={0.012}
        />
        <mesh
          castShadow
          geometry={(nodes.TreeA035 as Mesh).geometry}
          material={materials.mt_treeA}
          position={[28.065, 3.945, -7.673]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={0.01}
        />
        <mesh
          castShadow
          geometry={(nodes.TreeA036 as Mesh).geometry}
          material={materials.mt_treeA}
          position={[13.767, 9.761, -13.053]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={0.01}
        />
        <mesh
          castShadow
          geometry={(nodes.TreeA037 as Mesh).geometry}
          material={materials.mt_treeA}
          position={[9.095, 9.792, -9.39]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={0.011}
        />
        <mesh
          castShadow
          geometry={(nodes.TreeA038 as Mesh).geometry}
          material={materials.mt_treeA}
          position={[23.366, 1.727, -1.849]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={0.011}
        />
        <mesh
          castShadow
          geometry={(nodes.TreeA039 as Mesh).geometry}
          material={materials.mt_treeA}
          position={[17.03, 2.124, -1.767]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={0.012}
        />
        <mesh
          castShadow
          geometry={(nodes.TreeA040 as Mesh).geometry}
          material={materials.mt_treeA}
          position={[-29.966, 8.681, -22.481]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={0.014}
        />
        <mesh
          castShadow
          geometry={(nodes.TreeA041 as Mesh).geometry}
          material={materials.mt_treeA}
          position={[-29.091, 8.69, -25.307]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={0.013}
        />
        <mesh
          castShadow
          geometry={(nodes.TreeA042 as Mesh).geometry}
          material={materials.mt_treeA}
          position={[-24.652, 8.69, -24.029]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={0.014}
        />
        <mesh
          castShadow
          geometry={(nodes.TreeA043 as Mesh).geometry}
          material={materials.mt_treeA}
          position={[-39.238, 8.69, -27.256]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={0.012}
        />
        <mesh
          castShadow
          geometry={(nodes.TreeA044 as Mesh).geometry}
          material={materials.mt_treeA}
          position={[-37.782, 8.69, -22.242]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={0.013}
        />
        <mesh
          castShadow
          geometry={(nodes.TreeA045 as Mesh).geometry}
          material={materials.mt_treeA}
          position={[-39.179, 8.69, -32.251]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={0.012}
        />
        <mesh
          castShadow
          geometry={(nodes.TreeA046 as Mesh).geometry}
          material={materials.mt_treeA}
          position={[-24.952, 8.69, -26.724]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={0.012}
        />
        <mesh
          castShadow
          geometry={(nodes.TreeA047 as Mesh).geometry}
          material={materials.mt_treeA}
          position={[-27.523, 8.69, -17.783]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={0.011}
        />
        <mesh
          castShadow
          geometry={(nodes.TreeA048 as Mesh).geometry}
          material={materials.mt_treeA}
          position={[27.719, 21.918, -49.985]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={0.015}
        />
        <mesh
          castShadow
          geometry={(nodes.TreeA049 as Mesh).geometry}
          material={materials.mt_treeA}
          position={[-5.356, 18.083, -50.897]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={0.012}
        />
        <mesh
          castShadow
          geometry={(nodes.TreeA050 as Mesh).geometry}
          material={materials.mt_treeA}
          position={[-8.007, 18.083, -53.321]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={0.015}
        />
        <mesh
          castShadow
          geometry={(nodes.TreeA051 as Mesh).geometry}
          material={materials.mt_treeA}
          position={[-9.673, 18.083, -51.943]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={0.012}
        />
        <mesh
          castShadow
          geometry={(nodes.TreeA052 as Mesh).geometry}
          material={materials.mt_treeA}
          position={[-33.555, 8.69, -35.858]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={0.012}
        />
        <mesh
          castShadow
          geometry={(nodes.TreeA053 as Mesh).geometry}
          material={materials.mt_treeA}
          position={[-36.147, 8.69, -32.82]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={0.013}
        />
        <mesh
          castShadow
          geometry={(nodes.TreeA054 as Mesh).geometry}
          material={materials.mt_treeA}
          position={[-35.727, 8.69, -29.837]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={0.012}
        />
        <mesh
          castShadow
          geometry={(nodes.TreeA055 as Mesh).geometry}
          material={materials.mt_treeA}
          position={[-36.749, 8.69, -25.721]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={0.013}
        />
        <mesh
          castShadow
          geometry={(nodes.TreeA056 as Mesh).geometry}
          material={materials.mt_treeA}
          position={[-33.091, 8.69, -26.636]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={0.014}
        />
        <mesh
          castShadow
          geometry={(nodes.TreeA057 as Mesh).geometry}
          material={materials.mt_treeA}
          position={[-34.868, 8.69, -24.809]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={0.012}
        />
        <mesh
          castShadow
          geometry={(nodes.TreeA058 as Mesh).geometry}
          material={materials.mt_treeA}
          position={[-29.996, 8.69, -28.22]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={0.014}
        />
        <mesh
          castShadow
          geometry={(nodes.TreeA059 as Mesh).geometry}
          material={materials.mt_treeA}
          position={[-26.371, 8.69, -29.616]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={0.013}
        />
        <mesh
          castShadow
          geometry={(nodes.TreeA060 as Mesh).geometry}
          material={materials.mt_treeA}
          position={[-32.752, 8.69, -33.033]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={0.013}
        />
        <mesh
          castShadow
          geometry={(nodes.TreeA061 as Mesh).geometry}
          material={materials.mt_treeA}
          position={[-31.635, 8.69, -34.755]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={0.012}
        />
        <mesh
          castShadow
          geometry={(nodes.TreeA062 as Mesh).geometry}
          material={materials.mt_treeA}
          position={[-31.156, 8.69, -37.563]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={0.012}
        />
        <mesh
          castShadow
          geometry={(nodes.TreeA063 as Mesh).geometry}
          material={materials.mt_treeA}
          position={[-34.464, 8.69, -40.776]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={0.013}
        />
        <mesh
          castShadow
          geometry={(nodes.TreeA064 as Mesh).geometry}
          material={materials.mt_treeA}
          position={[-40.251, 8.69, -42.769]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={0.012}
        />
        <mesh
          castShadow
          geometry={(nodes.TreeA065 as Mesh).geometry}
          material={materials.mt_treeA}
          position={[-40.338, 8.69, -39.091]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={0.012}
        />
        <mesh
          castShadow
          geometry={(nodes.TreeA066 as Mesh).geometry}
          material={materials.mt_treeA}
          position={[-33.161, 8.69, -39.441]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={0.012}
        />
        <mesh
          castShadow
          geometry={(nodes.TreeA067 as Mesh).geometry}
          material={materials.mt_treeA}
          position={[-28.575, 8.69, -38.376]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={0.012}
        />
        <mesh
          castShadow
          geometry={(nodes.TreeA068 as Mesh).geometry}
          material={materials.mt_treeA}
          position={[-27.555, 8.69, -33.846]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={0.013}
        />
        <mesh
          castShadow
          geometry={(nodes.TreeA069 as Mesh).geometry}
          material={materials.mt_treeA}
          position={[-24.92, 8.69, -31.599]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={0.012}
        />
        <mesh
          castShadow
          geometry={(nodes.TreeA070 as Mesh).geometry}
          material={materials.mt_treeA}
          position={[-21.741, 8.69, -29.975]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={0.012}
        />
        <mesh
          castShadow
          geometry={(nodes.TreeA071 as Mesh).geometry}
          material={materials.mt_treeA}
          position={[-26.91, 8.69, -20.825]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={0.012}
        />
        <mesh
          castShadow
          geometry={(nodes.TreeA072 as Mesh).geometry}
          material={materials.mt_treeA}
          position={[-41.005, 8.69, -36.384]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={0.012}
        />
        <mesh
          castShadow
          geometry={(nodes.TreeA073 as Mesh).geometry}
          material={materials.mt_treeA}
          position={[-41.635, 8.69, -40.874]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={0.012}
        />
        <mesh
          castShadow
          geometry={(nodes.TreeA074 as Mesh).geometry}
          material={materials.mt_treeA}
          position={[-40.233, 8.69, -29.518]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={0.012}
        />
        <mesh
          castShadow
          geometry={(nodes.TreeA075 as Mesh).geometry}
          material={materials.mt_treeA}
          position={[-39.911, 8.69, -22.895]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={0.012}
        />
        <mesh
          castShadow
          geometry={(nodes.TreeA076 as Mesh).geometry}
          material={materials.mt_treeA}
          position={[-36.425, 8.69, -20.653]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={0.012}
        />
        <mesh
          castShadow
          geometry={(nodes.TreeA077 as Mesh).geometry}
          material={materials.mt_treeA}
          position={[-37.89, 8.69, -18.392]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={0.012}
        />
        <mesh
          castShadow
          geometry={(nodes.TreeA078 as Mesh).geometry}
          material={materials.mt_treeA}
          position={[-24.952, 8.69, -19.812]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={0.012}
        />
        <mesh
          castShadow
          geometry={(nodes.TreeA079 as Mesh).geometry}
          material={materials.mt_treeA}
          position={[36.848, 9.402, -41.33]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={0.01}
        />
        <mesh
          castShadow
          geometry={(nodes.TreeA080 as Mesh).geometry}
          material={materials.mt_treeA}
          position={[40.307, 4.092, -21.073]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={0.012}
        />
        <mesh
          castShadow
          geometry={(nodes.TreeA081 as Mesh).geometry}
          material={materials.mt_treeA}
          position={[41.962, 3.591, -22.818]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={0.01}
        />
        <mesh
          castShadow
          geometry={(nodes.TreeA082 as Mesh).geometry}
          material={materials.mt_treeA}
          position={[-45.17, 6.854, -36.915]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={0.011}
        />
        <mesh
          castShadow
          geometry={(nodes.TreeA083 as Mesh).geometry}
          material={materials.mt_treeA}
          position={[-37.914, 8.69, -29.844]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={0.014}
        />
        <mesh
          castShadow
          geometry={(nodes.TreeA084 as Mesh).geometry}
          material={materials.mt_treeA}
          position={[-29.15, 8.69, -31.433]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={0.014}
        />
        <mesh
          castShadow
          geometry={(nodes.TreeA085 as Mesh).geometry}
          material={materials.mt_treeA}
          position={[-29.517, 8.69, -36.517]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={0.014}
        />
        <mesh
          castShadow
          geometry={(nodes.TreeA086 as Mesh).geometry}
          material={materials.mt_treeA}
          position={[-38.767, 8.69, -40.894]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={0.014}
        />
        <mesh
          castShadow
          geometry={(nodes.TreeA087 as Mesh).geometry}
          material={materials.mt_treeA}
          position={[-34.143, 8.69, -22.262]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={0.014}
        />
        <mesh
          castShadow
          geometry={(nodes.TreeA088 as Mesh).geometry}
          material={materials.mt_treeA}
          position={[-27.634, 8.681, -23.571]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={0.012}
        />
        <mesh
          castShadow
          geometry={(nodes.TreeA089 as Mesh).geometry}
          material={materials.mt_treeA}
          position={[-24.03, 8.681, -28.988]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={0.014}
        />
        <mesh
          castShadow
          geometry={(nodes.TreeA090 as Mesh).geometry}
          material={materials.mt_treeA}
          position={[-37.701, 8.69, -34.714]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={0.014}
        />
        <mesh
          castShadow
          geometry={(nodes.TreeA091 as Mesh).geometry}
          material={materials.mt_treeA}
          position={[-31.388, 8.69, -29.948]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={0.012}
        />
        <mesh
          castShadow
          geometry={(nodes.TreeA092 as Mesh).geometry}
          material={materials.mt_treeA}
          position={[-34.739, 8.69, -27.83]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={0.012}
        />
        <mesh
          castShadow
          geometry={(nodes.TreeA093 as Mesh).geometry}
          material={materials.mt_treeA}
          position={[-35.398, 8.69, -38.655]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={0.014}
        />
        <mesh
          castShadow
          geometry={(nodes.TreeA094 as Mesh).geometry}
          material={materials.mt_treeA}
          position={[-38.713, 8.69, -37.599]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={0.014}
        />
        <mesh
          castShadow
          geometry={(nodes.TreeA095 as Mesh).geometry}
          material={materials.mt_treeA}
          position={[-36.384, 8.69, -17.043]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={0.012}
        />
        <mesh
          castShadow
          geometry={(nodes.TreeA096 as Mesh).geometry}
          material={materials.mt_treeA}
          position={[-0.974, 13.674, -30.161]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={0.008}
        />
        <mesh
          castShadow
          geometry={(nodes.TreeA097 as Mesh).geometry}
          material={materials.mt_treeA}
          position={[1.979, 13.676, -33.65]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={0.01}
        />
        <mesh
          castShadow
          geometry={(nodes.TreeA098 as Mesh).geometry}
          material={materials.mt_treeA}
          position={[2.294, 13.676, -35.379]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={0.008}
        />
        <mesh
          castShadow
          geometry={(nodes.TreeA099 as Mesh).geometry}
          material={materials.mt_treeA}
          position={[-17.681, 13.74, -34.756]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={0.01}
        />
        <mesh
          castShadow
          geometry={(nodes.TreeA100 as Mesh).geometry}
          material={materials.mt_treeA}
          position={[0.593, 13.676, -35.174]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={0.008}
        />
        <mesh
          castShadow
          geometry={(nodes.TreeA101 as Mesh).geometry}
          material={materials.mt_treeA}
          position={[-1.11, 13.685, -34.448]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={0.008}
        />
        <mesh
          castShadow
          geometry={(nodes.TreeA102 as Mesh).geometry}
          material={materials.mt_treeA}
          position={[-2.383, 13.674, -29.944]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={0.008}
        />
        <mesh
          castShadow
          geometry={(nodes.TreeA103 as Mesh).geometry}
          material={materials.mt_treeA}
          position={[-5.35, 13.685, -30.969]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={0.009}
        />
        <mesh
          castShadow
          geometry={(nodes.TreeA104 as Mesh).geometry}
          material={materials.mt_treeA}
          position={[-7.149, 13.685, -32.268]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={0.01}
        />
        <mesh
          castShadow
          geometry={(nodes.TreeA105 as Mesh).geometry}
          material={materials.mt_treeA}
          position={[-2.784, 13.674, -27.333]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={0.009}
        />
        <mesh
          castShadow
          geometry={(nodes.TreeA106 as Mesh).geometry}
          material={materials.mt_treeA}
          position={[-3.502, 13.694, -24.778]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={0.008}
        />
        <mesh
          castShadow
          geometry={(nodes.TreeA107 as Mesh).geometry}
          material={materials.mt_treeA}
          position={[0.241, 13.674, -30.188]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={0.008}
        />
        <mesh
          castShadow
          geometry={(nodes.TreeA108 as Mesh).geometry}
          material={materials.mt_treeA}
          position={[-5.479, 13.685, -28.147]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={0.008}
        />
        <mesh
          castShadow
          geometry={(nodes.TreeA109 as Mesh).geometry}
          material={materials.mt_treeA}
          position={[-0.65, 13.674, -28.801]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={0.008}
        />
        <mesh
          castShadow
          geometry={(nodes.TreeA110 as Mesh).geometry}
          material={materials.mt_treeA}
          position={[-5.438, 13.685, -25.17]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={0.009}
        />
        <mesh
          castShadow
          geometry={(nodes.TreeA111 as Mesh).geometry}
          material={materials.mt_treeA}
          position={[-16.061, 13.58, -50.836]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={0.012}
        />
        <mesh
          castShadow
          geometry={(nodes.TreeA112 as Mesh).geometry}
          material={materials.mt_treeA}
          position={[-17.598, 13.648, -49.309]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={0.01}
        />
        <mesh
          castShadow
          geometry={(nodes.TreeA113 as Mesh).geometry}
          material={materials.mt_treeA}
          position={[-46.538, 7.175, -43.35]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={0.011}
        />
        <mesh
          castShadow
          geometry={(nodes.TreeA114 as Mesh).geometry}
          material={materials.mt_treeA}
          position={[-323.935, 2.616, 139.243]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={0.015}
        />
        <mesh
          castShadow
          geometry={(nodes.TreeA115 as Mesh).geometry}
          material={materials.mt_treeA}
          position={[-312.905, 2.565, 144.628]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={0.014}
        />
        <mesh
          castShadow
          geometry={(nodes.TreeA116 as Mesh).geometry}
          material={materials.mt_treeA}
          position={[-330.303, 1.093, 140.246]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={0.013}
        />
        <mesh
          castShadow
          geometry={(nodes.TreeA117 as Mesh).geometry}
          material={materials.mt_treeA}
          position={[-334.899, 0.389, 143.65]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={0.013}
        />
        <mesh
          castShadow
          geometry={(nodes.TreeA118 as Mesh).geometry}
          material={materials.mt_treeA}
          position={[-325.32, 1.845, 155.269]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={0.013}
        />
        <mesh
          castShadow
          geometry={(nodes.TreeA119 as Mesh).geometry}
          material={materials.mt_treeA}
          position={[-323.748, 2.269, 150.792]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={0.014}
        />
        <mesh
          castShadow
          geometry={(nodes.TreeA120 as Mesh).geometry}
          material={materials.mt_treeA}
          position={[-325.48, 1.682, 147.07]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={0.013}
        />
        <mesh
          castShadow
          geometry={(nodes.TreeA121 as Mesh).geometry}
          material={materials.mt_treeA}
          position={[-319.115, 2.569, 151.059]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={0.013}
        />
        <mesh
          castShadow
          geometry={(nodes.TreeA122 as Mesh).geometry}
          material={materials.mt_treeA}
          position={[-308.168, 1.68, 142.272]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={0.013}
        />
        <mesh
          castShadow
          geometry={(nodes.TreeA123 as Mesh).geometry}
          material={materials.mt_treeA}
          position={[-314.541, 1.844, 140.04]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={0.013}
        />
        <mesh
          castShadow
          geometry={(nodes.TreeA124 as Mesh).geometry}
          material={materials.mt_treeA}
          position={[-296.327, 2.682, 140.305]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={0.015}
        />
        <mesh
          castShadow
          geometry={(nodes.TreeA125 as Mesh).geometry}
          material={materials.mt_treeA}
          position={[-290.964, 2.753, 133.434]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={0.013}
        />
        <mesh
          castShadow
          geometry={(nodes.TreeA126 as Mesh).geometry}
          material={materials.mt_treeA}
          position={[-282.064, 2.256, 144.674]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={0.015}
        />
        <mesh
          castShadow
          geometry={(nodes.TreeA127 as Mesh).geometry}
          material={materials.mt_treeA}
          position={[-276.857, 0.971, 153.536]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={0.015}
        />
        <mesh
          castShadow
          geometry={(nodes.TreeA128 as Mesh).geometry}
          material={materials.mt_treeA}
          position={[-264.849, 2.192, 138.519]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={0.015}
        />
        <mesh
          castShadow
          geometry={(nodes.TreeA129 as Mesh).geometry}
          material={materials.mt_treeA}
          position={[-273.962, 1.525, 145.412]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={0.014}
        />
        <mesh
          castShadow
          geometry={(nodes.TreeA130 as Mesh).geometry}
          material={materials.mt_treeA}
          position={[-268.892, 2.08, 141.973]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={0.013}
        />
        <mesh
          castShadow
          geometry={(nodes.TreeA131 as Mesh).geometry}
          material={materials.mt_treeA}
          position={[-283.85, 2.204, 148.781]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={0.015}
        />
        <mesh
          castShadow
          geometry={(nodes.TreeA132 as Mesh).geometry}
          material={materials.mt_treeA}
          position={[-280.371, 1.928, 151.05]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={0.016}
        />
        <mesh
          castShadow
          geometry={(nodes.TreeA133 as Mesh).geometry}
          material={materials.mt_treeA}
          position={[-268.237, 0.689, 154.392]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={0.008}
        />
        <mesh
          castShadow
          geometry={(nodes.TreeA134 as Mesh).geometry}
          material={materials.mt_treeA}
          position={[-273.291, 0.696, 161.252]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={0.013}
        />
        <mesh
          castShadow
          geometry={(nodes.TreeA135 as Mesh).geometry}
          material={materials.mt_treeA}
          position={[-282.925, 1.879, 137.554]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={0.014}
        />
        <mesh
          castShadow
          geometry={(nodes.TreeA136 as Mesh).geometry}
          material={materials.mt_treeA}
          position={[-287.842, 2.155, 171.745]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={0.013}
        />
        <mesh
          castShadow
          geometry={(nodes.TreeA137 as Mesh).geometry}
          material={materials.mt_treeA}
          position={[-292.676, 1.225, 187.706]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={0.013}
        />
        <mesh
          castShadow
          geometry={(nodes.TreeA138 as Mesh).geometry}
          material={materials.mt_treeA}
          position={[-308.86, 0.652, 182.255]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={0.014}
        />
        <mesh
          castShadow
          geometry={(nodes.TreeA139 as Mesh).geometry}
          material={materials.mt_treeA}
          position={[-300.171, 1.139, 182.811]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={0.015}
        />
        <mesh
          castShadow
          geometry={(nodes.TreeA140 as Mesh).geometry}
          material={materials.mt_treeA}
          position={[-314.683, 1.103, 182.731]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={0.014}
        />
        <mesh
          castShadow
          geometry={(nodes.TreeA141 as Mesh).geometry}
          material={materials.mt_treeA}
          position={[-317.575, 1.306, 176.48]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={0.014}
        />
        <mesh
          castShadow
          geometry={(nodes.TreeA142 as Mesh).geometry}
          material={materials.mt_treeA}
          position={[-316.199, 1.238, 172.482]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={0.014}
        />
        <mesh
          castShadow
          geometry={(nodes.TreeA143 as Mesh).geometry}
          material={materials.mt_treeA}
          position={[-323.458, 1.429, 167.965]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={0.015}
        />
        <mesh
          castShadow
          geometry={(nodes.TreeA144 as Mesh).geometry}
          material={materials.mt_treeA}
          position={[-332.897, 1.319, 168.042]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={0.012}
        />
        <mesh
          castShadow
          geometry={(nodes.TreeA145 as Mesh).geometry}
          material={materials.mt_treeA}
          position={[-314.157, 2.534, 154.653]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={0.013}
        />
        <mesh
          castShadow
          geometry={(nodes.TreeA146 as Mesh).geometry}
          material={materials.mt_treeA}
          position={[-311.033, 2.444, 151.277]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={0.013}
        />
        <mesh
          castShadow
          geometry={(nodes.TreeA147 as Mesh).geometry}
          material={materials.mt_treeA}
          position={[-295.028, 1.719, 154.179]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={0.015}
        />
        <mesh
          castShadow
          geometry={(nodes.TreeA148 as Mesh).geometry}
          material={materials.mt_treeA}
          position={[-311.957, 1.128, 169.134]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={0.015}
        />
        <mesh
          castShadow
          geometry={(nodes.TreeA149 as Mesh).geometry}
          material={materials.mt_treeA}
          position={[-286.781, 1.561, 159.957]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={0.015}
        />
        <mesh
          castShadow
          geometry={(nodes.TreeA150 as Mesh).geometry}
          material={materials.mt_treeA}
          position={[-296.857, 1.584, 156.662]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={0.014}
        />
        <mesh
          castShadow
          geometry={(nodes.TreeA151 as Mesh).geometry}
          material={materials.mt_treeA}
          position={[-296.312, 1.672, 160.843]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={0.014}
        />
        <mesh
          castShadow
          geometry={(nodes.TreeA152 as Mesh).geometry}
          material={materials.mt_treeA}
          position={[-302.474, 1.692, 160.411]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={0.014}
        />
        <mesh
          castShadow
          geometry={(nodes.TreeA153 as Mesh).geometry}
          material={materials.mt_treeA}
          position={[-301.632, 1.547, 175.771]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={0.015}
        />
        <mesh
          castShadow
          geometry={(nodes.TreeA154 as Mesh).geometry}
          material={materials.mt_treeA}
          position={[-286.961, 1.668, 147.172]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={0.013}
        />
        <mesh
          castShadow
          geometry={(nodes.TreeA155 as Mesh).geometry}
          material={materials.mt_treeA}
          position={[-271.892, 1.574, 165.764]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={0.01}
        />
        <mesh
          castShadow
          geometry={(nodes.TreeA156 as Mesh).geometry}
          material={materials.mt_treeA}
          position={[-267.418, 1.706, 144.251]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={0.013}
        />
        <mesh
          castShadow
          geometry={(nodes.TreeA157 as Mesh).geometry}
          material={materials.mt_treeA}
          position={[-305.874, 1.995, 193.753]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={0.013}
        />
        <mesh
          castShadow
          geometry={(nodes.TreeA158 as Mesh).geometry}
          material={materials.mt_treeA}
          position={[-324.17, 2.964, 133.649]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={0.014}
        />
        <mesh
          castShadow
          geometry={(nodes.TreeB as Mesh).geometry}
          material={materials.mt_treeB}
          position={[-7.708, 1.769, 9.004]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={0.01}
        />
        <mesh
          castShadow
          geometry={(nodes.TreeB001 as Mesh).geometry}
          material={materials.mt_treeB}
          position={[-6.466, 1.704, 6.921]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={0.01}
        />
        <mesh
          castShadow
          geometry={(nodes.TreeB002 as Mesh).geometry}
          material={materials.mt_treeB}
          position={[-16.745, 2.572, -1.495]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={0.01}
        />
        <mesh
          castShadow
          geometry={(nodes.TreeB003 as Mesh).geometry}
          material={materials.mt_treeB}
          position={[-11.177, 2.25, 3.455]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={0.01}
        />
        <mesh
          castShadow
          geometry={(nodes.TreeB004 as Mesh).geometry}
          material={materials.mt_treeB}
          position={[-17.467, 3.499, -9.818]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={0.01}
        />
        <mesh
          castShadow
          geometry={(nodes.TreeB005 as Mesh).geometry}
          material={materials.mt_treeB}
          position={[-19.065, 3.588, -10.346]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={0.01}
        />
        <mesh
          castShadow
          geometry={(nodes.TreeB006 as Mesh).geometry}
          material={materials.mt_treeB}
          position={[-19.079, 3.547, -8.732]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={0.01}
        />
        <mesh
          castShadow
          geometry={(nodes.TreeB007 as Mesh).geometry}
          material={materials.mt_treeB}
          position={[-36.41, 4.958, -11.179]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={0.012}
        />
        <mesh
          castShadow
          geometry={(nodes.TreeB008 as Mesh).geometry}
          material={materials.mt_treeB}
          position={[-42.327, 5.166, -6.144]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={0.01}
        />
        <mesh
          castShadow
          geometry={(nodes.TreeB009 as Mesh).geometry}
          material={materials.mt_treeB}
          position={[-36.789, 4.281, -4.78]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={0.01}
        />
        <mesh
          castShadow
          geometry={(nodes.TreeB010 as Mesh).geometry}
          material={materials.mt_treeB}
          position={[-38.987, 5.262, -9.251]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={0.01}
        />
        <mesh
          castShadow
          geometry={(nodes.TreeB011 as Mesh).geometry}
          material={materials.mt_treeB}
          position={[-47.709, 5.495, -0.21]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={0.01}
        />
        <mesh
          castShadow
          geometry={(nodes.TreeB012 as Mesh).geometry}
          material={materials.mt_treeB}
          position={[-45.543, 5.733, -3.612]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={0.01}
        />
        <mesh
          castShadow
          geometry={(nodes.TreeB013 as Mesh).geometry}
          material={materials.mt_treeB}
          position={[-41.487, 5.037, 1.418]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={0.01}
        />
        <mesh
          castShadow
          geometry={(nodes.TreeB014 as Mesh).geometry}
          material={materials.mt_treeB}
          position={[-38.338, 4.11, -1.28]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={0.01}
        />
        <mesh
          castShadow
          geometry={(nodes.TreeB015 as Mesh).geometry}
          material={materials.mt_treeB}
          position={[-36.954, 4.075, 0.432]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={0.01}
        />
        <mesh
          castShadow
          geometry={(nodes.TreeB043 as Mesh).geometry}
          material={materials.mt_treeB}
          position={[-57.558, 7.803, -11.249]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={0.01}
        />
        <mesh
          castShadow
          geometry={(nodes.TreeB044 as Mesh).geometry}
          material={materials.mt_treeB}
          position={[-59.003, 8.143, -11.227]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={0.01}
        />
        <mesh
          castShadow
          geometry={(nodes.TreeB045 as Mesh).geometry}
          material={materials.mt_treeB}
          position={[-33.054, 1.652, 11.841]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={0.01}
        />
        <mesh
          castShadow
          geometry={(nodes.TreeB046 as Mesh).geometry}
          material={materials.mt_treeB}
          position={[-34.52, 1.961, 9.3]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={0.01}
        />
        <mesh
          castShadow
          geometry={(nodes.TreeB047 as Mesh).geometry}
          material={materials.mt_treeB}
          position={[-18.844, 1.69, 15.45]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={[0.006, 0.006, 0.01]}
        />
        <mesh
          castShadow
          geometry={(nodes.TreeB048 as Mesh).geometry}
          material={materials.mt_treeB}
          position={[-18.844, 1.69, 12.486]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={[0.006, 0.006, 0.01]}
        />
        <mesh
          castShadow
          geometry={(nodes.TreeB049 as Mesh).geometry}
          material={materials.mt_treeB}
          position={[-21.557, 1.69, 12.486]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={[0.006, 0.006, 0.01]}
        />
        <mesh
          castShadow
          geometry={(nodes.TreeB050 as Mesh).geometry}
          material={materials.mt_treeB}
          position={[-21.557, 1.69, 13.97]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={[0.006, 0.006, 0.01]}
        />
        <mesh
          castShadow
          geometry={(nodes.TreeB051 as Mesh).geometry}
          material={materials.mt_treeB}
          position={[-21.557, 1.69, 15.45]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={[0.006, 0.006, 0.01]}
        />
        <mesh
          castShadow
          geometry={(nodes.TreeB052 as Mesh).geometry}
          material={materials.mt_treeB}
          position={[8.275, 1.992, 3.074]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={0.01}
        />
        <mesh
          castShadow
          geometry={(nodes.TreeB053 as Mesh).geometry}
          material={materials.mt_treeB}
          position={[15.086, 1.837, 2.58]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={0.01}
        />
        <mesh
          castShadow
          geometry={(nodes.TreeB054 as Mesh).geometry}
          material={materials.mt_treeB}
          position={[11.347, 1.43, 4.05]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={0.01}
        />
        <mesh
          castShadow
          geometry={(nodes.TreeB055 as Mesh).geometry}
          material={materials.mt_treeB}
          position={[-27.197, 1.69, 15.316]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={[0.005, 0.005, 0.01]}
        />
        <mesh
          castShadow
          geometry={(nodes.TreeB056 as Mesh).geometry}
          material={materials.mt_treeB}
          position={[-25.545, 1.69, 15.409]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={[0.005, 0.005, 0.01]}
        />
        <mesh
          castShadow
          geometry={(nodes.TreeB057 as Mesh).geometry}
          material={materials.mt_treeB}
          position={[-27.799, 0.69, 18.362]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={[0.005, 0.005, 0.01]}
        />
        <mesh
          castShadow
          geometry={(nodes.TreeB058 as Mesh).geometry}
          material={materials.mt_treeB}
          position={[-26.565, 0.69, 18.362]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={[0.005, 0.005, 0.01]}
        />
        <mesh
          castShadow
          geometry={(nodes.TreeB059 as Mesh).geometry}
          material={materials.mt_treeB}
          position={[-25.343, 0.69, 18.362]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={[0.005, 0.005, 0.01]}
        />
        <mesh
          castShadow
          geometry={(nodes.TreeB060 as Mesh).geometry}
          material={materials.mt_treeB}
          position={[-18.385, 0.7, 18.81]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={0.01}
        />
        <mesh
          castShadow
          geometry={(nodes.TreeB061 as Mesh).geometry}
          material={materials.mt_treeB}
          position={[-22.162, 0.7, 18.81]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={0.01}
        />
        <mesh
          castShadow
          geometry={(nodes.TreeB062 as Mesh).geometry}
          material={materials.mt_treeB}
          position={[-21.59, 0.7, 22.015]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={[0.003, 0.003, 0.006]}
        />
        <mesh
          castShadow
          geometry={(nodes.TreeB063 as Mesh).geometry}
          material={materials.mt_treeB}
          position={[-18.957, 0.7, 22.015]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={[0.003, 0.003, 0.006]}
        />
        <mesh
          castShadow
          geometry={(nodes.TreeB064 as Mesh).geometry}
          material={materials.mt_treeB}
          position={[-30.123, 1.69, 10.318]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={0.01}
        />
        <mesh
          castShadow
          geometry={(nodes.TreeB065 as Mesh).geometry}
          material={materials.mt_treeB}
          position={[-19.606, 1.7, 5.738]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={[0.005, 0.005, 0.01]}
        />
        <mesh
          castShadow
          geometry={(nodes.TreeB066 as Mesh).geometry}
          material={materials.mt_treeB}
          position={[-21.606, 1.7, 5.727]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={[0.005, 0.005, 0.01]}
        />
        <mesh
          castShadow
          geometry={(nodes.TreeB067 as Mesh).geometry}
          material={materials.mt_treeB}
          position={[-17.767, 1.7, 6.074]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={[0.005, 0.005, 0.01]}
        />
        <mesh
          castShadow
          geometry={(nodes.TreeB068 as Mesh).geometry}
          material={materials.mt_treeB}
          position={[-24.151, 1.7, 8.939]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={[0.005, 0.005, 0.01]}
        />
        <mesh
          castShadow
          geometry={(nodes.TreeB069 as Mesh).geometry}
          material={materials.mt_treeB}
          position={[-25.467, 2.502, 2.731]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={[0.005, 0.005, 0.01]}
        />
        <mesh
          castShadow
          geometry={(nodes.TreeB070 as Mesh).geometry}
          material={materials.mt_treeB}
          position={[-30.25, 3.028, 2.971]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={[0.005, 0.005, 0.01]}
        />
        <mesh
          castShadow
          geometry={(nodes.TreeB071 as Mesh).geometry}
          material={materials.mt_treeB}
          position={[-29.006, 2.842, 3.181]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={[0.005, 0.005, 0.01]}
        />
        <mesh
          castShadow
          geometry={(nodes.TreeB072 as Mesh).geometry}
          material={materials.mt_treeB}
          position={[-27.779, 2.593, 3.511]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={[0.005, 0.005, 0.01]}
        />
        <mesh
          castShadow
          geometry={(nodes.TreeB073 as Mesh).geometry}
          material={materials.mt_treeB}
          position={[-39.166, 4.618, -4.794]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={0.01}
        />
        <mesh
          castShadow
          geometry={(nodes.TreeB074 as Mesh).geometry}
          material={materials.mt_treeB}
          position={[-18.844, 1.69, 13.97]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={[0.006, 0.006, 0.01]}
        />
        <mesh
          castShadow
          geometry={(nodes.TreeB075 as Mesh).geometry}
          material={materials.mt_treeB}
          position={[11.734, 7.95, -80.171]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={0.01}
        />
        <mesh
          castShadow
          geometry={(nodes.TreeB076 as Mesh).geometry}
          material={materials.mt_treeB}
          position={[14.996, 7.95, -79.461]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={0.01}
        />
        <mesh
          castShadow
          geometry={(nodes.TreeB077 as Mesh).geometry}
          material={materials.mt_treeB}
          position={[14.171, 7.95, -76.669]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={0.01}
        />
        <mesh
          castShadow
          geometry={(nodes.TreeB078 as Mesh).geometry}
          material={materials.mt_treeB}
          position={[13.659, 7.95, -73.921]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={0.01}
        />
        <mesh
          castShadow
          geometry={(nodes.TreeB079 as Mesh).geometry}
          material={materials.mt_treeB}
          position={[13.045, 7.95, -71.446]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={0.01}
        />
        <mesh
          castShadow
          geometry={(nodes.TreeB080 as Mesh).geometry}
          material={materials.mt_treeB}
          position={[10.677, 7.95, -71.003]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={0.01}
        />
        <mesh
          castShadow
          geometry={(nodes.TreeB081 as Mesh).geometry}
          material={materials.mt_treeB}
          position={[52.037, 1.801, -7.697]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={0.005}
        />
        <mesh
          castShadow
          geometry={(nodes.TreeB082 as Mesh).geometry}
          material={materials.mt_treeB}
          position={[46.207, 1.79, -9.2]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={0.004}
        />
        <mesh
          castShadow
          geometry={(nodes.TreeB083 as Mesh).geometry}
          material={materials.mt_treeB}
          position={[47.986, 1.79, -6.136]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={0.004}
        />
        <mesh
          castShadow
          geometry={(nodes.TreeB084 as Mesh).geometry}
          material={materials.mt_treeB}
          position={[-13.916, 2.354, -1.384]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={0.01}
        />
        <mesh
          castShadow
          geometry={(nodes.TreeB085 as Mesh).geometry}
          material={materials.mt_treeB}
          position={[-25.438, 4.1, -61.821]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={0.01}
        />
        <mesh
          castShadow
          geometry={(nodes.TreeB086 as Mesh).geometry}
          material={materials.mt_treeB}
          position={[-21.592, 4.596, -59.892]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={0.01}
        />
        <mesh
          castShadow
          geometry={(nodes.TreeB087 as Mesh).geometry}
          material={materials.mt_treeB}
          position={[-20.22, 4.546, -61.698]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={0.01}
        />
        <mesh
          castShadow
          geometry={(nodes.TreeB088 as Mesh).geometry}
          material={materials.mt_treeB}
          position={[-47.43, 6.894, -53.336]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={0.01}
        />
        <mesh
          castShadow
          geometry={(nodes.TreeB089 as Mesh).geometry}
          material={materials.mt_treeB}
          position={[-45.393, 7.099, -53.028]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={0.01}
        />
        <mesh
          castShadow
          geometry={(nodes.TreeB090 as Mesh).geometry}
          material={materials.mt_treeB}
          position={[-42.129, 7.238, -51.216]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={0.01}
        />
        <mesh
          castShadow
          geometry={(nodes.TreeB091 as Mesh).geometry}
          material={materials.mt_treeB}
          position={[-1.868, 13.689, -33.302]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={0.005}
        />
        <mesh
          castShadow
          geometry={(nodes.TreeB092 as Mesh).geometry}
          material={materials.mt_treeB}
          position={[-1.231, 13.688, -32.871]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={0.003}
        />
        <mesh
          castShadow
          geometry={(nodes.TreeB093 as Mesh).geometry}
          material={materials.mt_treeB}
          position={[-1.2, 13.688, -32.007]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={0.003}
        />
        <mesh
          castShadow
          geometry={(nodes.TreeB094 as Mesh).geometry}
          material={materials.mt_treeB}
          position={[-2.185, 13.688, -31.711]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={0.003}
        />
        <mesh
          castShadow
          geometry={(nodes.TreeB095 as Mesh).geometry}
          material={materials.mt_treeB}
          position={[-2.278, 13.688, -30.871]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={0.004}
        />
        <mesh
          castShadow
          geometry={(nodes.TreeB096 as Mesh).geometry}
          material={materials.mt_treeB}
          position={[-14.059, 2.823, -9.121]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={0.01}
        />
        <mesh
          castShadow
          geometry={(nodes.TreeB097 as Mesh).geometry}
          material={materials.mt_treeB}
          position={[-15.784, 2.769, -5.673]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={0.011}
        />
        <mesh
          castShadow
          geometry={(nodes.TreeB098 as Mesh).geometry}
          material={materials.mt_treeB}
          position={[-12.353, 3.269, -12.397]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={0.01}
        />
        <mesh
          castShadow
          geometry={(nodes.TreeB099 as Mesh).geometry}
          material={materials.mt_treeB}
          position={[-41.062, 5.917, -16.284]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={0.01}
        />
        <mesh
          castShadow
          geometry={(nodes.TreeB100 as Mesh).geometry}
          material={materials.mt_treeB}
          position={[-31.653, 1.214, 14.448]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={0.01}
        />
        <mesh
          castShadow
          geometry={(nodes.TreeB101 as Mesh).geometry}
          material={materials.mt_treeB}
          position={[-31.069, 0.822, 17.211]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={0.01}
        />
        <mesh
          castShadow
          geometry={(nodes.TreeB102 as Mesh).geometry}
          material={materials.mt_treeB}
          position={[-33.534, 3.139, 4.369]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={0.01}
        />
        <mesh
          castShadow
          geometry={(nodes.TreeB103 as Mesh).geometry}
          material={materials.mt_treeB}
          position={[-23.045, 2.438, 3.26]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={[0.005, 0.005, 0.01]}
        />
        <mesh
          castShadow
          geometry={(nodes.TreeB104 as Mesh).geometry}
          material={materials.mt_treeB}
          position={[-66.387, 9.668, 1.432]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={0.01}
        />
        <mesh
          castShadow
          geometry={(nodes.TreeB105 as Mesh).geometry}
          material={materials.mt_treeB}
          position={[-62.864, 8.633, -12.04]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={0.01}
        />
        <mesh
          castShadow
          geometry={(nodes.TreeB106 as Mesh).geometry}
          material={materials.mt_treeB}
          position={[-2.834, 2.828, -8.191]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={0.01}
        />
        <mesh
          castShadow
          geometry={(nodes.TreeB107 as Mesh).geometry}
          material={materials.mt_treeB}
          position={[-0.284, 2.698, -8.914]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={0.01}
        />
        <mesh
          castShadow
          geometry={(nodes.TreeB108 as Mesh).geometry}
          material={materials.mt_treeB}
          position={[-1.494, 2.669, -4.99]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={0.01}
        />
        <mesh
          castShadow
          geometry={(nodes.TreeB109 as Mesh).geometry}
          material={materials.mt_treeB}
          position={[0.64, 2.647, -2.225]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={0.01}
        />
        <mesh
          castShadow
          geometry={(nodes.TreeB110 as Mesh).geometry}
          material={materials.mt_treeB}
          position={[0.668, 2.541, -6.442]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={0.01}
        />
        <mesh
          castShadow
          geometry={(nodes.TreeB111 as Mesh).geometry}
          material={materials.mt_treeB}
          position={[2.518, 2.417, -4.036]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={0.01}
        />
        <mesh
          castShadow
          geometry={(nodes.TreeB112 as Mesh).geometry}
          material={materials.mt_treeB}
          position={[5.785, 2.128, 4.635]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={0.01}
        />
        <mesh
          castShadow
          geometry={(nodes.TreeB113 as Mesh).geometry}
          material={materials.mt_treeB}
          position={[-3.702, 2.894, -12.463]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={0.01}
        />
        <mesh
          castShadow
          geometry={(nodes.TreeB114 as Mesh).geometry}
          material={materials.mt_treeB}
          position={[0.539, 2.73, -11.119]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={0.01}
        />
        <mesh
          castShadow
          geometry={(nodes.TreeB115 as Mesh).geometry}
          material={materials.mt_treeB}
          position={[-6.579, 3.122, -3.343]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={0.01}
        />
        <mesh
          castShadow
          geometry={(nodes.TreeB116 as Mesh).geometry}
          material={materials.mt_treeB}
          position={[-2.991, 1.764, 6.278]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={0.01}
        />
        <mesh
          castShadow
          geometry={(nodes.TreeB117 as Mesh).geometry}
          material={materials.mt_treeB}
          position={[-19.401, 2.718, 1.158]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={0.011}
        />
        <mesh
          castShadow
          geometry={(nodes.TreeB118 as Mesh).geometry}
          material={materials.mt_treeB}
          position={[-279.538, 2.22, 143.755]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={0.014}
        />
        <mesh
          castShadow
          geometry={(nodes.TreeB119 as Mesh).geometry}
          material={materials.mt_treeB}
          position={[-278.191, 1.775, 146.838]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={0.016}
        />
        <mesh
          castShadow
          geometry={(nodes.TreeB120 as Mesh).geometry}
          material={materials.mt_treeB}
          position={[-281.541, 2.097, 147.676]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={0.014}
        />
        <mesh
          castShadow
          geometry={(nodes.TreeB121 as Mesh).geometry}
          material={materials.mt_treeB}
          position={[-283.523, 2.29, 134.523]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={0.013}
        />
        <mesh
          castShadow
          geometry={(nodes.TreeB122 as Mesh).geometry}
          material={materials.mt_treeB}
          position={[-293.864, 2.898, 133.524]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={0.014}
        />
        <mesh
          castShadow
          geometry={(nodes.TreeB123 as Mesh).geometry}
          material={materials.mt_treeB}
          position={[-300.941, 1.723, 143.494]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={0.015}
        />
        <mesh
          castShadow
          geometry={(nodes.TreeB124 as Mesh).geometry}
          material={materials.mt_treeB}
          position={[-295.014, 1.975, 144.89]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={0.015}
        />
        <mesh
          castShadow
          geometry={(nodes.TreeB125 as Mesh).geometry}
          material={materials.mt_treeB}
          position={[-296.842, 1.42, 151.139]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={0.014}
        />
        <mesh
          castShadow
          geometry={(nodes.TreeB126 as Mesh).geometry}
          material={materials.mt_treeB}
          position={[-289.714, 1.074, 156.288]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={0.013}
        />
        <mesh
          castShadow
          geometry={(nodes.TreeB127 as Mesh).geometry}
          material={materials.mt_treeB}
          position={[-273.91, 0.804, 153.513]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={0.014}
        />
        <mesh
          castShadow
          geometry={(nodes.TreeB128 as Mesh).geometry}
          material={materials.mt_treeB}
          position={[-276.87, 0.775, 158.772]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={0.013}
        />
        <mesh
          castShadow
          geometry={(nodes.TreeB129 as Mesh).geometry}
          material={materials.mt_treeB}
          position={[-275.858, 1.389, 164.88]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={0.014}
        />
        <mesh
          castShadow
          geometry={(nodes.TreeB130 as Mesh).geometry}
          material={materials.mt_treeB}
          position={[-278.77, 1.805, 166.525]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={0.014}
        />
        <mesh
          castShadow
          geometry={(nodes.TreeB131 as Mesh).geometry}
          material={materials.mt_treeB}
          position={[-293.078, 1.391, 157.489]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={0.013}
        />
        <mesh
          castShadow
          geometry={(nodes.TreeB132 as Mesh).geometry}
          material={materials.mt_treeB}
          position={[-281.345, 1.119, 160.147]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={0.014}
        />
        <mesh
          castShadow
          geometry={(nodes.TreeB133 as Mesh).geometry}
          material={materials.mt_treeB}
          position={[-288.677, 1.488, 161.885]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={0.014}
        />
        <mesh
          castShadow
          geometry={(nodes.TreeB134 as Mesh).geometry}
          material={materials.mt_treeB}
          position={[-282.747, 1.746, 166.638]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={0.014}
        />
        <mesh
          castShadow
          geometry={(nodes.TreeB135 as Mesh).geometry}
          material={materials.mt_treeB}
          position={[-283.116, 1.597, 169.028]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={0.014}
        />
        <mesh
          castShadow
          geometry={(nodes.TreeB136 as Mesh).geometry}
          material={materials.mt_treeB}
          position={[-281.964, 1.819, 175.211]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={0.011}
        />
        <mesh
          castShadow
          geometry={(nodes.TreeB137 as Mesh).geometry}
          material={materials.mt_treeB}
          position={[-281.069, 2.367, 181.473]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={0.014}
        />
        <mesh
          castShadow
          geometry={(nodes.TreeB138 as Mesh).geometry}
          material={materials.mt_treeB}
          position={[-306.795, 1.19, 168.078]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={0.016}
        />
        <mesh
          castShadow
          geometry={(nodes.TreeB139 as Mesh).geometry}
          material={materials.mt_treeB}
          position={[-286.294, 2.628, 185.081]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={0.013}
        />
        <mesh
          castShadow
          geometry={(nodes.TreeB140 as Mesh).geometry}
          material={materials.mt_treeB}
          position={[-303.763, 1.414, 170.139]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={0.014}
        />
        <mesh
          castShadow
          geometry={(nodes.TreeB141 as Mesh).geometry}
          material={materials.mt_treeB}
          position={[-290.771, 2.151, 179.843]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={0.014}
        />
        <mesh
          castShadow
          geometry={(nodes.TreeB142 as Mesh).geometry}
          material={materials.mt_treeB}
          position={[-287.2, 2.239, 176.729]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={0.014}
        />
        <mesh
          castShadow
          geometry={(nodes.TreeB143 as Mesh).geometry}
          material={materials.mt_treeB}
          position={[-291.437, 2.107, 172.111]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={0.014}
        />
        <mesh
          castShadow
          geometry={(nodes.TreeB144 as Mesh).geometry}
          material={materials.mt_treeB}
          position={[-285.728, 2.182, 173.486]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={0.013}
        />
        <mesh
          castShadow
          geometry={(nodes.TreeB145 as Mesh).geometry}
          material={materials.mt_treeB}
          position={[-292.386, 1.675, 165.704]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={0.014}
        />
        <mesh
          castShadow
          geometry={(nodes.TreeB146 as Mesh).geometry}
          material={materials.mt_treeB}
          position={[-296.006, 2.099, 176.305]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={0.013}
        />
        <mesh
          castShadow
          geometry={(nodes.TreeB147 as Mesh).geometry}
          material={materials.mt_treeB}
          position={[-302.492, 1.296, 177.837]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={0.015}
        />
        <mesh
          castShadow
          geometry={(nodes.TreeB148 as Mesh).geometry}
          material={materials.mt_treeB}
          position={[-303.796, 1.08, 186.365]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={0.013}
        />
        <mesh
          castShadow
          geometry={(nodes.TreeB149 as Mesh).geometry}
          material={materials.mt_treeB}
          position={[-302.748, 0.787, 182.923]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={0.014}
        />
        <mesh
          castShadow
          geometry={(nodes.TreeB150 as Mesh).geometry}
          material={materials.mt_treeB}
          position={[-309.177, 1.286, 187.503]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={0.014}
        />
        <mesh
          castShadow
          geometry={(nodes.TreeB151 as Mesh).geometry}
          material={materials.mt_treeB}
          position={[-311.772, 0.987, 183.706]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={0.013}
        />
        <mesh
          castShadow
          geometry={(nodes.TreeB152 as Mesh).geometry}
          material={materials.mt_treeB}
          position={[-306.938, 1.799, 191.134]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={0.013}
        />
        <mesh
          castShadow
          geometry={(nodes.TreeB153 as Mesh).geometry}
          material={materials.mt_treeB}
          position={[-310.584, 0.671, 181.022]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={0.014}
        />
        <mesh
          castShadow
          geometry={(nodes.TreeB154 as Mesh).geometry}
          material={materials.mt_treeB}
          position={[-309.18, 0.308, 178.54]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={0.013}
        />
        <mesh
          castShadow
          geometry={(nodes.TreeB155 as Mesh).geometry}
          material={materials.mt_treeB}
          position={[-314.92, 0.619, 178.608]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={0.013}
        />
        <mesh
          castShadow
          geometry={(nodes.TreeB156 as Mesh).geometry}
          material={materials.mt_treeB}
          position={[-304.727, 1.769, 190.123]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={0.014}
        />
        <mesh
          castShadow
          geometry={(nodes.TreeB157 as Mesh).geometry}
          material={materials.mt_treeB}
          position={[-309.601, 0.308, 175.324]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={0.013}
        />
        <mesh
          castShadow
          geometry={(nodes.TreeB158 as Mesh).geometry}
          material={materials.mt_treeB}
          position={[-308.007, 0.368, 170.983]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={0.014}
        />
        <mesh
          castShadow
          geometry={(nodes.TreeB159 as Mesh).geometry}
          material={materials.mt_treeB}
          position={[-306.382, 0.494, 172.347]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={0.013}
        />
        <mesh
          castShadow
          geometry={(nodes.TreeB160 as Mesh).geometry}
          material={materials.mt_treeB}
          position={[-295.528, 2.221, 168.095]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={0.013}
        />
        <mesh
          castShadow
          geometry={(nodes.TreeB161 as Mesh).geometry}
          material={materials.mt_treeB}
          position={[-299.908, 2.227, 161.881]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={0.013}
        />
        <mesh
          castShadow
          geometry={(nodes.TreeB162 as Mesh).geometry}
          material={materials.mt_treeB}
          position={[-305.669, 1.841, 160.464]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={0.013}
        />
        <mesh
          castShadow
          geometry={(nodes.TreeB163 as Mesh).geometry}
          material={materials.mt_treeB}
          position={[-304.329, 1.68, 158.226]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={0.015}
        />
        <mesh
          castShadow
          geometry={(nodes.TreeB164 as Mesh).geometry}
          material={materials.mt_treeB}
          position={[-292.796, 1.349, 149.634]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={0.015}
        />
        <mesh
          castShadow
          geometry={(nodes.TreeB165 as Mesh).geometry}
          material={materials.mt_treeB}
          position={[-313.654, 0.329, 173.506]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={0.013}
        />
        <mesh
          castShadow
          geometry={(nodes.TreeB166 as Mesh).geometry}
          material={materials.mt_treeB}
          position={[-328.776, 1.162, 166.486]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={0.014}
        />
        <mesh
          castShadow
          geometry={(nodes.TreeB167 as Mesh).geometry}
          material={materials.mt_treeB}
          position={[-332.897, 0.841, 158.216]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={0.013}
        />
        <mesh
          castShadow
          geometry={(nodes.TreeB168 as Mesh).geometry}
          material={materials.mt_treeB}
          position={[-323.302, 2.01, 154.252]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={0.013}
        />
        <mesh
          castShadow
          geometry={(nodes.TreeB169 as Mesh).geometry}
          material={materials.mt_treeB}
          position={[-330.187, 0.831, 157.396]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={0.013}
        />
        <mesh
          castShadow
          geometry={(nodes.TreeB170 as Mesh).geometry}
          material={materials.mt_treeB}
          position={[-326.211, 1.794, 152.581]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={0.014}
        />
        <mesh
          castShadow
          geometry={(nodes.TreeB171 as Mesh).geometry}
          material={materials.mt_treeB}
          position={[-339.124, 1.758, 158.235]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={0.009}
        />
        <mesh
          castShadow
          geometry={(nodes.TreeB172 as Mesh).geometry}
          material={materials.mt_treeB}
          position={[-338.412, 0.542, 140.066]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={0.014}
        />
        <mesh
          castShadow
          geometry={(nodes.TreeB173 as Mesh).geometry}
          material={materials.mt_treeB}
          position={[-337.612, 0.729, 138.002]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={0.014}
        />
        <mesh
          castShadow
          geometry={(nodes.TreeB174 as Mesh).geometry}
          material={materials.mt_treeB}
          position={[-336.918, 0.521, 141.292]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={0.013}
        />
        <mesh
          castShadow
          geometry={(nodes.TreeB175 as Mesh).geometry}
          material={materials.mt_treeB}
          position={[-336.625, 0.613, 139.601]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={0.013}
        />
        <mesh
          castShadow
          geometry={(nodes.TreeB176 as Mesh).geometry}
          material={materials.mt_treeB}
          position={[-334.69, 0.629, 139.949]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={0.013}
        />
        <mesh
          castShadow
          geometry={(nodes.TreeB177 as Mesh).geometry}
          material={materials.mt_treeB}
          position={[-332.253, 1.568, 133.183]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={0.011}
        />
        <mesh
          castShadow
          geometry={(nodes.TreeB178 as Mesh).geometry}
          material={materials.mt_treeB}
          position={[-333.071, 0.328, 144.441]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={0.01}
        />
        <mesh
          castShadow
          geometry={(nodes.TreeB179 as Mesh).geometry}
          material={materials.mt_treeB}
          position={[-324.993, 1.981, 142.482]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={0.015}
        />
        <mesh
          castShadow
          geometry={(nodes.TreeB180 as Mesh).geometry}
          material={materials.mt_treeB}
          position={[-316.92, 2.129, 139.063]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={0.013}
        />
        <mesh
          castShadow
          geometry={(nodes.TreeB181 as Mesh).geometry}
          material={materials.mt_treeB}
          position={[-318.335, 1.508, 170.581]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={0.013}
        />
        <mesh
          castShadow
          geometry={(nodes.TreeB182 as Mesh).geometry}
          material={materials.mt_treeB}
          position={[-305.922, 1.673, 141.095]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={0.013}
        />
        <mesh
          castShadow
          geometry={(nodes.TreeB183 as Mesh).geometry}
          material={materials.mt_treeB}
          position={[-303.835, 1.831, 139.525]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={0.013}
        />
        <mesh
          castShadow
          geometry={(nodes.TreeB184 as Mesh).geometry}
          material={materials.mt_treeB}
          position={[-331.692, 0.658, 165.189]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={0.013}
        />
        <mesh
          castShadow
          geometry={(nodes.TreeB185 as Mesh).geometry}
          material={materials.mt_treeB}
          position={[-298.038, 1.412, 147.85]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={0.014}
        />
        <mesh
          castShadow
          geometry={(nodes.TreeB186 as Mesh).geometry}
          material={materials.mt_treeB}
          position={[-318.904, 1.397, 173.4]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={0.013}
        />
        <mesh
          castShadow
          geometry={(nodes.TreeB187 as Mesh).geometry}
          material={materials.mt_treeB}
          position={[-305.498, 1.621, 146.592]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={0.013}
        />
        <mesh
          castShadow
          geometry={(nodes.TreeB188 as Mesh).geometry}
          material={materials.mt_treeB}
          position={[-309.741, 2.283, 147.933]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={0.014}
        />
        <mesh
          castShadow
          geometry={(nodes.TreeB189 as Mesh).geometry}
          material={materials.mt_treeB}
          position={[-314.83, 2.808, 151.799]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={0.014}
        />
        <mesh
          castShadow
          geometry={(nodes.TreeB190 as Mesh).geometry}
          material={materials.mt_treeB}
          position={[-292.184, 1.605, 142.959]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={0.013}
        />
        <mesh
          castShadow
          geometry={(nodes.TreeB191 as Mesh).geometry}
          material={materials.mt_treeB}
          position={[-317.686, 2.497, 144.414]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={0.013}
        />
        <mesh
          castShadow
          geometry={(nodes.TreeB192 as Mesh).geometry}
          material={materials.mt_treeB}
          position={[-320.542, 2.662, 143.656]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={0.014}
        />
        <mesh
          castShadow
          geometry={(nodes.TreeB193 as Mesh).geometry}
          material={materials.mt_treeB}
          position={[-322.372, 2.72, 147.087]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={0.014}
        />
        <mesh
          castShadow
          geometry={(nodes.TreeB194 as Mesh).geometry}
          material={materials.mt_treeB}
          position={[-327.337, 1.885, 140.174]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={0.015}
        />
        <mesh
          castShadow
          geometry={(nodes.TreeB195 as Mesh).geometry}
          material={materials.mt_treeB}
          position={[-326.442, 2.486, 137.731]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={0.014}
        />
        <mesh
          castShadow
          geometry={(nodes.TreeB196 as Mesh).geometry}
          material={materials.mt_treeB}
          position={[-273.755, 1.395, 118.913]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={0.008}
        />
        <mesh
          castShadow
          geometry={(nodes.TreeB197 as Mesh).geometry}
          material={materials.mt_treeB}
          position={[-294.783, 1.947, 172.006]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={0.014}
        />
        <mesh
          castShadow
          geometry={(nodes.TreeB198 as Mesh).geometry}
          material={materials.mt_treeB}
          position={[-270.675, 1.45, 119.347]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={0.008}
        />
        <mesh
          castShadow
          geometry={(nodes.TreeB199 as Mesh).geometry}
          material={materials.mt_treeB}
          position={[-271.998, 1.441, 117.986]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={0.008}
        />
        <mesh
          castShadow
          geometry={(nodes.TreeB200 as Mesh).geometry}
          material={materials.mt_treeB}
          position={[-283.221, 1.959, 152.289]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={0.016}
        />
        <mesh
          castShadow
          geometry={(nodes.TreeB201 as Mesh).geometry}
          material={materials.mt_treeB}
          position={[-306.122, 0.381, 179.879]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={0.012}
        />
        <mesh
          castShadow
          geometry={(nodes.TreeB202 as Mesh).geometry}
          material={materials.mt_treeB}
          position={[-305.108, 0.814, 175.111]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={0.013}
        />
        <mesh
          castShadow
          geometry={(nodes.TreeB203 as Mesh).geometry}
          material={materials.mt_treeB}
          position={[-297.507, 2.837, 134.633]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={0.011}
        />
        <mesh
          castShadow
          geometry={(nodes.TreeB204 as Mesh).geometry}
          material={materials.mt_treeB}
          position={[-264.856, 2.141, 133.376]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={0.013}
        />
        <mesh
          castShadow
          geometry={(nodes.TreeB205 as Mesh).geometry}
          material={materials.mt_treeB}
          position={[-272.506, 2.362, 141.311]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={0.014}
        />
        <mesh
          castShadow
          geometry={(nodes.TreeC as Mesh).geometry}
          material={materials.mt_WS2_common_tree3}
          position={[56.141, 6.364, 94.635]}
          rotation={[Math.PI / 2, 0, Math.PI]}
          scale={0.035}
        />
        <mesh
          castShadow
          geometry={(nodes.TreeC001 as Mesh).geometry}
          material={materials.mt_WS2_common_tree3}
          position={[62.99, 7.053, 93.285]}
          rotation={[Math.PI / 2, 0, Math.PI / 9]}
          scale={0.035}
        />
        <mesh
          castShadow
          geometry={(nodes.TreeC002 as Mesh).geometry}
          material={materials.mt_WS2_common_tree3}
          position={[69.83, 8.097, 89.945]}
          rotation={[Math.PI / 2, 0, 1.92]}
          scale={0.035}
        />
        <mesh
          castShadow
          geometry={(nodes.TreeC003 as Mesh).geometry}
          material={materials.mt_WS2_common_tree3}
          position={[75.19, 7.611, 87.002]}
          rotation={[Math.PI / 2, 0, 2.793]}
          scale={0.035}
        />
        <mesh
          castShadow
          geometry={(nodes.TreeC004 as Mesh).geometry}
          material={materials.mt_WS2_common_tree3}
          position={[79.151, 7.065, 82.483]}
          rotation={[Math.PI / 2, 0, -1.222]}
          scale={0.035}
        />
        <mesh
          castShadow
          geometry={(nodes.TreeC005 as Mesh).geometry}
          material={materials.mt_WS2_common_tree3}
          position={[61.106, 7.587, 79.104]}
          rotation={[Math.PI / 2, 0, -2.967]}
          scale={0.038}
        />
        <mesh
          castShadow
          geometry={(nodes.TreeC006 as Mesh).geometry}
          material={materials.mt_WS2_common_tree3}
          position={[70.004, 6.229, 74.28]}
          rotation={[Math.PI / 2, 0, -2.443]}
          scale={0.035}
        />
        <mesh
          castShadow
          geometry={(nodes.TreeC007 as Mesh).geometry}
          material={materials.mt_WS2_common_tree3}
          position={[70.619, 6.03, 68.697]}
          rotation={[Math.PI / 2, 0, 0.698]}
          scale={0.038}
        />
        <mesh
          castShadow
          geometry={(nodes.TreeC008 as Mesh).geometry}
          material={materials.mt_WS2_common_tree3}
          position={[-107.546, 5.324, -66.536]}
          rotation={[Math.PI / 2, 0, -0.873]}
          scale={0.035}
        />
        <mesh
          castShadow
          geometry={(nodes.TreeC009 as Mesh).geometry}
          material={materials.mt_WS2_common_tree3}
          position={[-105.197, 5.39, -68.824]}
          rotation={[Math.PI / 2, 0, -Math.PI / 3]}
          scale={0.033}
        />
        <mesh
          castShadow
          geometry={(nodes.TreeC010 as Mesh).geometry}
          material={materials.mt_WS2_common_tree3}
          position={[-108.186, 5.706, -73.581]}
          rotation={[Math.PI / 2, 0, 2.269]}
          scale={0.035}
        />
        <mesh
          castShadow
          geometry={(nodes.TreeC011 as Mesh).geometry}
          material={materials.mt_WS2_common_tree3}
          position={[-105.126, 4.483, -81.552]}
          rotation={[Math.PI / 2, 0, -Math.PI / 3]}
          scale={0.038}
        />
        <mesh
          castShadow
          geometry={(nodes.TreeC012 as Mesh).geometry}
          material={materials.mt_WS2_common_tree3}
          position={[-99.718, 3.868, -83.687]}
          rotation={[Math.PI / 2, 0, 2.269]}
          scale={0.035}
        />
        <mesh
          castShadow
          geometry={(nodes.TreeC013 as Mesh).geometry}
          material={materials.mt_WS2_common_tree3}
          position={[-100.221, 3.903, -90.82]}
          rotation={[Math.PI / 2, 0, Math.PI]}
          scale={0.035}
        />
        <mesh
          castShadow
          geometry={(nodes.TreeC014 as Mesh).geometry}
          material={materials.mt_WS2_common_tree3}
          position={[-104.059, 3.868, -87.743]}
          rotation={[Math.PI / 2, 0, -2.618]}
          scale={0.035}
        />
        <mesh
          castShadow
          geometry={(nodes.TreeC015 as Mesh).geometry}
          material={materials.mt_WS2_common_tree3}
          position={[-97.084, 3.811, -91.8]}
          rotation={[Math.PI / 2, 0, -0.698]}
          scale={0.033}
        />
        <mesh
          castShadow
          geometry={(nodes.TreeC016 as Mesh).geometry}
          material={materials.mt_WS2_common_tree3}
          position={[-69.695, 3.534, -106.873]}
          rotation={[Math.PI / 2, 0, -2.443]}
          scale={0.038}
        />
        <mesh
          castShadow
          geometry={(nodes.TreeC017 as Mesh).geometry}
          material={materials.mt_WS2_common_tree3}
          position={[-67.58, 3.811, -108.924]}
          rotation={[Math.PI / 2, 0, -Math.PI / 3]}
          scale={0.03}
        />
        <mesh
          castShadow
          geometry={(nodes.TreeC018 as Mesh).geometry}
          material={materials.mt_WS2_common_tree3}
          position={[-62.519, 3.947, -105.536]}
          rotation={[Math.PI / 2, 0, 2.618]}
          scale={0.03}
        />
        <mesh
          castShadow
          geometry={(nodes.TreeC019 as Mesh).geometry}
          material={materials.mt_WS2_common_tree3}
          position={[-55.979, 3.811, -110.141]}
          rotation={[Math.PI / 2, 0, -Math.PI / 3]}
          scale={0.035}
        />
        <mesh
          castShadow
          geometry={(nodes.TreeC020 as Mesh).geometry}
          material={materials.mt_WS2_common_tree3}
          position={[51.904, 5.406, 98.962]}
          rotation={[Math.PI / 2, 0, Math.PI]}
          scale={0.038}
        />
        <mesh
          castShadow
          geometry={(nodes.TreeC021 as Mesh).geometry}
          material={materials.mt_WS2_common_tree3}
          position={[59.261, 6.422, 88.387]}
          rotation={[Math.PI / 2, 0, -Math.PI / 2]}
          scale={0.035}
        />
        <mesh
          castShadow
          geometry={(nodes.TreeC022 as Mesh).geometry}
          material={materials.mt_WS2_common_tree3}
          position={[-40.738, 3.737, 126.949]}
          rotation={[Math.PI / 2, 0, -1.222]}
          scale={0.033}
        />
        <mesh
          castShadow
          geometry={(nodes.TreeC023 as Mesh).geometry}
          material={materials.mt_WS2_common_tree3}
          position={[-43.643, 4.209, 127.964]}
          rotation={[Math.PI / 2, 0, -2.618]}
          scale={0.038}
        />
        <mesh
          castShadow
          geometry={(nodes.TreeC024 as Mesh).geometry}
          material={materials.mt_WS2_common_tree3}
          position={[-46.06, 4.16, 121.993]}
          rotation={[Math.PI / 2, 0, 2.094]}
          scale={0.038}
        />
        <mesh
          castShadow
          geometry={(nodes.TreeC025 as Mesh).geometry}
          material={materials.mt_WS2_common_tree3}
          position={[-54.156, 2.918, 124.41]}
          rotation={[Math.PI / 2, 0, -Math.PI / 3]}
          scale={0.033}
        />
        <mesh
          castShadow
          geometry={(nodes.TreeC026 as Mesh).geometry}
          material={materials.mt_WS2_common_tree3}
          position={[-57.267, 1.719, 120.221]}
          rotation={[Math.PI / 2, 0, -Math.PI / 3]}
          scale={0.035}
        />
        <mesh
          castShadow
          geometry={(nodes.TreeC027 as Mesh).geometry}
          material={materials.mt_WS2_common_tree3}
          position={[-58.732, 4.27, -108.543]}
          rotation={[Math.PI / 2, 0, 0.873]}
          scale={0.038}
        />
        <mesh
          castShadow
          geometry={(nodes.TreeC028 as Mesh).geometry}
          material={materials.mt_WS2_common_tree3}
          position={[89.178, 2.38, 51.402]}
          rotation={[Math.PI / 2, 0, 0.175]}
          scale={0.055}
        />
        <mesh
          castShadow
          geometry={(nodes.TreeC029 as Mesh).geometry}
          material={materials.mt_WS2_common_tree3}
          position={[89.137, 2.041, 43.593]}
          rotation={[Math.PI / 2, 0, 2.094]}
          scale={0.033}
        />
        <mesh
          castShadow
          geometry={(nodes.TreeC030 as Mesh).geometry}
          material={materials.mt_WS2_common_tree3}
          position={[92.498, 2.539, 53.422]}
          rotation={[Math.PI / 2, 0, 1.222]}
          scale={0.035}
        />
        <mesh
          castShadow
          geometry={(nodes.TreeC031 as Mesh).geometry}
          material={materials.mt_WS2_common_tree3}
          position={[-19.514, 0.695, 33.754]}
          rotation={[Math.PI / 2, 0, 1.745]}
          scale={0.03}
        />
        <mesh
          castShadow
          geometry={(nodes.TreeC032 as Mesh).geometry}
          material={materials.mt_WS2_common_tree3}
          position={[-21.056, 0.692, 33.769]}
          rotation={[Math.PI / 2, 0, 1.222]}
          scale={0.025}
        />
        <mesh
          castShadow
          geometry={(nodes.TreeC033 as Mesh).geometry}
          material={materials.mt_WS2_common_tree3}
          position={[-22.618, 0.692, 33.755]}
          rotation={[Math.PI / 2, 0, -Math.PI / 2]}
          scale={0.03}
        />
        <mesh
          castShadow
          geometry={(nodes.TreeC034 as Mesh).geometry}
          material={materials.mt_WS2_common_tree3}
          position={[-14.079, 0.695, 29.161]}
          rotation={[Math.PI / 2, 0, -0.873]}
          scale={0.028}
        />
        <mesh
          castShadow
          geometry={(nodes.TreeC035 as Mesh).geometry}
          material={materials.mt_WS2_common_tree3}
          position={[-38.265, 0.824, 22.897]}
          rotation={[Math.PI / 2, 0, -0.175]}
          scale={0.03}
        />
        <mesh
          castShadow
          geometry={(nodes.TreeC036 as Mesh).geometry}
          material={materials.mt_WS2_common_tree3}
          position={[-42.758, 2.28, 11.912]}
          rotation={[Math.PI / 2, 0, 1.92]}
          scale={0.035}
        />
        <mesh
          castShadow
          geometry={(nodes.TreeC037 as Mesh).geometry}
          material={materials.mt_WS2_common_tree3}
          position={[-36.931, 1.107, 16.425]}
          rotation={[Math.PI / 2, 0, 1.745]}
          scale={0.03}
        />
        <mesh
          castShadow
          geometry={(nodes.TreeC038 as Mesh).geometry}
          material={materials.mt_WS2_common_tree3}
          position={[-7.436, 0.751, 21.887]}
          rotation={[Math.PI / 2, 0, 2.269]}
          scale={0.035}
        />
        <mesh
          castShadow
          geometry={(nodes.TreeC039 as Mesh).geometry}
          material={materials.mt_WS2_common_tree3}
          position={[-2.481, 1.073, 21.887]}
          rotation={[Math.PI / 2, 0, Math.PI / 9]}
          scale={0.04}
        />
        <mesh
          castShadow
          geometry={(nodes.TreeC040 as Mesh).geometry}
          material={materials.mt_WS2_common_tree3}
          position={[-0.77, 1.238, 20.991]}
          rotation={[Math.PI / 2, 0, 2.269]}
          scale={0.028}
        />
        <mesh
          castShadow
          geometry={(nodes.TreeC041 as Mesh).geometry}
          material={materials.mt_WS2_common_tree3}
          position={[23.11, 0.701, 18.863]}
          rotation={[Math.PI / 2, 0, -1.222]}
          scale={0.03}
        />
        <mesh
          castShadow
          geometry={(nodes.TreeC042 as Mesh).geometry}
          material={materials.mt_WS2_common_tree3}
          position={[27.881, 1.446, 18.375]}
          rotation={[Math.PI / 2, 0, -2.793]}
          scale={0.035}
        />
        <mesh
          castShadow
          geometry={(nodes.TreeC043 as Mesh).geometry}
          material={materials.mt_WS2_common_tree3}
          position={[20.001, 0.769, 19.784]}
          rotation={[Math.PI / 2, 0, 0.175]}
          scale={0.04}
        />
        <mesh
          castShadow
          geometry={(nodes.TreeC044 as Mesh).geometry}
          material={materials.mt_WS2_common_tree3}
          position={[33.245, 1.301, 11.752]}
          rotation={[Math.PI / 2, 0, 0.175]}
          scale={0.04}
        />
        <mesh
          castShadow
          geometry={(nodes.TreeC045 as Mesh).geometry}
          material={materials.mt_WS2_common_tree3}
          position={[38.711, 1.057, 4.173]}
          rotation={[Math.PI / 2, 0, -0.698]}
          scale={0.04}
        />
        <mesh
          castShadow
          geometry={(nodes.TreeC046 as Mesh).geometry}
          material={materials.mt_WS2_common_tree3}
          position={[43.265, 1.318, 3.623]}
          rotation={[Math.PI / 2, 0, -Math.PI / 6]}
          scale={0.04}
        />
        <mesh
          castShadow
          geometry={(nodes.TreeC047 as Mesh).geometry}
          material={materials.mt_WS2_common_tree3}
          position={[-7.436, 0.751, 14.393]}
          rotation={[Math.PI / 2, 0, Math.PI / 9]}
          scale={0.03}
        />
        <mesh
          castShadow
          geometry={(nodes.TreeC048 as Mesh).geometry}
          material={materials.mt_WS2_common_tree3}
          position={[15.691, 1.246, 13.862]}
          rotation={[Math.PI / 2, 0, Math.PI / 9]}
          scale={0.028}
        />
        <mesh
          castShadow
          geometry={(nodes.TreeC049 as Mesh).geometry}
          material={materials.mt_WS2_common_tree3}
          position={[22.667, 1.076, 14.002]}
          rotation={[Math.PI / 2, 0, 0.698]}
          scale={0.035}
        />
        <mesh
          castShadow
          geometry={(nodes.TreeC050 as Mesh).geometry}
          material={materials.mt_WS2_common_tree3}
          position={[28.71, 0.798, 10.183]}
          rotation={[Math.PI / 2, 0, 0.873]}
          scale={0.035}
        />
        <mesh
          castShadow
          geometry={(nodes.TreeC051 as Mesh).geometry}
          material={materials.mt_WS2_common_tree3}
          position={[47.228, 1.474, -0.196]}
          rotation={[Math.PI / 2, 0, 1.222]}
          scale={0.035}
        />
        <mesh
          castShadow
          geometry={(nodes.TreeC052 as Mesh).geometry}
          material={materials.mt_WS2_common_tree3}
          position={[49.878, 2.18, -25.918]}
          rotation={[Math.PI / 2, 0, -Math.PI / 6]}
          scale={0.035}
        />
        <mesh
          castShadow
          geometry={(nodes.TreeC053 as Mesh).geometry}
          material={materials.mt_WS2_common_tree3}
          position={[51.988, 2.068, -24.455]}
          rotation={[Math.PI / 2, 0, 2.269]}
          scale={0.035}
        />
        <mesh
          castShadow
          geometry={(nodes.TreeC054 as Mesh).geometry}
          material={materials.mt_WS2_common_tree3}
          position={[-2.497, 0.767, 15.283]}
          rotation={[Math.PI / 2, 0, -2.967]}
          scale={0.03}
        />
        <mesh
          castShadow
          geometry={(nodes.TreeC055 as Mesh).geometry}
          material={materials.mt_WS2_common_tree3}
          position={[35.715, 1.496, 8.692]}
          rotation={[Math.PI / 2, 0, 1.396]}
          scale={0.04}
        />
        <mesh
          castShadow
          geometry={(nodes.TreeC056 as Mesh).geometry}
          material={materials.mt_WS2_common_tree3}
          position={[33.643, 1.16, 1.83]}
          rotation={[Math.PI / 2, 0, -2.967]}
          scale={0.04}
        />
        <mesh
          castShadow
          geometry={(nodes.TreeC057 as Mesh).geometry}
          material={materials.mt_WS2_common_tree3}
          position={[30.844, 1.16, 16.369]}
          rotation={[Math.PI / 2, 0, Math.PI / 9]}
          scale={0.035}
        />
        <mesh
          castShadow
          geometry={(nodes.TreeC058 as Mesh).geometry}
          material={materials.mt_WS2_common_tree3}
          position={[91.282, 2.394, 48.557]}
          rotation={[Math.PI / 2, 0, 2.269]}
          scale={0.05}
        />
        <mesh
          castShadow
          geometry={(nodes.TreeC059 as Mesh).geometry}
          material={materials.mt_WS2_common_tree3}
          position={[88.018, 1.869, 45.742]}
          rotation={[Math.PI / 2, 0, -Math.PI / 6]}
          scale={0.03}
        />
        <mesh
          castShadow
          geometry={(nodes.TreeC060 as Mesh).geometry}
          material={materials.mt_WS2_common_tree3}
          position={[-23.313, 0.692, 32.724]}
          rotation={[Math.PI / 2, 0, Math.PI / 3]}
          scale={0.025}
        />
        <mesh
          castShadow
          geometry={(nodes.TreeC061 as Mesh).geometry}
          material={materials.mt_WS2_common_tree3}
          position={[-18.708, 0.692, 32.724]}
          rotation={[Math.PI / 2, 0, 0.175]}
          scale={0.025}
        />
        <mesh
          castShadow
          geometry={(nodes.TreeC062 as Mesh).geometry}
          material={materials.mt_WS2_common_tree3}
          position={[-23.311, 0.692, 31.392]}
          rotation={[Math.PI / 2, 0, -0.175]}
          scale={0.03}
        />
        <mesh
          castShadow
          geometry={(nodes.TreeC063 as Mesh).geometry}
          material={materials.mt_WS2_common_tree3}
          position={[-18.689, 0.692, 31.392]}
          rotation={[Math.PI / 2, 0, -Math.PI / 2]}
          scale={0.03}
        />
        <mesh
          castShadow
          geometry={(nodes.TreeC064 as Mesh).geometry}
          material={materials.mt_WS2_common_tree3}
          position={[51.645, 1.813, -8.279]}
          rotation={[Math.PI / 2, 0, -1.745]}
          scale={0.03}
        />
        <mesh
          castShadow
          geometry={(nodes.TreeC065 as Mesh).geometry}
          material={materials.mt_WS2_common_tree3}
          position={[48.274, 1.813, -15.078]}
          rotation={[Math.PI / 2, 0, -2.618]}
          scale={0.035}
        />
        <mesh
          castShadow
          geometry={(nodes.TreeC066 as Mesh).geometry}
          material={materials.mt_WS2_common_tree3}
          position={[52.3, 1.814, -15.239]}
          rotation={[Math.PI / 2, 0, -1.396]}
          scale={0.03}
        />
        <mesh
          castShadow
          geometry={(nodes.TreeC067 as Mesh).geometry}
          material={materials.mt_WS2_common_tree3}
          position={[48.389, 1.796, -5.173]}
          rotation={[Math.PI / 2, 0, 2.618]}
          scale={0.03}
        />
        <mesh
          castShadow
          geometry={(nodes.TreeC068 as Mesh).geometry}
          material={materials.mt_WS2_common_tree3}
          position={[52.264, 1.813, -17.519]}
          rotation={[Math.PI / 2, 0, -Math.PI / 6]}
          scale={0.035}
        />
        <mesh
          castShadow
          geometry={(nodes.TreeC069 as Mesh).geometry}
          material={materials.mt_WS2_common_tree3}
          position={[46.571, 1.813, -12.86]}
          rotation={[Math.PI / 2, 0, -Math.PI / 9]}
          scale={0.035}
        />
        <mesh
          castShadow
          geometry={(nodes.TreeC070 as Mesh).geometry}
          material={materials.mt_WS2_common_tree3}
          position={[52.244, 1.815, -19.591]}
          rotation={[Math.PI / 2, 0, 0.698]}
          scale={0.03}
        />
        <mesh
          castShadow
          geometry={(nodes.TreeC071 as Mesh).geometry}
          material={materials.mt_WS2_common_tree3}
          position={[46.536, 1.813, -14.372]}
          rotation={[Math.PI / 2, 0, -1.396]}
          scale={0.03}
        />
        <mesh
          castShadow
          geometry={(nodes.TreeC072 as Mesh).geometry}
          material={materials.mt_WS2_common_tree3}
          position={[52.631, 1.811, -9.112]}
          rotation={[Math.PI / 2, 0, -1.222]}
          scale={0.035}
        />
        <mesh
          castShadow
          geometry={(nodes.TreeC073 as Mesh).geometry}
          material={materials.mt_WS2_common_tree3}
          position={[48.206, 1.809, -13.034]}
          rotation={[Math.PI / 2, 0, -Math.PI / 9]}
          scale={0.03}
        />
        <mesh
          castShadow
          geometry={(nodes.TreeC074 as Mesh).geometry}
          material={materials.mt_WS2_common_tree3}
          position={[51.701, 1.439, -4.983]}
          rotation={[Math.PI / 2, 0, 1.222]}
          scale={0.03}
        />
        <mesh
          castShadow
          geometry={(nodes.TreeC075 as Mesh).geometry}
          material={materials.mt_WS2_common_tree3}
          position={[44.842, 1.912, -9.39]}
          rotation={[Math.PI / 2, 0, 1.745]}
          scale={0.035}
        />
        <mesh
          castShadow
          geometry={(nodes.TreeC076 as Mesh).geometry}
          material={materials.mt_WS2_common_tree3}
          position={[44.945, 3.197, -23.223]}
          rotation={[Math.PI / 2, 0, -Math.PI / 6]}
          scale={0.028}
        />
        <mesh
          castShadow
          geometry={(nodes.TreeC077 as Mesh).geometry}
          material={materials.mt_WS2_common_tree3}
          position={[-28.526, -0.078, -48.95]}
          rotation={[Math.PI / 2, 0, -Math.PI / 2]}
          scale={0.035}
        />
        <mesh
          castShadow
          geometry={(nodes.TreeC078 as Mesh).geometry}
          material={materials.mt_WS2_common_tree3}
          position={[-30.189, -0.078, -48.012]}
          rotation={[Math.PI / 2, 0, Math.PI / 3]}
          scale={0.03}
        />
        <mesh
          castShadow
          geometry={(nodes.TreeC079 as Mesh).geometry}
          material={materials.mt_WS2_common_tree3}
          position={[-36.455, 0.072, -48.122]}
          rotation={[Math.PI / 2, 0, -2.793]}
          scale={0.035}
        />
        <mesh
          castShadow
          geometry={(nodes.TreeC080 as Mesh).geometry}
          material={materials.mt_WS2_common_tree3}
          position={[-33.36, 0.072, -47.157]}
          rotation={[Math.PI / 2, 0, -2.443]}
          scale={0.035}
        />
        <mesh
          castShadow
          geometry={(nodes.TreeC081 as Mesh).geometry}
          material={materials.mt_WS2_common_tree3}
          position={[-41.336, -0.078, -48.95]}
          rotation={[Math.PI / 2, 0, -1.396]}
          scale={0.035}
        />
        <mesh
          castShadow
          geometry={(nodes.TreeC082 as Mesh).geometry}
          material={materials.mt_WS2_common_tree3}
          position={[-39.868, -0.078, -48.012]}
          rotation={[Math.PI / 2, 0, 0.698]}
          scale={0.03}
        />
        <mesh
          castShadow
          geometry={(nodes.TreeC083 as Mesh).geometry}
          material={materials.mt_WS2_common_tree3}
          position={[37.943, 1.188, 1.173]}
          rotation={[Math.PI / 2, 0, 2.967]}
          scale={0.04}
        />
        <mesh
          castShadow
          geometry={(nodes.TreeC084 as Mesh).geometry}
          material={materials.mt_WS2_common_tree3}
          position={[44.151, 1.53, -4.68]}
          rotation={[Math.PI / 2, 0, 1.92]}
          scale={0.04}
        />
        <mesh
          castShadow
          geometry={(nodes.TreeC085 as Mesh).geometry}
          material={materials.mt_WS2_common_tree3}
          position={[36.944, 1.383, -1.025]}
          rotation={[Math.PI / 2, 0, -Math.PI / 6]}
          scale={0.03}
        />
        <mesh
          castShadow
          geometry={(nodes.TreeC086 as Mesh).geometry}
          material={materials.mt_WS2_common_tree3}
          position={[41.786, 1.768, -5.935]}
          rotation={[Math.PI / 2, 0, -Math.PI / 6]}
          scale={0.035}
        />
        <mesh
          castShadow
          geometry={(nodes.TreeC087 as Mesh).geometry}
          material={materials.mt_WS2_common_tree3}
          position={[33.461, 1.468, -0.391]}
          rotation={[Math.PI / 2, 0, -0.087]}
          scale={0.035}
        />
        <mesh
          castShadow
          geometry={(nodes.TreeC088 as Mesh).geometry}
          material={materials.mt_WS2_common_tree3}
          position={[29.502, 1.466, -0.165]}
          rotation={[Math.PI / 2, 0, -0.175]}
          scale={0.03}
        />
        <mesh
          castShadow
          geometry={(nodes.TreeC089 as Mesh).geometry}
          material={materials.mt_WS2_common_tree3}
          position={[29.792, 1.478, 1.922]}
          rotation={[Math.PI / 2, 0, 2.967]}
          scale={0.035}
        />
        <mesh
          castShadow
          geometry={(nodes.TreeC090 as Mesh).geometry}
          material={materials.mt_WS2_common_tree3}
          position={[-5.85, 0.767, 17.439]}
          rotation={[Math.PI / 2, 0, -Math.PI / 2]}
          scale={0.03}
        />
        <mesh
          castShadow
          geometry={(nodes.TreeC091 as Mesh).geometry}
          material={materials.mt_WS2_common_tree3}
          position={[18.85, 1.381, 9.467]}
          rotation={[Math.PI / 2, 0, -1.222]}
          scale={0.028}
        />
        <mesh
          castShadow
          geometry={(nodes.TreeC092 as Mesh).geometry}
          material={materials.mt_WS2_common_tree3}
          position={[9.648, 1.413, 8.918]}
          rotation={[Math.PI / 2, 0, Math.PI / 9]}
          scale={0.028}
        />
        <mesh
          castShadow
          geometry={(nodes.TreeC093 as Mesh).geometry}
          material={materials.mt_WS2_common_tree3}
          position={[-37.402, 1.814, 10.429]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={0.03}
        />
        <mesh
          castShadow
          geometry={(nodes.TreeC094 as Mesh).geometry}
          material={materials.mt_WS2_common_tree3}
          position={[-52.463, 4.744, 11.765]}
          rotation={[Math.PI / 2, 0, -Math.PI / 6]}
          scale={0.032}
        />
        <mesh
          castShadow
          geometry={(nodes.TreeC095 as Mesh).geometry}
          material={materials.mt_WS2_common_tree3}
          position={[-50.541, 4.763, 11.394]}
          rotation={[Math.PI / 2, 0, Math.PI / 9]}
          scale={0.03}
        />
        <mesh
          castShadow
          geometry={(nodes.TreeC096 as Mesh).geometry}
          material={materials.mt_WS2_common_tree3}
          position={[-42.986, 2.844, 8.763]}
          rotation={[Math.PI / 2, 0, -1.396]}
          scale={0.032}
        />
        <mesh
          castShadow
          geometry={(nodes.TreeC097 as Mesh).geometry}
          material={materials.mt_WS2_common_tree3}
          position={[39.822, 1.383, -2.859]}
          rotation={[Math.PI / 2, 0, -0.698]}
          scale={0.035}
        />
        <mesh
          castShadow
          geometry={(nodes.TreeC098 as Mesh).geometry}
          material={materials.mt_WS2_common_tree3}
          position={[41.553, 1.217, -1.177]}
          rotation={[Math.PI / 2, 0, 2.618]}
          scale={0.035}
        />
        <mesh
          castShadow
          geometry={(nodes.TreeC099 as Mesh).geometry}
          material={materials.mt_WS2_common_tree3}
          position={[30.88, 1.416, 5.989]}
          rotation={[Math.PI / 2, 0, 2.967]}
          scale={0.033}
        />
        <mesh
          castShadow
          geometry={(nodes.TreeC100 as Mesh).geometry}
          material={materials.mt_WS2_common_tree3}
          position={[42.209, 2.1, -9.185]}
          rotation={[Math.PI / 2, 0, -Math.PI / 3]}
          scale={0.033}
        />
        <mesh
          castShadow
          geometry={(nodes.TreeC101 as Mesh).geometry}
          material={materials.mt_WS2_common_tree3}
          position={[-51.152, 3.545, 122.448]}
          rotation={[Math.PI / 2, 0, -Math.PI / 2]}
          scale={0.035}
        />
        <mesh
          castShadow
          geometry={(nodes.TreeC102 as Mesh).geometry}
          material={materials.mt_WS2_common_tree3}
          position={[-54.989, 2.216, 120.53]}
          rotation={[Math.PI / 2, 0, -2.793]}
          scale={0.04}
        />
        <mesh
          castShadow
          geometry={(nodes.TreeC103 as Mesh).geometry}
          material={materials.mt_WS2_common_tree3}
          position={[-47.055, 4.181, 127.169]}
          rotation={[Math.PI / 2, 0, 2.967]}
          scale={0.035}
        />
        <mesh
          castShadow
          geometry={(nodes.TreeC104 as Mesh).geometry}
          material={materials.mt_WS2_common_tree3}
          position={[-252.466, 3.881, 126.155]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={0.038}
        />
        <mesh
          castShadow
          geometry={(nodes.TreeC105 as Mesh).geometry}
          material={materials.mt_WS2_common_tree3}
          position={[-260.215, 2.995, 128.477]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={0.038}
        />
        <mesh
          castShadow
          geometry={(nodes.TreeC106 as Mesh).geometry}
          material={materials.mt_WS2_common_tree3}
          position={[-261.036, 3.069, 123.888]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={0.038}
        />
        <mesh
          castShadow
          geometry={(nodes.TreeC107 as Mesh).geometry}
          material={materials.mt_WS2_common_tree3}
          position={[-260.777, 2.243, 138.369]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={0.038}
        />
        <mesh
          castShadow
          geometry={(nodes.TreeC108 as Mesh).geometry}
          material={materials.mt_WS2_common_tree3}
          position={[-276.982, 1.979, 137.155]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={0.038}
        />
        <mesh
          castShadow
          geometry={(nodes.TreeC109 as Mesh).geometry}
          material={materials.mt_WS2_common_tree3}
          position={[-273.968, 1.967, 136.878]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={0.033}
        />
        <mesh
          castShadow
          geometry={(nodes.TreeC110 as Mesh).geometry}
          material={materials.mt_WS2_common_tree3}
          position={[-258.162, 3.398, 125.153]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={0.038}
        />
        <mesh
          castShadow
          geometry={(nodes.TreeC111 as Mesh).geometry}
          material={materials.mt_WS2_common_tree3}
          position={[-278.889, 1.328, 131.084]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={0.025}
        />
        <mesh
          castShadow
          geometry={(nodes.TreeC112 as Mesh).geometry}
          material={materials.mt_WS2_common_tree3}
          position={[-273.46, 1.19, 122.975]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={0.03}
        />
        <mesh
          castShadow
          geometry={(nodes.TreeC113 as Mesh).geometry}
          material={materials.mt_WS2_common_tree3}
          position={[-275.741, 1.337, 120.601]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={0.027}
        />
        <mesh
          castShadow
          geometry={(nodes.TreeC114 as Mesh).geometry}
          material={materials.mt_WS2_common_tree3}
          position={[-291.089, 3.257, 129.471]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={0.035}
        />
        <mesh
          castShadow
          geometry={(nodes.TreeC115 as Mesh).geometry}
          material={materials.mt_WS2_common_tree3}
          position={[-295.916, 3.208, 131.364]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={0.033}
        />
        <mesh
          castShadow
          geometry={(nodes.TreeC116 as Mesh).geometry}
          material={materials.mt_WS2_common_tree3}
          position={[-296.461, 2.72, 137.243]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={0.038}
        />
        <mesh
          castShadow
          geometry={(nodes.TreeC117 as Mesh).geometry}
          material={materials.mt_WS2_common_tree3}
          position={[-304.34, 1.445, 137.101]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={0.03}
        />
        <mesh
          castShadow
          geometry={(nodes.TreeC118 as Mesh).geometry}
          material={materials.mt_WS2_common_tree3}
          position={[-305.597, 1.305, 135.653]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={0.027}
        />
        <mesh
          castShadow
          geometry={(nodes.TreeC119 as Mesh).geometry}
          material={materials.mt_WS2_common_tree3}
          position={[-317.424, 2.217, 131.201]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={0.03}
        />
        <mesh
          castShadow
          geometry={(nodes.TreeC120 as Mesh).geometry}
          material={materials.mt_WS2_common_tree3}
          position={[-320.156, 2.748, 129.707]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={0.03}
        />
        <mesh
          castShadow
          geometry={(nodes.TreeC121 as Mesh).geometry}
          material={materials.mt_WS2_common_tree3}
          position={[-321.879, 3.374, 126.807]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={0.03}
        />
        <mesh
          castShadow
          geometry={(nodes.TreeC122 as Mesh).geometry}
          material={materials.mt_WS2_common_tree3}
          position={[-333.298, 1.733, 131.877]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={0.03}
        />
        <mesh
          castShadow
          geometry={(nodes.TreeC123 as Mesh).geometry}
          material={materials.mt_WS2_common_tree3}
          position={[-334.808, 1.817, 130.289]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={0.03}
        />
        <mesh
          castShadow
          geometry={(nodes.TreeC124 as Mesh).geometry}
          material={materials.mt_WS2_common_tree3}
          position={[-338.646, 1.053, 135.984]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={0.03}
        />
        <mesh
          castShadow
          geometry={(nodes.TreeC125 as Mesh).geometry}
          material={materials.mt_WS2_common_tree3}
          position={[-337.089, 0.338, 144.157]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={0.033}
        />
        <mesh
          castShadow
          geometry={(nodes.TreeC126 as Mesh).geometry}
          material={materials.mt_WS2_common_tree3}
          position={[-327.772, 0.64, 146.228]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={0.039}
        />
        <mesh
          castShadow
          geometry={(nodes.TreeC127 as Mesh).geometry}
          material={materials.mt_WS2_common_tree3}
          position={[-328.797, 0.477, 149.948]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={0.039}
        />
        <mesh
          castShadow
          geometry={(nodes.TreeC128 as Mesh).geometry}
          material={materials.mt_WS2_common_tree3}
          position={[-332.951, 0.357, 150.602]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={0.03}
        />
        <mesh
          castShadow
          geometry={(nodes.TreeC129 as Mesh).geometry}
          material={materials.mt_WS2_common_tree3}
          position={[-341.192, 1.811, 152.173]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={0.03}
        />
        <mesh
          castShadow
          geometry={(nodes.TreeC130 as Mesh).geometry}
          material={materials.mt_WS2_common_tree3}
          position={[-342.541, 1.86, 151.009]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={0.026}
        />
        <mesh
          castShadow
          geometry={(nodes.TreeC131 as Mesh).geometry}
          material={materials.mt_WS2_common_tree3}
          position={[-298.767, 2.234, 204.599]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={0.033}
        />
        <mesh
          castShadow
          geometry={(nodes.TreeC132 as Mesh).geometry}
          material={materials.mt_WS2_common_tree3}
          position={[-295.253, 2.083, 203.326]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={0.03}
        />
        <mesh
          castShadow
          geometry={(nodes.TreeC133 as Mesh).geometry}
          material={materials.mt_WS2_common_tree3}
          position={[-294.937, 1.751, 200.309]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={0.042}
        />
        <mesh
          castShadow
          geometry={(nodes.TreeC134 as Mesh).geometry}
          material={materials.mt_WS2_common_tree3}
          position={[-294.249, 1.352, 198.713]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={0.037}
        />
        <mesh
          castShadow
          geometry={(nodes.TreeC135 as Mesh).geometry}
          material={materials.mt_WS2_common_tree3}
          position={[-293.456, 1.047, 197.07]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={0.037}
        />
        <mesh
          castShadow
          geometry={(nodes.TreeC136 as Mesh).geometry}
          material={materials.mt_WS2_common_tree3}
          position={[-299.726, 0.97, 191.492]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={0.037}
        />
        <mesh
          castShadow
          geometry={(nodes.TreeC137 as Mesh).geometry}
          material={materials.mt_WS2_common_tree3}
          position={[-301.862, 1.452, 193.285]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={0.037}
        />
        <mesh
          castShadow
          geometry={(nodes.TreeC138 as Mesh).geometry}
          material={materials.mt_WS2_common_tree3}
          position={[-288.753, 1.742, 189.584]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={0.037}
        />
        <mesh
          castShadow
          geometry={(nodes.TreeC139 as Mesh).geometry}
          material={materials.mt_WS2_common_tree3}
          position={[-249.693, 4.481, 121.907]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={0.04}
        />
        <mesh
          castShadow
          geometry={(nodes.TreeC140 as Mesh).geometry}
          material={materials.mt_WS2_common_tree3}
          position={[-252.633, 4.085, 123.674]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={0.038}
        />
      </group>
    </RigidBody>
  );
}

useGLTF.preload("/models/WuhuIslandBlender1.glb");
