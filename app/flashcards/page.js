
import Link from 'next/link'
import Cards from "./Cards";
import OpenAI from "openai";

require("dotenv").config();


const openai = new OpenAI({
    apiKey: process.env.OPENAI_API_KEY // This is also the default, can be omitted
  });

  let note = "After pursuing undergraduate studies at MIT, Kiczales started his research career in 1980 at the MIT Lab for Computer Science, where he stayed until 1983. In 1984, he joined the Xerox Palo Alto Research Center software research lab as Member of Research Staff, becoming Principal Scientist in 1996. Throughout his time at PARC, Kiczales developed some of his most important research works, including aspect-oriented programming and AspectJ. He left PARC in 1999 to focus on computer science education."
  let prompt = "Please summarize this text into short flashcards with a question field and answer field. " + note

  async function get() {
    const completion = await openai.chat.completions.create({
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
    
    return completion.choices[0].message.content;
  }

export default async function Flashcards() {

  let questions = await get()
  let thing = JSON.parse(questions).flashcards
  console.log(thing)

    

    let qs = [
      ["q1", "a1"],
      ["q2", "a2"],
      ["q3", "a3"],
      ["q4", "a4"]
    ]

    

    return (

      <div className="hello">
        <Link href="/">Home</Link>

        <h3>Flash Cards</h3>

        {thing.map(q =>
          (
          <Cards frontSide = {q.question} backSide = {q.answer} />
          ))}


      </div>
    );
  }