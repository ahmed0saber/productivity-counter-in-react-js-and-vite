import { useDispatch } from "react-redux"
import { incrementAction, decrementAction } from "../redux/actions/actionCreators"

export default function Counter({ counter }) {
    const dispatch = useDispatch()

    const increaseCount = () => {
        dispatch(incrementAction(counter.id))
    }

    const decreaseCount = () => {
        dispatch(decrementAction(counter.id))
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
