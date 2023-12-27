'use client'

import { Canvas } from '@react-three/fiber'


export default function ThreeDCanvas(params) {
    return (<Canvas>
        <mesh>
            <boxGeometry />
            <meshBasicMaterial color="red" />
        </mesh>
    </Canvas>)

};
