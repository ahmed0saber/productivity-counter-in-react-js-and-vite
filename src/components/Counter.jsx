import React, { useContext } from 'react'
import CountersContext from '../context/CountersContext'

export default function Counter({ counter }) {
    const { dispatch } = useContext(CountersContext)

    const increaseCount = () => {
        dispatch({
            type: "increase",
            id: counter.id
        })
    }

    const decreaseCount = () => {
        dispatch({
            type: "decrease",
            id: counter.id
        })
    }

    return (
        <div className='counter-contaienr'>
            <h3>Title: {counter.title}</h3>
            <p>Count: {counter.count}</p>
            <div className='btns-wrapper'>
                <button onClick={increaseCount}>increase</button>
                <button onClick={decreaseCount}>decrease</button>
            </div>
        </div>
    )
}
