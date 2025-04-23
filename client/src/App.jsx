import { useEffect, useState } from 'react'
import bgimg from './assets/images/hp2-bg.jpg'
import './App.css'
import MainScreen from './layout/MainScreen'
import Navbar from './layout/Navbar'
import Sidebar from './layout/Sidebar'

function App() {
  const loginStatus = localStorage.getItem("isLoggedIn")
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  const [user, setUser] = useState(null)
  const [refresh, setRefresh] = useState(false)
  // console.log(isLoggedIn)

  useEffect(() => {
    
    if (JSON.parse(loginStatus) === false) {
      setIsLoggedIn(false)
      console.log("changed")
    } else {
      setIsLoggedIn(true)
    }
    setRefresh(false)
    
  }, [refresh])

  return (
    <div
      className='min-h-screen flex items-center bg-black'
    >
      <Sidebar isLoggedIn={isLoggedIn} user={user} setRefresh={setRefresh} />
      <MainScreen user={user} setUser={setUser} setIsLoggedIn={setIsLoggedIn} setRefresh={setRefresh} />
    </div>
  )
}

export default App
