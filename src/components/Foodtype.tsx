import { motion, useAnimation, useInView } from "framer-motion";
import {
  ChevronDown,
  Leaf,
  Package,
  ShoppingBag,
  Truck,
  Utensils,
} from "lucide-react";
import { PropsWithChildren, useEffect, useRef, useState } from "react";
import agriculture from "../assets/agriculture.jpg";
import consumer from "../assets/consumer_products.jpg";
import catering from "../assets/catering.jpg";
import outdoor from "../assets/outdoor_catering.jpg";
import packaging from "../assets/packaging.jpg";
import food from "../assets/food_bg.png";
import { Button } from "@radix-ui/themes";

const foodCategories = [
  {
    name: "Agriculture",
    icon: Leaf,
    description: "Sustainable farming practices and fresh produce",
    image: agriculture,
  },
  {
    name: "Consumer Products",
    icon: ShoppingBag,
    description: "Wide range of food products for everyday consumption",
    image: consumer,
    subCategories: [
      "Frozen foods",
      "Packaged Foods",
      "Dairy products",
      "Bakery and confectionery",
      "Beverages",
      "Meat and Poultry",
      "Seafood",
      "Health and wellness products",
      "Snacks and convenience",
    ],
  },
  {
    name: "Corporate Catering",
    icon: Utensils,
    description: "Tailored food services for businesses and events",
    image: catering,
  },
  {
    name: "White Labelling",
    icon: Package,
    description: "Custom food product development and packaging solutions",
    image: packaging,
  },
  {
    name: "Indoor and Outdoor Catering",
    icon: Truck,
    description: "Versatile catering services for all types of events",
    image: outdoor,
  },
];

const AnimatedIcon = ({
  children,
  isExpanded,
}: PropsWithChildren<{ isExpanded: boolean }>) => {
  return (
    <motion.div
      animate={{ rotate: isExpanded ? 360 : 0 }}
      transition={{ duration: 0.5 }}
    >
      {children}
    </motion.div>
  );
};

export function EnhancedFamasFoodsSection() {
  const [expandedCategory, setExpandedCategory] = useState<string | null>(null);
  const [scrollY, setScrollY] = useState(0);
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.2 });
  const controls = useAnimation();

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (isInView) {
      controls.start("visible");
    }
  }, [controls, isInView]);

  return (
    <section
      ref={sectionRef}
      className="relative overflow-hidden bg-gradient-to-b from-emerald-400 to-emerald-700 py-20 text-white"
    >
      <motion.div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: food,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
        animate={{
          y: scrollY * 0.5,
        }}
      />
      <div className="relative z-10 container mx-auto px-4">
        <motion.h2
          className="mb-12 text-center text-4xl font-bold"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          5amas Foods: Nourishing Innovation
        </motion.h2>

        <motion.div
          className="grid gap-8 md:grid-cols-2 lg:grid-cols-3"
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: {
                staggerChildren: 0.2,
              },
            },
          }}
          initial="hidden"
          animate={controls}
        >
          {foodCategories.map((category) => (
            <motion.div
              key={category.name}
              className="overflow-hidden rounded-lg bg-white bg-opacity-10 backdrop-blur-lg"
              variants={{
                hidden: { opacity: 0, y: 50 },
                visible: { opacity: 1, y: 0 },
              }}
              whileHover={{ scale: 1.05, transition: { duration: 0.3 } }}
            >
              <div className="relative h-48 overflow-hidden">
                <img
                  src={category.image}
                  alt={category.name}
                  className="transition-transform duration-300 hover:scale-110"
                />
                <div className="absolute inset-0 bg-black bg-opacity-40 transition-opacity duration-300 hover:bg-opacity-20"></div>
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black to-transparent p-4">
                  <h3 className="text-xl font-semibold">{category.name}</h3>
                </div>
              </div>
              <div className="p-4">
                <div className="mb-4 flex items-center">
                  <AnimatedIcon isExpanded={expandedCategory === category.name}>
                    <p></p>
                  </AnimatedIcon>

                  <p className="text-sm">{category.description}</p>
                </div>
                {category.subCategories && (
                  <div>
                    <Button
                      style={{ color: "white" }}
                      onClick={() =>
                        setExpandedCategory(
                          expandedCategory === category.name
                            ? null
                            : category.name
                        )
                      }
                      aria-expanded={expandedCategory === category.name}
                    >
                      {expandedCategory === category.name
                        ? "Hide Products"
                        : "View Products"}
                      <motion.div
                        animate={{
                          rotate: expandedCategory === category.name ? 180 : 0,
                        }}
                        transition={{ duration: 0.3 }}
                      >
                        <ChevronDown className="h-4 w-4" />
                      </motion.div>
                    </Button>
                    <motion.ul
                      className="mt-2 space-y-1 text-sm"
                      initial={false}
                      animate={{
                        height: expandedCategory === category.name ? "auto" : 0,
                        opacity: expandedCategory === category.name ? 1 : 0,
                      }}
                      transition={{ duration: 0.3 }}
                      style={{ overflow: "hidden" }}
                    >
                      {category.subCategories.map((subCategory) => (
                        <motion.li
                          key={subCategory}
                          className="text-white"
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ duration: 0.3 }}
                        >
                          • {subCategory}
                        </motion.li>
                      ))}
                    </motion.ul>
                  </div>
                )}
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          className="mt-16 text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
        >
          <p className="mb-6 text-lg">
            From farm to table, 5amas Foods is committed to delivering quality,
            innovation, and sustainability in every bite.
          </p>
          <motion.a
            href="/contact"
            className="inline-block rounded-full bg-white px-6 py-3 text-emerald-700 transition-colors hover:bg-emerald-100"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Partner with Us
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}
