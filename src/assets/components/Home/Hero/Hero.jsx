import heroimg from "./img/bg-section.jpg"

function Hero() {
  return (
    <section className="flex col items-center  w-full justify-center md:justify-start h-svh relative " style={{ backgroundImage: `url(${heroimg})`, backgroundSize: 'cover', backgroundPosition: '80%'  }}>
      <div className="absolute inset-0 bg-[#02291F] opacity-53"></div>
      <div className="flex md:items-start md:p-10 justify-center items-center gap-8 flex-col p-3 relative z-10 animate-fade-in">
        <h2 className="font-espiritu text-center text-balance text-[#F4EBD0] md:text-7xl text-5xl">NUEVA EDICION</h2>
        <p className="font-poppins md:text-3xl text-center text-white text-2xl italic">Suave como tantas, rica como Patagonia.</p>
        <a className="font-poppins text-white md:text-2xl text-sm p-3 px-14 bg-[#D98E04] rounded-2xl hover:animate-scale active:opacity-45" target="_blank" href="https://link.tada.com.ar/3qSL/MPATAGONIA">CONSEGUILA</a>
      </div>
    </section>
  )
}

export default Hero
