import { use, useEffect, useState } from "react";
import CharacterCard from "../components/CharacterCard";
import { getAllCharacters } from "../api/apiHelper";
import NavButton from "../components/NavButton";
import { GrNext } from "react-icons/gr";
import { GrPrevious } from "react-icons/gr";



const Home = () => {
  const [characters, setCharacters] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [charactersPerPage] = useState(8);

  // Calculate indexes for the current page
  const indexOfLastCharacter = currentPage * charactersPerPage;
  const indexOfFirstCharacter = indexOfLastCharacter - charactersPerPage;
  const currentCharacters = characters.slice(
    indexOfFirstCharacter,
    indexOfLastCharacter
  );

  useEffect(() => {
    const loadCharacters = async () => {
      try {
        const foundCharacters = await getAllCharacters();
        setCharacters(foundCharacters);
      } catch (error) {
        console.error("Error loading characters:", error);
        setCharacters([]);
      }
    };
    loadCharacters();
  }, []);

  const nextHandler = () => {
    setCurrentPage(currentPage + 1)
    console.log()
  }

  const previousHandler = () => {
    setCurrentPage(currentPage - 1)
  }



  return (
    <div className="flex flex-col items-center gap-4">
      <div className="flex flex-wrap gap-4 justify-center">
        {currentCharacters.map((character) => {
          return (
            <CharacterCard key={character.id} name={character.name} house={character.house} image={character.image}/>
          );
        })}
      </div>
      <div className="flex gap-10 pt-16 text-white">
        <NavButton title={'Previous'} icon={<GrPrevious />} onClickHandler={previousHandler} disabledHandler={currentPage === 1}/>
        <h1 className="text-white">Page {currentPage}</h1>
        <NavButton title={'Next'} icon={<GrNext />} onClickHandler={nextHandler} disableHandler={characters.length <= currentPage * charactersPerPage}/>
      </div>
    </div>
  );
};
export default Home;
