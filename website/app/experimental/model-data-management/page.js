import ModelCard from './modelCard';

export default function Page(params) {
    return (
        <main className="flex min-h-screen flex-col items-center justify-between p-24">
            <h1 className="text-6xl font-bold">Model and Data Management</h1>
            <div className="flex flex-col items-center justify-center space-y-8">
                <ModelCard />
            </div>
        </main>

    )
};
