import { Outlet } from "react-router"

const MainScreen = () => {
  return (
    <div className="h-[80vh] w-[90%] flex justify-center items-center border bg-slate-900/70">
        <Outlet />
    </div>
  )
}
export default MainScreen