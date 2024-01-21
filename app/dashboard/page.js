'use client'

import BackgroundImage from './dashboard.png'
import User from './user.js'
import Cards from './cards.js'
import "@fontsource/kumbh-sans";
import { useUser } from '@auth0/nextjs-auth0/client';
import { useState, useEffect } from 'react';
import { useRouter } from "next/navigation";
import Link from 'next/link';
import Modal from '@mui/material/Modal';

export default function Dashboard() {
    const { user, error, isLoading } = useUser();
    const router = useRouter();

    const [title, setTitle] = useState("");
    const [inputText, setInputText] = useState("");

    const [fetchingFromMongo, setFetchingFromMongo] = useState(true);
    const [dbData, setDbData] = useState([]);

    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    async function getFromMongoDB() {
        const response = await fetch('/api/db', {
            method: 'GET'
        });

        const data = await response.json();
        setDbData(data);
        setFetchingFromMongo(false);
    }

    async function sendToGPTAndDB() {
        handleClose();
        const response = await fetch('/api/gpt', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ data: inputText })
        });

        const data = await response.json();
        const cards = data.message.choices[0].message.content;

        await fetch('/api/db', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ user: user.email, set: { name: title, notes: cards } })
        });
    }

    useEffect(() => {
        getFromMongoDB();
    }, []);


    if (isLoading | fetchingFromMongo) return <div>loading...</div>;
    if (error) return <div>{error.message}</div>;

    localStorage.setItem("cards", JSON.stringify(dbData[0]));

    return (
        <main className="flex min-h-screen flex-col items-center justify-between p-24" style={containerStyle}>
            <User />

            <div className='self-start'>
                <p className='mb-5'>your flashcard decks:</p>
                <div className='bg-[#AFC0B5] p-10 round text-center'>
                    {dbData[0].set.map((item, index) => (

                        <Link
                            href={{
                                pathname: '/flashcards'
                            }}
                        >
                            {item.name}
                        </Link>
                    ))}
                </div>
            </div>



            <button onClick={handleOpen} className='self-end'>create new set</button>

            <Modal
                open={open}
                onClose={handleClose}
                sx={{ position: "absolute", width: "50%", height: "50vh", top: "30vh", left: "25%" }}
            >
                <div className='bg-[#AFC0B5] flex flex-col justify-center items-start p-8 rounded-lg drop-shadow'>
                    <div>new flash card set</div>

                    <div id="title" className='flex flex-row my-5'>
                        <p className='mr-3'>title:</p>
                        <input type='text'
                            style={{ width: "40vmin" }}
                            onChange={(e) => setTitle(e.target.value)} />
                    </div>

                    <div id='upload' className='flex flex-col'>
                        <textarea
                            placeholder='write or paste your notes here'
                            className='p-2' style={{ width: "45.5vw" }}
                            onChange={(e) => setInputText(e.target.value)}></textarea>
                        <button onClick={sendToGPTAndDB} className='bg-white w-1/3 my-4 rounded self-end'>convert to flash cards!</button>
                    </div>
                </div>
            </Modal>

        </main>
    );
}

const containerStyle = {
    backgroundImage: `url(${BackgroundImage.src})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    width: '100%',
    height: '100vh',
};
