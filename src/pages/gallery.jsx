import { useState, useEffect } from "react";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

const GalleryPage = () => {
  const [showEvents, setShowEvents] = useState(true); // Toggle between Events and Food
  const [currentEventImageIndex, setCurrentEventImageIndex] = useState(0);
  const [currentFoodImageIndex, setCurrentFoodImageIndex] = useState(0);

  const eventImages = [
    "/assets/events1.jpg",
    "/assets/events2.jpg",
    "/assets/events3.jpg",
    "/assets/events4.jpg",
    "/assets/events5.jpg",
    "/assets/events6.jpg",
    "/assets/events7.jpg",
    "/assets/events8.jpg",
    "/assets/events9.jpg",
    "/assets/events10.jpg",
    "/assets/events11.jpg",
    "/assets/events12.jpg",
    "/assets/events13.jpg",
    "/assets/events14.jpg",
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
    "/assets/foodyy.jpg",
  ];

  useEffect(() => {
    const eventInterval = setInterval(() => {
      setCurrentEventImageIndex((prevIndex) => (prevIndex + 1) % eventImages.length);
    }, 3000); // Change event image every 3 seconds

    const foodInterval = setInterval(() => {
      setCurrentFoodImageIndex((prevIndex) => (prevIndex + 1) % foodImages.length);
    }, 4000); // Change food image every 4 seconds

    return () => {
      clearInterval(eventInterval);
      clearInterval(foodInterval);
    };
  }, [eventImages.length, foodImages.length]);

  return (
    <div className="w-full min-h-screen overflow-hidden">
      <Navbar logoImage="/assets/logo2.svg" />

      {/* Gallery Header */}
      <section className="px-6 py-16 bg-gray-50 text-gray-900">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-6xl font-bold text-gray-900 mb-8">Gallery</h1>
          <p className="text-xl text-gray-500 mb-12">
            Explore our gallery featuring events and delicious food at Just Badela.
          </p>
          <div className="flex justify-center mb-12 space-x-4">
            <button
              onClick={() => setShowEvents(true)}
              className={`px-8 py-3 font-semibold rounded-full transition-all duration-300 ease-in-out shadow ${
                showEvents ? "bg-primary text-white hover:bg-primary-dark" : "bg-gray-200 text-gray-700 hover:bg-gray-300"
              }`}
            >
              Events
            </button>
            <button
              onClick={() => setShowEvents(false)}
              className={`px-8 py-3 font-semibold rounded-full transition-all duration-300 ease-in-out shadow ${
                !showEvents ? "bg-primary text-white hover:bg-primary-dark" : "bg-gray-200 text-gray-700 hover:bg-gray-300"
              }`}
            >
              Food
            </button>
          </div>
        </div>
      </section>

      {/* Events Section - Full Image Slideshow */}
      {showEvents && (
        <section className="relative h-[80vh] w-full bg-black text-white flex items-center justify-center rounded-lg overflow-hidden">
          <div
            className="absolute inset-0 bg-cover bg-center fade-animation rounded-lg"
            style={{
              backgroundImage: `url(${eventImages[currentEventImageIndex]})`,
              transition: "opacity 1s ease-in-out",
              backgroundSize: "contain", // Adjust the size to show full image
              backgroundRepeat: "no-repeat", // Prevent background repeat
            }}
          ></div>
          <div className="absolute inset-0 bg-black opacity-40 rounded-lg"></div>
          <div className="relative z-10 text-center">
            
          </div>
        </section>
      )}

      {/* Food Section - Full Image Slideshow */}
      {!showEvents && (
        <section className="relative h-[80vh] w-full bg-black text-white flex items-center justify-center rounded-lg overflow-hidden">
          <div
            className="absolute inset-0 bg-cover bg-center fade-animation rounded-lg"
            style={{
              backgroundImage: `url(${foodImages[currentFoodImageIndex]})`,
              transition: "opacity 1s ease-in-out",
              backgroundSize: "contain", // Adjust the size to show full image
              backgroundRepeat: "no-repeat", // Prevent background repeat
            }}
          ></div>
          <div className="absolute inset-0 bg-blac opacity-40 rounded-lg"></div>
          <div className="relative z-10 text-center">
            
          </div>
        </section>
      )}
<br />
      <Footer />
    </div>
  );
};

export default GalleryPage;
