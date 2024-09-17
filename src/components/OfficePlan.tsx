import { motion } from "framer-motion";
import { BookOfficeSpace } from "./BookOfficeSpace";

export default function FuturisticPricingPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-red-800 to-purple-800 py-20 text-white">
      <div className="container mx-auto px-4">
        <motion.h1
          className="mb-12 text-center text-5xl font-bold"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Future-Ready
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">
            Office Solutions
          </span>
        </motion.h1>

        <BookOfficeSpace />
        {/* Call to Action */}
        <motion.div
          className="mt-20 text-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.5 }}
        >
          <p className="mb-6 text-lg">
            Experience the future of work with our innovative office solutions.
          </p>
          <motion.a
            href="#contact"
            className="inline-block rounded-full bg-white px-8 py-3 text-lg font-semibold text-purple-900 transition-colors hover:bg-blue-100"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Schedule a Tour
          </motion.a>
        </motion.div>
      </div>
    </div>
  );
}
