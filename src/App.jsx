import React, { useEffect, useState } from 'react';
import PageLoader from './components/common/PageLoader';
import Header from './components/layout/Header';
import HeroSection from './sections/HeroSection';
import Footer from './components/layout/Footer';

const App = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 2500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {loading ? (
        <PageLoader />
      ) : (
        <div className="bg-black text-white font-sans">
          <Header />
          <HeroSection />
          <Footer />
        </div>
      )}
    </>
  );
};

export default App;
