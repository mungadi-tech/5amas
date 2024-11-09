import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { ArrowRight } from "lucide-react";
import { SwapTextCard } from "./animata/card/swap-text-card";
import { Heading, Text } from "@radix-ui/themes";
import { Link } from "react-router-dom";

// List of animations to choose from
const animations = [
  "fade-up",
  "fade-down",
  "fade-left",
  "fade-right",
  "zoom-in",
  "zoom-out",
  "flip-left",
  "flip-right",
];

function getRandomAnimation() {
  return animations[Math.floor(Math.random() * animations.length)];
}

export function Body() {
  useEffect(() => {
    AOS.init({
      duration: 1000, // Animation duration
      easing: "ease-in-out", // Easing function for animations
      once: true, // Only animate once
    });
  }, []);

  return (
    <>
      <main className="bg-white">
        {/* About Us Section */}
        <section className="py-16 lg:py-24">
          <div className="container mx-auto px-4">
            <Heading
              size={{ initial: "7", md: "9" }}
              className="mb-8"
              align={"center"}
              color="purple"
            >
              About 5amas Group
            </Heading>
            <div
              data-aos={getRandomAnimation()}
              className="mx-auto max-w-3xl text-center text-lg text-gray-600"
            >
              <Text align={"center"}>
                5amas Group is a dynamic and innovative holding company
                operating across multiple sectors. We focus on strategic growth
                and sustainable development, creating value and driving positive
                change in the industries we operate in.
              </Text>
            </div>
            <div
              data-aos={getRandomAnimation()}
              className="mx-auto max-w-3xl text-center text-lg text-purple-500"
            >
              <Link to={"/about"}>
                <Text align={"center"}>Read More...</Text>
              </Link>
            </div>
          </div>
        </section>

        {/* Our Sectors Section */}
        <section>
          <div className="container mx-auto px-4">
            <Heading
              size={{ initial: "7", md: "9" }}
              className="mb-8"
              align={"center"}
              color="purple"
            >
              Our Sectors
            </Heading>
            <div className="grid gap-8 md:grid-cols-4">
              {[
                {
                  title: "Investment",
                  link: "",
                  final_text:
                    "Empowering communities with sustainable solutions and opportunities.",
                  description:
                    "Multifaceted investment company offering tailored solutions and services",
                },
                {
                  title: "Food",
                  link: "",
                  final_text:
                    "Empowering communities with sustainable solutions and opportunities.",
                  description:
                    "5AMAS Foods offers agriculture, catering, and e-commerce solutions.",
                },
                {
                  title: "Technology",
                  link: "",
                  final_text:
                    "Empowering communities with sustainable solutions and opportunities.",
                  description:
                    "Cutting-edge technological advancements and solutions",
                },
                {
                  title: "Foundation",
                  link: "hahahah",
                  final_text:
                    "Empowering communities with sustainable solutions and opportunities.",
                  description:
                    "Empowering communities with sustainable solutions and opportunities.",
                },
              ].map((sector, index) => (
                <div key={index} data-aos={getRandomAnimation()}>
                  <SwapTextCard
                    link={sector.link}
                    key={index}
                    title={sector.title}
                    finalText={sector.final_text}
                    initialText={sector.description}
                  />
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Key Figures Section */}
        <section className="py-4 lg:py-10">
          <div className="container mx-auto px-4">
            <h2
              className="mb-12 text-center text-3xl font-bold text-purple-800 lg:text-4xl"
              data-aos={getRandomAnimation()}
            >
              Key Figures
            </h2>
            <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
              {[
                { figure: "200M+", description: "Total Investments" },
                { figure: "50+", description: "Portfolio Companies" },
                { figure: "4", description: "Core Sectors" },
                { figure: "100+", description: "Employees Worldwide" },
              ].map((stat, index) => (
                <div
                  key={index}
                  data-aos={getRandomAnimation()}
                  className="text-center"
                >
                  <p className="mb-2 text-4xl font-bold text-purple-600">
                    {stat.figure}
                  </p>
                  <p className="text-lg text-gray-600">{stat.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Latest News Section */}
        <section className="py-4 lg:py-8">
          <div className="container mx-auto px-4">
            <h2
              className="mb-12 text-center text-3xl font-bold text-purple-600 lg:text-4xl"
              data-aos={getRandomAnimation()}
            >
              Latest News
            </h2>
            <div className="grid gap-8 md:grid-cols-3">
              {[
                {
                  title: "5amas Group Expands Food Tech Portfolio",
                  date: "May 15, 2023",
                },
                {
                  title: "New Sustainable Investment Initiative Launched",
                  date: "April 28, 2023",
                },
                {
                  title: "5amas Tech Division Partners with AI Startup",
                  date: "April 10, 2023",
                },
              ].map((news, index) => (
                <div
                  key={index}
                  data-aos={getRandomAnimation()}
                  className="rounded-lg bg-[var(--accent-3)] p-6 shadow-md transition-all hover:shadow-lg"
                >
                  <h3 className="mb-2 text-xl font-semibold text-gray-900">
                    {news.title}
                  </h3>
                  <p className="mb-4 text-sm text-gray-500">{news.date}</p>
                  <a
                    href="#"
                    className="inline-flex items-center text-emerald-500 hover:underline"
                  >
                    Read More <ArrowRight className="ml-2 h-4 w-4" />
                  </a>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
