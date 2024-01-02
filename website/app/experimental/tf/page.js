import Link from 'next/link'
import * as tf from '@tensorflow/tfjs'

export default function TFJS() {
    return (
        <main className="flex min-h-screen flex-col items-center justify-between p-24">
            <h1 className="text-6xl font-bold">TFjs Integration {tf.version.tfjs}</h1>
            <div className="flex flex-col items-center justify-center space-y-8">

            </div>
        </main>
    )
}
