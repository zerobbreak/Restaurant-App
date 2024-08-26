import { Link } from "react-router-dom";

const HeroSection = ({ title }) => {
  return (
    <div className="flex justify-center bg-hero-img bg-no-repeat bg-center bg-cover items-center h-screen bg-white px-8">
      {/* Left Side: Text */}
      <div className="w-full md:w-1/2 p-5">
        <h1 className="text-4xl font-bold text-white">Welcome to {title}</h1>
        <p className="mt-4 mb-10 text-lg text-white">
          Our dedicated team is committed to providing exceptional service that
          caters to your specific needs and preferences. We will work closely
          with you to create a menu and experience that exceeds your
          expectations. Whether it is for a book launch, golf day or
          conferencing. we are able to cater to your bespoke needs.
        </p>
        <Link
          to="/blue-hills/menu"
          className="mt-10 px-6 py-3 bg-primary hover:bg-teal-600 text-white font-semibold rounded"
        >
          Explore Menu
        </Link>
      </div>

      {/* Right Side: Image
      <div className="hidden md:block w-full md:w-1/2">
        <img
          src={image}
          alt={`${title} Image`}
          className="w-full h-auto object-cover rounded-lg shadow-lg"
        />
      </div> */}
    </div>
  );
};

export default HeroSection;
