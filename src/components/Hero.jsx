import { Link } from "react-router-dom";

const HeroSection = () => {
  return (
    <div className="relative bg-hero-img bg-no-repeat bg-center bg-cover h-screen px-8">
      {/* Content container centered at the bottom */}
      <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-full text-center p-5">
        <h1 className="hidden sm:block text-4xl font-bold text-white sm:mb-28">Welcome to 𝒥𝓊𝓈𝓉 𝐵𝒶𝒹𝑒𝓁𝒶</h1>
        {/* Text content hidden on mobile devices */}
        <p className="hidden sm:block mt-4 mb-10 text-lg text-white text-center">
          Our dedicated team is committed to providing exceptional service that
          caters to your specific needs and preferences. We will work closely
          with you to create a menu and experience that exceeds your
          expectations. Whether it is for a book launch, golf day, or
          conferencing, we are able to cater to your bespoke needs.
        </p>
        <Link
          to="/blue-hills/menu"
          className="mt-10 px-6 py-3 bg-primary hover:bg-teal-600 text-white font-semibold rounded"
        >
          Explore Menu
        </Link>
      </div>
    </div>
  );
};

export default HeroSection;
