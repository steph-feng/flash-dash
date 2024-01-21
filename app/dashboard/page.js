'use client'
import { useUser } from '@auth0/nextjs-auth0/client';
import { useEffect, useState } from 'react';
import Modal from '@mui/material/Modal';

export default function Dashboard() {
  const { user, error, isLoading } = useUser();
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
      body: JSON.stringify({ user: user.email, set: {name: title, notes: cards }})
    });
  }

  useEffect(() => {
       getFromMongoDB();
  }, []);

  if (isLoading || fetchingFromMongo) return <div className='h-dvh'>Loading...</div>;
  if (error) return <div>{error.message}</div>;

  return (
    <div className='h-dvh flex flex-col justify-center items-center'>
        <div id="profileInfo" className="">
            <p>welcome {user.name.split(" ")[0].toLowerCase()}</p>
        </div>

        <div id="scrollingFlashCardSets" className='flex flex-row' > 
        {
        dbData.map((item, index) => {

            let parsed = JSON.parse(item.set);
            parsed.map((q, i) => {
                <p>{q.name}</p>
            })
        }
        )
        }
        </div>

      <button onClick={handleOpen}>create new set</button>

      <Modal
        open={open}
        onClose={handleClose}
        sx = {{position: "absolute", width: "50%", height: "50vh", top: "30vh", left: "25%"}}
      >
        <div className='bg-[#AFC0B5] flex flex-col justify-center items-start p-8 rounded-lg drop-shadow'>
            <div>new flash card set</div>

            <div id="title" className='flex flex-row my-5'>
                <p className='mr-3'>title:</p>
                <input type='text' 
                style={{width: "40vmin"}}
                onChange={(e) => setTitle(e.target.value)}/>
            </div>

            <div id='upload' className='flex flex-col'>
                <textarea 
                placeholder='write or paste your notes here' 
                className='p-2' style={{width: "45.5vw"}}
                onChange={(e) => setInputText(e.target.value)}></textarea>
                <button onClick={sendToGPTAndDB} className='bg-white w-1/3 my-4 rounded self-end'>convert to flash cards!</button>
            </div>
        </div>
      </Modal>
      
    </div>
  );
}
