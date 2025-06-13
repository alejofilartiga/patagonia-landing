import bgabout from "./img/bg-section.webp"
import tree from "./img/tree.png"
import beer from "./img/beer.png"
import world from "./img/world.png"
import mountain from "./img/mountain.png"

function About() {
  return (
    <section className="flex flex-col w-full h-dvh" >
      <div className="flex flex-col items-start justify-center w-full h-1/2" style={{ backgroundImage: `url(${bgabout})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
        <div className="flex flex-col items-center gap-3 justify-center w-full font-espiritu h-full">
          <h2 className="text-xs bg-amber-100 rounded-3xl p-1">2006</h2>
          <h3 className="text-xs text-center bg-blue-100 rounded-2xl p-2  text-[#035F43] ">UN VIAJE QUE COMENZO EN LA PATAGONIA</h3>
          <h2 className="text-xs  bg-amber-100 rounded-3xl p-1" >2025</h2>
        </div>
      </div>

      <div className="flex items-center flex-wrap justify-center w-full h-1/2 bg-[#F4EBD0] overflow-auto p-3 gap-4">

        <div className="flex items-center justify-center flex-col gap-4  text-center">
          <div className="bg-[#035F43] rounded-full p-4">
            <img className="size-15 object-contain"  src={tree} alt="" />
          </div>
          <h2 className="font-espiritu text-xl text-center">ORIGEN</h2>
          <p className="font-poppins text-center text-balance text-base">En el corazón de la Patagonia, un grupo de amigos apasionados por la cerveza artesanal comenzó a experimentar con ingredientes locales para crear sabores únicos.</p>
        </div>

        <div className="flex items-center justify-center flex-col gap-4 text-center" > 
          <div className="bg-[#035F43] rounded-full p-4">
            <img className="size-15" src={beer} />
          </div>
          <h2 className="font-espiritu text-xl text-center">EXPANSION</h2>
          <p className="font-poppins text-center text-balance text-base">Abrimos nuestro primer Refugio Cervecero en Bariloche, ofreciendo cervezas frescas en un entorno natural incomparable. Nuevos estilos y más seguidores impulsaron nuestro crecimiento.</p>
        </div>


        <div className="flex items-center justify-center flex-col gap-4 text-center" >
          <div className="bg-[#035F43] rounded-full p-4">
            <img className="size-15" src={world}/>
          </div>
          <h2 className="font-espiritu text-xl text-center" >COMPROMISO</h2>
          <p className="font-poppins text-center text-balance text-base">Lanzamos nuestro programa de reforestación y optimizamos nuestros procesos para reducir el impacto ambiental. Más que una cerveza, un compromiso con la naturaleza.</p>
        </div>


        <div className="flex items-center justify-center flex-col gap-4 text-center" >
          <div className="bg-[#035F43] rounded-full p-4">
            <img className="size-15"  src={mountain} alt="" />
          </div>
          <h2 className="font-espiritu text-xl text-center">MAS ALLA</h2>
          <p className="font-poppins text-center text-balance text-base">Expandimos nuestros Refugios Cerveceros a nuevas ciudades, llevando el espíritu patagónico a más personas y explorando nuevos sabores.</p>
        </div>
      </div>
    </section>
  )
}

export default About
