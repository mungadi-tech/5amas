import { Em, Text } from "@radix-ui/themes";
import { motion } from "framer-motion";

export function HeroHeader({
  heading,
  slogan,
}: {
  slogan: string;
  heading: string;
}) {
  return (
    <header className="relative bg-gradient-to-r from-blue-400 to-purple-400 py-20 text-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="relative z-10"
        >
          <h1 className="mb-4 text-4xl font-bold sm:text-5xl lg:text-6xl text-[var(--accent-12)] lg:text-white">
            {heading}
          </h1>

          <Em>
            <Text size={"4"} color="gray">
              {slogan}
            </Text>
          </Em>
        </motion.div>
      </div>
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="absolute bottom-0 right-0 h-64 w-64 translate-y-1/2 rounded-tl-full bg-white"
      ></motion.div>
    </header>
  );
}
