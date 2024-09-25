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
    category: "5amas Store",
    icon: Store,
    items: [
      "Kitchen Utensils and Interior Decors",
      "Jewelries and Accessories",
    ],
  },
  {
    category: "Real Estate",
    icon: Home,
    items: [
      "Office space",
      "Air B&B",
      "Property Management",
      "Real estate development",
      "Brokerage and sales",
    ],
  },
  {
    category: "Financial Services",
    icon: DollarSign,
    items: [
      "Trading and investment",
      "Financial services",
      "Investment and asset management",
      "Real estate Finance",
    ],
  },
  {
    category: "Business Services",
    icon: Briefcase,
    items: ["Capacity building", "Logistics"],
  },
  {
    category: "Travel & Automotive",
    icon: Plane,
    items: ["Travels and Tours", "Auto sales"],
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

export default function ResourceService() {
  const [expandedCategory, setExpandedCategory] = useState<string | null>(null);

  return (
    <div className="bg-gradient-to-br text-red">
      <header className="text-center">
        <h1 className="mb-4 text-4xl font-bold sm:text-5xl lg:text-6xl">
          5amas <span className="text-gray-700">Resources</span>
        </h1>
        <p className="mx-auto max-w-2xl text-xl text-gray-500">
          Discover our comprehensive range of services and resources designed to
          meet your diverse needs
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
              className="rounded-lg bg-red-500 p-6 shadow-lg"
              variants={itemVariants}
            >
              <div className="mb-4 flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <IconButton
                    radius="full"
                    variant="ghost"
                    style={{ background: "white", color: "red" }}
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
                      style={{ backgroundColor: "white", color: "red" }}
                    >
                      <ChevronUp />
                    </IconButton>
                  ) : (
                    <IconButton
                      radius="full"
                      style={{ backgroundColor: "white", color: "red" }}
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
                  <li key={itemIndex} className="text-gray-100">
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
