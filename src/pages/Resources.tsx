import { Facebook, Instagram, Linkedin, Twitter } from "lucide-react";
import { Footer } from "../components/Footer";
import { HeroSectionResources } from "../components/HeroResources";
import { BodyResources } from "../components/BodyResources";

export default function Resources() {
  return (
    <div>
      <HeroSectionResources />
      <BodyResources />
      <Footer
        Ficon={<Facebook />}
        Ticon={<Twitter />}
        Iicon={<Instagram />}
        Licon={<Linkedin />}
        Flink="https://www.facebook.com/profile.php?id=61558674541651&mibextid=ZbWKwL"
        Ilink="https://www.instagram.com/5amas_resources?igsh=MThlaTV5M2RlZTZwNQ=="
        Llink="https://www.linkedin.com/company/5amas-foundation"
        Tlink="https://www.x.com/5amastchltd?t=-545yqxqAKmN3F6M9jZaIA&s=08"
      />
    </div>
  );
}
