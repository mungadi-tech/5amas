import { motion, useAnimation } from "framer-motion";
import { Instagram, Mail, Twitter } from "lucide-react";
import { useEffect, useState } from "react";
import ceo from "../assets/ceo.jpg";
import ibrahim from "../assets/ibrahim.jpg";
import mulikat from "../assets/mulikat.jpg";

const teamMembers = [
  {
    name: "Fatima Mohammed Koro",
    role: "President/CEO",
    image: ceo,
    bio: "Fatima brings over 20 years of experience in strategic leadership and innovation.",
    Instagram: "https://www.instagram.com/fatimakoro?igsh=bGkyN2htcGRtY3Nu",
    twitter: "https://twitter.com",
    email: "fatima@5amasgroup.com",
  },
  {
    name: "Abdurasheed Ibrahim",
    role: "GM 5amas Foundation",
    image: "/placeholder.svg?height=400&width=400",
    Instagram: "https://www.instagram.com/fatimakoro?igsh=bGkyN2htcGRtY3Nu",
    twitter: "https://twitter.com",
    email: "john@5amasgroup.com",
  },
  {
    name: "Ibrahim Abubakar Bunza",
    role: "Chief Admin Officer 5amas Group",
    image: ibrahim,
    Instagram: "https://www.instagram.com/fatimakoro?igsh=bGkyN2htcGRtY3Nu",
    twitter: "https://twitter.com",
    email: "emily@5amasgroup.com",
  },
  {
    name: "Tajudeen Arowolo",
    role: "GM  5amas Technologies",
    image: "/placeholder.svg?height=400&width=400",
    Instagram: "https://www.instagram.com/fatimakoro?igsh=bGkyN2htcGRtY3Nu",
    twitter: "https://twitter.com",
    email: "michael@5amasgroup.com",
  },
  {
    name: "Mulikat Bello",
    role: "GM 5amas Foods",
    image: mulikat,
    Instagram: "https://www.instagram.com/fatimakoro?igsh=bGkyN2htcGRtY3Nu",
    twitter: "https://twitter.com",
    email: "sarah@5amasgroup.com",
  },
  {
    name: "Darajah Abubakar",
    role: " GM 5amas Resources",
    image: "/placeholder.svg?height=400&width=400",
    Instagram: "https://www.instagram.com/fatimakoro?igsh=bGkyN2htcGRtY3Nu",
    twitter: "https://twitter.com",
    email: "david@5amasgroup.com",
  },
];

export default function AnimatedTeamPage() {
  const [selectedMember, setSelectedMember] = useState<
    (typeof teamMembers)[0] | null
  >(null);
  const controls = useAnimation();

  useEffect(() => {
    controls.start((i) => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.1 },
    }));
  }, [controls]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-900 to-emerald-700 py-20 text-white">
      <div className="container mx-auto px-4">
        <motion.h1
          className="mb-12 text-center text-5xl font-bold"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Meet Our <span className="text-emerald-300">Innovative Team</span>
        </motion.h1>

        <motion.div
          className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3"
          initial="hidden"
          animate="visible"
          variants={{
            visible: {
              transition: { staggerChildren: 0.1 },
            },
          }}
        >
          {teamMembers.map((member) => (
            <motion.div
              key={member.name}
              className="group relative overflow-hidden rounded-lg bg-white bg-opacity-10 p-6 backdrop-blur-lg transition-all duration-300 hover:bg-opacity-20"
              variants={{
                hidden: { opacity: 0, y: 50 },
                visible: { opacity: 1, y: 0 },
              }}
              whileHover={{ scale: 1.05 }}
              onHoverStart={() => setSelectedMember(member)}
              onHoverEnd={() => setSelectedMember(null)}
            >
              <div className="relative mb-4 h-48 w-48 overflow-hidden rounded-full mx-auto">
                <img
                  src={member.image}
                  alt={member.name}
                  className="transition-transform h-48 w-48 duration-300 group-hover:scale-110 object-cover"
                />
              </div>
              <h2 className="mb-2 text-center text-2xl font-semibold">
                {member.name}
              </h2>
              <p className="mb-4 text-center text-emerald-300">{member.role}</p>
              <motion.div
                className="mt-4 flex justify-center space-x-4"
                initial={{ opacity: 0 }}
                animate={{ opacity: selectedMember === member ? 1 : 0 }}
                transition={{ duration: 0.3 }}
              >
                <a
                  href={member.Instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white hover:text-emerald-300"
                >
                  <Instagram className="h-6 w-6" />
                  <span className="sr-only"></span>
                </a>
                <a
                  href={member.twitter}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white hover:text-emerald-300"
                >
                  <Twitter className="h-6 w-6" />
                  <span className="sr-only">Twitter</span>
                </a>
                <a
                  href={`mailto:${member.email}`}
                  className="text-white hover:text-emerald-300"
                >
                  <Mail className="h-6 w-6" />
                  <span className="sr-only">Email</span>
                </a>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          className="mt-16 text-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.5 }}
        >
          <p className="mb-6 text-lg">
            Our team is dedicated to driving innovation and excellence in every
            aspect of 5amas Group's operations.
          </p>
          <motion.a
            href="#contact"
            className="inline-block rounded-full bg-white px-6 py-3 text-emerald-700 transition-colors hover:bg-emerald-100"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Join Our Team
          </motion.a>
        </motion.div>
      </div>
    </div>
  );
}
