import Link from 'next/link'


export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1 className="text-6xl font-bold">Alchmotion</h1>
      <div className="flex flex-col items-center justify-center space-y-8">
        <Link href="/experimental">
          Experimental Features
        </Link>
        <Link href="/blog">
          Blog
        </Link>
        <Link href="/integrations">
          Integrations
        </Link>
        <Link href="/demo">
          Demo
        </Link>
      </div>
    </main>
  )
}
