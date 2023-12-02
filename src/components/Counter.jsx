import { useDispatch } from "react-redux"
import { INCREMENT, DECREMENT } from "../redux/actions/types"

export default function Counter({ counter }) {
    const dispatch = useDispatch()

    const increaseCount = () => {
        dispatch({
            type: INCREMENT,
            id: counter.id
        })
    }

    const decreaseCount = () => {
        dispatch({
            type: DECREMENT,
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
