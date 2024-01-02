'use client'

import Link from 'next/link'
import { useState, useRef } from 'react';
import Image from 'next/image'
import axios from 'axios';

export default function Generate() {
    const [image, setImage] = useState('')
    const textArea = useRef(null)
    const [text, setText] = useState('')
    const handleGenerate = async () => {
        const data = {
            "key": "q7cbRCzUMQugRNSv5wQvnRAlarI2Jh58tt2PFGEjeEetE3fdwf6eDhnuGKVp",
            "prompt": textArea.current.value,
            "negative_prompt": null,
            "width": "512",
            "height": "512",
            "samples": "1",
            "num_inference_steps": "20",
            "safety_checker": "no",
            "enhance_prompt": "yes",
            "seed": null,
            "guidance_scale": 7.5,
            "multi_lingual": "no",
            "panorama": "no",
            "self_attention": "no",
            "upscale": "no",
            "embeddings_model": null,
            "webhook": null,
            "track_id": null
        }
        try {
            console.log('calling stable diffusion API')
            const response = await axios
                .post('https://stablediffusionapi.com/api/v3/text2img', data)
                .then(res => {
                    console.log('setting image', res)
                    setImage(res.data.output[0])
                })
        } catch (error) {
            console.error(`Error calling Stable Diffusion API: ${error}`);
        }
    };




    return (
        <main className="flex min-h-screen flex-col items-center justify-between p-24">
            <h1 className="text-6xl font-bold">Image Generation Demo</h1>



            <Image src={image} alt="3d" width={500} height={500} />
            <div className="flex flex-col items-center justify-center">

                <label for="message" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Text Prompt</label>
                <textarea ref={textArea} id="message" rows="4" class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Write your thoughts here..."></textarea>

                <button onClick={handleGenerate} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                    Generate
                </button>


                calling stable diffusion API
            </div>
        </main>
    )
}
