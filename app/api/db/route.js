import { MongoClient } from 'mongodb';
import { NextResponse } from 'next/server';

export async function GET(request) {
  const client = new MongoClient(process.env.MONGODB_URI);
  await client.connect();

  const database = client.db("flash-cards");
  const collection = database.collection("users");

  const data = await collection.find().toArray();
  return NextResponse.json(data);

}

export async function POST(request) {
  const client = new MongoClient(process.env.MONGODB_URI);
  await client.connect();
  console.log("connected");

  const database = client.db("flash-cards");
  const collection = database.collection("users");

  const data = await request.json();

  try {
    const response = await fetch('http://localhost:3000/api/db', {
      method: 'GET'
    })

    const mongodbData = await response.json();

    let existingUserCards = [];

    for (let i = 0; i < mongodbData.length; i++) {
      if (mongodbData[i]._id == data.user) {
        existingUserCards = mongodbData[i].set;
      }
    }

    if (existingUserCards == []) {
      collection.insertOne({ _id: data.user, set: [data.set] });
    } else {
      existingUserCards.push(data.set);

      const query = { _id: data.user };
      const update = { $set: { _id: data.user, set: existingUserCards } };
      const options = { upsert: true };

      collection.updateOne(query, update, options);
    }

    console.log("successfully added to database");

  } catch (err) {
    console.error("failed to add to database");
  }

  return NextResponse.json(data);

}
