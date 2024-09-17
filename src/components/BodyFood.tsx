import { Heading, Text } from "@radix-ui/themes";
import { EnhancedFamasFoodsSection } from "./Foodtype";
import ImageCarousel from "./animata/carousel/image-carousel";
import { FuturisticMenuWithImages } from "./Dishes";
import corn from "../assets/corn.jpg";
import rice from "../assets/rice&beans.jpg";
import ricee from "../assets/rice.jpg";
import fish from "../assets/fish_corn.jpg";
import yam from "../assets/yam.jpg";

const foods = [
  {
    id: 1,
    image: corn,
    title: "Item 1",
    food_name: "Egusi Soup",
  },
  {
    id: 2,
    image: rice,
    title: "Item 2",
    food_name: "Egusi Soup",
  },
  {
    id: 3,
    image: yam,
    title: "Item 3",
    food_name: "Egusi Soup",
  },
  {
    id: 4,
    image: ricee,
    title: "Item 4",
    food_name: "Egusi Soup",
  },
  {
    id: 5,
    image: fish,
    title: "Item 4",
    food_name: "Egusi Soup",
  },
];
export function BodyFood() {
  return (
    <main className="bg-white">
      {/* About Us Section */}
      <div className=" mx-auto px-4 my-10">
        <Heading
          size={{ initial: "7", md: "9" }}
          className="mb-8 text-emerald-400"
          align={"center"}
        >
          Welcome to 5AMAS Foods
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
      <EnhancedFamasFoodsSection />
      <section className="py-16 lg:py-24 flex flex-col-reverse md:grid md:grid-cols-2 md:gap-20 gap-10 px-4">
        <div className="mx-auto">
          <Heading
            size={{ initial: "7", md: "9" }}
            className="mb-8 text-emerald-400"
            align={"center"}
          >
            Delight Kitchen
          </Heading>
          <div className="mx-auto md:max-w-3xl text-center text-lg text-gray-600">
            <Text align={"center"} size={"2"}>
              As part of 5AMAS Foods, Jabi Delight Kitchen offers a unique
              dining experience with a blend of traditional and contemporary
              cuisine. Located in the heart of Jabi, the restaurant is dedicated
              to delivering fresh, high-quality meals crafted from the finest
              ingredients sourced locally. With a focus on customer
              satisfaction, Jabi Delight Kitchen provides a welcoming
              atmosphere, excellent service, and a diverse menu that caters to a
              wide range of tastes. Whether you're looking for a quick bite or a
              full dining experience, Jabi Delight Kitchen is your go-to
              destination for delicious, well-prepared meals
            </Text>
          </div>
        </div>
        <ImageCarousel items={foods} />
      </section>

      <FuturisticMenuWithImages />
    </main>
  );
}
