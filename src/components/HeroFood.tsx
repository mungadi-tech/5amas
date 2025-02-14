import { motion } from "framer-motion";
import { useState, useEffect } from "react";


const dishes = [
  {
    id: 1,
    image: "https://rookzkitchen.com/wp-content/uploads/2021/01/Egusi-3.jpg",
    name: "Egusi Soup",
  },
  {
    id: 2,
    image: "https://www.allrecipes.com/thmb/EJn9SMTzr4QRkdiWdi3ZBgC0Clw=/0x512/filters:no_upscale():max_bytes(150000):strip_icc()/7499757JollofriceChefJohn4x3-d601da10d7e845d1ad4c8656a5b87ed4.jpg",
    name: "Jollof Rice",
  },
  {
    id: 3,
    image: "https://www.preciouscore.com/wp-content/uploads/2014/09/Cameroonian-coconut-rice.jpg",
    name: "Pounded Yam",
  },
];

export function HeroSectionFood() {
  const [currentSlide, setCurrentSlide] = useState(0);
 
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % dishes.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section
      id="herofood"
      className="relative overflow-hidden text-white"
    >
      {/* Background Image Slider */}
      <div className="absolute inset-0 -z-10 transition-opacity duration-1000">
        {dishes.map((dish, index) => (
          <img
            key={dish.id}
            src={dish.image}
            alt={dish.name}
            className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ${
              index === currentSlide ? "opacity-100" : "opacity-0"
            }`}
          />
        ))}
      </div>

      {/* Overlay Gradient to Make Text Readable */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-900 to-gray-800 opacity-60"></div>

      <div className="relative container mx-auto px-4 py-20 sm:py-24 lg:py-32">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-3xl"
        >
          <h1 className="mb-6 text-4xl text-gray-200 font-extrabold leading-tight sm:text-5xl lg:text-6xl">
            5AMAS Foods <br />
            <span className="text-emerald-400">Shaping Tomorrow</span>
          </h1>
          <p className="mb-8 text-lg text-gray-300 sm:text-xl">
            Freshness, Quality, Sustainability Delivered.
          </p>
          {/* <motion.button
            onClick={() => navigate("/order")}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center rounded-full bg-emerald-500 px-6 py-3 text-lg font-semibold text-white transition-colors hover:bg-emerald-600"
          >
            Order Now
            <ArrowRight className="ml-2 h-5 w-5" />
          </motion.button> */}
        </motion.div>
      </div>
    </section>
  );
}