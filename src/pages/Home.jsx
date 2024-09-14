import { Link } from "react-router-dom";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar"; // Import the Navbar component

const Home = () => {
  return (
    <div className="relative min-h-screen">
      {/* Navbar at the top */}
      <Navbar logoImage="/assets/logo2.svg" />

      {/* Full-width Hero Section */}
      <div className="relative w-full h-[calc(100vh-80px)]">
        <img
          src="/assets/background.jpg"
          alt="Background"
          className="absolute inset-0 w-full h-full object-cover"
        />
      </div>

      <div className="my-10 flex items-center justify-center">
        <Link
          to="/blue-hills/menu"
          className="text-lg font-semibold text-white bg-primary hover:bg-blue-600 transition-colors duration-300 py-3 px-8 rounded-lg shadow-lg"
        >
          View Menu
        </Link>
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Home;
