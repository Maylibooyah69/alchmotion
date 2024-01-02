'use client'

import { Canvas } from '@react-three/fiber'
import FirstExperience from './assets/FirstExperience'
import { ACESFilmicToneMapping } from 'three';
// need loading screen
// todo: 'need loading screen'
// https://0xca0a.gumroad.com/l/B4N4N4S

export default function ThreeDCanvas(params) {
    return (
        <Canvas
            // dpr={[1, 2]} //setting pixel ratio
            gl={{
                antialias: true,
                toneMapping: ACESFilmicToneMapping,
                // outputColorSpace: THREE.SRGBColorSpace
            }}
            // orthographic
            camera={{
                fov: 45,
                near: 0.1,
                far: 200,
                position: [3, 2, 6]
            }}>
            <FirstExperience />
        </Canvas>
    )
};
