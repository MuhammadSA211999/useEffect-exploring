import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
// use effect is important 
export default function MyComFunc() {

    const [count, setCount] = useState(0)
    // console.log(count);
    const [date, setDate] = useState(new Date())
    // const [text, setText] = useState('')
    // console.log(text);



    const addClick = () => {
        setCount((prevCount) => prevCount + 1)
    }

    const tick = () => {
        setDate(new Date())
    }

    useEffect(() => {
        console.log("componnent re-rendering");

        document.title = `Ckicked ${count} times`
    }, [count])

    // useEffect(() => {
    //     console.log("timer starting");
    //     setInterval(tick, 1000)
    // }, [])

    useEffect(() => {
        console.log("timer starting");
        const interval = setInterval(tick, 1000)
        return () => {
            console.log("componnet unmounted");
            clearInterval(interval)
        }
    }, [])

    // useEffect(() => {
    //     console.log('timer starting');
    //     setTimeout(() => {
    //         // ekane 1 second por por date state notun kore set hoy abong ei useEffect abar exicute hoy/ er kunu dependency nei
    //         setDate(new Date())
    //     }, 1000);

    // })
    return (
        <div>
            <h1>useEffect by Functional Componnet</h1>
            <p>Time:{date.toLocaleTimeString()}</p>
            <p> <button onClick={addClick}>Click</button> </p>
            {/* <input onChange={(e) => setText(e.target.value)} /> */}
        </div>
    );
};

