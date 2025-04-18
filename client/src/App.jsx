import { useState } from 'react'
import bgimg from './assets/images/hp2-bg.jpg'
import './App.css'
import MainScreen from './layout/MainScreen'
import Navbar from './layout/Navbar'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div
      style={{ backgroundImage: `url(${bgimg})`}}
      className='min-h-screen bg-cover bg-center flex flex-col justify-evenly items-center'
    >
      <Navbar />
      <MainScreen />
    </div>
  )
}

export default App
