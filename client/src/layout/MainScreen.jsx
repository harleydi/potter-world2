import { useState } from "react"
import { Outlet } from "react-router"

const MainScreen = () => {
  const [isQuizModalOpen, setIsQuizModalOpen] = useState(false)
  return (
    <div className=" w-screen flex justify-center items-center border bg-black">
        <Outlet 
          context={{ isQuizModalOpen, setIsQuizModalOpen }}
        />
    </div>
  )
}
export default MainScreen