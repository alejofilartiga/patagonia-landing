import email from "./img/email.png";
import facebook from "./img/facebook.png";
import instagram from "./img/instagram.png";
import youtube from "./img/youtube.png";

function Footer() {
  return (
    <footer className="bg-[#02291f] flex flex-col items-center w-full justify-center gap-4 p-4 text-white font-poppins" >
      <div className="flex gap-6 justify-center items-center">
        <a href="https://www.facebook.com/patagoniacerveza/" target="_blank" ><div className="bg-[#035F43] rounded-3xl p-3 border-white border-3 overflow-hidden"><img className="w-30 md:w-10 " src={facebook}/></div></a>
        <a href="https://www.instagram.com/cervezapatagonia/?hl=es" target="_blank"><div className="bg-[#035F43] rounded-3xl p-3 border-white border-3 overflow-hidden"><img className="w-30 md:w-10" src={instagram}/></div></a>
        <a href="https://www.youtube.com/@cervezapatagonia1761" target="_blank"><div className="bg-[#035F43] rounded-3xl p-3 border-white border-3 overflow-hidden"><img className="w-30 md:w-10" src={youtube}/></div></a>
        <a href="mailto:consultas@patagoniabrewingco.com" target="_blank"><div className="bg-[#035F43] rounded-3xl p-3 border-white border-3  overflow-hidden"><img className="w-30 md:w-10" src={email}/></div></a>
      </div>

      <div className="flex gap-1 justify-center flex-col text-xs items-center w-full text-center md:flex-row md:gap-4 md:text-xl">
        <a target="_blank" className="md:after:content-['_|_']"  href="http://patagoniaar.abinbev.acsitefactory.com/sites/g/files/wnfebl4601/files/2025-02/T%C3%A9rminos%20y%20condiciones%20del%20sitio%20Patagonia.pdf">TERMINOS Y CONDICIONES</a>
        <a target="_blank" className="md:after:content-['_|_']"    href="http://patagoniaar.abinbev.acsitefactory.com/sites/g/files/wnfebl4601/files/2025-02/Pol%C3%ADtica%20de%20Privacidad%20del%20sitio%20Patagonia.pdf">POLITICAS DE PRIVACIDAD</a>
        <a target="_blank" className="md:after:content-['_|_']"   href="https://www.cerveceriaymalteriaquilmes.com/">FRANQUICIAS</a>
      </div>
      <h3 className="text-xs w-77  md:w-full text-balance text-center">BEBER CON MODERACIÓN. PROHIBIDA SU VENTA A MENORES DE 18 Años. NO COMPARTA EL CONTENIDO CON MENORES. 2025 CERVEZA PATAGONIA ©</h3>
    </footer>
  )
}

export default Footer
