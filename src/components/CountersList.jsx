import { useContext } from 'react'
import CountersContext from '../context/CountersContext'
import Counter from './Counter'

export default function CountersList() {
    const { counters } = useContext(CountersContext)

    return (
        <div className='counters-list'>
            {counters.map(counter => (
                <Counter key={counter.id} counter={counter} />
            ))}
        </div>
    )
}
