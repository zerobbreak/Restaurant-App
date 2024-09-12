import { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = ({ logoImage }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navLinks = [
    { id: "/", title: "Home" },
    { id: "/blue-hills/menu", title: "Menu" },
    { id: "/blue-hills/about", title: "About us" },
    { id: "/blue-hills/contact", title: "Contact us" },
    { id: "/blue-hills/gallery", title: "Gallery" },
  ];

  return (
    <nav className="text-white p-4">
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/" className="text-xl font-bold">
          <img src={logoImage} alt="logo" className="w-24 h-24" />
        </Link>

        {/* Desktop Links */}
        <ul className="hidden sm:flex space-x-6">
          {navLinks.map((link) => (
            <li key={link.id} className="relative group">
              <Link
                to={link.id}
                className="font-sans text-lg hover:text-gray-300 transition-colors duration-300 text-black"
              >
                {link.title}
              </Link>
              <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-black transition-all duration-300 group-hover:w-full"></span>
            </li>
          ))}
        </ul>

        {/* Mobile Menu Button */}
        <button
          className="sm:hidden block"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          <img
            src={isMobileMenuOpen ? "/assets/close.svg" : "/assets/menu.svg"}
            alt="menu"
            className="w-6 h-6"
          />
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="sm:hidden bg-gray-700 p-4 rounded-lg mt-2">
          <ul className="flex flex-col space-y-4">
            {navLinks.map((link) => (
              <li key={link.id}>
                <Link
                  to={link.id}
                  className="hover:text-gray-400"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {link.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
