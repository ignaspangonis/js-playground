import './App.css'

import Debounce from './components/debounce'
import UseDeferredValue from './components/UseDeferredValue'
import UseTransition from './components/UseTransition'

function App() {
  return (
    <div className="App">
      <h1>debouncing in React</h1>
      <div className="card">
        <Debounce />
        <UseDeferredValue />
        <UseTransition />
      </div>
    </div>
  )
}

export default App
