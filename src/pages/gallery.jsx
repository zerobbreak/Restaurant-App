import { useState, useEffect } from "react";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import styles from "../style";

const GalleryPage = () => {
  const [showEvents, setShowEvents] = useState(true); // State to toggle between Events and Food
  const [currentEventImageIndex, setCurrentEventImageIndex] = useState(0);
  const [currentFoodImageIndex, setCurrentFoodImageIndex] = useState(0);

  // Images for Events and Food
  const eventImages = [
    "/assets/events1.jpg",
    "/assets/events2.jpg",
    "/assets/events3.jpg",
    "/assets/events4.jpg",
    "/assets/events5.jpg",
    "/assets/events6.jpg",
    "/assets/events7.jpg",
    "/assets/events8.jpg",
  ];

  const foodImages = [
    "/assets/beef.jpg",
    "/assets/stew.jpg",
    "/assets/papMeat.jpg",
    "/assets/onionMeat.jpg",
    "/assets/mutton.jpg",
    "/assets/meat.jpg",
    "/assets/pap-chicken.jpg",
    "/assets/Platter1.jpg",
  ];

  useEffect(() => {
    // Event images loop
    const eventInterval = setInterval(() => {
      setCurrentEventImageIndex(
        (prevIndex) => (prevIndex + 1) % eventImages.length
      );
    }, 3000); // Change event image every 3 seconds

    // Food images loop
    const foodInterval = setInterval(() => {
      setCurrentFoodImageIndex(
        (prevIndex) => (prevIndex + 1) % foodImages.length
      );
    }, 4000); // Change food image every 4 seconds

    // Cleanup intervals on component unmount
    return () => {
      clearInterval(eventInterval);
      clearInterval(foodInterval);
    };
  }, [eventImages.length, foodImages.length]);

  return (
    <div className="bg-white w-full overflow-hidden">
      {/* Navbar Section */}
      <div className={`${styles.paddingX} ${styles.flexCenter}`}>
        <div className={`${styles.boxWidth}`}>
          <Navbar logoImage="/assets/logo2.svg" />
        </div>
      </div>

      {/* Gallery Header */}
      <section className="px-6 py-16 bg-gray-50 text-gray-900">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl font-extrabold text-gray-800 mb-12">
            Gallery
          </h1>
          <p className="text-lg text-gray-600">
            Explore our gallery featuring events and delicious food at Just
            Badela.
          </p>
          <div className="mb-12">
            <button
              onClick={() => setShowEvents(true)}
              className={`px-6 py-3 mx-2 font-semibold rounded ${
                showEvents
                  ? "bg-primary text-white"
                  : "bg-gray-200 text-gray-800"
              }`}
            >
              Events
            </button>
            <button
              onClick={() => setShowEvents(false)}
              className={`px-6 py-3 mx-2 font-semibold rounded ${
                !showEvents
                  ? "bg-primary text-white"
                  : "bg-gray-200 text-gray-800"
              }`}
            >
              Food
            </button>
          </div>
        </div>
      </section>

      {/* Events Section */}
      {showEvents && (
        <section
          className="px-6 py-16 bg-white text-gray-900 relative flex items-center justify-center"
          style={{
            backgroundImage: `url('/assets/events1.jpg')`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <div className="absolute inset-0 bg-black opacity-50"></div>{" "}
          {/* Dimming overlay */}
          <div className="max-w-6xl mx-auto relative z-10 text-center">
            {" "}
            {/* Ensures content is above the overlay and centered */}
            <h2 className="text-4xl font-bold mb-8 text-white">Events</h2>
            <div className="flex justify-center">
              {" "}
              {/* Center the image */}
              <img
                src={eventImages[currentEventImageIndex]}
                alt={`Event ${currentEventImageIndex + 1}`}
                className="w-full max-w-md h-[500px] object-cover rounded-lg shadow-md"
              />
            </div>
          </div>
        </section>
      )}

      {/* Food Section */}
      {!showEvents && (
        <section
          className="px-6 py-16 bg-gray-50 text-gray-900 relative flex items-center justify-center"
          style={{
            backgroundImage: `url('/assets/background.jpg')`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <div className="absolute inset-0 bg-black opacity-50"></div>{" "}
          {/* Dimming overlay */}
          <div className="max-w-6xl mx-auto relative z-10 text-center">
            {" "}
            {/* Ensures content is above the overlay and centered */}
            <h2 className="text-4xl font-bold mb-8 text-white">Food</h2>
            <div className="flex justify-center">
              {" "}
              {/* Center the image */}
              <img
                src={foodImages[currentFoodImageIndex]}
                alt={`Food ${currentFoodImageIndex + 1}`}
                className="w-full max-w-md h-[500px] object-cover rounded-lg shadow-md"
              />
            </div>
          </div>
        </section>
      )}

      {/* Footer Section */}
      <Footer />
    </div>
  );
};

export default GalleryPage;
