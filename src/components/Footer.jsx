import { Link, useLocation } from "react-router-dom";
import { FaFacebook, FaInstagram } from "react-icons/fa";

const Footer = () => {
  const location = useLocation();

  let mapLink, mapText, phone, locationData, area;

  if(location.pathname.includes("blue-hills")){
    locationData = "cnr olifantsfontein road &, African View Dr"
    area = "Blue hills, Midrand"
    mapLink = "https://www.google.com/maps/place/Just+Badela+Midrand/@-25.9455723,28.1076499,15z/data=!4m6!3m5!1s0x1e9571a586ac0c25:0xb211d58bb1a0f5bb!8m2!3d-25.9455723!4d28.1076499!16s%2Fg%2F11tjz_hs8z?entry=ttu&g_ep=EgoyMDI0MDgyMS4wIKXMDSoASAFQAw%3D%3D", 
    mapText = "Bluehills, Midrand"
    phone =  "063 111 8703"
  }else if(location.pathname.includes("soweto")){
    locationData = "00546 Mtipa St," 
    area = "Orlando West, Soweto, 1804"
    mapLink = "https://www.google.com/maps/dir//00546+Mtipa+St,+Orlando+West,+Soweto,+1804/@-26.2440103,27.8230104,12z/data=!4m8!4m7!1m0!1m5!1m1!1s0x1e95a74133468c4f:0xa10432e1720ca5d4!2m2!1d27.9053876!2d-26.2440411?entry=ttu&g_ep=EgoyMDI0MDgyMS4wIKXMDSoASAFQAw%3D%3D"
    mapText = "Orlando, Soweto"
    phone = "063 141 5767"
  }

  return (
    <footer className="py-8 bg-primary shadow-lg">
      <div className="container mx-auto px-4 lg:px-0">
        <div className="flex flex-col lg:flex-row justify-between items-center lg:items-start space-y-6 lg:space-y-0">
          {/* Contact Section */}
          <div className="text-center lg:text-left lg:w-1/3">
            <h2 className="text-xl font-bold text-white mb-4">Contact Us</h2>
            <p className="text-white">
              {locationData}
              <br />
              {area}
              <br />
              Phone: {phone}
              <br />
              Email:{" "}
              <a
                href="mailto:dumile@mmidi.co.za"
                className="text-blue-500 hover:text-blue-600"
              >
                info@JustBadela.com
              </a>
            </p>
            <a href={mapLink}
              className="text-blue-500 hover:text-blue-600"
            >
              {mapText}
            </a>
          </div>

          {/* Quick Links Section */}
          <div className="text-center lg:text-left lg:w-1/3">
            <h2 className="text-xl font-bold text-white mb-4">Quick Links</h2>
            <ul className="space-y-2">
              <li>
                <Link to="/blue-hills" className="text-white hover:text-blue-500">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/blue-hills/menu" className="text-white hover:text-blue-500">
                  Menu
                </Link>
              </li>
              <li>
                <Link to="/blue-hills/about" className="text-white hover:text-blue-500">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/blue-hills/contact" className="text-white hover:text-blue-500">
                  Contact
                </Link>
              </li>
              <li>
                <Link to="/blue-hills/gallery" className="text-white hover:text-blue-500">
                  Gallery
                </Link>
              </li>
            </ul>
          </div>

          {/* Social Media Section */}
          <div className="text-center lg:text-left lg:w-1/3">
            <h2 className="text-xl font-bold text-white mb-4">Follow Us</h2>
            <div className="flex justify-center lg:justify-start space-x-4">
              <a href="https://www.facebook.com/justbadela/" className="text-white hover:text-blue-500">
                <FaFacebook size={24} />
              </a>
              <a href="https://www.instagram.com/justbadela_midrand" className="text-white hover:text-blue-500">
                <FaInstagram size={24} />
              </a>             
            </div>
          </div>
        </div>

        <div className="mt-8 text-center text-white">
          &copy; {new Date().getFullYear()} Our Restaurant. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
