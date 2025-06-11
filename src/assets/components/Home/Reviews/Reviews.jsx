import carlos from "./img/carlos.jpg"
import maria from "./img/maria.png"
import fernando from "./img/fernando.png"

import hopsblank from "./img/hops-white.svg"
import hops from "./img/hops.svg"

function Reviews() {
  return (
    <section className="bg-[#BF5B04] flex flex-col items-center justify-center gap-8 w-full h-dvh " >
      <div className="flex flex-col items-center justify-center gap-4 text-white text-center">
        <h2 className="font-espiritu text-7xl">CONFIAN EN NOSOTROS</h2>
        <p className="font-poppins text-3xl text-balance" >Nuestro amor cervecero, en todos lados.</p>
      </div>
      <div className="flex items-center justify-center gap-20 flex-wrap w-full font-poppins ">
        <div className="flex flex-col items-center justify-center gap-4 bg-[#035F43] p-10">
          <div className="flex items-center justify-center overflow-hidden rounded-full w-32 h-32">
            <img src={carlos} />
          </div>
          <h3 className="text-white text-3xl">Carlos</h3>
          <div className="flex gap-2 items-center justify-center">
            <img className="size-10" src={hops} />
            <img className="size-10" src={hops}/>
            <img className="size-10" src={hops}/>
            <img className="size-10" src={hops}/>
            <img className="size-10" src={hops} />
          </div>
          <div className="bg-[#E2D098] w-10/12 p-4">
            <h2 className="text-center text-balance">“Encantado con la calidad y el servicio”</h2>
          </div>
        </div>

        <div className="flex flex-col items-center justify-center gap-4 bg-[#035F43] p-10">
          <div className="flex items-center justify-center overflow-hidden rounded-full w-32 h-32">
            <img src={maria} />
          </div>
          <h3 className="text-white text-3xl">Maria</h3>
          <div className="flex gap-2 items-center justify-center">
            <img className="size-10" src={hops}/>
            <img className="size-10" src={hops}/>
            <img className="size-10" src={hops}/>
            <img className="size-10" src={hops} />
            <img className="size-10" src={hopsblank}/>
          </div>
          <div className="bg-[#E2D098] w-10/12 p-4">
            <h2 className="text-center text-balance">“Enamorada de los sabores y variedad”</h2>
          </div>
        </div>
        <div className="flex flex-col items-center justify-center gap-4 bg-[#035F43] p-10">
          <div className="flex items-center justify-center overflow-hidden rounded-full w-32 h-32">
            <img src={fernando} />
          </div>
          <h3 className="text-white text-3xl">Fernando</h3>
          <div className="flex gap-2 items-center justify-center">
            <img className="size-10" src={hops}/>
            <img className="size-10" src={hops}/>
            <img className="size-10" src={hops} />
            <img className="size-10" src={hops}/>
            <img className="size-10" src={hops} />
          </div>
          <div className="bg-[#E2D098] w-10/12 p-4">
            <h2 className="text-center text-balance">“Para todo paladar y exigencia”</h2>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Reviews
