import { motion } from "framer-motion";
import { useState } from "react";
import rice from "../assets/rice.jpg";

type MenuCategoriesTypes = {
  name: string;
  items: {
    name: string;
    price: string;
    desc: string;
    image: string;
  }[];
};

const menuCategories: MenuCategoriesTypes[] = [
  {
    name: "Foods",
    items: [
      {
        name: "Cosmic Calamari",
        price: "N12.99",
        desc: "50 Samosa",
        image: rice,
      },
      {
        name: "Nebula Nachos",
        price: "N10.99",
        desc: "50 Samosa",
        image: rice,
      },
      {
        name: "Quantum Quesadillas",
        price: "N11.99",
        desc: "50 Samosa",
        image: rice,
      },
    ],
  },
  {
    name: "Soups",
    items: [
      {
        name: "Galactic Grilled Salmon",
        price: "N24.99",
        desc: "50 Samosa",
        image: rice,
      },
      {
        name: "Supernova Steak",
        price: "N29.99",
        desc: "50 Samosa",
        image: rice,
      },
      {
        name: "Interstellar Chicken Curry",
        price: "N19.99",
        desc: "50 Samosa",
        image: rice,
      },
    ],
  },
  {
    name: "Proteins",
    items: [
      {
        name: "Black Hole Brownie",
        price: "N8.99",
        desc: "50 Samosa",
        image: rice,
      },
      {
        name: "Milky Way Mousse",
        price: "N7.99",
        desc: "50 Samosa",
        image: rice,
      },
      {
        name: "Asteroid Ice Cream",
        price: "N6.99",
        desc: "50 Samosa",
        image: rice,
      },
    ],
  },
  {
    name: "Small Chops",
    items: [
      {
        name: "Package 01",
        price: "N10,000",
        desc: "15 Samosa, 15 Springroll, 30 Puffs, 4 Bottles of Zobo, Free 5 Puffs",
        image: rice,
      },
      {
        name: "Package 02",
        price: "N16,500",
        desc: "15 Samosa, 15 Springroll, 30 Puffs, 10 Peppered Chicken, Free 8 Puffs",
        image: rice,
      },
      {
        name: "Package 03",
        price: "N17,000",
        desc: "30 Samosa, 30 Springroll, 60 Puffs, Free 10 Puffs",
        image: rice,
      },
      {
        name: "Package 04",
        price: "N34,000",
        desc: "60 Samosa, 60 Springroll, 120 Puffs, Free 12 Puffs",
        image: rice,
      },
      {
        name: "Package 05",
        price: "N68,000",
        desc: "120 Samosa, 120 Springroll, 240 Puffs, Free 12 Puffs",
        image: rice,
      },
    ],
  },
  {
    name: "Smoothies",
    items: [
      {
        name: "Pulsar Punch",
        price: "N5.99",
        desc: "50 Samosa",
        image: rice,
      },
      {
        name: "Cosmic Cocktail",
        price: "N9.99",
        desc: "50 Samosa",
        image: rice,
      },
      {
        name: "Neutron Star Nectar",
        price: "N4.99",
        desc: "50 Samosa",
        image: rice,
      },
    ],
  },
  {
    name: "Drinks",
    items: [
      {
        name: "Pulsar Punch",
        price: "N5.99",
        desc: "50 Samosa",
        image: rice,
      },
      {
        name: "Cosmic Cocktail",
        price: "N9.99",
        desc: "50 Samosa",
        image: rice,
      },
      {
        name: "Neutron Star Nectar",
        price: "N4.99",
        desc: "50 Samosa",
        image: rice,
      },
    ],
  },
];

const MenuItem = ({
  name,
  image,
  price,
  desc,
}: {
  image: string;
  name: string;
  price: string;
  desc: string;
}) => (
  <motion.div
    className="flex flex-col rounded-lg bg-emerald-800 bg-opacity-30 backdrop-blur-md overflow-hidden hover:bg-opacity-50 transition-all duration-300"
    whileHover={{ scale: 1.05 }}
    whileTap={{ scale: 0.95 }}
  >
    <div className="relative h-48 w-full">
      <img
        src={image}
        alt={name}
        className="transition-transform duration-300 group-hover:scale-110"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-emerald-900 to-transparent opacity-70"></div>
      <div className="absolute bottom-0 left-0 right-0 p-4">
        <h3 className="text-lg font-semibold text-emerald-100 mb-1">{name}</h3>
        <div className="flex flex-col">
          <span className="text-lg font-bold text-red-600">{price}</span>
          <span className="text-md text-teal-100">{desc}</span>
        </div>
      </div>
    </div>
  </motion.div>
);

export function FuturisticMenuWithImages() {
  const [selectedCategory, setSelectedCategory] = useState(
    menuCategories[0].name
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-400 to-emerald-700 py-20 text-white">
      <div className="container mx-auto px-4">
        <motion.h1
          className="mb-12 text-center text-5xl font-bold"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Jabi Delight
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-300 to-teal-200">
            Kitchen Menu
          </span>
        </motion.h1>

        <div className="flex flex-wrap justify-center mb-8 gap-4">
          {menuCategories.map((category) => (
            <motion.button
              key={category.name}
              className={`px-6 py-2 rounded-full text-lg font-semibold transition-all duration-300 ${
                selectedCategory === category.name
                  ? "bg-emerald-500 text-emerald-900"
                  : "bg-emerald-800 bg-opacity-30 text-emerald-100 hover:bg-opacity-50"
              }`}
              onClick={() => setSelectedCategory(category.name)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {category.name}
            </motion.button>
          ))}
        </div>

        <motion.div
          className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
          initial="hidden"
          animate="visible"
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: {
                staggerChildren: 0.1,
              },
            },
          }}
        >
          {menuCategories
            .find((category) => category.name === selectedCategory)
            ?.items.map((item) => (
              <motion.div
                key={item.name}
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  visible: { opacity: 1, y: 0 },
                }}
              >
                <MenuItem {...item} />
              </motion.div>
            ))}
        </motion.div>

        <motion.div
          className="mt-16 text-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.5 }}
        >
          <p className="mb-6 text-lg text-emerald-100">
            Embark on a culinary journey through the cosmos with our futuristic
            delights!
          </p>
        </motion.div>
      </div>
    </div>
  );
}
