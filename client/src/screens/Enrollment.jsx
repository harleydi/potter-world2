import gCrest from "../assets/images/Gryffindor_crest.webp"
import sCrest from "../assets/images/Slytherin_Crest.webp"
import rCrest from "../assets/images/Ravenclaw_crest.webp"
import hCrest from "../assets/images/Hufflepuff_crest.webp"
import EnrollmentLetter from "../components/EnrollmentLetter"
import Button from "../components/Button"
import { useOutletContext } from "react-router"
import SortingQuiz from "../components/SortingQuiz"
import Checkbox from "../components/Checkbox"

const Enrollment = () => {
    const { isQuizModalOpen, setIsQuizModalOpen } = useOutletContext()
    const handleSortQuizPopup = () => {
        setIsQuizModalOpen(true)
    }
  return (
    <div className="text-white">
        <div id="header">
            <h1 className="text-6xl text-center pb-10">Enroll into Hogwarts</h1>
        </div>
        <div className="flex gap-20 justify-center">
            <img src={gCrest} alt=""  />
            <img src={sCrest} alt="" />
            <img src={rCrest} alt="" />
            <img src={hCrest} alt="" />
        </div>
        <div className="text-center pt-40 flex justify-center">
            <EnrollmentLetter />
        </div>
        <div id="task" className="my-16 flex flex-wrap gap-10 justify-center">
            <Button title={"Sorting Quiz"} onclick={handleSortQuizPopup} />
            <Button title={"Wand Selection"} />
            <Button title={"Patronus Quiz"} />
            <Button title={"Companion Selection"} />
            <Button title={"Legacy Selection Quiz"} />
            <Button title={"Hogwarts Pledge"} />
        </div>
        <div>
            {isQuizModalOpen && <SortingQuiz />}
        </div>
    </div>
  )
}
export default Enrollment