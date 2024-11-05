import { useState } from "react";
import { motion } from "framer-motion";
import {
  ChevronDown,
  ChevronUp,
  Store,
  Briefcase,
  Home,
  Plane,
} from "lucide-react";
import { IconButton } from "@radix-ui/themes";
const resources = [
  {
    category: "Office Space Rental",
    icon: Store,
    items: [
      "Private offices for teams of 2-20 people",
      "Fully furnished and equipped with high-speed internet",
      "Flexible lease terms (daily, weekly, monthly)",
    ],
  },
  {
    category: "Training Halls",
    icon: Home,
    items: [
      "Office space",
      "Capacity: 20-100 participants",
      "State-of-the-art facilities for workshops, seminars, and conferences",
    ],
  },

  {
    category: "Virtual Assistants",
    icon: Briefcase,
    items: [
      "Professional reception and administrative support",
      "Mail handling, phone answering, and messaging services",
      "Customized virtual assistance packages",
    ],
  },
  {
    category: "Coworking Space*",
    icon: Plane,
    items: [
      "Shared workspace for freelancers, entrepreneurs, and remote workers",
      "High-speed internet, printing, and scanning facilities",
      "Networking opportunities and community events",
    ],
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

export default function ResourceServiceHub() {
  const [expandedCategory, setExpandedCategory] = useState<string | null>(null);

  return (
    <div className="bg-gradient-to-br text-red">
      <header className="text-center">
        <h1 className="mb-4 text-4xl font-bold sm:text-5xl lg:text-6xl">
          Our <span className="text-gray-700">Services</span>
        </h1>
        {/* <p className="mx-auto max-w-2xl text-xl text-gray-500">
          Discover our comprehensive range of services and resources designed to
          meet your diverse needs
        </p> */}
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
