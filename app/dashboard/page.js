'use client'
import BackgroundImage from './dashboard.png'
import User from './user.js'
import Cards from './cards.js'
import "@fontsource/kumbh-sans"; 
import { useUser } from '@auth0/nextjs-auth0/client';
// import { useState } from 'react';
import Test from './test.js'

export default function Dashboard() {
    const { user, error, isLoading } = useUser();

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

    const containerStyle = {
        backgroundImage: `url(${BackgroundImage.src})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        width: '100%',
        height: '100vh',
      };



    if (isLoading) return <div>loading...</div>;
    if (error) return <div>{error.message}</div>;
    
    return (
        <main className="flex min-h-screen flex-col items-center justify-between p-24" style={containerStyle}>
            <User/>
            <Cards/>
        </main>
      );
}
