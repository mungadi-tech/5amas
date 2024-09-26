import { Facebook, Instagram, Linkedin, Twitter } from "lucide-react";
import { Footer } from "../components/Footer";
import { HeroSectionTech } from "../components/HeroTech";
import BodyTech from "../components/BodyTech";

export default function Tech() {
  return (
    <div>
      <HeroSectionTech />
      <BodyTech />
      <Footer
        Ficon={<Facebook />}
        Ticon={<Twitter />}
        Iicon={<Instagram />}
        Licon={<Linkedin />}
        Flink="https://www.facebook.com/profile.php?id=61558674541651&mibextid=ZbWKwL"
        Ilink="https://www.instagram.com/5amasfoods?igsh=MThsMXM2eG1jNnlvbQ=="
        Llink="https://www.linkedin.com/company/5amas-group"
        Tlink="https://x.com/5amastchltd?t=-545yqxqAKmN3F6M9jZaIA&s=08"
      />
    </div>
  );
}
