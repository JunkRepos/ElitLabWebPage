import React from 'react'
import { useEffect } from 'react'
// import {Canvas} from "@react-three/fiber"
// import Box from '../Components/Box'
// import ObjectControls from '@react-three/drei'
import SceneInit from './ScreenInit'
import * as THREE from 'three';
// import { FontLoader } from 'three/examples/jsm/loaders/FontLoader'
// import { TextGeometry } from 'three/examples/jsm/geometries/TextGeometry'
// import { fonts } from 'three/examples/fonts/helvetiker_regular.typeface.json'
// import Icosahedron from './Icosahedron';
export default function Header() {
    // const size = 35;
    // const icos = new THREE.IcosahedronGeometry(size);
    // const icosGeo = new THREE.EdgesGeometry(icos);
    // const material = new THREE.LineBasicMaterial({color: 0xFFFFFF});
    // const shape = new THREE.LineSegments(icosGeo, material);
    // useEffect(() => {
    //     const screen = new SceneInit("icos", 0.5, 1);
    //     screen.initialize();
    //     screen.animate();
    //     screen.controls.enableZoom = false;
    //     // screen.scene.add(shape);
    //     screen.renderer.setClearColor( 0x000000, 0 );
    //     screen.camera.position.setZ(100);
    //     window.addEventListener('resize', (event) => {
    //     });
    // }, [])
   
  return (
    <div class="headerBody">
        {/* <canvas class="absolute right-0 top-0" id="icos">
        </canvas>  */}
        <div class="flex flex-col items-center mt-[10vw]">
        <span class='headerText'>Learn to Code</span>
        <span class='headerSubText'>For Free!</span>
        <span class="headerSubText2 w-[45vw] text-center text-[#b5b5b5] mt-[3vh]">Elitlabs provides a 
        <b class="bg-gradient-to-r from-[#c21717] to-[#ee7213] bg-clip-text text-transparent"> interactive </b> 
         and
        <b class="bg-gradient-to-r from-[#c217c2] to-[#ee1334] bg-clip-text text-transparent"> enjoyable</b> way to increase your programming skills.</span>
        </div>
    </div>
  )
}

