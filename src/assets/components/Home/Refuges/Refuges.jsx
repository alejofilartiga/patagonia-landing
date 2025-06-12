import bgsection from "./img/bg-section.jpg"
import bariloche from "./img/bari.jpg"
import palermo from "./img/palermo.jpeg"
import ushuaia from "./img/ushu.jpg"
import iguazu from "./img/igu.jpg"

function Refuges() {
  return (
    <section className="bg-[#D98E04] w-full h-dvh flex justify-between items-center">
      <div
        className="flex w-1/2 h-full justify-start items-center relative"
        style={{
          backgroundImage: `url(${bgsection})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="absolute inset-0 backdrop-blur-xs"></div>
        <h2 className="text-white p-10 text- text-6xl/relaxed  w-1/2  font-espiritu  relative z-10">NUESTROS REFUGIOS MÁS CONCURRIDOS</h2>
      </div>

      <div className="flex flex-col w-1/2 h-full justify-center items-center gap-2 p-4">
        <div className="flex w-full h-1/4 " style={{
          backgroundImage: `url(${bariloche})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}>
          <div className="flex p-2 flex-col h-1/2 w-1/3 bg-[#035F43] ">
            <h3 className="font-espiritu text-2xl text-[#F4EBD0] " >Bariloche</h3>
            <p className="font-poppins text-[#F4EBD0] ">Km 24,7, Circuito Chico.</p>
          </div>
        </div>

        <div className="flex w-full h-1/4 " style={{
          backgroundImage: `url(${palermo})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}>
          <div className="flex p-2 flex-col h-1/2 w-1/3 bg-[#035F43] ">
            <h3 className="font-espiritu text-2xl text-[#F4EBD0] ">Palermo</h3>
            <p className="font-poppins text-[#F4EBD0] ">Costa Rica 4522, CABA.</p>
          </div>
        </div>

        <div className="flex w-full h-1/4 " style={{
          backgroundImage: `url(${ushuaia})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}>
          <div className="flex p-2 flex-col h-1/2 w-1/3 bg-[#035F43] ">
            <h3 className="font-espiritu text-2xl text-[#F4EBD0] ">Ushuaia</h3>
            <p className="font-poppins text-[#F4EBD0] ">Maipú 337, Ushuaia.</p>
          </div>
        </div>

        <div className="flex w-full h-1/4 " style={{
          backgroundImage: `url(${iguazu})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}>
          <div className="flex p-2 flex-col h-1/2 w-3/8 bg-[#035F43] ">
            <h3 className="font-espiritu text-2xl text-[#F4EBD0] ">Iguazú</h3>
            <p className="font-poppins text-[#F4EBD0] ">Av. Córdoba 150, N3370 Iguazú.</p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Refuges
