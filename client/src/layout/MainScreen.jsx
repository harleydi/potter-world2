import { useState } from "react";
import { Outlet } from "react-router";

const MainScreen = ({ user, setUser, setIsLoggedIn, setRefresh }) => {
  const [isQuizModalOpen, setIsQuizModalOpen] = useState(false);
  const [isCompanionModalOpen, setIsCompanionModalOpen] = useState(false);

  return (
    <div className=" w-screen flex justify-center items-center border bg-black">
      <Outlet
        context={{
          isQuizModalOpen,
          setIsQuizModalOpen,
          setIsCompanionModalOpen,
          user,
          setUser,
          setIsLoggedIn,
          setRefresh,
        }}
      />
    </div>
  );
};
export default MainScreen;
