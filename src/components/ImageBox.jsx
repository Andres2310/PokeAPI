import { useState } from "react"
import Toggle from "./Toggle"

function ImageBox({ pokemon }) {

  const handleClick = () => {
    console.log(pokemon.name)
  }

  const [isShinny, setIsShinny] = useState(false)
  return (
    <div className="flex flex-col items-center gap-3">
      <h1 className="text-lg text-slate-300 font-semibold">{pokemon.name}</h1>
      <img className="w-60 max-w-md drop-shadow-xl border-1" src={isShinny ? pokemon?.sprites?.front_shiny : pokemon?.sprites?.front_default} />
      <Toggle handleChange={() => setIsShinny(!isShinny)} enabled={isShinny} />
      <button onClick={handleClick} className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded inline-flex items-center">
        <svg className="fill-current w-4 h-4 mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M13 8V2H7v6H2l8 8 8-8h-5zM0 18h20v2H0v-2z" /></svg>
        <span>Download</span>
      </button>
      {/* <a href={`pokemon=${pokemon.name}`}>urlAPIprueba</a> */}
    </div>
  )
}
export default ImageBox