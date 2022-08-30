import { useState } from "react"
import Toggle from "./Toggle"

function ImageBox({pokemon}) {

const [isShinny, setIsShinny] = useState(false)
  return (
    <div className="flex flex-col items-center">
      <h1 className="text-lg text-slate-300 font-semibold">{pokemon.name}</h1>
      <img className="w-60 max-w-md drop-shadow-xl border-1" src={isShinny? pokemon?.sprites?.front_shiny:pokemon?.sprites?.front_default} /> 
      <Toggle handleChange={()=>setIsShinny(!isShinny)} enabled={isShinny}/>
      
    </div>
  )
}
export default ImageBox