import { useState } from "react";
import { motion } from "framer-motion";
import {
  ChevronDown,
  ChevronUp,
  Store,
  Briefcase,
  Home,
  Plane,
  DollarSign,
} from "lucide-react";
import { IconButton } from "@radix-ui/themes";
const resources = [
  {
    category: "Consultancy Services",
    icon: Store,
    items: [],
  },
  {
    category: "Internet services",
    icon: Home,
    items: [],
  },
  {
    category: "Information Technology services",
    icon: DollarSign,
    items: [],
  },
  {
    category: "Data Analytics and Artificial Intelligence",
    icon: Briefcase,
    items: [],
  },
  {
    category: "Software Development",
    icon: Plane,
    items: [],
  },
  {
    category: "Hardware Development",
    icon: Plane,
    items: [],
  },
  {
    category: "Digital Marketing and E-commerce",
    icon: Plane,
    items: ["5foods", "5mart"],
  },
];
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
  },
};

export function TechService() {
  const [expandedCategory, setExpandedCategory] = useState<string | null>(null);

  return (
    <div className="bg-gradient-to-br text-blue">
      <header className="text-center">
        <h1 className="mb-4 text-4xl font-bold sm:text-5xl lg:text-6xl">
          5amas <span className="text-gray-700">Technology</span>
        </h1>
        <p className="mx-auto max-w-2xl text-xl text-gray-500">
          Empowering businesses with cutting-edge technology solutions to drive
          growth and innovation.
        </p>
      </header>

      <main className="container mx-auto px-4 py-12">
        <motion.div
          className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {resources.map((resource, index) => (
            <motion.div
              key={index}
              className="rounded-lg bg-blue-500 p-6 shadow-lg"
              variants={itemVariants}
            >
              <div className="mb-4 flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <IconButton
                    radius="full"
                    variant="ghost"
                    style={{ background: "white", color: "blue" }}
                  >
                    <resource.icon />
                  </IconButton>

                  <h2 className="text-2xl font-semibold">
                    {resource.category}
                  </h2>
                </div>
                <button
                  onClick={() =>
                    setExpandedCategory(
                      expandedCategory === resource.category
                        ? null
                        : resource.category
                    )
                  }
                  className="rounded-full p-1 focus:outline-none "
                  aria-expanded={expandedCategory === resource.category}
                  aria-controls={`category-${index}`}
                >
                  {expandedCategory === resource.category ? (
                    <IconButton
                      radius="full"
                      style={{ backgroundColor: "white", color: "blue" }}
                    >
                      <ChevronUp />
                    </IconButton>
                  ) : (
                    <IconButton
                      radius="full"
                      style={{ backgroundColor: "white", color: "blue" }}
                    >
                      <ChevronDown />
                    </IconButton>
                  )}
                </button>
              </div>
              <motion.ul
                id={`category-${index}`}
                className="space-y-2"
                initial={false}
                animate={{
                  height: expandedCategory === resource.category ? "auto" : 0,
                  opacity: expandedCategory === resource.category ? 1 : 0,
                }}
                transition={{ duration: 0.3 }}
                style={{ overflow: "hidden" }}
              >
                {resource.items.map((item, itemIndex) => (
                  <li key={itemIndex} className="text-white">
                    {item}
                  </li>
                ))}
              </motion.ul>
            </motion.div>
          ))}
        </motion.div>
      </main>
    </div>
  );
}
