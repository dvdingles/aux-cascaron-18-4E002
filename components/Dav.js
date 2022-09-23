// /*
// Auto-generated by: https://github.com/pmndrs/gltfjsx
// */

// import React, { useRef } from "react";
// import { useGLTF } from "@react-three/drei";

// export function Dav(props) {
//   const { nodes, materials } = useGLTF("/3D 4E0003.gltf");
//   return (
//     <group {...props} dispose={null}>
//       <mesh
//         castShadow
//         receiveShadow
//         geometry={nodes.Plano.geometry}
//         material={materials["Material.001"]}
//         position={[0, -0.21, 0.35]}
//         scale={0.29}
//       />
//       <mesh
//         castShadow
//         receiveShadow
//         geometry={nodes.Plano001.geometry}
//         material={materials["Material.001"]}
//         position={[-0.39, -0.21, -0.03]}
//         rotation={[0, -Math.PI / 2, 0]}
//         scale={0.29}
//       />
//       <mesh
//         castShadow
//         receiveShadow
//         geometry={nodes.Plano002.geometry}
//         material={materials["Material.001"]}
//         position={[0.23, 0.02, 0.35]}
//         rotation={[0, 0, Math.PI / 2]}
//         scale={0.29}
//       />
//       <mesh
//         castShadow
//         receiveShadow
//         geometry={nodes.Texto.geometry}
//         material={materials["Material.001"]}
//         position={[-0.05, -0.21, 0.33]}
//         rotation={[Math.PI / 2, 0, 0]}
//         scale={0.06}
//       />
//       <mesh
//         castShadow
//         receiveShadow
//         geometry={nodes.Texto001.geometry}
//         material={materials["Material.001"]}
//         position={[-0.44, -0.21, 0]}
//         rotation={[Math.PI / 2, 0, 0]}
//         scale={0.06}
//       />
//       <mesh
//         castShadow
//         receiveShadow
//         geometry={nodes.Texto002.geometry}
//         material={materials["Material.001"]}
//         position={[0.26, -0.06, 0.28]}
//         rotation={[Math.PI / 2, 0, 0]}
//         scale={0.06}
//       />
//       <group position={[0, 0.04, 0.05]}>
//         <mesh
//           castShadow
//           receiveShadow
//           geometry={nodes["_4E0002_ARD-geom"].geometry}
//           material={materials._4E0002_ARD_front}
//         />
//         <mesh
//           castShadow
//           receiveShadow
//           geometry={nodes["_4E0002_ARD-geom_1"].geometry}
//           material={materials._4E0002_ARD_back}
//         />
//         <mesh
//           castShadow
//           receiveShadow
//           geometry={nodes["_4E0002_ARD-geom_2"].geometry}
//           material={materials._4E0002_ARD_edge}
//         />
//       </group>
//     </group>
//   );
// }

// useGLTF.preload("/3D 4E0003.gltf");


/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";

export function Dav(props) {
  const { nodes, materials } = useGLTF("/3D 4E0004.gltf");
  return (
    <group {...props} dispose={null}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Plano.geometry}
        material={materials["Material.001"]}
        position={[0, -0.21, 0.35]}
        scale={0.29}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Plano001.geometry}
        material={materials["Material.001"]}
        position={[-0.39, -0.21, -0.03]}
        rotation={[0, -Math.PI / 2, 0]}
        scale={0.29}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Plano002.geometry}
        material={materials["Material.001"]}
        position={[0.23, 0.02, 0.35]}
        rotation={[0, 0, Math.PI / 2]}
        scale={0.29}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Texto.geometry}
        material={materials["Material.001"]}
        position={[-0.05, -0.21, 0.33]}
        rotation={[Math.PI / 2, 0, 0]}
        scale={0.06}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Texto001.geometry}
        material={materials["Material.001"]}
        position={[-0.44, -0.21, 0]}
        rotation={[Math.PI / 2, 0, 0]}
        scale={0.06}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Texto002.geometry}
        material={materials["Material.001"]}
        position={[0.26, -0.06, 0.28]}
        rotation={[Math.PI / 2, 0, 0]}
        scale={0.06}
      />
      <group position={[0, 0.04, 0.05]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["_4E0002_ARD-geom"].geometry}
          material={materials._4E0002_ARD_front}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["_4E0002_ARD-geom_1"].geometry}
          material={materials._4E0002_ARD_back}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["_4E0002_ARD-geom_2"].geometry}
          material={materials._4E0002_ARD_edge}
        />
      </group>
    </group>
  );
}

useGLTF.preload("/3D 4E0004.gltf");
