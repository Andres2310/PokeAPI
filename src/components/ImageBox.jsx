import { useState } from "react"
import Toggle from "./Toggle"
import defaultImg from "../assets/poke-shadow.png"

function ImageBox({ pokemon }) {

  const handleClick = () => {
    console.log(pokemon.name)
  }

  const [isShinny, setIsShinny] = useState(false)
  return (
    <div className="flex flex-col items-center gap-3 shadow-md shadow-slate-600/70 p-4">
      <div className="flex justify-between items-center w-full">
        <Toggle handleChange={() => setIsShinny(!isShinny)} enabled={isShinny} />
        <h1 className="capitalize text-2xl text-slate-300 font-semibold">{pokemon.name}</h1>
      </div>
      {
        pokemon ? <img className="w-60 max-w-md drop-shadow-xl border-1" src={isShinny ? pokemon?.sprites?.front_shiny : pokemon?.sprites?.front_default} /> : <p>hola</p>
      }
      <button onClick={handleClick} className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded inline-flex items-center">
        <svg className="fill-current w-4 h-4 mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M13 8V2H7v6H2l8 8 8-8h-5zM0 18h20v2H0v-2z" /></svg>
        <span>Download</span>
      </button>
      {/* <a href={`pokemon=${pokemon.name}`}>urlAPIprueba</a> */}
    </div>
  )
}
export default ImageBox