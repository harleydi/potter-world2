import { useState } from "react"
import { useOutletContext } from "react-router"
import gCrest from "../assets/images/Gryffindor_crest.webp"
import sCrest from "../assets/images/Slytherin_Crest.webp"
import rCrest from "../assets/images/Ravenclaw_crest.webp"
import hCrest from "../assets/images/Hufflepuff_crest.webp"
import EnrollmentLetter from "../components/EnrollmentLetter"
import Button from "../components/Button"
import SortingQuiz from "../components/SortingQuiz"
import Checkbox from "../components/Checkbox"
import CompanionSelect from "../components/CompanionSelect"
import EnrollmentModal from "../components/EnrollmentModal"

const Enrollment = () => {
    const { isQuizModalOpen, setIsQuizModalOpen, setIsCompanionModalOpen } = useOutletContext()
    const [isModalOpen, setIsModalOpen] = useState(false)
    const [modalView, setModalView] = useState(null)
    const handleSortQuizPopup = () => {
        setIsQuizModalOpen(true)
    }

    const handleCompanionSelect = () => {
        setIsCompanionModalOpen(true)
    }

    const handleModal = (modal) => {
        setModalView(modal)
        setIsModalOpen(true)
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
            <Button title={"Sorting Quiz"} onclick={() => handleModal('SortingQuiz')} />
            <Button title={"Wand Selection"} onclick={handleModal} />
            <Button title={"Patronus Quiz"} onclick={handleModal} />
            <Button title={"Companion Selection"} onclick={() => handleModal("Companion")} />
            <Button title={"Legacy Selection Quiz"} onclick={handleModal} />
            <Button title={"Hogwarts Pledge"} onclick={handleModal} />
        </div>
        <div>
            {/* {isQuizModalOpen && <SortingQuiz />} */}
            {/* {setIsCompanionModalOpen && <CompanionSelect /> } */}
            {isModalOpen && <EnrollmentModal isModalOpen={isModalOpen} setIsModalOpen={setIsModalOpen} modalView={modalView}/>}
        </div>
    </div>
  )
}
export default Enrollment