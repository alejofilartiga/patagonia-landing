import navlogo from "./img/navlogo.png";

function Header() {
  return (
    <header className="flex bg-[#02291F] p-2  w-full font-poppins">
      <nav className="flex justify-around items-center text-white w-full">
        <div>
          <img className="w-15" src={navlogo} alt="Patagonia Logo" />
        </div>
        <div className="flex gap-2">
          <a className="text-xs" href="#about">NOSOTROS</a>
          <a className="text-xs" href="#features">PRODUCTOS</a>
          <a className="text-xs" href="#refuges">REFUGIOS</a>
        </div>
      </nav>
    </header>
  )
}

export default Header
