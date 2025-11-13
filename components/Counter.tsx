"use client";
import { useState } from "react";

interface CounterProps{
    incrementAmount: number;
    buttonColor: string;
}

export default function Counter ({incrementAmount, buttonColor, }: CounterProps){
    const [count, setCount] = useState(0);
    const handleIncrement = () => {
        let newVal = count + incrementAmount;
        if(newVal > 10) newVal = 0;
        setCount(newVal);
    };
    return (
        <div style={{ marginBottom: "20px"}}>
            <h3> Count: {count}</h3>
            <button style={{
                backgroundColor: buttonColor,
                padding: "10px",
                color: "white",
                borderRadius: "5px",
            }}
            onClick={handleIncrement}>
                +{incrementAmount}
            </button>
        </div>
    );
}