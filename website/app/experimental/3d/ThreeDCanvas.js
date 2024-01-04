'use client'
import { Canvas } from '@react-three/fiber'
import FirstExperience from './assets/FirstExperience'
import { ACESFilmicToneMapping } from 'three';
import { Leva } from 'leva';

// need loading screen
// TODO: 'need loading screen'
// https://0xca0a.gumroad.com/l/B4N4N4S

const created = ({ gl }) => {
    console.log(gl)
}

export default function ThreeDCanvas(params) {
    return (<>
        <Leva collapsed />
        <Canvas
            shadows
            onCreated={created}
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
            {/* <color args={[0.2, 0.2, 0.2]} attach="background" /> */}
            <FirstExperience />
        </Canvas>
    </>
    )
};
