import { useFrame } from "@react-three/fiber"
import { useRef } from "react";
import * as THREE from 'three';
import { OrbitControls, TransformControls, PivotControls, Html } from "@react-three/drei";

export default function FirstExperience(params) {
    const mesh = useRef();
    useFrame((state, delta) => {
        mesh.current.rotation.y += Math.sin(delta);

    });
    return (
        <>
            <OrbitControls makeDefault />
            <directionalLight position={[1, 2, 3]} intensity={4.5} />
            <ambientLight intensity={1.5} />

            {/* <PivotControls anchor={mesh.position} depthTest={false}  > */}
            <mesh ref={mesh} scale={.5}>
                <torusKnotGeometry args={[1, 0.4, 128, 8, 2, 3]} />
                <meshStandardMaterial />
                <Html wrapperClass="label" className=" bg-gradient-to-r from-indigo-500 via-purple-500 hue-rotate-[69deg] to-pink-500 rounded shadow-xl shadow-indigo-500/50 cursor-pointer "
                    occlude={mesh} distanceFactor={6} position={[0, 2.2, 0]}
                >Knot</Html>

            </mesh>

            {/* </PivotControls> */}
            {/* <TransformControls object={mesh} /> */}
        </>
    )
};
