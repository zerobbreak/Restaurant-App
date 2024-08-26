import { menuItems } from "../../data/constants";
import {
  FaDrumstickBite,
  FaPiggyBank,
  FaUtensils,
  FaIceCream,
  FaFish,
  FaGift,
} from "react-icons/fa";
import { GiChickenLeg, GiSteak } from "react-icons/gi";
import Navbar from "../../components/Navbar";
import styles from "../../style";
import { useState, useEffect } from "react";
import Card from "../../components/Card";

const MenuPage = () => {
  const iconMap = {
    "Lamb Meat": <FaDrumstickBite className="w-6 h-6 text-gray-500" />,
    "Pork Meat": <FaPiggyBank className="w-6 h-6 text-gray-500" />,
    "Chicken Meat": <GiChickenLeg className="w-6 h-6 text-gray-500" />,
    Extras: <FaUtensils className="w-6 h-6 text-gray-500" />,
    "Sweet Things": <FaIceCream className="w-6 h-6 text-gray-500" />,
    Fish: <FaFish className="w-6 h-6 text-gray-500" />,
    "Beef Meat": <GiSteak className="w-6 h-6 text-gray-500" />,
    "Specials & Platters": <FaGift className="w-6 h-6 text-gray-500" />,
  };

  const [itemsToShow, setItemsToShow] = useState(3);
  const [selectedCategory, setSelectedCategory] = useState("");

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) {
        setItemsToShow(3);
      } else {
        setItemsToShow(5);
      }
    };

    window.addEventListener("resize", handleResize);
    handleResize();

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Filtered menu items based on the selected category
  const filteredMenuItems = selectedCategory
    ? menuItems.filter((section) => section.category === selectedCategory)
    : menuItems;

  return (
    <div className="bg-primary w-full overflow-hidden">
      <div className={`${styles.paddingX} ${styles.flexCenter}`}>
        <div className={`${styles.boxWidth}`}>
          <Navbar />
        </div>
      </div>
      <section className="bg-white py-16">
        <div className="container mx-auto px-4">
          <header className="text-center mb-12">
            <h1 className="text-5xl font-bold text-gray-900">Our Menu</h1>
            <p className="text-gray-600 mt-4">
              Explore our wide variety of delicious meals, crafted to perfection.
            </p>
          </header>

          {/* Mobile View Category Navigation */}
          <div className="md:hidden mb-8">
            <button
              className="w-full bg-gray-800 text-white py-2 px-4 rounded-lg text-left flex items-center justify-between"
              onClick={() => setSelectedCategory(selectedCategory ? "" : menuItems[0].category)}
            >
              {selectedCategory || "Select a Category"}
              <svg
                className="w-5 h-5 ml-2"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </button>
            {selectedCategory && (
              <ul className="bg-white shadow-md rounded-lg mt-2">
                {menuItems.map((section, index) => (
                  <li key={index}>
                    <a
                      href={`#${section.category}`}
                      onClick={() => {
                        setSelectedCategory(section.category);
                        setTimeout(() => setSelectedCategory(""), 300); // Close dropdown after selection
                      }}
                      className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
                    >
                      {iconMap[section.category]}{" "}
                      <span className="ml-2">{section.category}</span>
                    </a>
                  </li>
                ))}
              </ul>
            )}
          </div>

          {/* Desktop View Category Navigation */}
          <nav className="hidden md:block sticky top-0 z-10 bg-white shadow-md p-10 px-10 mb-8">
            <ul className="flex justify-center items-center space-x-6">
              {menuItems.map((section, index) => (
                <li key={index}>
                  <a
                    href={`#${section.category}`}
                    className="text-lg font-semibold text-gray-900 hover:text-gray-200 transition flex items-center"
                  >
                    {iconMap[section.category]} <span className="ml-2">{section.category}</span>
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          {/* Menu Sections */}
          {filteredMenuItems.map((section, index) => (
            <div key={index} id={section.category} className="mb-16">
              <h2 className="text-3xl font-bold text-gray-800 mb-8 flex items-center">
                {iconMap[section.category]}{" "}
                <span className="ml-3">{section.category}</span>
              </h2>
              <div className="grid md:grid-cols-3 sm:grid-cols-2 gap-6">
                {section.items.slice(0, itemsToShow).map((item, idx) => (
                  <Card
                    key={idx}
                    imageUrl={section.image}
                    item={item}
                  />
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default MenuPage;
