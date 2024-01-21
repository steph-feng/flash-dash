'use client'

import { useUser } from '@auth0/nextjs-auth0/client';
import { useState } from 'react';

export default function Dashboard() {
    const { user, error, isLoading } = useUser();
    const [inputText, setInputText] = useState("");

    async function saveToDB() {
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

    async function sendToGPT() {
        const response = await fetch('/api/gpt', 
        {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },

            body: JSON.stringify({ data: inputText })
        })

        const data = await response.json();

        console.log(data.message.choices[0].message.content);
    }


    if (isLoading) return <div>loading...</div>;
    if (error) return <div>{error.message}</div>;
    
    return (
        <div>
            <h2>{user.name}</h2>
            <p>{user.email}</p>
            <button onClick={saveToDB}>save</button>
            <textarea onChange={(e) => setInputText(e.target.value)}></textarea>
            <button onClick={sendToGPT}>enter</button>
        </div>
    );
}