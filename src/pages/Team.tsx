import { motion } from "framer-motion";
import { Facebook, Instagram, Linkedin, Twitter } from "lucide-react";
import { Footer } from "../components/Footer";
import AnimatedTeamPage from "../components/AnimatedTeam";
import { HeroHeader } from "../components/HeroHeader";

export default function Team() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header / Value Proposition */}
      <HeroHeader
        heading="Our Team"
        slogan=" - Driving innovation and sustainable growth across investment,food, and technology sectors
  "
      />

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
