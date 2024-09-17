import { motion } from "framer-motion";
import { Facebook, Instagram, Linkedin, Twitter } from "lucide-react";
import { Footer } from "../components/Footer";

import { ChevronDown, ChevronUp, Search } from "lucide-react";
import { useState } from "react";
const jobOpenings = [
  {
    title: "AI Research Scientist",
    department: "Technology",
    location: "Tech City",
    type: "Full-time",
    description:
      "Join our cutting-edge AI team to develop next-generation machine learning algorithms and push the boundaries of artificial intelligence.",
  },
  {
    title: "Sustainable Energy Engineer",
    department: "Engineering",
    location: "Green Town",
    type: "Full-time",
    description:
      "Help shape the future of renewable energy by designing and implementing innovative sustainable energy solutions.",
  },
  {
    title: "Quantum Computing Specialist",
    department: "Technology",
    location: "Quantum Valley",
    type: "Full-time",
    description:
      "Work on groundbreaking quantum computing projects and contribute to the development of quantum algorithms and applications.",
  },
  {
    title: "Blockchain Developer",
    department: "Technology",
    location: "Crypto City",
    type: "Full-time",
    description:
      "Build decentralized applications and smart contracts using cutting-edge blockchain technologies.",
  },
  {
    title: "Biotech Researcher",
    department: "Research & Development",
    location: "BioHub",
    type: "Full-time",
    description:
      "Conduct innovative research in biotechnology to develop new solutions for healthcare and environmental challenges.",
  },
];

type JobOpenings = (typeof jobOpenings)[0];

const JobListing = (job: JobOpenings) => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <motion.div
      className="bg-emerald-800 bg-opacity-30 rounded-lg p-6 backdrop-blur-md hover:bg-opacity-40 transition-all duration-300"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div
        className="flex justify-between items-center cursor-pointer"
        onClick={() => setIsExpanded(!isExpanded)}
      >
        <h3 className="text-xl font-semibold text-emerald-300">{job.title}</h3>
        {isExpanded ? (
          <ChevronUp className="text-emerald-300" />
        ) : (
          <ChevronDown className="text-emerald-300" />
        )}
      </div>
      <div className="mt-2 flex flex-wrap gap-2">
        <span className="bg-purple-600 text-white px-2 py-1 rounded-full text-sm">
          {job.department}
        </span>
        <span className="bg-emerald-600 text-white px-2 py-1 rounded-full text-sm">
          {job.location}
        </span>
        <span className="bg-indigo-600 text-white px-2 py-1 rounded-full text-sm">
          {job.type}
        </span>
      </div>
      {isExpanded && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          exit={{ opacity: 0, height: 0 }}
          transition={{ duration: 0.3 }}
          className="mt-4"
        >
          <p className="text-gray-300">{job.description}</p>
          <motion.button
            className="mt-4 bg-gradient-to-r from-emerald-500 to-purple-500 text-white px-6 py-2 rounded-full font-semibold hover:from-emerald-600 hover:to-purple-600 transition-all duration-300"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Apply Now
          </motion.button>
        </motion.div>
      )}
    </motion.div>
  );
};
export default function Career() {
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
              5amas Group Careers
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
      <CareerPage />
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

export function CareerPage() {
  const [searchTerm, setSearchTerm] = useState("");

  const filteredJobs = jobOpenings.filter(
    (job) =>
      job.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      job.department.toLowerCase().includes(searchTerm.toLowerCase()) ||
      job.location.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="min-h-screen  mt-10 bg-gradient-to-br from-emerald-900 via-purple-900 to-indigo-900 py-20 text-white">
      <div className="container mx-auto px-4">
        <motion.h1
          className="text-5xl font-bold text-center mb-8"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Join Our{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-purple-400">
            Innovative Team
          </span>
        </motion.h1>

        <motion.p
          className="text-center text-xl mb-12 max-w-2xl mx-auto"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          At 5amas Group, we're shaping the future through cutting-edge
          technology and sustainable innovation. Join us and make a difference!
        </motion.p>

        <div className="mb-12 relative">
          <input
            type="text"
            placeholder="Search for jobs..."
            className="w-full bg-emerald-800 bg-opacity-30 text-white placeholder-gray-400 rounded-full py-3 px-6 pl-12 focus:outline-none focus:ring-2 focus:ring-emerald-500"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" />
        </div>

        <div className="space-y-6">
          {filteredJobs.map((job, index) => (
            <JobListing key={index} {...job} />
          ))}
        </div>

        {filteredJobs.length === 0 && (
          <motion.p
            className="text-center text-xl mt-12"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            No job openings match your search. Please try different keywords.
          </motion.p>
        )}

        <motion.div
          className="mt-16 text-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.5 }}
        >
          <h2 className="text-3xl font-semibold mb-4">
            Don't see a perfect fit?
          </h2>
          <p className="mb-6 text-lg text-gray-300">
            We're always looking for talented individuals to join our team. Send
            us your resume, and we'll keep you in mind for future opportunities.
          </p>
          <motion.a
            href="#contact"
            className="inline-block rounded-full bg-gradient-to-r from-emerald-500 to-purple-500 px-8 py-3 text-lg font-semibold text-white transition-all hover:from-emerald-600 hover:to-purple-600"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Submit Your Resume
          </motion.a>
        </motion.div>
      </div>
    </div>
  );
}
