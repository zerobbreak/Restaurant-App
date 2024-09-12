import { menuItems as bluehillsMenuItems } from "../data/constants";
import { menuItems1 as sowetoMenuItems } from "../data/constants1";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { useState } from "react";

const MenuPage = () => {
  const [selectedLocation, setSelectedLocation] = useState("Bluehills");

  // Choose the menu data based on the selected location
  const menuData =
    selectedLocation === "Bluehills" ? bluehillsMenuItems : sowetoMenuItems;

  // Define darker colors for each category
  const categoryColors = {
    "Lamb Meat": "bg-green-900 border-green-800",
    "Pork Meat": "bg-purple-900 border-purple-800",
    "Chicken Meat": "bg-yellow-900 border-yellow-800",
    "Extras": "bg-gray-800 border-gray-700",
    "Sweet Things": "bg-pink-900 border-pink-800",
    "Fish": "bg-blue-900 border-blue-800",
    "Beef Meat": "bg-red-900 border-red-800",
    "Specials & Platters": "bg-indigo-900 border-indigo-800",
  };

  return (
    <div className="bg-white w-full overflow-hidden">
      <Navbar logoImage="/assets/logo2.svg" />
      <section className="py-16">
        <div className="container mx-auto px-4">
          <header className="text-center mb-12">
            <h1 className="text-5xl font-bold font-serif text-gray-900">
              Our Menu
            </h1>
          </header>

          {/* Location Toggle Buttons */}
          <div className="flex justify-center mb-8">
            <button
              className={`px-6 py-3 mx-2 font-semibold rounded transition-colors duration-300 ${
                selectedLocation === "Bluehills"
                  ? "bg-gray-800 text-white"
                  : "bg-gray-300 text-gray-800"
              }`}
              onClick={() => setSelectedLocation("Bluehills")}
            >
              Bluehills
            </button>
            <button
              className={`px-6 py-3 mx-2 font-semibold rounded transition-colors duration-300 ${
                selectedLocation === "Soweto"
                  ? "bg-gray-800 text-white"
                  : "bg-gray-300 text-gray-800"
              }`}
              onClick={() => setSelectedLocation("Soweto")}
            >
              Soweto
            </button>
          </div>

          {/* Menu Sections */}
          {menuData.map((section, index) => (
            <div key={index} id={section.category} className="mb-16">
              {/* Section Title */}
              <h2 className="text-3xl font-bold font-serif text-gray-800 mb-8 border-b-2 border-gray-300 pb-2">
                {section.category}
              </h2>

              {/* Menu Items */}
              <div className="grid md:grid-cols-3 sm:grid-cols-2 gap-6">
                {section.items.map((item, idx) => (
                  <div
                    key={idx}
                    className={`${
                      categoryColors[section.category] || "bg-gray-900"
                    } border p-4 rounded-lg shadow-sm text-white transition-transform duration-300 hover:shadow-lg hover:scale-105`}
                  >
                    <h3 className="text-2xl font-semibold">{item.name}</h3>
                    {item.single !== undefined && item.meal !== undefined ? (
                      <>
                        <p className="mt-2 mb-2">
                          <span className="font-semibold">Single:</span> R
                          {item.single}
                        </p>
                        <p className="font-bold text-lg">
                          <span className="font-semibold">Meal:</span> R
                          {item.meal}
                        </p>
                      </>
                    ) : (
                      <p className="font-bold text-lg">
                        <span className="font-semibold">Price:</span> R
                        {item.price}
                      </p>
                    )}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default MenuPage;
