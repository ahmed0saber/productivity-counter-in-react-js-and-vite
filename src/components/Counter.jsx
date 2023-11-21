import React, { useContext } from 'react'
import CountersContext from '../context/CountersContext'

export default function Counter({ counter }) {
    const { counters, setCounters } = useContext(CountersContext)

    const increaseCount = () => {
        setCounters(prev => prev.map(item => {
            if (item.id === counter.id) {
                return {
                    ...item,
                    count: item.count + 1
                }
            }

            return item
        }))
    }

    const decreaseCount = () => {
        setCounters(prev => prev.map(item => {
            if (item.id === counter.id) {
                if (item.count > 0) {
                    return {
                        ...item,
                        count: item.count - 1
                    }
                }
            }

            return item
        }))
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
