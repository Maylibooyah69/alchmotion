import Link from 'next/link'


export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1 className="text-6xl font-bold">Alchmotion</h1>
      <div className="flex flex-col items-center justify-center space-y-8">
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
      </div>
    </main>
  )
}
