import { Heading, Text } from "@radix-ui/themes";
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
    </main>
  );
}
