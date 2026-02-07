import { useState, useRef, useEffect } from "react";
import { Link } from "react-scroll";
import { IoMenu, IoClose } from "react-icons/io5";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", target: "home" },
    { name: "About", target: "about" },
    { name: "Experience", target: "experience" },
    { name: "Education", target: "education" },
    { name: "Projects", target: "projects" },
    { name: "Contact", target: "contact" },
  ];

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${scrolled ? "bg-[#0f172a]/90 backdrop-blur-md py-3 shadow-2xl" : "bg-transparent py-5"}`}>
      <div className="max-w-6xl mx-auto flex justify-between items-center px-6">
        <div className="text-2xl font-black tracking-tighter text-white uppercase">
          Ali<span className="text-blue-500">.</span>
        </div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-6 text-[12px] font-bold uppercase tracking-widest text-slate-300">
          {navLinks.map((link) => (
            <li key={link.target}>
              <Link to={link.target} smooth={true} duration={500} className="cursor-pointer hover:text-blue-400 transition-colors">
                {link.name}
              </Link>
            </li>
          ))}
        </ul>

        {/* Mobile Menu Icon */}
        <div className="md:hidden text-white text-3xl cursor-pointer" onClick={() => setMenuOpen(true)}>
          <IoMenu />
        </div>

        {/* Mobile Sidebar */}
        <div className={`fixed top-0 right-0 h-full w-64 bg-[#1e293b] shadow-2xl transform ${menuOpen ? "translate-x-0" : "translate-x-full"} transition-transform duration-500 ease-in-out z-[60]`}>
          <div className="flex justify-end p-6">
            <IoClose className="text-3xl text-white cursor-pointer" onClick={() => setMenuOpen(false)} />
          </div>
          <ul className="flex flex-col items-center space-y-8 mt-10 text-white font-bold uppercase">
            {navLinks.map((link) => (
              <li key={link.target}>
                <Link to={link.target} smooth={true} duration={500} onClick={() => setMenuOpen(false)} className="cursor-pointer hover:text-blue-400">
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;