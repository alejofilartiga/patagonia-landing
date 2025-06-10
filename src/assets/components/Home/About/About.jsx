import bgabout from "./img/bg-section.webp"
import tree from "./img/tree.png"
import beer from "./img/beer.png"
import world from "./img/world.png"
import mountain from "./img/mountain.png"

function About() {
  return (
    <section className="flex flex-col w-full h-dvh" >
      <div className="flex items-start justify-center  w-full h-1/2 relative" style={{ backgroundImage: `url(${bgabout})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
        <div className="p-4 px-40 flex items-center justify-between w-full font-espiritu">
          <h2 className="text-4xl">2006</h2>
          <h3 className="text-4xl text-center w-2xl text-[#035F43] ">UN VIAJE QUE COMENZO EN LA PATAGONIA</h3>
          <h2 className="text-4xl" >2025</h2>
        </div>
      </div>

      <div className="flex items-center justify-center w-full h-1/2 bg-[#F4EBD0] ">
        <div className="flex items-center justify-center flex-col gap-4 w-2xl h-full text-center p-10">
          <div className="bg-[#035F43] rounded-full p-4">
            <img className="size-20"  src={tree} alt="" />
          </div>
          <h2 className="font-espiritu text-3xl text-center">ORIGEN</h2>
          <p className="font-poppins text-center text-balance text-2xs">En el corazón de la Patagonia, un grupo de amigos apasionados por la cerveza artesanal comenzó a experimentar con ingredientes locales para crear sabores únicos.</p>
        </div>

        <div className="flex items-center justify-center flex-col gap-4 w-2xl h-full text-center p-10" > 
          <div className="bg-[#035F43] rounded-full p-4">
            <img className="size-20" src={beer} alt="" />
          </div>
          <h2 className="font-espiritu text-3xl text-center">EXPANSION</h2>
          <p className="font-poppins text-center text-balance text-2xs">Abrimos nuestro primer Refugio Cervecero en Bariloche, ofreciendo cervezas frescas en un entorno natural incomparable. Nuevos estilos y más seguidores impulsaron nuestro crecimiento.</p>
        </div>


        <div className="flex items-center justify-center flex-col gap-4 w-2xl h-full text-center p-10" >
          <div className="bg-[#035F43] rounded-full p-4">
            <img className="size-20" src={world} alt="" />
          </div>
          <h2 className="font-espiritu text-3xl text-center" >COMPROMISO</h2>
          <p className="font-poppins text-center text-balance text-2xs">Lanzamos nuestro programa de reforestación y optimizamos nuestros procesos para reducir el impacto ambiental. Más que una cerveza, un compromiso con la naturaleza.</p>
        </div>


        <div className="flex items-center justify-center flex-col gap-4 w-2xl h-full text-center p-10" >
          <div className="bg-[#035F43] rounded-full p-4">
            <img className="size-20"  src={mountain} alt="" />
          </div>
          <h2 className="font-espiritu text-3xl text-center">MAS ALLA</h2>
          <p className="font-poppins text-center text-balance text-2xs">Expandimos nuestros Refugios Cerveceros a nuevas ciudades, llevando el espíritu patagónico a más personas y explorando nuevos sabores.</p>
        </div>
      </div>
    </section>
  )
}

export default About
