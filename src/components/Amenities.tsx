import { motion } from "framer-motion";
import {
  Briefcase,
  Car,
  Clock,
  Coffee,
  HeadphonesIcon,
  Mail,
  Shield,
  Wifi,
} from "lucide-react";
import { ReactNode } from "react";

const amenities = [
  {
    icon: Mail,
    name: "Mail Forwarding",
    description: "Secure mail handling and forwarding services",
  },
  {
    icon: Wifi,
    name: "Unlimited Internet",
    description: "High-speed, reliable internet connection",
  },
  {
    icon: HeadphonesIcon,
    name: "Customer Support",
    description: "24/7 dedicated customer support",
  },
  {
    icon: Briefcase,
    name: "Business Services",
    description: "Printing, scanning, and administrative support",
  },
  {
    icon: Car,
    name: "Free Parking",
    description: "Complimentary parking for you and your guests",
  },
  {
    icon: Coffee,
    name: "Lounge Access",
    description: "Comfortable lounge areas for breaks and informal meetings",
  },
  {
    icon: Clock,
    name: "24/7 Access",
    description: "Round-the-clock access to your office space",
  },
  {
    icon: Shield,
    name: "Security",
    description: "State-of-the-art security systems for your peace of mind",
  },
];

const AmenityCard = ({
  Icon,
  name,
  description,
}: {
  Icon: ReactNode;
  name: string;
  description: string;
}) => (
  <motion.div
    className="flex flex-col items-center rounded-lg bg-purple-900 bg-opacity-50 p-6 text-center shadow-lg backdrop-blur-lg transition-all hover:bg-opacity-70"
    whileHover={{ scale: 1.05 }}
    whileTap={{ scale: 0.95 }}
  >
    {Icon}
    <h3 className="mb-2 text-xl font-semibold text-white">{name}</h3>
    <p className="text-sm text-purple-200">{description}</p>
  </motion.div>
);

export function AmenitiesSection() {
  return (
    <section className="text-white">
      <div className="container mx-auto px-4">
        <motion.h2
          className="mb-12 text-center text-4xl font-bold"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Our
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-400 to-purple-400">
            Premium Amenities
          </span>
        </motion.h2>

        <motion.div
          className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4"
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
          {amenities.map((amenity) => (
            <motion.div
              key={amenity.name}
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0 },
              }}
            >
              <AmenityCard
                Icon={<amenity.icon className="mb-4 h-12 w-12 text-red-400" />}
                {...amenity}
              />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
