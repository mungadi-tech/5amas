import { Container, Heading, Text } from "@radix-ui/themes";
import { Facebook, Instagram, Linkedin, Twitter } from "lucide-react";
import { Footer } from "../components/Footer";

import { HeroHeader } from "../components/HeroHeader";
import { MediaPage } from "../components/Media";

export default function Media() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header / Value Proposition */}
      <HeroHeader
        heading="5amas Group Media"
        slogan=" - Driving innovation and sustainable growth across investment,food, and technology sectors
  "
      />
      <section className="py-16 lg:py-24">
        <Container p={"4"}>
          <Heading
            size={{ initial: "7", md: "9" }}
            className="mb-8"
            align={"left"}
            color="purple"
          >
            Who We Are
          </Heading>
          <div className="text-left text-lg text-gray-600">
            <Text align={"left"} size={"2"}>
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
          </div>
        </Container>
      </section>

      <MediaPage />

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
