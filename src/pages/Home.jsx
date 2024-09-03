import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768); // Set breakpoint for mobile
    };

    handleResize(); // Check on initial render
    window.addEventListener('resize', handleResize); // Update on resize

    return () => {
      window.removeEventListener('resize', handleResize); // Cleanup on unmount
    };
  }, []);

  return (
    <div className="h-screen flex flex-col">
      {/* Logo Section - 25% of the page height */}
      <div className="bg-white flex justify-center items-center" style={{ height: '25%' }}>
        <img src="/assets/logo.jpg" alt="Logo" className="w-full h-full object-contain" />
      </div>

      {/* Full-width Image - 50% of the page height */}
      <div
        className="bg-cover bg-center"
        style={{
          height: '50%', // Sets the image section to 50% of the page height
          backgroundImage: "url('/assets/hero-img.jpg')",
          backgroundSize: 'cover',  // Ensures the image covers the entire section
          backgroundPosition: 'center',  // Centers the image in the section
        }}
      ></div>

      {/* Welcome Button with Image - 25% of the page height */}
      <div
        className="relative flex justify-center items-center"
        style={{
          height: '25%', // Sets the button section to 25% of the page height
         
          backgroundSize: 'cover',  // Ensures the image covers the entire section
          backgroundPosition: 'center',  // Centers the image in the section
        }}
      >
        <Link
          to="/blue-hills"
          className="absolute text-white text-xl font-bold bg-black bg-opacity-50 px-6 py-3 hover:bg-opacity-75 rounded-lg" // Added 'rounded-lg' for rounded edges
        >
          Welcome
        </Link>
      </div>
    </div>
  );
};

export default Home;
