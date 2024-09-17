import { motion } from "framer-motion";
import { Facebook, Instagram, Linkedin, Twitter } from "lucide-react";
import { Footer } from "../components/Footer";
import AnimatedTeamPage from "../components/AnimatedTeam";

export default function Team() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header / Value Proposition */}
      <header className="relative bg-gradient-to-r from-blue-400 to-purple-400 py-20 text-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="relative z-10"
          >
            <h1 className="mb-4 text-4xl font-bold sm:text-5xl lg:text-6xl">
              Our Team
            </h1>
            <p className="max-w-2xl text-xl">
              Driving innovation and sustainable growth across investment, food,
              and technology sectors
            </p>
          </motion.div>
        </div>
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="absolute bottom-0 right-0 h-64 w-64 translate-y-1/2 rounded-tl-full bg-white"
        ></motion.div>
      </header>
      {/* Mission, Vision, and Core Values */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid gap-8 md:grid-cols-2 md:w-2/3 mx-auto my-10">
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="rounded-lg bg-white p-8 shadow-lg"
            >
              <h2 className="mb-4 text-2xl font-bold text-emerald-600">
                Our Mission
              </h2>
              <p className="text-gray-600">
                Our mission is to improve the quality of life for the
                communities we serve globally by creating long-term value
                through Leadership with Trust.
              </p>
            </motion.div>
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="rounded-lg bg-white p-8 shadow-lg"
            >
              <h2 className="mb-4 text-2xl font-bold text-emerald-600">
                Our Vision
              </h2>
              <p className="text-gray-600">
                To be a global leader in fostering sustainable development and
                trust-driven growth, improving the well-being of communities
                worldwide.
              </p>
            </motion.div>
          </div>
        </div>
      </section>
      <AnimatedTeamPage />
      <Footer
        Ficon={<Facebook />}
        Ticon={<Twitter />}
        Iicon={<Instagram />}
        Licon={<Linkedin />}
        Flink="https://www.facebook.com/profile.php?id=61558674541651&mibextid=ZbWKwL"
        Ilink="https://www.instagram.com/5amasgroup?igsh=cnJiOGpjOXlscWZt"
        Llink="https://www.linkedin.com/company/5amas-group"
        Tlink="https://www.x.com/5amastchltd?t=-545yqxqAKmN3F6M9jZaIA&s=08"
      />
    </div>
  );
}
