import { Facebook, Instagram, Linkedin, Twitter } from "lucide-react";
import { Body } from "../components/Body";
import { Footer } from "../components/Footer";
import { HeroSectionFoundation } from "../components/HeroFoundation";

export default function Foundation() {
  return (
    <div>
      <HeroSectionFoundation />
      <Body />
      <Footer
        Ficon={<Facebook />}
        Ticon={<Twitter />}
        Iicon={<Instagram />}
        Licon={<Linkedin />}
        Flink="https://www.facebook.com/profile.php?id=61555786619883&mibextid=ZbWKwL"
        Ilink="https://www.instagram.com/5amas_foundation?igsh=Y2xseWlwZWg3M3lj"
        Llink="https://www.linkedin.com/company/5amas-foundation"
        Tlink="https://www.x.com/5amastchltd?t=-545yqxqAKmN3F6M9jZaIA&s=08"
      />
    </div>
  );
}
