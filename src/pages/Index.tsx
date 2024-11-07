import { useState, useEffect } from "react";
import { Facebook, Instagram, Linkedin, Twitter } from "lucide-react";
import { Body } from "../components/Body";
import { HeroSection } from "../components/Hero";
import { Footer } from "../components/Footer";
import Events from "../components/Events"; // import the modal

export default function Index() {
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    // Set a timer to open the modal after 2 seconds
    const timer = setTimeout(() => {
      setShowModal(true);
    }, 2000);

    // Clear the timer on cleanup
    return () => clearTimeout(timer);
  }, []);

  return (
    <div>
      <HeroSection />
      <Body />

      {/* Render the modal if showModal is true */}
      {showModal && <Events onClose={() => setShowModal(false)} />}

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
