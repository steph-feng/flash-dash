import { MongoClient } from 'mongodb';
import { NextResponse } from 'next/server';

export async function POST(request) {
  const client = new MongoClient(process.env.MONGODB_URI);
  await client.connect();
  console.log("connected");
  const database = client.db("flash-cards");
  const collection = database.collection("users");

  const data = await request.json();
  
  try {
    const result = await collection.insertOne(data);
    console.log("successfully added to database");
  } catch (err) {
    console.error("failed to add to database");
  }

  return NextResponse.json(data);
  
}
