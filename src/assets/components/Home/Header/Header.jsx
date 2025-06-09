import navlogo from "./img/navlogo.png";

function Header() {
  return (
    <header className="bg-[#02291F] p-8 w-full font-poppins">
      <nav className="flex justify-between items-center text-white w-full">
        <div>
          <img className="w-40" src={navlogo} alt="Patagonia Logo" />
        </div>
        <div className="flex gap-4">
          <a className="text-2xl " href="#about">NOSOTROS</a>
          <a className="text-2xl" href="#features">PRODUCTOS</a>
          <a className="text-2xl" href="#refuges">REFUGIOS</a>
        </div>
      </nav>
    </header>
  )
}

export default Header
