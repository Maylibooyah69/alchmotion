'use client';

import React from 'react';
import dynamic from 'next/dynamic';
import { Stage, Layer, Rect } from 'react-konva';


function App() {
    return (
        <Stage width={window.innerWidth} height={window.innerHeight}>
            <Layer>
                <Rect
                    x={20}
                    y={20}
                    width={100}
                    height={100}
                    fill="red"
                    draggable
                />
            </Layer>
        </Stage>
    );
}

export default App;


