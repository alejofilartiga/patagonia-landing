import bgsection from "./img/bg-section.jpg"
import bariloche from "./img/bari.jpg"
import palermo from "./img/palermo.jpeg"
import ushuaia from "./img/ushu.jpg"
import iguazu from "./img/igu.jpg"

function Refuges() {
  return (
    <section className="bg-[#D98E04] w-full h-dvh flex justify-between flex-col items-center">
      <div
        className="flex h-1/4 w-full justify-center items-center relative"
        style={{
          backgroundImage: `url(${bgsection})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="absolute inset-0 backdrop-blur-xs"></div>
        <h2 className="text-white p-2 text-center  text-3xl/relaxed  w-full  font-espiritu  relative z-10">NUESTROS REFUGIOS MÁS CONCURRIDOS</h2>
      </div>

      <div className="flex flex-col h-full w-full justify-center  items-center gap-2 p-2">
        <div className="flex w-full  h-1/4" style={{
          backgroundImage: `url(${bariloche})`,
          backgroundSize: 'contain',
          backgroundPosition: 'center',
        }}>
          <div className="flex flex-col h-9 w-40 bg-[#035F43] ">
            <h3 className="font-espiritu text-xs text-[#F4EBD0] ">Bariloche</h3>
            <p className="font-poppins text-xs text-[#F4EBD0] ">Km 24,7, Circuito Chico.</p>
          </div>
        </div>

        <div className="flex w-full h-1/4" style={{
          backgroundImage: `url(${palermo})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}>
          <div className="flex flex-col h-9 w-40 bg-[#035F43] ">
            <h3 className="font-espiritu text-xs text-[#F4EBD0] ">Palermo</h3>
            <p className="font-poppins text-xs text-[#F4EBD0] ">Costa Rica 4522, CABA.</p>
          </div>
        </div>

        <div className="flex w-full h-1/4 " style={{
          backgroundImage: `url(${ushuaia})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}>
          <div className="flex flex-col h-9 w-40 bg-[#035F43] ">
            <h3 className="font-espiritu text-xs text-[#F4EBD0] ">Ushuaia</h3>
            <p className="font-poppins text-xs text-[#F4EBD0] ">Maipú 337, Ushuaia.</p>
          </div>
        </div>

        <div className="flex w-full h-1/4 " style={{
          backgroundImage: `url(${iguazu})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center%',
        }}>
          <div className="flex flex-col h-9 w-50 bg-[#035F43] ">
            <h3 className="font-espiritu text-xs text-[#F4EBD0] ">Iguazú</h3>
            <p className="font-poppins text-xs text-[#F4EBD0] ">Av. Córdoba 150, N3370 Iguazú.</p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Refuges
