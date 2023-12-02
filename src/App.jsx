import './App.css'
import CountersList from './components/CountersList'
import Heading from './components/Heading'
import store from './redux/store'
import { Provider } from 'react-redux'

function App() {
  return (
    <Provider store={store}>
      <Heading />
      <CountersList />
    </Provider>
  )
}

export default App
