import { Link } from "react-router-dom";
import HeroSection from "../../components/Hero";
import Navbar from "../../components/Navbar";
import PlatterSection from "../../components/PlatterSelector";
import styles from "../../style";
import Footer from "../../components/Footer";

const BluehillsHome = () => {
  return (
    <div className="bg-primary w-full overflow-hidden">
      <div className={`${styles.paddingX} ${styles.flexCenter}`}>
        <div className={`${styles.boxWidth}`}>
          <Navbar />
        </div>
      </div>

      <HeroSection 
        title="Bluehills"
        // image="/assets/meal.jpg"
      />

      <PlatterSection />
      <section className="bg-white flex justify-center items-center py-16 px-10">
        <div className="container mx-auto flex flex-col-reverse lg:flex-row items-center sm:p-10">
          {/* Image Section */}
          <div className="w-24 lg:w-96 mt-10 lg:mt-0">
            <img
              src="/assets/logo.jpg"
              alt="logo Image"
              className="hidden lg:block w-full h-auto rounded-lg shadow-lg"
            />
          </div>

          {/* Text Section */}
          <div className="w-full lg:w-1/2 text-center lg:text-left sm:px-16">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              Welcome to Our Restaurant
            </h1>
            <p className="text-gray-900 mb-8">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit
              itaque corrupti, optio a molestias, minima aut vel aspernatur
              libero maiores in magni? Aliquam at inventore quibusdam, enim
              neque ad possimus vel odit, ipsa, officiis labore blanditiis quos
              autem sed asperiores.
            </p>
            <Link
              to="/blue-hills/about"
              className="mt-10 px-6 py-3 bg-primary hover:bg-teal-600 text-white font-semibold rounded"
            >
              Learn More About us
            </Link>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default BluehillsHome;
