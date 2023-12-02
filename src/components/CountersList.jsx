import Counter from './Counter'
import { useSelector } from 'react-redux'

export default function CountersList() {
    const { counters } = useSelector(state => state.counters)

    return (
        <div className='counters-list'>
            {counters.map(counter => (
                <Counter key={counter.id} counter={counter} />
            ))}
        </div>
    )
}
