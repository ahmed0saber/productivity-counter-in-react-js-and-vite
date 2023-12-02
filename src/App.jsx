import { useReducer } from 'react'
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

function countersReducer(state, action) {
  if (action.type === "increase") {
    return state.map(item => {
      if (item.id === action.id) {
        return {
          ...item,
          count: item.count + 1
        }
      }

      return item
    })
  }

  if (action.type === "decrease") {
    return state.map(item => {
      if (item.id === action.id) {
        if (item.count > 0) {
          return {
            ...item,
            count: item.count - 1
          }
        }
      }

      return item
    })
  }
}

function App() {
  const [counters, dispatch] = useReducer(countersReducer, initialCounters)

  return (
    <CountersContext.Provider value={{ counters, dispatch }}>
      <Heading />
      <CountersList />
    </CountersContext.Provider>
  )
}

export default App
