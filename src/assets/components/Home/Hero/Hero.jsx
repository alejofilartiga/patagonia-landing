import heroimg from "./img/bg-section.jpg"

function Hero() {
  return (
    <section className="flex col items-center justify-start h-svh relative" style={{ backgroundImage: `url(${heroimg})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
      <div className="absolute inset-0 bg-[#02291F] opacity-53"></div>
      <div className="flex items-start gap-8 flex-col p-20 relative z-10">
        <h2 className="font-espiritu text-center text-balance text-[#F4EBD0] text-8xl">NUEVA EDICION</h2>
        <p className="font-poppins text-center text-white text-4xl italic">Suave como tantas, rica como Patagonia.</p>
        <a className="font-poppins text-white text-2xl p-3 px-14 bg-[#D98E04] rounded-2xl" target="_blank" href="https://link.tada.com.ar/3qSL/MPATAGONIA">CONSEGUILA</a>
      </div>
    </section>
  )
}

export default Hero
