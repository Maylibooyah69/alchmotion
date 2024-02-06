import Link from 'next/link'


export default function Home() {
    return (
        <main className="flex min-h-screen flex-col items-center justify-between p-24">
            <h1 className="text-6xl font-bold">Integrations</h1>
            <div className="flex flex-col items-center justify-center space-y-8">
                <Link href="/integrations/langchain">
                    langchain
                </Link>


            </div>
        </main>
    )
}
