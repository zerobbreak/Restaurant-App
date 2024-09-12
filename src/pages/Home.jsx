import Navbar from "../components/Navbar"; // Import the Navbar component
import Footer from "../components/Footer";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="min-h-screen flex flex-col justify-between">
      {/* Navbar with a different logo image */}
      <Navbar logoImage="/assets/logo2.svg" />

      {/* Full-width Hero Section */}
      <div className="relative h-[50vh] bg-cover bg-center" style={{ backgroundImage: `url('/assets/background.jpg')` }}>
        {/* Add an overlay for better text readability */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black opacity-60"></div>
        <div className="absolute inset-0 flex items-center justify-center">
          <h1 className="text-4xl sm:text-5xl font-bold text-white text-center">
            Welcome to Just Badela
          </h1>
        </div>
      </div>

      {/* Add some content or feature sections here */}
      <div className="flex-grow flex items-center justify-center bg-gray-100 py-10">
        <div className="text-center px-4">
          <h2 className="text-3xl font-semibold text-gray-800 mb-4">Discover Our Menu</h2>
          <p className="text-lg text-gray-600 max-w-xl mx-auto">
            Explore a variety of delicious dishes made with the freshest ingredients.
          </p>
          <Link
            to="/blue-hills/menu"
            className="mt-6 inline-block bg-primary text-white font-semibold px-8 py-3 rounded-full shadow-md hover:bg-primary-dark transition duration-300"
          >
            View Menu
          </Link>
        </div>
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Home;
