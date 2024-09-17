import { motion } from "framer-motion";
import group from "../assets/logo_main.png";
import resources from "../assets/resources_ogo.png";
import food from "../assets/food_logo.png";
import technoogy from "../assets/technology_logo.png";
import foundation from "../assets/foundation_logo.png";
import jabi from "../assets/jabi_kitchen.png";

const partners = [
  { name: "5Amas Group", logo: group },
  { name: "5Amas Resources", logo: resources },
  { name: "5Amas Food", logo: food },
  { name: "5Amas Technology", logo: technoogy },
  { name: "5Amas Foundation", logo: foundation },
  { name: "Jabi Deight Kitchen", logo: jabi },
];

const MarqueeContent = () => (
  <>
    {partners.map((partner) => (
      <motion.div
        key={partner.name}
        className="flex items-center justify-center mx-8 w-48 h-24 bg-white bg-opacity-10 rounded-lg backdrop-blur-sm hover:bg-opacity-20 transition-all duration-300"
        whileHover={{ scale: 1.05 }}
      >
        <img
          src={partner.logo}
          alt={`${partner.name} logo`}
          width={160}
          height={60}
        />
      </motion.div>
    ))}
  </>
);

export function PartnerMarquee() {
  return (
    <div className="w-full bg-gradient-to-r from-emerald-900 via-purple-900 to-emerald-900 py-16 overflow-hidden">
      <div className="container mx-auto px-4 mb-8">
        <motion.h2
          className="text-4xl font-bold text-center mb-8"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Our
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-purple-400">
            Trusted Partners
          </span>
        </motion.h2>
      </div>

      <div className="relative">
        <div className="absolute top-0 left-0 w-1/4 h-full bg-gradient-to-r from-emerald-900 to-transparent z-10"></div>
        <div className="absolute top-0 right-0 w-1/4 h-full bg-gradient-to-l from-emerald-900 to-transparent z-10"></div>

        <motion.div
          className="flex whitespace-nowrap"
          animate={{
            x: [0, -2880],
          }}
          transition={{
            x: {
              repeat: Infinity,
              repeatType: "loop",
              duration: 50,
              ease: "linear",
            },
          }}
        >
          <MarqueeContent />
          <MarqueeContent />
        </motion.div>
      </div>

      <div className="container mx-auto px-4 mt-8">
        <motion.p
          className="text-center text-lg text-emerald-100"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.5 }}
        >
          Collaborating with industry leaders to shape the future of innovation.
        </motion.p>
      </div>
    </div>
  );
}
