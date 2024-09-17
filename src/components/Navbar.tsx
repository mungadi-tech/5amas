import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  NavbarMenu,
  NavbarMenuToggle,
} from "@nextui-org/react";
import { Button, DropdownMenu } from "@radix-ui/themes";
import logo from "../assets/logo_main.png";
import { Link } from "react-router-dom";
import { useState } from "react";

const businesses = [
  { link: "/resources", title: "5Amas Resources" },
  { link: "/tech", title: "5Amas Technoogy" },
  { link: "/foundation", title: "5Amas Foundation" },
  { link: "/food", title: "5Amas Foods" },
];

const company = [
  { link: "/team", title: "Team" },
  { link: "/career", title: "Careers" },
];
export function NavBarSection() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  return (
    <Navbar
      isMenuOpen={isMenuOpen}
      onMenuOpenChange={setIsMenuOpen}
      disableAnimation
      isBordered
      height={"5rem"}
    >
      <NavbarContent className="sm:hidden" justify="start">
        <NavbarMenuToggle />
      </NavbarContent>

      <NavbarBrand>
        <img src={logo} alt="" className="h-14" />
      </NavbarBrand>
      <NavbarContent justify="center" className="hidden">
        <NavbarItem>
          <img src={logo} alt="" className="h-14" />
        </NavbarItem>
      </NavbarContent>

      <NavbarContent justify="center" className="hidden sm:flex gap-8">
        <NavbarItem>
          <Link to={"/"}>
            <Button variant="ghost" size={"4"}>
              Home
            </Button>
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link to={"/about"}>
            <Button variant="ghost" size={"4"}>
              About Us
            </Button>
          </Link>
        </NavbarItem>
        <NavbarItem>
          <DropdownMenu.Root>
            <DropdownMenu.Trigger>
              <Button variant="ghost" size={"4"}>
                Our Businesses
                <DropdownMenu.TriggerIcon />
              </Button>
            </DropdownMenu.Trigger>
            <DropdownMenu.Content>
              {businesses.map((b) => (
                <DropdownMenu.Item key={b.title}>
                  <Link to={b.link}>{b.title}</Link>
                </DropdownMenu.Item>
              ))}
            </DropdownMenu.Content>
          </DropdownMenu.Root>
        </NavbarItem>
        <NavbarItem>
          <DropdownMenu.Root>
            <DropdownMenu.Trigger>
              <Button variant="ghost" size={"4"}>
                Company
                <DropdownMenu.TriggerIcon />
              </Button>
            </DropdownMenu.Trigger>
            <DropdownMenu.Content>
              {company.map((b) => (
                <DropdownMenu.Item key={b.title}>
                  <Link to={b.link}>{b.title}</Link>
                </DropdownMenu.Item>
              ))}
            </DropdownMenu.Content>
          </DropdownMenu.Root>
        </NavbarItem>
        <NavbarItem>
          <Link to={"/media"}>
            <Button variant="ghost" size={"4"}>
              Media
            </Button>
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link to={"/contact"}>
            <Button variant="ghost" size={"4"}>
              Contact Us
            </Button>
          </Link>
        </NavbarItem>
      </NavbarContent>

      <NavbarContent justify="end">
        <NavbarItem>
          <Link to={"/foundation"}>
            <Button radius="full">
              <span className="hidden md:block">5Amas</span> Foundation
            </Button>
          </Link>
        </NavbarItem>
      </NavbarContent>

      <NavbarMenu>
        <NavbarItem onClick={() => setIsMenuOpen(false)}>
          <Link to={"/"}>
            <Button variant="ghost" size={"4"}>
              Home
            </Button>
          </Link>
        </NavbarItem>
        <NavbarItem onClick={() => setIsMenuOpen(false)}>
          <Link to={"/about"}>
            <Button variant="ghost" size={"4"}>
              About Us
            </Button>
          </Link>
        </NavbarItem>
        <NavbarItem>
          <DropdownMenu.Root>
            <DropdownMenu.Trigger>
              <Button variant="ghost" size={"4"} style={{ gap: 5 }}>
                Our Businesses
                <DropdownMenu.TriggerIcon />
              </Button>
            </DropdownMenu.Trigger>
            <DropdownMenu.Content style={{ zIndex: 40 }}>
              {businesses.map((b) => (
                <DropdownMenu.Item
                  key={b.title}
                  onClick={() => setIsMenuOpen(false)}
                >
                  <Link to={b.link}>{b.title}</Link>
                </DropdownMenu.Item>
              ))}
            </DropdownMenu.Content>
          </DropdownMenu.Root>
        </NavbarItem>
        <NavbarItem>
          <DropdownMenu.Root>
            <DropdownMenu.Trigger>
              <Button variant="ghost" size={"4"} style={{ gap: 5 }}>
                Company
                <DropdownMenu.TriggerIcon />
              </Button>
            </DropdownMenu.Trigger>
            <DropdownMenu.Content style={{ zIndex: 40 }}>
              {company.map((b) => (
                <DropdownMenu.Item
                  key={b.title}
                  onClick={() => setIsMenuOpen(false)}
                >
                  <Link to={b.link}>{b.title}</Link>
                </DropdownMenu.Item>
              ))}
            </DropdownMenu.Content>
          </DropdownMenu.Root>
        </NavbarItem>
        <NavbarItem onClick={() => setIsMenuOpen(false)}>
          <Link to={"/media"}>
            <Button variant="ghost" size={"4"}>
              Media
            </Button>
          </Link>
        </NavbarItem>
        <NavbarItem onClick={() => setIsMenuOpen(false)}>
          <Link to={"/contact"}>
            <Button variant="ghost" size={"4"}>
              Contact Us
            </Button>
          </Link>
        </NavbarItem>
      </NavbarMenu>
    </Navbar>
  );
}
