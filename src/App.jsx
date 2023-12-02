import './App.css'
import CountersList from './components/CountersList'
import Heading from './components/Heading'
import { Provider } from "react-redux"
import store from './redux/store'

function App() {
  return (
    <Provider store={store}>
      <Heading />
      <CountersList />
    </Provider>
  )
}

export default App
