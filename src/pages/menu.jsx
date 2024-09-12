import { menuItems as bluehillsMenuItems } from "../data/constants";
import { menuItems1 as sowetoMenuItems } from "../data/constants1";
import Navbar from "../components/Navbar";
import styles from "../style";
import { useState } from "react";
import Footer from "../components/Footer";

const MenuPage = () => {
  const [selectedCategory, setSelectedCategory] = useState("");
  const [selectedLocation, setSelectedLocation] = useState("Bluehills");

  // Choose the menu data based on the selected location
  const menuData = selectedLocation === "Bluehills" ? bluehillsMenuItems : sowetoMenuItems;

  // Filtered menu items based on the selected category
  const filteredMenuItems = selectedCategory
    ? menuData.filter((section) => section.category === selectedCategory)
    : menuData;

  return (
    <div className=" w-full">
      <div className={`${styles.paddingX} ${styles.flexCenter}`}>
        <div className={`${styles.boxWidth}`}>
        <Navbar logoImage="/assets/logo2.svg"/>
        </div>
      </div>
      <section className="bg-white py-16">
        <div className="container mx-auto px-4">
          <header className="text-center mb-12">
            <h1 className="text-5xl font-bold font-serif text-gray-900">Our Menu</h1>
          </header>

          {/* Location Toggle Buttons */}
          <div className="flex justify-center mb-8">
            <button
              className={`px-6 py-3 mx-2 font-semibold rounded transition-colors duration-300 ${
                selectedLocation === "Bluehills" ? "bg-primary text-white" : "bg-gray-200 text-gray-800"
              }`}
              onClick={() => setSelectedLocation("Bluehills")}
            >
              Bluehills
            </button>
            <button
              className={`px-6 py-3 mx-2 font-semibold rounded transition-colors duration-300 ${
                selectedLocation === "Soweto" ? "bg-primary text-white" : "bg-gray-200 text-gray-800"
              }`}
              onClick={() => setSelectedLocation("Soweto")}
            >
              Soweto
            </button>
          </div>

          {/* Menu Sections */}
          {filteredMenuItems.map((section, index) => (
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
                    className="border border-gray-200 p-4 rounded-lg shadow-sm transition-transform duration-300 hover:shadow-lg hover:scale-105"
                  >
                    <h3 className="text-2xl font-semibold text-gray-900">
                      {item.name}
                    </h3>
                    {item.single !== undefined && item.meal !== undefined ? (
                      <>
                        <p className="text-gray-700 mt-2 mb-2">
                          <span className="font-semibold">Single:</span> R{item.single}
                        </p>
                        <p className="text-gray-900 font-bold text-lg">
                          <span className="font-semibold">Meal:</span> R{item.meal}
                        </p>
                      </>
                    ) : (
                      <p className="text-gray-900 font-bold text-lg">
                        <span className="font-semibold">Price:</span> R{item.price}
                      </p>
                    )}
                  </div>
                ))}
              </div>
            </div>
          ))}

        </div>
      </section>
      
      <Footer/>
    </div>
  );
};

export default MenuPage;
