import { ArrowRight } from "lucide-react";
import { SwapTextCard } from "./animata/card/swap-text-card";
import { Heading, Text } from "@radix-ui/themes";
import { Link } from "react-router-dom";
import { Marquee } from "./magicui/marquee";
import { cn } from "../lib/utils";
import fo_logo from "../assets/food_logo.png";
import r_logo from "../assets/resources_ogo.png";
import t_logo from "../assets/technology_logo.png";
import f_logo from "../assets/foundation_logo.png";

export function Body() {
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
            <div className="mx-auto max-w-3xl text-center text-lg text-gray-600">
              <Text align={"center"}>
                5amas Group is a dynamic and innovative holding company
                operating across multiple sectors. We focus on strategic growth
                and sustainable development, creating value and driving positive
                change in the industries we operate in.
              </Text>
            </div>
            <div className="mx-auto max-w-3xl text-center text-lg text-purple-500">
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
                    " Empowering communities with sustainable solutions and opportunities.",
                  description:
                    "Empowering communities with sustainable solutions and opportunities.",
                },
              ].map((sector, index) => (
                <SwapTextCard
                  link={sector.link}
                  key={index}
                  title={sector.title}
                  finalText={sector.final_text}
                  initialText={sector.description}
                />
              ))}
            </div>
          </div>
        </section>
        <section>
          <Heading size={"8"} align={"center"} color="purple" mt={"9"}>
            Our Partners
          </Heading>
          <MarqueeSection />
        </section>

        {/* Key Figures Section */}
        <section className="py-4 lg:py-10">
          <div className="container mx-auto px-4">
            <h2 className="mb-12 text-center text-3xl font-bold text-purple-800 lg:text-4xl">
              Key Figures
            </h2>
            <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
              {[
                { figure: "200M+", description: "Total Investments" },
                { figure: "50+", description: "Portfolio Companies" },
                { figure: "4", description: "Core Sectors" },
                { figure: "100+", description: "Employees Worldwide" },
              ].map((stat, index) => (
                <div key={index} className="text-center">
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
            <h2 className="mb-12 text-center text-3xl font-bold text-purple-600 lg:text-4xl">
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

const reviews = [
  {
    img: fo_logo,
  },
  {
    img: r_logo,
  },
  {
    img: t_logo,
  },
  {
    img: f_logo,
  },
];

const ReviewCard = ({ img }: { img: string }) => {
  return (
    <figure
      className={cn(
        "relative cursor-pointer overflow-hidden rounded-xl border p-4",
        // light styles
        "border-gray-950/[.1] bg-gray-950/[.01] hover:bg-gray-950/[.05]",
        // dark styles
        "dark:border-gray-50/[.1] dark:bg-gray-50/[.10] dark:hover:bg-gray-50/[.15]"
      )}
    >
      <div className="flex flex-row items-center gap-2">
        <img
          className="rounded-full"
          width="100"
          height="100"
          alt=""
          src={img}
        />
      </div>
    </figure>
  );
};

export function MarqueeSection() {
  return (
    <div className="relative flex h-[200px] w-full flex-col items-center justify-center overflow-hidden rounded-lg bg-background md:shadow-xl">
      <Marquee pauseOnHover className="[--duration:20s]">
        {reviews.map((review) => (
          <ReviewCard key={review.img} {...review} />
        ))}
      </Marquee>
      <div className="pointer-events-none absolute inset-y-0 left-0 w-1/3 bg-gradient-to-r from-white dark:from-background"></div>
      <div className="pointer-events-none absolute inset-y-0 right-0 w-1/3 bg-gradient-to-l from-white dark:from-background"></div>
    </div>
  );
}
