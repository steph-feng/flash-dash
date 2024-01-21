"use client";
import React, { useState} from "react";
import "./cards.css";

export default function Card({frontSide, backSide}) {
    const [isFront, changeFace] = useState(true);
    function handleClick() {
        changeFace(oldState => !oldState);
    }

    const text = isFront ? frontSide : backSide;

    return (
        <div className = "flash-card" onClick = {handleClick}>
            {text}
        </div>
    );
}