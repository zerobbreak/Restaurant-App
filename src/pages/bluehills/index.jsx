import { Link } from "react-router-dom";
import { useState } from "react";
import HeroSection from "../../components/Hero";
import Navbar from "../../components/Navbar";
import PlatterSection from "../../components/PlatterSelector";
import styles from "../../style";
import Footer from "../../components/Footer";

const BluehillsHome = () => {
  const [bookingDetails, setBookingDetails] = useState({
    name: "",
    date: "",
    time: "",
    guests: 1,
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setBookingDetails({ ...bookingDetails, [name]: value });
  };

  const handleBookingSubmit = (e) => {
    e.preventDefault();
    // Handle booking logic here (e.g., send data to a server or display a confirmation message)
    alert("Booking submitted! We'll contact you soon.");
    setBookingDetails({ name: "", date: "", time: "", guests: 1 });
  };

  return (
    <div className="bg-primary w-full overflow-hidden">
      <div className={`${styles.paddingX} ${styles.flexCenter}`}>
        <div className={`${styles.boxWidth}`}>
          <Navbar />
        </div>
      </div>

      <HeroSection 
        title="Bluehills"
        image="/assets/meal.jpg"
      />

      <PlatterSection />
      
      {/* Booking Section */}
      <section className="bg-gray-100 py-16 px-10">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Book a Table</h2>
          <p className="text-gray-700 mb-8">Reserve a table at our restaurant by filling out the form below.</p>

          <form onSubmit={handleBookingSubmit} className="max-w-md mx-auto bg-white p-8 rounded-lg shadow-md">
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={bookingDetails.name}
                onChange={handleInputChange}
                className="w-full px-3 py-2 border rounded-lg text-gray-700"
                placeholder="Your Name"
                required
              />
            </div>

            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="date">
                Date
              </label>
              <input
                type="date"
                id="date"
                name="date"
                value={bookingDetails.date}
                onChange={handleInputChange}
                className="w-full px-3 py-2 border rounded-lg text-gray-700"
                required
              />
            </div>

            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="time">
                Time
              </label>
              <input
                type="time"
                id="time"
                name="time"
                value={bookingDetails.time}
                onChange={handleInputChange}
                className="w-full px-3 py-2 border rounded-lg text-gray-700"
                required
              />
            </div>

            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="guests">
                Number of Guests
              </label>
              <input
                type="number"
                id="guests"
                name="guests"
                value={bookingDetails.guests}
                onChange={handleInputChange}
                className="w-full px-3 py-2 border rounded-lg text-gray-700"
                min="1"
                max="20"
                required
              />
            </div>

            <button
              type="submit"
              className="bg-primary hover:bg-teal-600 text-white font-bold py-2 px-4 rounded"
            >
              Submit
            </button>
          </form>
        </div>
      </section>

      <section className="bg-white flex justify-center items-center py-16 px-10">
        <div className="container mx-auto flex flex-col-reverse lg:flex-row items-center sm:p-10">
          {/* Image Section */}
          <div className="w-24 lg:w-96 mt-10 lg:mt-0">
            <img
              src="/assets/logo.jpg"
              alt="logo Image"
              className="hidden lg:block w-full h-auto rounded-lg shadow-lg"
            />
          </div>

          {/* Text Section */}
          <div className="w-full lg:w-1/2 text-center lg:text-left sm:px-16">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              Welcome to Our Restaurant
            </h1>
            
            <Link
              to="/blue-hills/about"
              className="mt-10 px-6 py-3 bg-primary hover:bg-teal-600 text-white font-semibold rounded"
            >
              Learn More About us
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default BluehillsHome;
