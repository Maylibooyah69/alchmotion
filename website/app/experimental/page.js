import Link from 'next/link';
export default function ExperimentPage(params) {
    return (<div className="flex flex-col items-center justify-center space-y-8">
        <Link href="/experimental/generate">
            Generate an image
        </Link>
        <Link href="/experimental/3d">
            ThreeJS integration
        </Link>
        <Link href="/experimental/tf">
            Tensorflow integration
        </Link>
        <Link href="/experimental/model-data-management">
            Model and data management
        </Link>
        <Link href="/experimental/gsplat">
            Gaussian Splattering
        </Link>
        <Link href="/experimental/backendCalls">
            Backend Calls
        </Link>
    </div>)
};
