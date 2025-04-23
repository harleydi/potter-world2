import { useState } from 'react'
import bgimg from './assets/images/hp2-bg.jpg'
import './App.css'
import MainScreen from './layout/MainScreen'
import Navbar from './layout/Navbar'
import Sidebar from './layout/Sidebar'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div
      className='min-h-screen flex items-center bg-black'
    >
      <Sidebar />
      <MainScreen  />
    </div>
  )
}

export default App
