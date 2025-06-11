import km from "./img/km.png"
import bohemian from "./img/bohemian.png"
import lager from "./img/lager.png"
import weisse from "./img/weisse.png"
import porter from "./img/porter.png"
import sureña from "./img/sureña.png"


function Features() {
  return (
    <section className="grid grid-cols-3 grid-rows-2 w-full h-dvh font-espiritu" >
        <div className="bg-[#035F43] flex flex-col items-center overflow-hidden" >
            <h2 className="text-white text-9xl">unica</h2>
            <img className="w-30 z-10 bottom-15 relative" src={lager} />
        </div>
        <div className="bg-[#D98E04] flex flex-col items-center overflow-hidden">
            <h2 className="text-[#F4EBD0] text-9xl">rubia</h2>
            <img className="w-30 z-10 bottom-15 relative" src={bohemian} />
        </div>
        <div className="bg-[#F4EBD0] flex flex-col items-center overflow-hidden">
            <h2 className="text-[#D98E04] text-9xl">origen</h2>
            <img className="w-30 z-10 bottom-15 relative" src={km} />
        </div>
        <div className="bg-[#BF5B04] flex flex-col items-center overflow-hidden">
            <h2 className="text-[#02291F] text-9xl">frutal</h2>
            <img className="w-30 z-10 bottom-15 relative" src={weisse}  />
        </div>
        <div className="bg-[#676767] flex flex-col items-center overflow-hidden">
            <h2 className="text-[#000000] text-9xl">negra</h2>
            <img className="w-30 z-10 bottom-15 relative" src={porter} />
        </div>
        <div className="bg-[#02291F] flex flex-col items-center overflow-hidden">
            <h2 className="text-[#BF5B04] text-8xl">especial</h2>
            <img className="w-30 z-10 bottom-9 relative" src={sureña} />
        </div>
    </section>
  )
}

export default Features
