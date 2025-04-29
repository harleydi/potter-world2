import { IoIosClose } from "react-icons/io"
import { useOutletContext } from "react-router"

const CompanionSelect = () => {
    const {setIsCompanionModalOpen} = useOutletContext()

  return (
    <div className="fixed top-0 left-0 w-full h-full  flex justify-center items-center z-50">
      <form>
        <h1>Pick Your Companion</h1>
      </form>
    </div>
  )
}
export default CompanionSelect