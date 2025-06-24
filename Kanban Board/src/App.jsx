import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Todo from './components/Todo'
import Dotoday from './components/Dotoday'
import Progress from './components/Progress'
import Done from './components/Done'
import Navbar from './components/Navbar'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div id="navbar">
        <Navbar/>

      </div>
      <div id="body">
      <div id="todo">
      <Todo/>
      </div>
      <div id="dotoday">
      <Dotoday/>
      </div>
      <div id="progress">
     <Progress/>
      </div>
      <div id="done">
      <Done/>
      </div>
      </div>
    </>
  )
}

export default App
