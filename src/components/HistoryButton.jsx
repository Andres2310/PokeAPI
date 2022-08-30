
function HistoryButton({show}) {

  function disableScroll() {
    var x = window.scrollX;
    var y = window.scrollY;
    window.onscroll = function () { window.scrollTo(x, y) };
  }

  return (
    <button
      onClick={() => {
        disableScroll();
        show();
      }}
      className="group relative inline-flex items-center justify-center overflow-hidden rounded-lg bg-gradient-to-br  p-0.5 text-sm font-bold text-gray-900 hover:text-white focus:outline-none "
    >
      <span className="relative rounded-sm bg-slate-300 py-[6px] px-2 transition-all duration-75 ease-in group-hover:bg-opacity-0 ">
        View History
      </span>
    </button>
  )
}

export default HistoryButton