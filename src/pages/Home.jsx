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
    <div className={`h-screen ${isMobile ? 'flex flex-col' : 'grid grid-cols-2'}`}>
      <div
        className={`relative bg-cover bg-center flex-1 ${
          isMobile ? 'bg-bg-mobile-image_1' : 'bg-bg-image_1'
        }`}
      >
        <div className="absolute inset-0 flex flex-col items-center justify-center text-white">
          <h1 className="text-3xl md:text-4xl font-bold">𝒥𝓊𝓈𝓉 𝐵𝒶𝒹𝑒𝓁𝒶</h1>
          <p className="mt-2 text-base md:text-lg text-center">
            Bluehills, Midrand
          </p>
          <img src="/assets/logo.svg" alt="logo" />
          <Link to="/blue-hills" className="mt-4 px-4 py-2 md:px-6 md:py-2 bg-black bg-opacity-50 hover:bg-opacity-75">
            Welcome
          </Link>
        </div>
      </div>

      <div
        className={`relative bg-cover bg-center flex-1 ${
          isMobile ? 'bg-bg-mobile-image_2' : 'bg-bg-image_2'
        }`}
      >
        <div className="absolute inset-0 flex flex-col items-center justify-center text-white">
          <h1 className="text-3xl md:text-4xl font-bold">𝒥𝓊𝓈𝓉 𝐵𝒶𝒹𝑒𝓁𝒶</h1>
          <p className="mt-2 text-base md:text-lg text-center">
            Soweto
          </p>
          <img src="/assets/logo.svg" alt="" />
          <Link to='/soweto' className="mt-4 px-4 py-2 md:px-6 md:py-2 bg-black bg-opacity-50 hover:bg-opacity-75">
            Welcome
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Home;
