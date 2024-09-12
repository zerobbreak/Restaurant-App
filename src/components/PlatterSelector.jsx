import { Link } from "react-router-dom";

const HeroSection = () => {
  const categories = [
    { name: "Just 8 Platter", price: 1100 },
    { name: "Just 10 Platter", price: 1500 },
    { name: "Just 15 Platter", price: 2000 },
    { name: "Just 20 Platter", price: 3000 },
  ];

  return (
    <section className="flex flex-col lg:flex-row items-center justify-between bg-gray-50 py-16 lg:py-24 space-y-12 lg:space-y-0">
      {/* Left Image Section */}
      <div className="w-full lg:w-1/3 hidden lg:flex justify-center p-10">
        <div className="relative">
          <img
            src="/assets/chicken_feet.jpg"
            alt="Meal 1"
            className="w-full h-auto object-cover rounded-lg shadow-2xl"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-green-500 opacity-30 rounded-lg"></div>
        </div>
      </div>

      {/* Categories Section */}
      <div className="w-full lg:w-1/3 text-center lg:text-left p-6 lg:px-12">
        <h2 className="text-5xl font-extrabold text-gray-800 mb-6">
          Discover Our Platters
        </h2>
        <p className="text-lg text-gray-600 mb-10">
          Grilled to perfection, served with our signature dips and sauces.
        </p>
        <ul className="space-y-6">
          {categories.map((item, index) => (
            <li
              key={index}
              className="flex items-center justify-between text-xl text-gray-700"
            >
              <span>{item.name}</span>
              <span className="text-gray-700 font-semibold">R{item.price} →</span>
            </li>
          ))}
        </ul>
        <div className="mt-8">
          <Link
            to="/blue-hills/contact"
            className="inline-block bg-primary text-white text-lg font-semibold py-3 px-6 rounded-md shadow-lg hover:bg-green-500 transition"
          >
            Book a Table
          </Link>
        </div>
      </div>

      {/* Right Image Section */}
      <div className="w-full lg:w-1/3 hidden lg:flex justify-center p-10">
        <div className="relative">
          <img
            src="/assets/meat-dish.jpg"
            alt="Meal 2"
            className="w-full h-auto object-cover rounded-lg shadow-2xl"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-orange-500 opacity-30 rounded-lg"></div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
