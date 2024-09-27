import { Card, Heading, Text } from "@radix-ui/themes";
import { TechService } from "./TechServices";

export default function BodyTech() {
  return (
    <main className="bg-white">
      {/* About Us Section */}
      <div className=" mx-auto px-4 my-10">
        <Heading
          size={{ initial: "6", md: "8" }}
          className="mb-8 text-blue-500"
          align={"center"}
        >
          Welcome to 5AMAS Technology
        </Heading>
        <div className="mx-auto md:max-w-3xl text-center text-lg text-gray-600">
          <Text align={"center"} size={"2"}>
            The 5amas Technologies Ltd cater to the information, communication,
            and entertainment needs of global business houses to SMEs, as well
            as millions of consumers. We aspire to be a driving force behind
            West African digital transformation. Our mission is to empower
            businesses and individuals with world-class telecommunications
            solutions rendering quality services.
          </Text>
        </div>
      </div>
      <TechService />
      <WhyChooseUs />
    </main>
  );
}
import {
  CheckCircle,
  Server,
  Cloud,
  Headphones,
  Book,
  Wifi,
} from "lucide-react";

function WhyChooseUs() {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-br from-blue-50 to-indigo-100">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-blue-900">
            Why 5AMAS Technologies?
          </h2>
          <p className="max-w-[900px] text-zinc-700 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
            Discover why we're the preferred choice for telecommunications and
            digital infrastructure solutions.
          </p>
        </div>
        <div className="mx-auto grid max-w-5xl items-start gap-6 py-12 md:grid-cols-2 md:gap-12">
          <Card className="w-full">
            <div className="flex items-center space-x-2">
              <CheckCircle className="w-6 h-6 text-green-500" />
              <Heading>Comprehensive Service Portfolio</Heading>
            </div>
            <p className="text-zinc-700 mb-4">
              We offer a holistic suite of services encompassing all your
              telecommunications and digital infrastructure needs under one
              roof:
            </p>
            <ul className="grid gap-2">
              <li className="flex items-center space-x-2">
                <Wifi className="w-5 h-5 text-blue-500" />
                <span>Connectivity Solutions</span>
              </li>
              <li className="flex items-center space-x-2">
                <Server className="w-5 h-5 text-blue-500" />
                <span>Data Centre Services</span>
              </li>
              <li className="flex items-center space-x-2">
                <Cloud className="w-5 h-5 text-blue-500" />
                <span>Cloud Connectivity</span>
              </li>
              <li className="flex items-center space-x-2">
                <Book className="w-5 h-5 text-blue-500" />
                <span>Training</span>
              </li>
              <li className="flex items-center space-x-2">
                <Server className="w-5 h-5 text-blue-500" />
                <span>IT Solutions</span>
              </li>
              <li className="flex items-center space-x-2">
                <Headphones className="w-5 h-5 text-blue-500" />
                <span>Dedicated Customer Support</span>
              </li>
            </ul>
          </Card>
          <Card className="w-full">
            <div className="flex items-center space-x-2">
              <CheckCircle className="w-6 h-6 text-green-500" />
              <Heading>Customer-Centric Approach</Heading>
            </div>

            <p className="text-zinc-700 mb-4">
              Our commitment to your success is reflected in our
              customer-centric approach:
            </p>
            <ul className="grid gap-2">
              <li className="flex items-center space-x-2">
                <CheckCircle className="w-5 h-5 text-green-500" />
                <span>24/7 Customer Support</span>
              </li>
              <li className="flex items-center space-x-2">
                <CheckCircle className="w-5 h-5 text-green-500" />
                <span>Prompt Query Resolution</span>
              </li>
              <li className="flex items-center space-x-2">
                <CheckCircle className="w-5 h-5 text-green-500" />
                <span>Technical Issue Addressing</span>
              </li>
              <li className="flex items-center space-x-2">
                <CheckCircle className="w-5 h-5 text-green-500" />
                <span>Seamless Service Experience</span>
              </li>
            </ul>
          </Card>
        </div>
      </div>
    </section>
  );
}
