'use client'
import * as THREE from 'three'
import { useRef, useEffect } from 'react'
import { Canvas, extend, useThree } from '@react-three/fiber'
import { Splat, Float, CameraControls, StatsGl, Effects } from '@react-three/drei'
import { Physics, RigidBody, CuboidCollider, BallCollider } from '@react-three/rapier'
import { TAARenderPass } from 'three/examples/jsm/postprocessing/TAARenderPass'
import { OutputPass } from 'three/examples/jsm/postprocessing/OutputPass'
import { useControls } from 'leva'

extend({ TAARenderPass, OutputPass })


export default function GasSplat(params) {
    return (
        <main className="flex flex-col min-h-screen items-center justify-between py-24">
            <h1 className="text-6xl font-bold">Gaussian Splattering</h1>
            <Canvas>
                <Splat src="https://huggingface.co/cakewalk/splat-data/resolve/main/nike.splat" />
            </Canvas>
            <div className="flex flex-col items-center justify-center space-y-8">
                gsplat to threejs and then
                use extend from r3f to integrate gsplat from threejs
            </div>
        </main>
    )
};
