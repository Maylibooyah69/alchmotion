import { useFrame } from "@react-three/fiber"
import { useRef } from "react";
import * as THREE from 'three';
import { OrbitControls, useHelper, SoftShadows, Text, Float, MeshReflectorMaterial, AccumulativeShadows, BakeShadows, RandomizedLight } from "@react-three/drei";
import Cube from './Cube'
import { useControls, button } from "leva";
import { Button } from "@mui/material";
import { Perf } from "r3f-perf";

export default function FirstExperience(params) {
    const mesh = useRef();
    const light = useRef()
    useHelper(light, THREE.DirectionalLightHelper, 1)
    useFrame((state, delta) => {
        mesh.current.rotation.y += Math.sin(delta);
        const scaleVal = Math.sin(state.clock.elapsedTime) * 0.5
        mesh.current.scale.set(
            scaleVal,
            scaleVal,
            scaleVal
        );

    });
    const { position, color, visible } = useControls('cube', {
        position: {
            value: [3, 0, 0],
            step: 0.1,
            min: -10,
            max: 10,
        },
        color: {
            value: '#a511f5',
            label: 'Color',
            // render: (get) => <ColorPicker />,
        },
        visible: true,
        clickMe: button((params) => {
            console.log('hello')
        })

    });
    const { sphereScale } = useControls('sphere', {
        sphereScale: {
            value: 0.5,
            step: 0.1,
            min: -0.5,
            max: 10,
        }
    })

    const { perfVis } = useControls('perf', {
        perfVis: false
    })
    return (
        <>
            {perfVis && <Perf openByDefault position='bottom-right' />}
            <OrbitControls makeDefault minPolarAngle={Math.PI / 6} maxPolarAngle={Math.PI / 2} />
            {/* <BakeShadows /> */}
            {/* <SoftShadows size={25} samples={10} focus={0} /> */}
            {/* <AccumulativeShadows position={[0, -0.99, 0]} scale={10}>

                <RandomizedLight amount={8}
                    radius={1}
                    ambient={0.5}
                    intensity={3}
                    temporal
                    frames={1000}
                    position={[1, 2, 3]}
                    bias={0.001} />

            </AccumulativeShadows > */}
            <directionalLight
                shadow-mapSize={[1024, 1024]}
                // shadow-camera-near={1}
                // shadow-camera-far={10}
                // shadow-camera-top={2}
                // shadow-camera-right={2}
                // shadow-camera-bottom={- 2}
                // shadow-camera-left={- 2} 
                ref={light} castShadow position={[1, 2, 3]} intensity={4.5} />
            <ambientLight intensity={1.5} />
            <Cube scale={2} color={color} position={position} visible={visible} castShadow />
            <Float>
                <Text color='black' position={[0, 2, 0]}>R3F
                    <meshNormalMaterial side={THREE.DoubleSide} />

                </Text>
            </Float>
            {/* <PivotControls anchor={mesh.position} depthTest={false}  > */}
            <mesh ref={mesh} scale={sphereScale} receiveShadow castShadow>
                <torusKnotGeometry args={[1, 0.4, 128, 8, 2, 3]} />
                <meshNormalMaterial />
                {/* <Html wrapperClass="label" className=" bg-gradient-to-r from-indigo-500 via-purple-500 hue-rotate-[69deg] to-pink-500 rounded shadow-xl shadow-indigo-500/50 cursor-pointer "
                    occlude={mesh} distanceFactor={6} position={[0, 2.2, 0]}
                >Knot</Html> */}

            </mesh>
            <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, -1, 0]}
                receiveShadow
            >
                <planeGeometry attach="geometry" args={[100, 100]} />
                <MeshReflectorMaterial
                    blur={[1000, 1000]}
                    mixBlur={0.2}
                    // mirror={1}
                    resolution={1024} color="#a0a0a0" />
            </mesh>
            {/* </PivotControls> */}
            {/* <TransformControls object={mesh} /> */}
        </>)
};
