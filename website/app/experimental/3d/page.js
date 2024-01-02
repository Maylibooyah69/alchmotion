import Link from 'next/link'
import ThreeDCanvas from './ThreeDCanvas'

export default function THREEJS() {
    return (<>

        <main className="flex flex-col-reverse min-h-screen items-center justify-between py-24">
            <div className='w-full h-5/6 absolute top-20 z-0'>
                <ThreeDCanvas />
            </div>

            <div className="flex flex-col items-center justify-center space-y-8 z-10">
                <Link href="/experimental/3d/second">
                    Second Scene
                </Link>
                <Link href="/experimental/3d/third">
                    Third Scene
                </Link>
                <Link href="/experimental/3d/fourth">
                    Fourth Scene
                </Link>
            </div>
        </main></>
    )
}
