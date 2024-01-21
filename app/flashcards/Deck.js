"use client";
import React, { useState} from "react";
import Cards from "./Cards";


export default function({questions}) {

    const[pos, setPos] = useState(0);

    function handleClick() {
        console.log(pos)
        setPos(oldState => (oldState + 1)%questions.length);
    }

    const q = questions[pos].question
    const a = questions[pos].answer

    return (
        <div className = "card">
            <Cards frontSide = {q}    backSide = {a}      />
            <button onClick={handleClick}>Next</button>
        </div>
        
    );


}
