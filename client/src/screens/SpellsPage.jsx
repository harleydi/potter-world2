import { useEffect, useState } from "react"
import SpellCard from "../components/SpellCard"
import { GrNext, GrPrevious } from "react-icons/gr";
import NavButton from "../components/NavButton";
import { getAllSpells } from "../api/apiHelper";

const SpellsPage = () => {
  const [spells, setSpells] = useState([])
  const [currentPage, setCurrentPage] = useState(1);
  const [spellsPerPage] = useState(10);

  // Calculate indexes for the current page
  const indexOfLastSpell = currentPage * spellsPerPage;
  const indexOfFirstSpell = indexOfLastSpell - spellsPerPage;
  const currentSpells = spells.slice(
    indexOfFirstSpell,
    indexOfLastSpell
  );

  useEffect(() => {
      const loadSpells = async () => {
        try {
          const foundSpells = await getAllSpells();
          setSpells(foundSpells);
        } catch (error) {
          console.error("Error loading spells:", error);
          setSpells([]);
        }
      };
      loadSpells();
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
      <div className="flex flex-wrap gap-4 justify-between">
        {currentSpells.map((spell) => {
          return (
            <SpellCard key={spell.id} name={spell.name} description={spell.description} />
          );
        })}
      </div>
      <div className="flex gap-10 pt-16 text-white">
        <NavButton title={'Previous'} icon={<GrPrevious />} onClickHandler={previousHandler} disabledHandler={currentPage === 1}/>
        <h1 className="text-white">Page {currentPage}</h1>
        <NavButton title={'Next'} icon={<GrNext />} onClickHandler={nextHandler} disableHandler={spells.length <= currentPage * spellsPerPage}/>
      </div>
    </div>
  )
}
export default SpellsPage