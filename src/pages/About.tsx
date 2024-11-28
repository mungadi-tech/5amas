import {
  Button,
  Card,
  Container,
  Heading,
  Inset,
  Text,
} from "@radix-ui/themes";
import { motion } from "framer-motion";
import {
  ArrowRight,
  Facebook,
  Instagram,
  Linkedin,
  Twitter,
} from "lucide-react";
import { useState } from "react";
import ceo from "../assets/ceo.jpg";
import finance from "../assets/finance.jpg";
import mulikat from "../assets/mulikat.jpg";
import operation from "../assets/operation.jpg";
import pic2 from "../assets/pic2_1_optimized_1000.jpg";
import gov from "../assets/pic3.jpg";
import strategy from "../assets/strategy.jpg";
import { Footer } from "../components/Footer";
import { HeroHeader } from "../components/HeroHeader";
import taj from "../assets/images/taj.jpg"
import ibm from "../assets/images/ibm.jpg"
import dera from "../assets/images/dera.jpg"

export default function About() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header / Value Proposition */}
      <HeroHeader
        heading="About 5amas Group"
        slogan=" - Driving innovation and sustainable growth across investment,food, and technology sectors
  "
      />
      <section className="py-8 lg:py-14">
        <div className="container mx-auto px-4">
          <Heading
            size={{ initial: "7", md: "9" }}
            className="mb-8"
            align={"center"}
            color="purple"
          >
            Who We Are
          </Heading>
          <Container className="text-center">
            <Text color="gray" size={"2"}>
              5amas Group is a dynamic and innovative holding company that
              operates in multiple sectors, including investment, food, and
              technology. With a strong focus on strategic growth and
              sustainable development, 5amas Group strives to create value and
              drive positive change in the industries it operates in. We are
              dedicated to identifying and nurturing promising opportunities in
              various sectors. With a team of experienced professionals, the
              investment company carefully evaluates potential investments and
              provides the necessary resources and expertise to support their
              growth and success. By actively managing its portfolio, We aim to
              generate long-term returns for our stakeholders. We are focused on
              developing cutting-edge solutions that address the needs of
              today’s digital world. We create innovative products and services
              that enhance efficiency, connectivity, and user experience.
              Whether it’s developing software solutions, mobile applications,
              or hardware devices, 5amas Group’s technology company strives to
              make a positive impact in the tech industry. With a shared vision
              of growth and excellence, We collaborate and leverage each other’s
              strengths to create synergies and achieve mutual success. By
              fostering a culture of innovation, integrity, and collaboration,
              5amas Group is poised to make a lasting impact in the investment,
              food, and technology sectors.
            </Text>
          </Container>
        </div>
      </section>
      {/* Mission, Vision, and Core Values */}
      <section>
        <div className="container mx-auto px-4">
          <div className="grid gap-8 md:grid-cols-2 md:w-2/3 mx-auto my-10">
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="rounded-lg bg-white p-8 shadow-lg"
            >
              <Heading color="purple" mb={"4"}>
                Our Mission
              </Heading>
              <p className="text-gray-600">
                Our mission is to improve the quality of life for the
                communities we serve globally by creating long-term value
                through Leadership with Trust.
              </p>
            </motion.div>
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="rounded-lg bg-white p-8 shadow-lg"
            >
              <Heading color="purple" mb={"4"}>
                Our Vision
              </Heading>
              <p className="text-gray-600">
                To be a global leader in fostering sustainable development and
                trust-driven growth, improving the well-being of communities
                worldwide.
              </p>
            </motion.div>
          </div>
          <CoreValues />
        </div>
      </section>

      {/* Leadership Team */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="mb-12 text-center text-3xl font-bold text-gray-800">
            Our Leadership
          </h2>
          <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5">
            {[
              {
                name: "Fatima Mohammed Koro",
                title: "CEO/President",
                image: ceo,
              },
              {
                name: "MULIKAT BELLO ",
                title: "Chief Marketing Officer",
                image: mulikat,
              },
              {
                name: "Abubakar Ibrahim",
                title: "Customer Relations Manager",
                image: ibm,
              },
              {
                name: "Tajudeen Arowolo",
                title: "Chief Operating Officer",
                image: taj,
              },
              {
                name: "Darajah Abubakar",
                title: "Business Development Consultant",
                image: dera,
              },
            ].map((leader, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.05 }}
                className="overflow-hidden rounded-lg w-full  bg-white shadow-lg mx-auto"
              >
                <Inset>
                  <img
                    src={leader.image}
                    alt={leader.name}
                    className="w-full md:h-[20rem]"
                  />
                </Inset>

                <div className="p-4 text-center">
                  <Heading size={"3"}>{leader.name}</Heading>
                  <p className="text-purple-700">{leader.title}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className=" py-20 text-purple-800">
        <div className="container mx-auto px-4 text-center">
          <h2 className="mb-4 text-3xl font-bold">
            Join Us in Shaping the Future
          </h2>
          <p className="mb-8 text-xl">
            Discover opportunities to collaborate and innovate with 5amas Group
          </p>
          <motion.a
            href="/contact"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center rounded-full bg-purple-700 px-8 py-4 text-lg font-semibold text-white transition-colors hover:bg-gray-400"
          >
            Get in Touch
            <ArrowRight className="ml-2 h-5 w-5" />
          </motion.a>
        </div>
      </section>

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

function CoreValues() {
  const [valueActive, setValueActive] = useState("Integrity");
  return (
    <>
      <div className="md:hidden">
        <Card variant="ghost" style={{ margin: "auto" }} className="w-[90%]">
          <Heading align={"center"} color="purple" size={"8"}>
            Our Core Values
          </Heading>
          <div className="flex flex-col items-center justify-around mt-10">
            <ul className="flex overflow-auto w-full mb-6">
              {[
                "Integrity",
                "Governance and Compliance",
                "Operational Excellence",
                "Strategic Vision",
                "Financial Acumen",
              ].map((value, index) => (
                <div key={index} className="flex">
                  <motion.div
                    initial={{ opacity: 1 }}
                    animate={{
                      scale: valueActive === value ? 1 : 0.9,
                    }}
                  >
                    <Button
                      radius="full"
                      size={"1"}
                      mb={"2"}
                      style={{ width: "10rem", height: "3rem" }}
                      variant={value === valueActive ? "solid" : "ghost"}
                      onClick={() => setValueActive(value)}
                    >
                      {value}
                    </Button>
                  </motion.div>
                </div>
              ))}
            </ul>
            {valueActive === "Integrity" && (
              <motion.div
                initial={{ x: 300 }}
                animate={{ x: 1 }}
                transition={{ duration: 0.5, bounce: false }}
              >
                <Card
                  variant="ghost"
                  style={{
                    background: "var(--accent-11)",
                    height: "22rem",
                  }}
                >
                  <Inset clip="padding-box" side="top" pb="current">
                    <img src={pic2} alt="" />
                  </Inset>
                  <Text size={"2"} style={{ color: "white" }}>
                    We will be honest, transparent, fair and ethical in all of
                    our dealings, and avoid any conflicts of interest
                  </Text>
                </Card>
              </motion.div>
            )}
            {valueActive === "Governance and Compliance" && (
              <motion.div
                initial={{ x: 500 }}
                animate={{ x: 1 }}
                transition={{ duration: 0.5, bounce: false }}
              >
                <Card
                  variant="ghost"
                  style={{
                    background: "var(--accent-11)",
                    height: "22rem",
                  }}
                >
                  <Inset clip="padding-box" side="top" pb="current">
                    <img src={gov} alt="" />
                  </Inset>
                  <Text size={"2"} style={{ color: "white" }}>
                    We have a responsibility to ensure that our subsidiaries
                    operate ethically and comply with all applicable laws and
                    regulations. This includes having a strong corporate
                    governance framework and robust risk management practices
                  </Text>
                </Card>
              </motion.div>
            )}
            {valueActive === "Operational Excellence" && (
              <motion.div
                initial={{ x: 500 }}
                animate={{ x: 1 }}
                transition={{ duration: 0.5, bounce: false }}
              >
                <Card
                  variant="ghost"
                  style={{
                    background: "var(--accent-11)",
                    height: "22rem",
                  }}
                >
                  <Inset clip="padding-box" side="top" pb="current">
                    <img src={operation} alt="" />
                  </Inset>
                  <Text size={"2"} style={{ color: "white" }}>
                    We have laid out high standards for performance, efficiency,
                    and continuous improvement of our subsidiaries.
                  </Text>
                </Card>
              </motion.div>
            )}

            {valueActive === "Strategic Vision" && (
              <motion.div
                initial={{ x: 500 }}
                animate={{ x: 1 }}
                transition={{ duration: 0.5, bounce: false }}
              >
                <Card
                  variant="ghost"
                  style={{
                    background: "var(--accent-11)",
                    height: "22rem",
                  }}
                >
                  <Inset clip="padding-box" side="top" pb="current">
                    <img src={strategy} alt="" />
                  </Inset>
                  <Text size={"2"} style={{ color: "white" }}>
                    We identify and invest in businesses that complement each
                    other and contribute to the overall success of our company.
                  </Text>
                </Card>
              </motion.div>
            )}
            {valueActive === "Financial Acumen" && (
              <motion.div
                initial={{ x: 500 }}
                animate={{ x: 1 }}
                transition={{ duration: 0.5, bounce: false }}
              >
                <Card
                  variant="ghost"
                  style={{
                    background: "var(--accent-11)",
                    height: "22rem",
                  }}
                >
                  <Inset clip="padding-box" side="top" pb="current">
                    <img src={finance} alt="" />
                  </Inset>
                  <Text size={"2"} style={{ color: "white" }}>
                    We imbibe strong financial management skills to make sound
                    investment decisions, manage risk, and allocate resources
                    effectively.
                  </Text>
                </Card>
              </motion.div>
            )}
          </div>
        </Card>
      </div>
      <div className="hidden md:block ">
        <Card variant="ghost" style={{ margin: "auto" }} className="w-[90%]">
          <Heading align={"center"} color="purple" size={"8"}>
            Our Core Values
          </Heading>
          <div className="flex items-center justify-around mt-10">
            <ul className="">
              {[
                "Integrity",
                "Governance and Compliance",
                "Operational Excellence",
                "Strategic Vision",
                "Financial Acumen",
              ].map((value, index) => (
                <div key={index} className="flex relative items-center">
                  <motion.div
                    initial={{ opacity: 1 }}
                    animate={{
                      scale: valueActive === value ? 1 : 0.9,
                    }}
                  >
                    <Button
                      radius="none"
                      ml={"5"}
                      mb={"6"}
                      variant={value === valueActive ? "solid" : "ghost"}
                      onClick={() => setValueActive(value)}
                    >
                      {value === valueActive && (
                        <span className="absolute -inset-x-2 h-10 w-1 bg-[var(--accent-11)] z-30" />
                      )}
                      {value}
                    </Button>
                  </motion.div>
                  <span className="absolute -inset-x-2 h-full w-1 bg-[var(--accent-5)]" />
                </div>
              ))}
            </ul>
            {valueActive === "Integrity" && (
              <motion.div
                initial={{ x: 500 }}
                animate={{ x: 100 }}
                transition={{ duration: 0.5, bounce: false }}
              >
                <Card
                  variant="ghost"
                  m={"4"}
                  style={{
                    width: "30rem",
                    background: "var(--accent-11)",
                    height: "26rem",
                  }}
                >
                  <Inset clip="padding-box" side="top" pb="current">
                    <img src={pic2} alt="" />
                  </Inset>
                  <Text size={"2"} style={{ color: "white" }}>
                    We will be honest, transparent, fair and ethical in all of
                    our dealings, and avoid any conflicts of interest
                  </Text>
                </Card>
              </motion.div>
            )}
            {valueActive === "Governance and Compliance" && (
              <motion.div
                initial={{ x: 500 }}
                animate={{ x: 100 }}
                transition={{ duration: 0.5, bounce: false }}
              >
                <Card
                  variant="ghost"
                  m={"4"}
                  style={{
                    width: "30rem",
                    background: "var(--accent-11)",
                    height: "26rem",
                  }}
                >
                  <Inset clip="padding-box" side="top" pb="current">
                    <img src={gov} alt="" />
                  </Inset>
                  <Text size={"2"} style={{ color: "white" }}>
                    We have a responsibility to ensure that our subsidiaries
                    operate ethically and comply with all applicable laws and
                    regulations. This includes having a strong corporate
                    governance framework and robust risk management practices
                  </Text>
                </Card>
              </motion.div>
            )}
            {valueActive === "Operational Excellence" && (
              <motion.div
                initial={{ x: 500 }}
                animate={{ x: 100 }}
                transition={{ duration: 0.5, bounce: false }}
              >
                <Card
                  m={"4"}
                  variant="ghost"
                  style={{
                    width: "30rem",
                    background: "var(--accent-11)",
                    height: "26rem",
                  }}
                >
                  <Inset clip="padding-box" side="top" pb="current">
                    <img src={operation} alt="" />
                  </Inset>
                  <Text size={"2"} style={{ color: "white" }}>
                    We have laid out high standards for performance, efficiency,
                    and continuous improvement of our subsidiaries.
                  </Text>
                </Card>
              </motion.div>
            )}

            {valueActive === "Strategic Vision" && (
              <motion.div
                initial={{ x: 500 }}
                animate={{ x: 100 }}
                transition={{ duration: 0.5, bounce: false }}
              >
                <Card
                  variant="ghost"
                  m={"4"}
                  style={{
                    width: "30rem",
                    background: "var(--accent-11)",
                    height: "26rem",
                  }}
                >
                  <Inset clip="padding-box" side="top" pb="current">
                    <img src={strategy} alt="" />
                  </Inset>
                  <Text size={"2"} style={{ color: "white" }}>
                    We identify and invest in businesses that complement each
                    other and contribute to the overall success of our company.
                  </Text>
                </Card>
              </motion.div>
            )}
            {valueActive === "Financial Acumen" && (
              <motion.div
                initial={{ x: 500 }}
                animate={{ x: 100 }}
                transition={{ duration: 0.5, bounce: false }}
              >
                <Card
                  variant="ghost"
                  m={"4"}
                  style={{
                    width: "30rem",
                    background: "var(--accent-11)",
                    height: "26rem",
                  }}
                >
                  <Inset clip="padding-box" side="top" pb="current">
                    <img src={finance} alt="" />
                  </Inset>
                  <Text size={"2"} style={{ color: "white" }}>
                    We imbibe strong financial management skills to make sound
                    investment decisions, manage risk, and allocate resources
                    effectively.
                  </Text>
                </Card>
              </motion.div>
            )}
          </div>
        </Card>
      </div>
    </>
  );
}
