import { useSelector } from "react-redux"
import Counter from './Counter'

export default function CountersList() {
    const counters = useSelector(state => state.counters)

    return (
        <div className='counters-list'>
            {counters.map(counter => (
                <Counter key={counter.id} counter={counter} />
            ))}
        </div>
    )
}
