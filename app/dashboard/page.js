'use client'

import { useUser } from '@auth0/nextjs-auth0/client';
import { useState } from 'react';

export default function Dashboard() {
    const { user, error, isLoading } = useUser();
    const [inputText, setInputText] = useState("");

    async function sendToGPTAndDB() {
        const response = await fetch('/api/gpt',
            {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },

                body: JSON.stringify({ data: inputText })
            })

        const data = await response.json();
        const cards = data.message.choices[0].message.content;

        await fetch('/api/db',
            {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },

                body: JSON.stringify({ user: user.email, set: cards })
            }
        );
    }


    if (isLoading) return <div>loading...</div>;
    if (error) return <div>{error.message}</div>;

    return (
        <div>
            <h2>{user.name}</h2>
            <p>{user.email}</p>
            <textarea onChange={(e) => setInputText(e.target.value)}></textarea>
            <button onClick={sendToGPTAndDB}>enter</button>
        </div>
    );
}
