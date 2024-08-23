import { Link } from "react-router-dom";
import Footer from "../../components/Footer";
import HeroSection from "../../components/Hero";
import Navbar from "../../components/Navbar";
import styles from "../../style";

const SowetoHome = () => {
  return (
    <div className="bg-primary w-full overflow-hidden">
      <div className={`${styles.paddingX} ${styles.flexCenter}`}>
        <div className={`${styles.boxWidth}`}>
          <Navbar />
        </div>
      </div>

      <HeroSection title="Soweto" image="/assets/meal-soweto.jpg" />

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
              Experience the true taste of South Africa with our diverse menu
              featuring dishes from Soweto and Midrand. We use fresh, locally
              sourced ingredients and traditional cooking methods to create
              unique and flavourful dishes that will tantalize your taste buds.
            </p>
            <Link
              to="/blue-hills/about"
              className="mt-10 px-6 py-3 bg-primary hover:bg-teal-600 text-white font-semibold rounded"
            >
              Learn More About Us
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default SowetoHome;
