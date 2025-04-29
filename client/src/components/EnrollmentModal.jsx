import { Children } from "react";
import { IoIosClose } from "react-icons/io";
import CompanionSelect from "./CompanionSelect"
import SortingQuiz from "./SortingQuiz";

const EnrollmentModal = ({isModalOpen, setIsModalOpen, modalView}) => {
    
    const selectModal = () => {
        switch (key) {
          case value:
            
            break;
        
          default:
            break;
        }
    }
  return (
    <div className="fixed top-0 left-0 w-full h-full  flex justify-center items-center z-50">
      <div className="bg-black/80 w-[40rem] h-[30rem] rounded-lg">
        <div className="flex p-2 gap-1">
          <div>
            <span
              onClick={() => setIsModalOpen(false)}
              className="bg-blue-500 inline-block center w-4 h-4 rounded-full"
            >
              <IoIosClose className="text-black text-center" />
            </span>
          </div>
          <div className="circle">
            <span className="bg-purple-500 inline-block center w-4 h-4 rounded-full" />
          </div>
          <div className="circle">
            <span className="bg-pink-500 box inline-block center w-4 h-4 rounded-full" />
          </div>
        </div>
        <div>
            {isModalOpen && selectModal()}
        </div>
      </div>
    </div>
  );
};
export default EnrollmentModal;
