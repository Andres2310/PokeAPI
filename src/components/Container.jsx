import ImageBox from "./ImageBox"
import SearchBox from "./SearchBar"
import { useState, useEffect,useRef } from "react"

import getPokemonByName from "../services/getData"
import HistoryButton from "./HistoryButton"
import ModalHistory from "./ModalHistory"

function Container() {
  const modalRef = useRef(null);

  const [pokemon, setPokemon] = useState()
  const [nameSearch, setNameSearch] = useState("")
  const [searchHistory, setSearchHistory] = useState([])
  useEffect(() => {
    getPokemonByName(nameSearch)
      .then((foundPokemon) => {
        setPokemon(foundPokemon)
        setSearchHistory([...searchHistory, foundPokemon.sprites.front_default])
      })
      .catch(err => console.error(err))
  }, [nameSearch])

  return (
    <main className="p-5 bg-slate-800 flex flex-col items-center max-w-xl container min-h-[50vh] gap-2">
      <SearchBox setNameSearch={setNameSearch} />
      {
        pokemon ? <ImageBox pokemon={pokemon} /> : <div class="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative" role="alert">
          <strong class="font-bold">Pokemon no encontrado!</strong>
          <span class="block sm:inline">Busque nuevamente.</span>
        </div>
      }

      <HistoryButton show={() => modalRef.current.showModal()}/>
      <ModalHistory modalRef={modalRef} searchHistory={searchHistory}/>
     
    </main>
  )
}
export default Container