import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export function HeroSectionResources() {
  // Slider settings
  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    arrows: false,
  };

  // Slider content
  const sliderContent = [
    {
      title: "Innovating Across Industries",
      subtitle: "Shaping Tomorrow",
      description:
        "5amas Group: A dynamic holding company driving strategic growth and sustainable development in investment, food, and technology sectors.",
      image: "https://www.5amasgroup.com/assets/book10-B8ozp7Wm.jpeg",
    },
    {
      title: "Driving Strategic Growth",
      subtitle: "Sustainable Development",
      description:
        "We focus on creating value through innovation, collaboration, and excellence in all our ventures.",
      image: "https://www.5amasgroup.com/assets/foundation3-BRL8o3KV.png",
    },
    {
      title: "Building the Future",
      subtitle: "Together",
      description:
        "Our mission is to empower industries and communities through cutting-edge solutions and responsible practices.",
      image: "https://www.5amasgroup.com/assets/foundation1-DYk63aAp.png",
    },
  ];

  return (
    <section
      id=""
      className="relative overflow-hidden bg-gray-900 text-white"
    >
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-50"></div>

      {/* Slider */}
      <Slider {...sliderSettings} className="w-full">
        {sliderContent.map((slide, index) => (
          <div key={index} className="relative h-screen">
            {/* Background Image */}
            <div
              className="absolute inset-0 bg-cover bg-center"
              style={{ backgroundImage: `url('${slide.image}')` }}
            ></div>

            {/* Dark Overlay */}
            <div className="absolute inset-0 bg-black bg-opacity-50"></div>

            {/* Content */}
            <div className="relative container mx-auto px-6 py-24 sm:py-28 lg:py-36 h-full flex items-center">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="max-w-3xl"
              >
                {/* Animated Heading */}
                <h1 className="mb-6 text-4xl font-extrabold leading-tight sm:text-5xl lg:text-6xl">
                  {slide.title} <br />
                  <span className="text-red-400">{slide.subtitle}</span>
                </h1>

                {/* Subtext */}
                <p className="mb-8 text-lg text-gray-300 sm:text-lg">
                  {slide.description}
                </p>

                {/* Call to Action Button */}
                <motion.a
                  href="#learn-more"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="inline-flex items-center rounded-full bg-red-500 px-6 py-3 text-lg font-semibold text-white transition-all hover:bg-purple-400 shadow-lg"
                >
                  Contact Us
                  <ArrowRight className="ml-2 h-5 w-5" />
                </motion.a>
              </motion.div>
            </div>
          </div>
        ))}
      </Slider>

      {/* Decorative Bottom Wave */}
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