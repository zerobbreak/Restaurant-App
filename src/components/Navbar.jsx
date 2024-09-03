import { useState } from "react";
import { Link } from "react-router-dom";
const Navbar = () => {
  const [toggle, setToggle] = useState(false);
  // const location = useLocation();
  // const basePath = location.pathname.includes("blue-hills")

  const navLinks = [
    {
      id:"/blue-hills",
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
    <nav className="w-full flex py-6 justify-between items-center">
      <Link to="/">
        <img src="/assets/logo.svg" alt="hoobank" className="w-24 h-24" />
      </Link>

      <ul className="list-none sm:flex hidden justify-end items-center flex-1">
        {navLinks.map((nav, index) => (
          <li
            key={nav.id}
            className={`font-normal cursor-pointer text-[16px] ${
              index === navLinks.length - 1 ? "mr-0" : "mr-10"
            } text-white`}
          >
            <Link to={`${nav.id}`}>{nav.title}</Link>
          </li>
        ))}
      </ul>

      <div className="sm:hidden flex flex-1 justify-end items-center">
        <img
          src={toggle ? "/assets/close.svg" : "/assets/menu.svg"}
          alt="menu"
          className="w-[28px] h-[28px] object-contain"
          onClick={() => setToggle((prev) => !prev)}
        />
        <div
          className={`${
            toggle ? "flex" : "hidden"
          } p-6 bg-black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[140px] rounded-xl sidebar`}
        >
          <ul className="list-none flex flex-col justify-end items-center flex-1">
            {navLinks.map((nav, index) => (
              <li
                key={nav.id}
                className={`font-normal cursor-pointer text-[16px] ${
                  index === navLinks.length - 1 ? "mr-0" : "mb-4"
                } text-white`}
              >
                <a href={`#${nav.id}`}>{nav.title}</a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
