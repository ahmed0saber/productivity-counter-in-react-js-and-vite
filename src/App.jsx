import { useState } from 'react'
import './App.css'
import CountersContext from './context/CountersContext'
import CountersList from './components/CountersList'
import Heading from './components/Heading'

const initialCounters = [
  {
    id: "123",
    title: "Pages studied this month",
    count: 0,
  },
  {
    id: "456",
    title: "Projects created this month",
    count: 0,
  },
  {
    id: "789",
    title: "TV shows skipped this month",
    count: 0,
  },
]

function App() {
  const [counters, setCounters] = useState(initialCounters)

  return (
    <CountersContext.Provider value={{ counters, setCounters }}>
      <Heading />
      <CountersList />
    </CountersContext.Provider>
  )
}

export default App
