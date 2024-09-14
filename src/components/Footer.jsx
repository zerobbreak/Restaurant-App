import { Link } from "react-router-dom";
import { FaFacebook, FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="py-8 bg-primary shadow-lg">
      <div className="container mx-auto px-4 lg:px-0">
        <div className="flex flex-col lg:flex-row justify-between items-center lg:items-start space-y-6 lg:space-y-0">
          
          {/* Quick Links Section */}
          <div className="text-center lg:text-left lg:w-1/3">
            <h2 className="text-xl font-bold text-white mb-4">Quick Links</h2>
            <ul className="space-y-2">
              <li>
                <Link to="/blue-hills" className="text-white hover:text-blue-400 transition duration-200">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/blue-hills/menu" className="text-white hover:text-blue-400 transition duration-200">
                  Menu
                </Link>
              </li>
              <li>
                <Link to="/blue-hills/about" className="text-white hover:text-blue-400 transition duration-200">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/blue-hills/contact" className="text-white hover:text-blue-400 transition duration-200">
                  Contact
                </Link>
              </li>
              <li>
                <Link to="/blue-hills/gallery" className="text-white hover:text-blue-400 transition duration-200">
                  Gallery
                </Link>
              </li>
            </ul>
          </div>

          {/* Social Media Section */}
          <div className="text-center lg:text-left lg:w-1/3">
            <h2 className="text-xl font-bold text-white mb-4">Follow Us</h2>
            <div className="flex justify-center lg:justify-start space-x-4">
              <a
                href="https://www.facebook.com/justbadela/"
                className="text-white hover:text-blue-500 transition duration-200"
                aria-label="Facebook"
              >
                <FaFacebook size={24} />
              </a>
              <a
                href="https://www.instagram.com/justbadela_midrand"
                className="text-white hover:text-blue-500 transition duration-200"
                aria-label="Instagram"
              >
                <FaInstagram size={24} />
              </a>
            </div>
          </div>
        </div>

        {/* Copyright Section */}
        <div className="mt-8 text-center text-white">
          &copy; {new Date().getFullYear()} Our Restaurant. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
