import OpenAI from "openai";
import { NextResponse } from "next/server";

const ai = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });

export async function POST(request) {
    const text = await request.json();
    
    let prompt = "Please summarize this text into short flashcards with a question field and answer field: " + text.data;
    const completion = await ai.chat.completions.create({
        messages: [
          {
            role: "system",
            content: "You are a helpful assistant designed to output JSON.",
          },
          { role: "user", content: prompt },
        ],
        model: "gpt-3.5-turbo-1106",
        response_format: { type: "json_object" },
      });
  

    return NextResponse.json({ message: completion });
}
