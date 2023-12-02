import { useSelector } from 'react-redux'

export default function Heading() {
    const { counters } = useSelector(state => state.counters)

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
