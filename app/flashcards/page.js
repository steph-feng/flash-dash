

//import React, { useState} from "react";
'use client'
import Link from 'next/link'
import Deck from "./Deck";
import "./cards.css";

export default function Flashcards() {
    let data = localStorage.getItem("cards");
    let cards = JSON.parse(JSON.parse(data).set[0].notes).flashcards;
    
    console.log(cards);

    return (

        <div class="h-screen flex flex-col justify-center items-center">

            <Deck questions={cards} />

            <Link href="/" className='absolute bottom-4 left-4'>← home</Link>
        </div>
    );
}