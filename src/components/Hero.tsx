import { useState, useEffect } from "react";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import image1 from "../assets/images/image1.jpeg";
import image3 from "../assets/images/image3.jpeg";
import image5 from "../assets/images/image5.jpeg";
import image2 from "../assets/images/image2.jpeg";
import image4 from "../assets/images/image4.jpeg";

// Array of background images
const images = [
  image1, 
  image3, 
  image5, 
  image2, 
  image4
  
];

export function HeroSection() {
  const [currentImage, setCurrentImage] = useState(0);

  // Cycle through images every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prevImage) => (prevImage + 1) % images.length);
    }, 5000); // 5000ms = 5 seconds

    return () => clearInterval(interval); // Cleanup on unmount
  }, []);

  return (
    <section
      id="hero"
      className="relative overflow-hidden bg-gradient-to-br from-gray-900 to-gray-800 text-white"
      style={{
        backgroundImage: `url(${images[currentImage]})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        transition: "background-image 1s ease-in-out" // Smooth fade transition
      }}
    >
      <div className="container mx-auto px-4 py-20 sm:py-24 lg:py-32">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-3xl"
        >
          <h1 className="mb-6 text-4xl font-extrabold leading-tight sm:text-5xl lg:text-6xl" style={{
              textShadow: "2px 4px 6px rgba(0, 0, 0, 0.6)" }}>
            Innovating Across Industries, <br />
            <span className="text-purple-500">Shaping Tomorrow</span>
          </h1>
          <p className="mb-8 text-lg text-white-300 sm:text-xl"  style={{
              textShadow: "1px 2px 4px rgba(0, 0, 0, 0.5)" // Subtle shadow for paragraph
            }}>
            5amas Group: A dynamic holding company driving strategic growth and
            sustainable development in investment, food, and technology sectors.
          </p>
          <motion.a
            href="/about"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center rounded-full bg-purple-500 px-6 py-3 text-lg font-semibold text-white transition-colors hover:bg-emerald-600"
          >
            Discover Our Portfolio
            <ArrowRight className="ml-2 h-5 w-5" />
          </motion.a>
        </motion.div>
      </div>
      <div className="absolute inset-0 -z-10 opacity-20">
        <svg
          className="h-full w-full"
          viewBox="0 0 100 100"
          preserveAspectRatio="none"
        >
          <defs>
            <radialGradient
              id="heroglow"
              cx="50%"
              cy="50%"
              r="50%"
              fx="50%"
              fy="50%"
            >
              <stop offset="0%" stopColor="#10B981" />
              <stop offset="100%" stopColor="#059669" stopOpacity="0" />
            </radialGradient>
          </defs>
          <circle cx="50" cy="50" r="50" fill="url(#heroglow)" />
        </svg>
      </div>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.5 }}
        className="absolute bottom-0 left-0 right-0"
      >
        <svg
          viewBox="0 0 1440 120"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M0 120L60 112C120 104 240 88 360 80C480 72 600 72 720 76C840 80 960 88 1080 92C1200 96 1320 96 1380 96L1440 96V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0Z"
            fill="#F3F4F6"
          />
        </svg>
      </motion.div>
    </section>
  );
}
