import { useContext } from 'react'
import CountersContext from '../context/CountersContext'

export default function Heading() {
    const { counters } = useContext(CountersContext)

    const getTotalCount = () => {
        let totalCount = 0
        counters.forEach(counter => {
            totalCount += counter.count
        })

        return totalCount
    }

    return (
        <h1>Productivity Points: {getTotalCount()}</h1>
    )
}
