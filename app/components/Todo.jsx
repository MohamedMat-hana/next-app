"use client";
import { useState, useEffect } from "react";

export default function Todo() {
    const [todo, setTodo] = useState({})
    const doSomething = async() =>{
        const response = await fetch('https://jsonplaceholder.typicode.com/todos/1')
        const resulte = await response.json();
        setTodo(resulte);
        }
        
    useEffect(  () => {
        doSomething()
    },[]);

    return (
        <div>
            <h1>
            {todo.title}
            </h1>
        </div>
    )
}