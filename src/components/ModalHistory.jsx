import { FiX} from "react-icons/fi";
function ModalHistory({ modalRef, searchHistory }) {
  return (
    <dialog
      className="justify-center min-w-[298px] max-w-xl rounded-lg bg-slate-800 py-4 px-5 backdrop:bg-black/50 sm:backdrop:backdrop-blur-sm"
      ref={modalRef}
    >
      <div className="flex items-center justify-between">
        <h4 className="text-2xl font-semibold text-orange-600 ">Pokemons</h4>
        <FiX
          className="cursor-pointer text-2xl text--600"
          onClick={() => {
            window.onscroll = null;
            modalRef.current.close();
          }}
        />

      </div>

      <div className="mt-9 mb-7 grid grid-cols-3 gap-3">
        
          {searchHistory.map(item => (
            <img className="w-36" src={item}></img>
          ))}
        
      </div>
    </dialog>
  )
}

export default ModalHistory