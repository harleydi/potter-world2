import { TbPlayerTrackNextFilled } from "react-icons/tb";


const NavButton = ({ title, icon, onClickHandler, disabledHandler}) => {
  return (
    <div className="group relative">
      <button className="text-3xl" onClick={onClickHandler} disabled={disabledHandler}>
        {icon}
      </button>
      <span className="absolute -top-14 left-[50%] -translate-x-[50%] z-20 origin-left scale-0 px-3 rounded-lg border border-gray-300 bg-white text-black py-2 text-sm font-bold shadow-md transition-all duration-300 ease-in-out group-hover:scale-100">
        {title}<span></span>
      </span>
    </div>
  );
};
export default NavButton;
