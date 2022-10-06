import React from 'react'
import * as THREE from 'three';
import { useMemo } from 'react';
// import SceneInit from './ScreenInit';
// import {OrbitControls} from '@react-three/drei';
export default function Box() {
    const [innerWidth, innerHeight] = [window.innerWidth, window.innerHeight];
    const geo = useMemo(() => new THREE.IcosahedronBufferGeometry(3, 0), [])
    let scene = new THREE.Scene();
    let camera = new THREE.PerspectiveCamera(60, innerWidth / innerHeight, 1, 100);
    camera.position.set(0, 10, 10);
    let renderer = new THREE.WebGLRenderer();
    renderer.setClearColor(0xFFFFFF);
    renderer.setSize(innerWidth, innerHeight);
    document.body.appendChild(renderer.domElement);
    // let controls = new OrbitControls(camera, renderer.domElement);

    let g = new THREE.IcosahedronGeometry(5);
    let colors = [];
    let c = new THREE.Vector3();
    let uv = [];
    for(let i = 0; i < 20;i++){
        c.random().multiplyScalar(0.5).addScalar(0.5);
        colors.push(c.x, c.y, c.z,c.x, c.y, c.z,c.x, c.y, c.z,);
    uv.push(
        (0.067 + i) / 20, 0.25, 
        (0.933 + i) / 20, 0.25, 
        (0.5 + i) / 20, 1
    );
    }
    g.setAttribute("color", new THREE.Float32BufferAttribute(colors, 3));
    g.setAttribute("uv", new THREE.Float32BufferAttribute(uv, 2));
    let m = new THREE.MeshPhysicalMaterial({  
    roughness: 0,  
    transmission: 1, 
    map: makeNumbers()// Add transparency
    });
    let o = new THREE.Mesh(g, m);
    scene.add(o);


    // renderer.setAnimationLoop( _ => {
    //     renderer.render(scene, camera);
    // })

    function makeNumbers(){
        let c = document.getElementById('number');
        let ctx = c.getContext("2d");
        ctx.fillStyle = "rgba(255,255,255,1)";
        ctx.fillRect(0, 0, c.width, c.height);
        ctx.textAlign = "center";
        ctx.textBaseline = "middle";
        ctx.fillStyle = "rgb(255,0,0)";
        ctx.font = 'bold 20px Arial';
        let step = 1024 / 20;
        let start = step * 0.5;
        
        for (let i = 0; i < 20; i++){
            ctx.fillText(i + 1, start + step * i, 32);
        }
        return new THREE.CanvasTexture(c);
    }
    return (

        <mesh rotation={[90,0,20]}>
        <meshPhysicalMaterial roughness={0} transmission={0} map={makeNumbers()}/>
        <lineSegments>
          <edgesGeometry attach="geometry" args={[geo]} />
          <lineBasicMaterial color="white" attach="material" />
        </lineSegments>
        </mesh>
      )
}
