import { menuItems1 as sowetoMenuItems } from "../data/constants1";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const MenuPage = () => {
  // Use Soweto's menu data directly
  const menuData = sowetoMenuItems;

  // Define the new color palette for each category
  const categoryColors = {
    "Lamb Meat": "bg-maroon-900 border-maroon-800", // Maroon
    "Pork Meat": "bg-navy-900 border-navy-800", // Navy Blue
    "Chicken Meat": "bg-charcoal-900 border-charcoal-800", // Charcoal
    "Extras": "bg-mustard-900 border-mustard-800", // Mustard
    "Sweet Things": "bg-green-900 border-green-800", // Green
    "Fish": "bg-lightbrown-900 border-brown-800", // Light Brown
    "Beef Meat": "bg-lightgrey-900 border-lightgrey-800", // Light Grey
    "Specials & Platters": "bg-militarygreen-900 border-militarygreen-800", // Military Green
  };

  return (
    <div className="bg-white  w-full overflow-hidden">
      <Navbar logoImage="/assets/logo2.svg" />
      <section className="py-16">
        <div className="container mx-auto px-4">
          <header className="text-center mb-12">
            <h1 className="text-5xl font-bold font-serif text-gray-900">
              Our Menu
            </h1>
          </header>

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
