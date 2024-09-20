import { motion } from "framer-motion";
import { Facebook, Instagram, Linkedin, Twitter } from "lucide-react";
import { Footer } from "../components/Footer";

import { Button, Container, Heading, Text } from "@radix-ui/themes";
import { Link } from "react-router-dom";
import { HeroHeader } from "../components/HeroHeader";

const newsArticles = [
  {
    id: 1,
    title: "5amas Group Expands Virtual Office Services",
    date: "May 15, 2023",
    excerpt:
      "5amas Group announces the expansion of its virtual office services to meet the growing demand for flexible work solutions...",
  },
  {
    id: 2,
    title: "New Tech Hub Opens in Downtown Metro City",
    date: "April 28, 2023",
    excerpt:
      "5amas Group unveils its latest state-of-the-art tech hub in the heart of Metro City, offering cutting-edge facilities for startups and established tech companies alike...",
  },
  {
    id: 3,
    title:
      "5amas Group Partners with Local Businesses for Sustainability Initiative",
    date: "April 10, 2023",
    excerpt:
      "In a move towards greater environmental responsibility, 5amas Group announces a new partnership with local businesses to implement sustainable practices across its office spaces...",
  },
];

// type JobOpenings = (typeof jobOpenings)[0];

// const JobListing = (job: JobOpenings) => {
//   const [isExpanded, setIsExpanded] = useState(false);

//   return (
//     <motion.div
//       className="bg-emerald-800 bg-opacity-30 rounded-lg p-6 backdrop-blur-md hover:bg-opacity-40 transition-all duration-300"
//       initial={{ opacity: 0, y: 20 }}
//       animate={{ opacity: 1, y: 0 }}
//       transition={{ duration: 0.5 }}
//     >
//       <div
//         className="flex justify-between items-center cursor-pointer"
//         onClick={() => setIsExpanded(!isExpanded)}
//       >
//         <h3 className="text-xl font-semibold text-emerald-300">{job.title}</h3>
//         {isExpanded ? (
//           <ChevronUp className="text-emerald-300" />
//         ) : (
//           <ChevronDown className="text-emerald-300" />
//         )}
//       </div>
//       <div className="mt-2 flex flex-wrap gap-2">
//         <span className="bg-purple-600 text-white px-2 py-1 rounded-full text-sm">
//           {job.department}
//         </span>
//         <span className="bg-emerald-600 text-white px-2 py-1 rounded-full text-sm">
//           {job.location}
//         </span>
//         <span className="bg-indigo-600 text-white px-2 py-1 rounded-full text-sm">
//           {job.type}
//         </span>
//       </div>
//       {isExpanded && (
//         <motion.div
//           initial={{ opacity: 0, height: 0 }}
//           animate={{ opacity: 1, height: "auto" }}
//           exit={{ opacity: 0, height: 0 }}
//           transition={{ duration: 0.3 }}
//           className="mt-4"
//         >
//           <p className="text-gray-300">{job.description}</p>
//           <motion.button
//             className="mt-4 bg-gradient-to-r from-emerald-500 to-purple-500 text-white px-6 py-2 rounded-full font-semibold hover:from-emerald-600 hover:to-purple-600 transition-all duration-300"
//             whileHover={{ scale: 1.05 }}
//             whileTap={{ scale: 0.95 }}
//           >
//             Apply Now
//           </motion.button>
//         </motion.div>
//       )}
//     </motion.div>
//   );
// };
export default function Career() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header / Value Proposition */}
      <HeroHeader
        heading="5amas Group Careers"
        slogan=" - Driving innovation and sustainable growth across investment,food, and technology sectors
  "
      />

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
  return (
    <>
      {" "}
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4">
          <Heading
            size={{ initial: "7", md: "9" }}
            className="mb-8"
            align={"center"}
            color="purple"
          >
            Conduct and Ethics Summary
          </Heading>
          <Container className="text-center">
            <Text color="gray" size={"2"}>
              At 5amas Group, we prioritize ethical conduct and integrity across
              our operations in investment, food, and technology. We foster a
              culture of honesty, transparency, and collaboration, valuing
              diverse perspectives to achieve common goals. Our investment
              strategies emphasize social responsibility, ensuring alignment
              with our core values and positive societal impact. We focus on
              innovation and excellence, developing cutting-edge products that
              meet customer needs while adhering to all laws and regulations.
              Accountability is key, with each team member responsible for
              upholding our ethical standards. By engaging with local
              communities, we aim to enhance quality of life and create lasting
              value for stakeholders.
            </Text>
          </Container>
        </div>
      </section>
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
            technology and sustainable innovation. Join us and make a
            difference!
          </motion.p>

          <div className="grid gap-4 md:grid-cols-3">
            {newsArticles.map((article) => (
              <motion.article
                key={article.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="rounded-lg bg-slate-200 bg-opacity-10 p-6 backdrop-blur-lg"
              >
                <Heading>{article.title}</Heading>
                <p className="mb-4">
                  <Text className="text-emerald-300" size={"1"}>
                    {article.date}
                  </Text>
                </p>
                <p>
                  <Text size={"1"} className="text-white">
                    {article.excerpt}
                  </Text>
                </p>
                <motion.div
                  className="mt-4 inline-block text-red-400 hover:text-red-300"
                  whileHover={{ x: 5 }}
                >
                  <Link to={""}>
                    <Button>Read more</Button>
                  </Link>
                </motion.div>
              </motion.article>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
