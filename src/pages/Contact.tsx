import { Card, Heading, Text, TextArea, TextField } from "@radix-ui/themes";
import { motion } from "framer-motion";
import {
  ArrowRight,
  ChevronDown,
  ChevronUp,
  Facebook,
  Instagram,
  Linkedin,
  Mail,
  MapPin,
  Phone,
  Twitter,
} from "lucide-react";
import { useEffect, useState } from "react";
import mapp from "../assets/mapp.png";
import { Footer } from "../components/Footer";

export default function FuturisticContactAndSupport() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  mousePosition;
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  const faqs = [
    {
      question: "What sectors does 5amas Group operate in?",
      answer:
        "5amas Group operates in multiple sectors, primarily focusing on investment, food, and technology. We strive to drive innovation and sustainable growth across these industries.",
    },
    {
      question: "How can I explore investment opportunities with 5amas Group?",
      answer:
        "To explore investment opportunities, please fill out our contact form or reach out to our investment team directly. We're always looking for innovative projects and partnerships that align with our vision for sustainable growth.",
    },
    {
      question: "Does 5amas Group offer internship or job opportunities?",
      answer:
        "Yes, we regularly offer internship and job opportunities across our various sectors. Please visit our careers page or send your resume through our contact form for consideration.",
    },
    {
      question:
        "How does 5amas Group approach sustainability in its operations?",
      answer:
        "Sustainability is a core value at 5amas Group. We integrate sustainable practices across all our operations and investments, focusing on environmental responsibility, social impact, and long-term economic viability.",
    },
  ];

  return (
    <div className="min-h-screen bg-[--var(accent-3)] text-[var(--accent-11)]">
      {/* Header */}
      <header className="relative overflow-hidden py-20">
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="container mx-auto px-4 text-center"
        >
          <h1 className="mb-4 text-5xl font-bold tracking-tight sm:text-6xl">
            Contact{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">
              5amas Group
            </span>
          </h1>
          <Heading size={"4"}>
            Reach out for inquiries, support, or future collaborations
          </Heading>
        </motion.div>
        <div className="absolute inset-0 -z-10 [mask-image:radial-gradient(ellipse_at_center,white,transparent)]">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-emerald-500 opacity-30 blur-3xl"></div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-12">
        <div className="grid gap-12 lg:grid-cols-2">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="rounded-2xl bg-white bg-opacity-10 p-8 backdrop-blur-lg"
          >
            <h2 className="mb-6 text-2xl font-bold">Send Us a Message</h2>
            <Card>
              <form className="space-y-4">
                <div>
                  <label
                    htmlFor="name"
                    className="mb-1 block text-sm font-medium"
                  >
                    Name
                  </label>
                  <TextField.Root id="name" name="name" required />
                </div>
                <div>
                  <label
                    htmlFor="email"
                    className="mb-1 block text-sm font-medium"
                  >
                    Email
                  </label>
                  <TextField.Root
                    type="email"
                    id="email"
                    name="email"
                    required
                  />
                </div>
                <div>
                  <label
                    htmlFor="subject"
                    className="mb-1 block text-sm font-medium"
                  >
                    Subject
                  </label>
                  <TextField.Root
                    type="text"
                    id="subject"
                    name="subject"
                    required
                  />
                </div>
                <div>
                  <label
                    htmlFor="message"
                    className="mb-1 block text-sm font-medium"
                  >
                    Message
                  </label>
                  <TextArea id="message" name="message" rows={4} required />
                </div>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  type="submit"
                  className="inline-flex items-center rounded-md bg-gradient-to-r from-purple-500 to-emerald-500 px-4 py-2 text-white hover:from-purple-600 hover:to-purple-600 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2 focus:ring-offset-gray-900"
                >
                  Send Message
                  <ArrowRight className="ml-2 h-5 w-5" />
                </motion.button>
              </form>
            </Card>
          </motion.div>

          {/* Contact Information and Map */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="rounded-2xl bg-[var(--accent-3)] bg-opacity-10 p-8 backdrop-blur-lg"
          >
            <h2 className="mb-6 text-2xl font-bold">Contact Information</h2>
            <div className="mb-6 space-y-4">
              <div className="flex items-center">
                <Mail className="mr-3 h-5 w-5 text-purple-400" />
                <span>contact@5amasgroup.com</span>
              </div>
              <div className="flex items-center">
                <Phone className="mr-3 h-5 w-5 text-[var(--accent-11)]" />
                <span>+234 (80) 9271-2814</span>
              </div>
              <div className="flex items-center">
                <MapPin className="mr-3 h-5 w-5 text-[var(--accent-11)]" />
                <span>Suit 44, Vikbalkom Tower, Jabi-Abuja.</span>
              </div>
            </div>
            <div className="overflow-hidden rounded-lg">
              <img
                src={mapp}
                alt="Map of 5amas Group location"
                width={500}
                height={300}
                className="w-full object-cover"
              />
            </div>
          </motion.div>
        </div>

        {/* Support Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-16 md:w-1/2 mx-auto"
        >
          <h2 className="mb-6 text-2xl font-bold">
            Frequently Asked Questions
          </h2>
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                className="rounded-lg border bg-opacity-50 backdrop-blur-sm"
                initial={false}
                animate={{
                  backgroundColor:
                    openFaq === index ? "var(--accent-5)" : "var(--accent-3)",
                }}
                transition={{ duration: 0.3 }}
              >
                <button
                  className="flex w-full items-center justify-between px-4 py-3 text-left"
                  onClick={() => setOpenFaq(openFaq === index ? null : index)}
                  aria-expanded={openFaq === index}
                >
                  <span className="font-medium">{faq.question}</span>
                  {openFaq === index ? (
                    <ChevronUp className="h-5 w-5 text-[var(--accent-11)]" />
                  ) : (
                    <ChevronDown className="h-5 w-5 text-[var(--accent-11)]" />
                  )}
                </button>
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{
                    height: openFaq === index ? "auto" : 0,
                    opacity: openFaq === index ? 1 : 0,
                  }}
                  transition={{ duration: 0.3 }}
                  className="overflow-hidden"
                >
                  <div className="px-4 py-3">
                    <Text size={"2"}>{faq.answer}</Text>
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
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
