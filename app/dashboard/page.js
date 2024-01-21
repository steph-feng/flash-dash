'use client'

import { useUser } from '@auth0/nextjs-auth0/client';

export default function Dashboard() {
    const { user, error, isLoading } = useUser();

    async function handleClick() {
        await fetch('/api/db', 
        {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },

            body: JSON.stringify({ data: user.email })
        }
        );
    };


    if (isLoading) return <div>loading...</div>;
    if (error) return <div>{error.message}</div>;
    
    return (
        <div>
            <h2>{user.name}</h2>
            <p>{user.email}</p>
            <button onClick={handleClick}>save</button>
        </div>
    );
}