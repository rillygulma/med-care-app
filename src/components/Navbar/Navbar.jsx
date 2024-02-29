import { useState } from "react";
import Logo from "../../assets/Logo.jpeg";
import { FaShoppingCart, FaBars, FaTimes } from "react-icons/fa";
import { FiLogIn } from "react-icons/fi";
import DarkMode from "./DarkMode";
import Register from "../Register/Register";

const Menu = [
  {
    id: 1,
    name: "Home",
    link: "/",
  },
  {
    id: 2,
    name: "Services",
    link: "/services",
  },
  {
    id: 3,
    name: "About",
    link: "/#about",
  },
];

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);
  const [showRegister, setShowRegister] = useState(false);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  const handleLoginClick = () => {
    setShowRegister(!showRegister);
  };

  return (
    <div className="bg-white dark:bg-gray-900 dark:text-white">
      <div className="container mx-auto py-4 flex justify-between items-center">
        <a href="/" className="font-bold text-2xl flex gap-2 items-center">
          <img src={Logo} alt="Logo" className="w-50" />
        </a>
        <div className="px-5" style={{ width: '50%' }}>
          <DarkMode />
        </div>        

        {/* Desktop Navigation */}
        <ul className="hidden sm:flex items-center gap-8">
          {Menu.map((menu) => (
            <li key={menu.id}>
              <a
                href={menu.link}
                className="text-lg hover:text-yellow-500 transition duration-300"
              >
                {menu.name}
              </a>
            </li>
          ))}
        </ul>
        {/* End Desktop Navigation */}

        {/* Action Buttons */}
        <div className="flex items-center gap-3">
          <button className="bg-blue-700 hover:bg-blue-800 text-white py-2 px-2 rounded-full flex items-center gap-1">
            Order <FaShoppingCart className="text-xl" />
          </button>
          <a href="/register">
            <button onClick={handleLoginClick} className="bg-blue-700 hover:bg-blue-800 text-white py-2 px-1 rounded-full flex items-center gap-1">
              Login <FiLogIn className="text-xl" />
            </button>
          </a>
        </div>
        {/* End Action Buttons */}

        {/* Mobile Navigation */}
        <div className="sm:hidden ml-3 flex flex-col">
          <button onClick={toggleMenu} className="text-3xl">
            {showMenu ? <FaTimes /> : <FaBars />}
          </button>
          {showMenu && (
            <ul className="mt-4">
              {Menu.map((menu) => (
                <li key={menu.id}>
                  <a
                    href={menu.link}
                    className="block py-2 px-4 hover:text-blue-700 flex items-center"
                  >
                    <span>{menu.name}</span>
                  </a>
                </li>
              ))}
            </ul>
          )}
        </div>
        {/* End Mobile Navigation */}
      </div>
      {showRegister && (
        <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 flex justify-center items-center">
          {/* Your signup and login component */}
          <Register/>
          <div className="bg-white p-8 rounded shadow-lg">
            {/* Your signup and login component content */}
            <a href="/"></a>
            <button onClick={handleLoginClick}>Close</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Navbar;
