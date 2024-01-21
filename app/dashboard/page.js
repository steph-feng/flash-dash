'use client'
import { useUser } from '@auth0/nextjs-auth0/client';
import { useEffect, useState } from 'react';

export default function Dashboard() {
  const { user, error, isLoading } = useUser();
  const [inputText, setInputText] = useState("");
  const [fetchingFromMongo, setFetchingFromMongo] = useState(true); 
  const [dbData, setDbData] = useState([]);

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
      body: JSON.stringify({ user: user.email, set: cards })
    });
  }

  useEffect(() => {
       getFromMongoDB();
  }, []);

  if (isLoading || fetchingFromMongo) return <div>Loading...</div>;
  if (error) return <div>{error.message}</div>;

  return (
    <div className='h-dvh flex flex-col justify-center items-center'>
        <div id="profileInfo" className="">
            <p>welcome {user.name.split(" ")[0]}</p>
        </div>

        <div id="scrollingFlashCardSets" className='flex flex-row' > 
        {
        dbData.map((item, index) => (
          <p key={index}>{item.set}</p>
        ))
        }
        </div>
      <textarea onChange={(e) => setInputText(e.target.value)}></textarea>
      <button onClick={sendToGPTAndDB}>Enter</button>
      
    </div>
  );
}
