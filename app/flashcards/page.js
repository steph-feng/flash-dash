

//import React, { useState} from "react";
import Link from 'next/link'

import Deck from "./Deck";
import populate from "./AICall.js"
import "./cards.css";

export default async function Flashcards() {

  let questions = await populate()
  let listofQuestions = JSON.parse(questions).flashcards
  console.log(listofQuestions)

  
    return (

      <div class="card-display">
        
        <h1>Flash Cards</h1>

        {/* {listofQuestions.map(q =>
          (
            <div style={{
              
            }}>

          <Cards frontSide = {q.question} backSide = {q.answer} />

          </div>
          ))} */}

          <Deck questions = {listofQuestions} />

          <Link href="/">Home</Link>
      </div>
    );
  }