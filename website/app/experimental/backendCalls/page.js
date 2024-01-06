'use client'
import { Button } from '@mui/material';

export default function page(params) {
    function handleClick() {
        console.log('hello api')
    }
    return (<>
        <main className="flex min-h-screen flex-col items-center justify-between p-24">
            <h1 className="text-6xl font-bold">backend calls</h1>
            <div className="flex flex-col items-center justify-center space-y-8">
                <Button onClick={handleClick} sx={{
                    bgcolor: 'background.paper',
                    boxShadow: 1,
                    borderRadius: 2,
                    p: 2,
                    minWidth: 200,
                }}>hello api</Button>
            </div>
        </main>

    </>)
};
