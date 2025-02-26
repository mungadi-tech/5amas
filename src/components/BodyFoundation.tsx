import { motion, useAnimation, AnimatePresence } from "framer-motion";
import { ArrowRight, Globe, Heart, Users } from "lucide-react";
import { ReactNode, useState } from "react";
import foundation1 from "../assets/foundation1.png";
import foundation2 from "../assets/foundation2.png";
import foundation3 from "../assets/foundation3.png";
import foundation4 from "../assets/foundation4.png";
import { toast } from "react-toastify";

// Define the type for the SkillAcquisitionModal props
interface SkillAcquisitionModalProps {
  isOpen: boolean;
  onClose: () => void;
}

// SkillAcquisitionModal Component

interface SkillAcquisitionModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const SkillAcquisitionModal = ({ isOpen, onClose }: SkillAcquisitionModalProps) => {
  const [formData, setFormData] = useState({
    name: "",
    age: "",
    jambPin: "",
    phone: "",
    address: "",
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      const response = await fetch("https://fiveamas-backend.onrender.com/api/apply", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error("Failed to submit form. Please try again.");
      }

      const result = await response.json();
      console.log("Form Data Submitted:", result);

      toast.success("Application submitted successfully! We will reach out to you through your phone number.");
      onClose(); // Close the modal after submission
    } catch (error) {
      console.error("Error submitting form:", error);
      toast.error("Something went wrong. Please try again.");
    }
  };

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <motion.div
        className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      >
        <motion.div
          className="bg-white rounded-lg w-full max-w-md p-6"
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: -50, opacity: 0 }}
        >
          <h2 className="text-2xl font-semibold mb-4 text-black">Apply for Free JAMB Form</h2>
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label className="block text-sm font-medium mb-1 text-black">Full Name</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                className="w-full p-2 border rounded-lg text-black"
                required
              />
            </div>
            <div className="mb-4">
              <label className="block text-sm font-medium mb-1 text-black">Age</label>
              <input
                type="number"
                name="age"
                value={formData.age}
                onChange={handleInputChange}
                className="w-full p-2 border rounded-lg text-black"
                required
              />
            </div>
            <div className="mb-4">
              <label className="block text-sm font-medium mb-1 text-black">JAMB PIN</label>
              <input
                type="text"
                name="jambPin"
                value={formData.jambPin}
                onChange={handleInputChange}
                className="w-full p-2 border rounded-lg text-black"
                required
              />
            </div>
            <div className="mb-4">
              <label className="block text-sm font-medium mb-1 text-black">Phone Number (Used for JAMB Registration)</label>
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleInputChange}
                className="w-full p-2 border rounded-lg text-black"
                required
              />
            </div>
            <div className="mb-4">
              <label className="block text-sm font-medium mb-1 text-black">Address</label>
              <input
                type="text"
                name="address"
                value={formData.address}
                onChange={handleInputChange}
                className="w-full p-2 border rounded-lg text-black"
                required
              />
            </div>
            <div className="flex justify-end gap-2">
              <button
                type="button"
                onClick={onClose}
                className="px-4 py-2 text-sm font-medium text-gray-700 bg-gray-100 rounded-lg hover:bg-gray-200"
              >
                Cancel
              </button>
              <button
                type="submit"
                className="px-4 py-2 text-sm font-medium text-white bg-cyan-600 rounded-lg hover:bg-cyan-500"
              >
                Submit
              </button>
            </div>
          </form>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};


export default SkillAcquisitionModal;


// ProjectCard Component
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
      className="bg-cyan-900 bg-opacity-50 h-96 rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300"
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
        <h3 className="text-xl font-semibold text-cyan-200 mb-2">{title}</h3>
        <p>{description}</p>
      </div>
    </motion.div>
  );
};

// StatItem Component
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
    <div className="w-8 h-8 mx-auto mb-2 text-cyan-400">{icon}</div>
    <motion.div
      className="text-3xl font-bold text-cyan-200 mb-1"
      initial={{ scale: 1 }}
      whileInView={{ scale: [1, 1.2, 1] }}
      viewport={{ once: true, amount: 0.5 }}
      transition={{ duration: 1, times: [0, 0.5, 1] }}
    >
      {value}
    </motion.div>
    <div className="text-cyan-300">{label}</div>
  </motion.div>
);

// FoundationPage Component
export function FoundationPage() {
  const [isModalOpen, setIsModalOpen] = useState(false);

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
    <div className="min-h-screen bg-gradient-to-br from-cyan-900 via-purple-900 to-cyan-800 text-white py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Upcoming Events Section */}
        {/* <motion.div
          className="flex flex-col md:flex-row bg-purple-800 bg-opacity-75 rounded-xl p-6 mb-10"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          id="skill-acquisition-event"
        >
          <img
            src="https://images.unsplash.com/photo-1531482615713-2afd69097998?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" // Replace with the appropriate image for the event
            alt="Free Skill Acquisition Program"
            className="h-full md:w-1/2 h-60 object-cover rounded-lg mb-4 md:mb-0 md:mr-6"
          />
          <div className="flex flex-col justify-center text-center md:text-left">
            <h2 className="text-5xl font-semibold text-cyan-100 mb-2">Free Skill Acquisition Program</h2>
            <p className="text-cyan-200 mb-4 text-2xl">
              Join us for a transformative skill acquisition program designed to empower individuals with practical and digital skills. Whether you're interested in vocational training, digital skills, or entrepreneurship, this program is for you!
            </p>
            <div className="mb-6">
              <h3 className="text-3xl font-semibold text-cyan-100 mb-2">Skills Offered:</h3>
              <ul className="text-cyan-200 text-xl list-disc list-inside">
                <li>Tailoring and Fashion Design</li>
                <li>Graphic Design and Digital Marketing</li>
                <li>Catering and Baking</li>
                <li>Web Development and Coding</li>
                <li>Entrepreneurship and Financial Literacy</li>
              </ul>
            </div>
            <motion.button
              onClick={() => setIsModalOpen(true)}
              className="self-center md:self-start inline-flex items-center px-5 py-3 rounded-full bg-cyan-600 text-white font-semibold text-lg transition duration-300 ease-in-out hover:bg-cyan-500"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Register Now
              <ArrowRight className="ml-2 w-5 h-5" />
            </motion.button>
          </div>
        </motion.div> */}

        <motion.div
          className="flex flex-col md:flex-row bg-purple-800 bg-opacity-75 rounded-xl p-6 mb-10"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          id="free-jamb-form-empowerment"
        >
          <img
            src="https://cdn.punchng.com/wp-content/uploads/2017/06/01170036/JAMB-logo.jpg" // Replace with an appropriate image for the event
            alt="Free JAMB Form Empowerment"
            className="h-full md:w-1/2 h-60 object-cover rounded-lg mb-4 md:mb-0 md:mr-6"
          />
          <div className="flex flex-col justify-center text-center md:text-left">
            <h2 className="text-5xl font-semibold text-cyan-100 mb-2">Free JAMB Form Empowerment</h2>
            <p className="text-cyan-200 mb-4 text-2xl">
              We are offering free JAMB forms to support students who aspire to further their education.
              This initiative is aimed at easing the financial burden and encouraging academic excellence.
              Don't miss this opportunity to take a step toward your future!
            </p>
            <div className="mb-6">
              <h3 className="text-3xl font-semibold text-cyan-100 mb-2">Program Benefits:</h3>
              <ul className="text-cyan-200 text-xl list-disc list-inside">
                <li>Free JAMB form for eligible students</li>
                <li>Guidance on JAMB registration</li>
                <li>Access to past questions and study materials</li>
                <li>Free tutorial sessions to boost exam preparation</li>
                <li>Motivational and career counseling</li>
              </ul>
            </div>
            <motion.button
              onClick={() => setIsModalOpen(true)}
              className="self-center md:self-start inline-flex items-center px-5 py-3 rounded-full bg-cyan-600 text-white font-semibold text-lg transition duration-300 ease-in-out hover:bg-cyan-500"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Apply Now
              <ArrowRight className="ml-2 w-5 h-5" />
            </motion.button>
          </div>
        </motion.div>


        {/* Rest of the FoundationPage content */}
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
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400">
              {" "}
              Foundation
            </span>
          </motion.h1>
          <motion.p
            className="text-xl text-cyan-200 max-w-3xl mx-auto"
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
          <div className="bg-cyan-800 bg-opacity-50 rounded-2xl p-8 backdrop-blur-lg">
            <h2 className="text-3xl font-semibold mb-4 text-center">
              Our Mission
            </h2>
            <p className="text-cyan-200 text-center max-w-3xl mx-auto">
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
          <div className="bg-gradient-to-r from-purple-600 to-cyan-600 rounded-2xl p-8 text-center">
            <h2 className="text-3xl font-semibold mb-4">Join Our Cause</h2>
            <p className="text-cyan-200 mb-6 max-w-2xl mx-auto">
              Your support can help us continue our vital work and expand our
              reach. Together, we can make a lasting impact on communities
              around the world.
            </p>
            <motion.a
              href="#donate"
              className="inline-flex items-center px-6 py-3 rounded-full bg-white text-cyan-700 font-semibold text-lg transition duration-300 ease-in-out hover:bg-cyan-100"
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

      {/* Skill Acquisition Modal */}
      <SkillAcquisitionModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </div>
  );
}