import navlogo from "./img/navlogo.png";

function Header() {
  return (
    <header className="flex bg-[#02291F] p-2 md:p-8 w-full font-poppins">
      <nav className="flex justify-around md:justify-between items-center text-white w-full">
        <div>
          <img className="w-15 md:w-40" src={navlogo} alt="Patagonia Logo" />
        </div>
        <div className="flex gap-2">
          <a className="text-xs md:text-xl" href="#about">NOSOTROS</a>
          <a className="text-xs md:text-xl" href="#features">PRODUCTOS</a>
          <a className="text-xs md:text-xl" href="#refuges">REFUGIOS</a>
        </div>
      </nav>
    </header>
  )
}

export default Header
