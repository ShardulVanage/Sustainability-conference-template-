
export default function Banner() {
  return (
    <div className=" relative z-10 flex mx-auto items-center gap-x-6 overflow-hidden bg-gradient-to-r from-orange-400 to-rose-400 mt-24  px-6 py-2.5 sm:px-3.5  sm:before:flex-1">

      <div className="flex justify-center items-center w-screen gap-x-4 gap-y-2">
        <p className=" text-white drop-shadow-2xl">
          {/* <strong className="font-semibold">ICEMSS 2025</strong> */}
          {/* <svg viewBox="0 0 2 2" aria-hidden="true" className="mx-2 inline size-0.5 fill-current">
            <circle r={1} cx={1} cy={1} />
          </svg> */}
          Selected papers will be processed for Scopus indexed journals or proceedings
        </p>
       
      </div>
      
    </div>
  )
}
