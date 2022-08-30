import ImageBox from "./ImageBox"
import SearchBox from "./SearchBar"
import { useState, useEffect } from "react"

import getPokemonByName from "../services/getData"

function Container() {

  const [pokemon, setPokemon] = useState()
  const [nameSearch, setNameSearch] = useState("")

  useEffect(() => {
    getPokemonByName(nameSearch)
      .then(setPokemon)
      .catch(err => console.error(err))
  }, [nameSearch])

  return (
    <main className="p-5 bg-slate-800 flex flex-col items-center max-w-xl container min-h-[50vh]">
      <SearchBox setNameSearch={setNameSearch} />
      {
        pokemon ? <ImageBox pokemon={pokemon} /> : <div class="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative" role="alert">
          <strong class="font-bold">Pokemon no encontrado!</strong>
          <span class="block sm:inline">Busque nuevamente.</span>
        </div>
      }

    </main>
  )
}
export default Container