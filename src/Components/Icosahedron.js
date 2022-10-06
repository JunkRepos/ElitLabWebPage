import React from 'react'
import * as THREE from 'three';
export default function Icosahedron() {
    const geo = new THREE.IcosahedronBufferGeometry(3,0);
    // const font = new THREE.FontLoader().load('https://threejs.org/examples/fonts/helvetiker_regular.typeface.json');

  // configure font geometry
  return (
    <mesh rotation={[-2,5,2]}>
        {/* <textGeometry attach='geometry' args={['three.js', textOptions]} /> */}
        <lineSegments>
            <edgesGeometry attach="geometry" args={[geo]} />
            <lineBasicMaterial color="white" attach="material" />
        </lineSegments>

    </mesh>
  )
}
