import { useDispatch } from "react-redux"

export default function Counter({ counter }) {
    const dispatch = useDispatch()

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
