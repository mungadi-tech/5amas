import { motion, useAnimation } from "framer-motion";
import { ArrowRight, Globe, Heart, Users } from "lucide-react";
import { ReactNode } from "react";
import foundation1 from "../assets/foundation1.png";
import foundation2 from "../assets/foundation2.png";
import foundation3 from "../assets/foundation3.png";
import foundation4 from "../assets/foundation4.png";

const ProjectCard = ({
  title,
  description,
  image,
}: {
  title: string;
  description: string;
  image: string;
}) => {
  const controls = useAnimation();

  return (
    <motion.div
      className="bg-indigo-900 bg-opacity-50 h-96 rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300"
      whileHover={{ scale: 1.05 }}
      transition={{ duration: 0.3 }}
      onHoverStart={() => {
        controls.start({ opacity: 1, y: 0 });
      }}
      onHoverEnd={() => {
        controls.start({ opacity: 0, y: 20 });
      }}
    >
      <div className="relative">
        <img
          src={image}
          alt={title}
          width={400}
          height={300}
          className="w-full h-48 object-cover"
        />
      </div>
      <div className="p-6">
        <h3 className="text-xl font-semibold text-indigo-200 mb-2">{title}</h3>
        <p>{description}</p>
      </div>
    </motion.div>
  );
};

const StatItem = ({
  icon,
  value,
  label,
}: {
  icon: ReactNode;
  value: string;
  label: string;
}) => (
  <motion.div
    className="text-center"
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, amount: 0.5 }}
    transition={{ duration: 0.5 }}
  >
    <div className="w-8 h-8 mx-auto mb-2 text-indigo-400">{icon}</div>
    <motion.div
      className="text-3xl font-bold text-indigo-200 mb-1"
      initial={{ scale: 1 }}
      whileInView={{ scale: [1, 1.2, 1] }}
      viewport={{ once: true, amount: 0.5 }}
      transition={{ duration: 1, times: [0, 0.5, 1] }}
    >
      {value}
    </motion.div>
    <div className="text-indigo-300">{label}</div>
  </motion.div>
);

export function FoundationPage() {
  const projects = [
    {
      title: "Clean Energy Initiative",
      description:
        "Providing sustainable energy solutions to underserved communities.",
      image: foundation1,
    },
    {
      title: "Digital Literacy Program",
      description:
        "Empowering youth with essential tech skills for the future.",
      image: foundation2,
    },
    {
      title: "Ocean Cleanup Project",
      description:
        "Innovative technologies to remove plastic waste from our oceans.",
      image: foundation3,
    },
    {
      title: "AI for Healthcare",
      description:
        "Leveraging artificial intelligence to improve medical diagnostics.",
      image: foundation4,
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-900 via-purple-900 to-indigo-800 text-white py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <motion.header
          className="text-center mb-20"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.h1
            className="text-5xl font-bold mb-4"
            initial={{ scale: 0.5, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            5amas Group
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-purple-400">
              Foundation
            </span>
          </motion.h1>
          <motion.p
            className="text-xl text-indigo-200 max-w-3xl mx-auto"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.5 }}
          >
            Empowering communities through innovation, sustainability, and
            education for a brighter future.
          </motion.p>
        </motion.header>

        <motion.section
          className="mb-20"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-3xl font-semibold mb-8 text-center">
            Our Impact
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <StatItem icon={<Heart />} value="0.5M+" label="Lives Impacted" />
            <StatItem icon={<Users />} value="10+" label="Global Partners" />
            <StatItem icon={<Globe />} value="10" label="States Reached" />
          </div>
        </motion.section>

        <motion.section
          className="mb-20"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, amount: 0.1 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-3xl font-semibold mb-8 text-center">
            Featured Projects
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <ProjectCard {...project} />
              </motion.div>
            ))}
          </div>
        </motion.section>

        <motion.section
          className="mb-20"
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8 }}
        >
          <div className="bg-indigo-800 bg-opacity-50 rounded-2xl p-8 backdrop-blur-lg">
            <h2 className="text-3xl font-semibold mb-4 text-center">
              Our Mission
            </h2>
            <p className="text-indigo-200 text-center max-w-3xl mx-auto">
              At 5amas Group Foundation, we strive to harness the power of
              cutting-edge technology and innovation to address global
              challenges. Our mission is to create sustainable solutions that
              empower communities, protect the environment, and foster education
              for a more equitable world.
            </p>
          </div>
        </motion.section>

        <motion.section
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8 }}
        >
          <div className="bg-gradient-to-r from-purple-600 to-indigo-600 rounded-2xl p-8 text-center">
            <h2 className="text-3xl font-semibold mb-4">Join Our Cause</h2>
            <p className="text-indigo-200 mb-6 max-w-2xl mx-auto">
              Your support can help us continue our vital work and expand our
              reach. Together, we can make a lasting impact on communities
              around the world.
            </p>
            <motion.a
              href="#donate"
              className="inline-flex items-center px-6 py-3 rounded-full bg-white text-indigo-700 font-semibold text-lg transition duration-300 ease-in-out hover:bg-indigo-100"
              whileHover={{
                scale: 1.05,
                boxShadow: "0px 0px 8px rgb(255,255,255)",
              }}
              whileTap={{ scale: 0.95 }}
            >
              Donate Now
              <ArrowRight className="ml-2 w-5 h-5" />
            </motion.a>
          </div>
        </motion.section>
      </div>
    </div>
  );
}
