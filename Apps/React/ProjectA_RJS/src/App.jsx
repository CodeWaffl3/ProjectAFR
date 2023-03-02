import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
        <form action="http://google.com">
            <input type="submit" value="Link al Calendar" />
        </form>
        <form action="http://google.com">
            <input type="submit" value="Link al Drive" />
        </form>
    </div>
  )
}

export default App
