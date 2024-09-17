import { Container, Heading, Text } from "@radix-ui/themes";
import { EnhancedFuturisticGallery } from "./Media";
import ResourceService from "./ResourceService";
import FuturisticPricingPage from "./OfficePlan";
import { AmenitiesSection } from "./Amenities";

export function BodyResources() {
  return (
    <>
      <main className="bg-white">
        {/* About Us Section */}
        <section className="py-16 lg:py-24">
          <div className="container mx-auto px-4">
            <Heading
              size={{ initial: "7", md: "9" }}
              className="mb-8 text-transparent bg-clip-text bg-gradient-to-r from-red-400 to-gray-600"
              align={"center"}
            >
              Welcome to 5AMAS Resources
            </Heading>

            <Container className="text-center">
              <Text align={"center"} size={"2"}>
                5AMAS and Co Resources Ltd is a multifaceted investment company
                that excels in various sectors, including real estate, trading,
                office space solutions, capacity building, and financial
                services. Driven by a commitment to quality, sustainability, and
                client satisfaction, the company tailors its investment
                solutions to meet the unique needs of its clients, focusing on
                long-term value creation. In the real estate sector, 5AMAS
                invests in properties and developments that generate attractive
                returns by carefully analyzing market trends. The company is
                also involved in strategic trading ventures, leveraging market
                expertise to maximize profits while minimizing risks. 5AMAS
                offers flexible office space solutions, including virtual
                offices, co-working spaces, and meeting rooms, designed to
                foster productivity and growth for businesses of all sizes.
                Additionally, the company emphasizes capacity building through
                training programs, workshops, and educational resources to
                enhance skills and development. In financial services, 5AMAS
                provides investment advisory, financial planning, and wealth
                management, leveraging industry expertise to offer customized
                solutions for its clients' financial needs. Overall, 5AMAS and
                Co Resources Ltd combines its diverse expertise to create value
                across sectors, helping clients achieve their financial goals
                and supporting sustainable growth.
              </Text>
            </Container>
          </div>
        </section>
        <ResourceService />
        <AmenitiesSection />
        <EnhancedFuturisticGallery />
        <FuturisticPricingPage />
      </main>
    </>
  );
}
