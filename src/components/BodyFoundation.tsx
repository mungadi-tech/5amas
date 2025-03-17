import { motion, useAnimation } from "framer-motion";
import { ArrowRight, Globe, Heart, Users } from "lucide-react";
import { ReactNode } from "react";
import foundation1 from "../assets/foundation1.png";
import foundation2 from "../assets/foundation2.png";
import foundation3 from "../assets/foundation3.png";
import foundation4 from "../assets/foundation4.png";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination, Autoplay } from "swiper/modules";
import img1 from "../assets/chipo/Picture1.png";
import img2 from "../assets/chipo/Picture2.png";
import img3 from "../assets/chipo/Picture3.png";
import img4 from "../assets/chipo/Picture4.png";
import img5 from "../assets/chipo/Picture5.png";
import img6 from "../assets/chipo/Picture6.png";
import img7 from "../assets/chipo/Picture7.png";
import img8 from "../assets/chipo/Picture8.png";
import img9 from "../assets/chipo/Picture9.png";
import img10 from "../assets/chipo/Picture10.png";
import img11 from "../assets/chipo/Picture11.png";
import img12 from "../assets/chipo/Picture12.png";


// // Define the type for the SkillAcquisitionModal props
// interface SkillAcquisitionModalProps {
//   isOpen: boolean;
//   onClose: () => void;
// }

// // SkillAcquisitionModal Component

// interface SkillAcquisitionModalProps {
//   isOpen: boolean;
//   onClose: () => void;
// }

// const SkillAcquisitionModal = ({ isOpen, onClose }: SkillAcquisitionModalProps) => {
//   const [formData, setFormData] = useState({
//     name: "",
//     age: "",
//     jambPin: "",
//     phone: "",
//     address: "",
//   });

//   const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//     const { name, value } = e.target;
//     setFormData((prevData) => ({
//       ...prevData,
//       [name]: value,
//     }));
//   };

//   const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
//     e.preventDefault();

//     try {
//       const response = await fetch("https://fiveamas-backend-main.onrender.com/api/apply", {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//         },
//         body: JSON.stringify(formData),
//       });

//       if (!response.ok) {
//         throw new Error("Failed to submit form. Please try again.");
//       }

//       const result = await response.json();
//       console.log("Form Data Submitted:", result);

//       toast.success("Application submitted successfully! We will reach out to you through your phone number.");
//       onClose(); // Close the modal after submission
//     } catch (error) {
//       console.error("Error submitting form:", error);
//       toast.error("Something went wrong. Please try again.");
//     }
//   };

//   if (!isOpen) return null;

//   return (
//     <AnimatePresence>
//       <motion.div
//         className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4"
//         initial={{ opacity: 0 }}
//         animate={{ opacity: 1 }}
//         exit={{ opacity: 0 }}
//       >
//         <motion.div
//           className="bg-white rounded-lg w-full max-w-md p-6"
//           initial={{ y: -50, opacity: 0 }}
//           animate={{ y: 0, opacity: 1 }}
//           exit={{ y: -50, opacity: 0 }}
//         >
//           <h2 className="text-2xl font-semibold mb-4 text-black">Apply for Free JAMB Form</h2>
//           <form onSubmit={handleSubmit}>
//             <div className="mb-4">
//               <label className="block text-sm font-medium mb-1 text-black">Full Name</label>
//               <input
//                 type="text"
//                 name="name"
//                 value={formData.name}
//                 onChange={handleInputChange}
//                 className="w-full p-2 border rounded-lg text-black"
//                 required
//               />
//             </div>
//             <div className="mb-4">
//               <label className="block text-sm font-medium mb-1 text-black">Age</label>
//               <input
//                 type="number"
//                 name="age"
//                 value={formData.age}
//                 onChange={handleInputChange}
//                 className="w-full p-2 border rounded-lg text-black"
//                 required
//               />
//             </div>
//             <div className="mb-4">
//               <label className="block text-sm font-medium mb-1 text-black">JAMB PIN</label>
//               <input
//                 type="text"
//                 name="jambPin"
//                 value={formData.jambPin}
//                 onChange={handleInputChange}
//                 className="w-full p-2 border rounded-lg text-black"
//                 required
//               />
//             </div>
//             <div className="mb-4">
//               <label className="block text-sm font-medium mb-1 text-black">Phone Number (Used for JAMB Registration)</label>
//               <input
//                 type="tel"
//                 name="phone"
//                 value={formData.phone}
//                 onChange={handleInputChange}
//                 className="w-full p-2 border rounded-lg text-black"
//                 required
//               />
//             </div>
//             <div className="mb-4">
//               <label className="block text-sm font-medium mb-1 text-black">Address</label>
//               <input
//                 type="text"
//                 name="address"
//                 value={formData.address}
//                 onChange={handleInputChange}
//                 className="w-full p-2 border rounded-lg text-black"
//                 required
//               />
//             </div>
//             <div className="flex justify-end gap-2">
//               <button
//                 type="button"
//                 onClick={onClose}
//                 className="px-4 py-2 text-sm font-medium text-gray-700 bg-gray-100 rounded-lg hover:bg-gray-200"
//               >
//                 Cancel
//               </button>
//               <button
//                 type="submit"
//                 className="px-4 py-2 text-sm font-medium text-white bg-cyan-600 rounded-lg hover:bg-cyan-500"
//               >
//                 Submit
//               </button>
//             </div>
//           </form>
//         </motion.div>
//       </motion.div>
//     </AnimatePresence>
//   );
// };


// export default SkillAcquisitionModal;


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
  // const [isModalOpen, setIsModalOpen] = useState(false);

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

        <motion.section
          className="mb-20 px-6 md:px-12 lg:px-20"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8 }}
        >
          <div className="bg-gray-900 bg-opacity-75 p-10 rounded-2xl shadow-lg backdrop-blur-md">
            <h2 className="text-4xl font-extrabold text-center text-cyan-400 mb-6">
              CHIPO WASH Intervention Project 🚰
            </h2>

            <p className="text-lg text-gray-300 text-center max-w-4xl mx-auto mb-6">
              The <strong>CHIPO WASH Intervention Project</strong>, spearheaded by
              <span className="text-cyan-300"> 5AMAS Foundation</span>, is a
              transformative effort to combat open defecation and improve sanitation
              practices in Chipo Community, Tafa LGA, Niger State. Through strategic
              advocacy, hands-on training, and direct community involvement, the
              project empowers residents with sustainable hygiene solutions.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Left Section: Project Details */}
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.8 }}
                className="bg-gray-800 p-6 rounded-xl shadow-md"
              >
                <h3 className="text-2xl font-semibold text-cyan-300 mb-4">
                  Project Highlights 📌
                </h3>
                <ul className="text-gray-300 space-y-3">
                  <li>✅ Planning meeting with key stakeholders and 5AMAS Foundation</li>
                  <li>✅ Advocacy visits to Tafa LGA and Chipo Village leadership</li>
                  <li>✅ Six-day CLTS (Community-Led Total Sanitation) training</li>
                  <li>✅ Community Triggering Exercise to spark sanitation awareness</li>
                  <li>✅ Geophysics water survey for sustainable clean water access</li>
                </ul>
              </motion.div>

              {/* Right Section: Image Slider */}
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.8 }}
                className="overflow-hidden rounded-xl shadow-lg"
              >
                <Swiper
                  spaceBetween={10}
                  slidesPerView={1}
                  pagination={{ clickable: true }}
                  autoplay={{ delay: 2500, disableOnInteraction: false }}
                  modules={[Pagination, Autoplay]}
                  className="rounded-lg overflow-hidden max-h-[400px]"
                >
                  {[img1, img2, img3, img4, img5, img6, img7, img8, img9, img10, img11, img12].map(
                    (image, index) => (
                      <SwiperSlide key={index}>
                        <img
                          src={image}
                          alt={`Project Image ${index + 1}`}
                          className="rounded-lg w-full object-cover max-h-[400px]"
                        />
                      </SwiperSlide>
                    )
                  )}
                </Swiper>
              </motion.div>
            </div>

            {/* Challenges and Recommendations */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.8 }}
              className="mt-10 bg-gray-800 p-6 rounded-xl shadow-md"
            >
              <h3 className="text-2xl font-semibold text-cyan-300 mb-4">
                Challenges & Recommendations ⚠️
              </h3>
              <p className="text-gray-300 mb-4">
                Despite the progress made, the project faced some challenges, including
                difficult terrain, long travel distances, and security concerns. To
                ensure smooth implementation, we recommend:
              </p>
              <ul className="text-gray-300 space-y-2">
                <li>🔹 Improved logistical planning for field visits</li>
                <li>🔹 Provision for overnight stays when necessary</li>
                <li>🔹 Continued engagement with community leaders for sustainability</li>
              </ul>
            </motion.div>

            {/* Upload Section */}
            <div className="text-center mt-8">
              <motion.button
                className="bg-gradient-to-r from-cyan-500 to-purple-500 px-8 py-3 rounded-full text-white font-bold text-lg transition duration-300 ease-in-out hover:scale-105 hover:shadow-lg"
                whileHover={{
                  scale: 1.05,
                  boxShadow: "0px 0px 12px rgba(0, 255, 255, 0.5)",
                }}
                whileTap={{ scale: 0.95 }}
              >
                📂 Download Progress Report
              </motion.button>
            </div>
          </div>
        </motion.section>



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

      {/* Skill Acquisition Modal
      <SkillAcquisitionModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} /> */}
    </div>
  );
}