import React from "react";
import heroVideo from "/video/hero.mp4";
import { ChevronDown } from "lucide-react";
import { motion } from "framer-motion";

const HeroHeading = () => {
  const title = "Build Smarter";
  const words = title.split(" ");

  return (
    <h1 className="text-white text-[18vw] md:text-[10.1vw] font-medium	leading-[0.8] uppercase">
      {words.map((word, i) => (
        <span
          key={i}
          className="block animatable-text__line"
          style={{ textAlign: "start", position: "relative" }}
        >
          <span className="inline-block animatable-text__word" style={{ position: "relative" }}>
            {[...word].map((char, index) => (
              <motion.span
                key={index}
                className="inline-block animatable-text__character"
                initial={{ y: 40, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: index * 0.03 }}
                style={{ position: "relative", display: "inline" }}
              >
                {char}
              </motion.span>
            ))}
          </span>
        </span>
      ))}
    </h1>
  );
};



const HeroSection = () => {
  return (
    <section className="relative w-full h-screen overflow-hidden">
      
      <video
        className="fixed top-0 left-0 w-full h-full object-cover"
        src={heroVideo}
        autoPlay
        loop
        muted
        playsInline
      />

      <div className="absolute inset-0 z-10 pointer-events-none">
  <svg
    className="w-full h-full"
    viewBox="0 0 100 100"
    preserveAspectRatio="none"
  >
    
    <line
      x1="88"
      y1="0"
      x2="47"
      y2="69"
      stroke="white"
      strokeWidth="0.1"
      strokeOpacity="0.25"
    />	    
    
    <line
      x1="47"
      y1="69"
      x2="83"
      y2="69"
      stroke="white"
      strokeWidth="0.1"
      strokeOpacity="0.25"
    />
	    
    <line
      x1="83"
      y1="69"
      x2="105"
      y2="30"
      stroke="white"
      strokeWidth="0.1"
      strokeOpacity="0.25"
	/>


	/>

    />
  </svg>
</div>


      
      <div className="absolute z-20 top-[64%] left-[17%] transform -translate-y-1/2">
        <div className="max-w-7xl">
          <HeroHeading />
          <p className="text-white mt-16 text-sm md:text-1xl font-semibold max-w-4xl tracking-wide uppercase">
  OFFSITE PRODUCTION OF WORLD-LEADING HOMES FOR FORWARD-THINKING DEVELOPERS
</p>


          
          <div className="mt-16">
  <ChevronDown className="text-white w-6 h-6 animate-bounce" />
</div>

        </div>
      </div>
    </section>
  );
};

export default HeroSection;
