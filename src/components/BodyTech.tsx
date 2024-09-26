import { Heading, Text } from "@radix-ui/themes";

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
            At 5AMAS Foods, we blend innovation and sustainability to deliver
            excellence in agriculture, consumer goods, and catering services.
            From sourcing the freshest ingredients from local farmers to
            providing top-tier corporate and event catering, we are committed to
            quality and customer satisfaction. Our focus on sustainability
            ensures that every product supports local communities and promotes a
            healthier, more sustainable food system. Whether it's white-label
            services or indoor/outdoor event catering, 5AMAS Foods is dedicated
            to delivering fresh, high-quality solutions for every need.
          </Text>
        </div>
      </div>
      <section className="py-16 lg:py-24 flex flex-col-reverse md:grid md:grid-cols-2 md:gap-20 gap-10 px-4"></section>
    </main>
  );
}
