import { IconButton, Separator } from "@radix-ui/themes";
import { ReactNode } from "react";
import { Link } from "react-router-dom";

interface FooterProps {
  Flink: string;
  Llink: string;
  Ilink: string;
  Tlink: string;
  Ficon: ReactNode;
  Licon: ReactNode;
  Ticon: ReactNode;
  Iicon: ReactNode;
}

export function Footer(links: FooterProps) {
  return (
    <footer className="bg-gradient-to-r from-blue-400 to-purple-400 text-white mt-20">
      <div className="container mx-auto px-4 py-12">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          <div>
            <h3 className="mb-4 text-2xl font-bold">5amas Group</h3>
            <p className="text-white">
              Innovating across industries, shaping tomorrow through strategic
              growth and sustainable development.
            </p>
          </div>
          <div>
            <h4 className="mb-4 text-lg font-semibold">Quick Links</h4>
            <ul className="space-y-2">
              {[
                { link: "/resources", title: "Office Space" },
                { link: "/about", title: "About Us" },
                { link: "/food", title: "5Amas Food" },
                { link: "/resources", title: "Investments" },
                { link: "/career", title: "Careers" },
                { link: "/contact", title: "Contact" },
              ].map((link, index) => (
                <li key={index}>
                  <Link
                    to={link.link}
                    className="text-white hover:text-white hover:underline"
                  >
                    {link.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="mb-4 text-lg font-semibold">Contact Us</h4>
            <p className="text-white">
              Suit 44, Vikbalkom Tower,
              <br />
              Jabi-Abuja.
              <br />
              contact@5amasgroup.com
              <br />
              +234 (80) 9271-2814
            </p>
          </div>
          <div>
            <h4 className="mb-4 text-lg font-semibold">Follow Us</h4>
            <div className="flex space-x-4">
              <Link to={links.Flink} className="text-white hover:text-white">
                <IconButton radius="large">{links.Ficon}</IconButton>
              </Link>
              <Link to={links.Ilink} className="text-white hover:text-white">
                <IconButton radius="large">{links.Iicon}</IconButton>
              </Link>
              <Link to={links.Tlink} className="text-white hover:text-white">
                <IconButton radius="large">{links.Ticon}</IconButton>
              </Link>
              <Link to={links.Llink} className="text-white hover:text-white">
                <IconButton radius="large">{links.Licon}</IconButton>
              </Link>
            </div>
          </div>
        </div>
        <Separator size={"4"} mt={"6"} />
        <div className="pt-8 text-center">
          <p className="text-sm text-white">
            &copy; {new Date().getFullYear()} 5amas Group. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
