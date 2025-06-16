import km from "./img/km.png"
import bohemian from "./img/bohemian.png"
import lager from "./img/lager.png"
import weisse from "./img/weisse.png"
import porter from "./img/porter.png"
import sureña from "./img/sureña.png"


function Features() {
  return (
    <section id="features" className="grid grid-rows-3 grid-cols-2 md:grid-rows-2 md:grid-cols-3 flex-col w-full h-dvh font-espiritu" >
        <div className="bg-[#035F43] flex flex-col justify-center py-4 items-center  timeline-view animate-zoom-in" >
            <h2 className="text-white  md:text-7xl text-4xl">unica</h2>
            <img className="w-15 md:w-25 relative bottom-4" src={lager} />
        </div>
        <div className="bg-[#D98E04] flex flex-col py-4 justify-center items-center overflow-hidden timeline-view animate-zoom-in">
            <h2 className="text-[#F4EBD0] md:text-7xl text-4xl">rubia</h2>
            <img className="w-15 md:w-25  relative bottom-3" src={bohemian} />
        </div>
        <div className="bg-[#F4EBD0] flex justify-center flex-col py-4 items-center overflow-hidden timeline-view animate-zoom-in">
            <h2 className="text-[#D98E04] md:text-7xl text-4xl">origen</h2>
            <img className="w-15 md:w-25  relative bottom-3" src={km} />
        </div>
        <div className="bg-[#BF5B04] flex  justify-center flex-col py-4 items-center overflow-hidden timeline-view animate-zoom-in">
            <h2 className="text-[#02291F] md:text-7xl text-4xl">frutal</h2>
            <img className="w-15 md:w-25  relative bottom-3" src={weisse}  />
        </div>
        <div className="bg-[#676767] flex justify-center flex-col py-4 items-center overflow-hidden timeline-view animate-zoom-in">
            <h2 className="text-[#000000] md:text-7xl text-4xl">negra</h2>
            <img className="w-15 md:w-25  relative bottom-3" src={porter} />
        </div>
        <div className="bg-[#02291F] flex justify-center flex-col items-center overflow-hidden py-4 timeline-view animate-zoom-in">
            <h2 className="text-[#BF5B04] md:text-6xl text-4xl">especial</h2>
            <img className="w-15 md:w-25  relative bottom-3" src={sureña} />
        </div>
    </section>
  )
}

export default Features
