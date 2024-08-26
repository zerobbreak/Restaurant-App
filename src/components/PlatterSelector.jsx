const HeroSection = () => {
  const categories = [
    { name: "Just 8 Platter", price: 1100 },
    { name: "Just 10 Platter", price: 1500 },
    { name: "Just 15 Platter", price: 2000 },
    { name: "Just 20 Platter", price: 3000 },
  ];
  return (
    <div className="flex flex-col lg:flex-row items-center justify-between pb-20 bg-white py-16">
      {/* Left Image Section */}
      <div className="w-1/3 hidden lg:flex justify-center p-10 items-center">
        <div className="relative">
          <img
            src="/assets/chicken_feet.jpg"
            alt="Meal 1"
            className="w-full h-auto object-cover rounded-md shadow-lg"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-green-500 opacity-25 rounded-full"></div>
        </div>
      </div>

      {/* Categories Section */}
      <div className="w-full lg:w-1/3 text-center p-6">
        <h2 className="text-4xl font-bold text-gray-900 mb-4">
          Our Categories
        </h2>
        <p className="text-gray-600 mb-8">
          All grilled to perfection over charcoal with our dips and sauces
        </p>
        <ul className="space-y-4">
          {categories.map((item, index) => (
            <li
              key={index}
              className="flex items-center justify-between text-xl text-gray-800"
            >
              <span>{item.name}</span>
              <span>R{item.price} →</span>
            </li>
          ))}
        </ul>
      </div>

      {/* Right Image Section */}
      <div className="w-1/3 hidden lg:flex justify-center p-10 items-center">
        <div className="relative">
          <img
            src="/assets/meat-dish.jpg"
            alt="Meal 2"
            className="w-full h-auto object-cover rounded-md shadow-lg"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-orange-500 opacity-25 rounded-full"></div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
