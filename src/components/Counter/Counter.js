import React, { useState } from 'react';
import {Button, Accordion, Card, Container} from 'react-bootstrap';
import './Counter.css';



function Counter() {
    let [count, setCount] = useState(0);
    let [num, setNum] = useState(1);

    const Increment = () => {
        setCount(count + num);
    };

    const Decrement = () => {
        setCount(count - num);
    };

    
    const InputChange = (a) => {
        setNum(Number(a.target.value)); 
    };

  return (
    <div className='count-container'>

        <h2>React Counter App</h2>
        <div className='cont-start'>
            <h3>Counter is {count} </h3>
        </div>
        <div className='button-style mt-3'>
            <Button onClick={Increment} className='m-3 '> Increment </Button>
            <Button onClick={Decrement} className='m-3 '> Decrement </Button>
            <Button onClick={ ()=> setCount(0)} className='m-3'> Reset </Button>
        </div>
        <div className='count-input mt-4'>
            <label > Step: </label>
            <input onChange={InputChange} type='number'  value = {num}></input>
        </div>

    </div>
  )

}


export default Counter