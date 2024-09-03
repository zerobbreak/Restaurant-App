import { useState } from "react";
import { Link } from "react-router-dom";
const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navLinks = [
    {
      id: "/blue-hills",
      title: "Home",
    },
    {
      id: "/blue-hills/menu",
      title: "Menu",
    },
    {
      id: "/blue-hills/about",
      title: "About us",
    },
    {
      id: "/blue-hills/contact",
      title: "Contact us",
    },
    {
      id: "/blue-hills/gallery",
      title: "Gallery",
    },
  ];

  return (
    <nav className="text-white p-4">
    <div className="container mx-auto flex justify-between items-center">
      <Link to="/" className="text-xl font-bold">
        <img src="/assets/logo.svg" alt="logo" className="w-24 h-24" />
      </Link>

      {/* Desktop Links */}
      <ul className="hidden sm:flex space-x-6">
        {navLinks.map((link) => (
          <li key={link.id}>
            <Link to={link.id} className="hover:text-gray-400">
              {link.title}
            </Link>
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
