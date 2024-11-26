import { Facebook, Instagram, Linkedin, Twitter } from "lucide-react";
import { Footer } from "../components/Footer";
import {BookHero} from "../components/BookHero"
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import image1 from "../assets/book1.jpeg"
import image2 from "../assets/book2.jpeg"
import image3 from "../assets/book3.jpeg"
import image4 from "../assets/book4.jpeg"
import image5 from "../assets/book5.jpeg"
import image6 from "../assets/book6.jpeg"
import image7 from "../assets/book7.jpeg"
import image8 from "../assets/book8.jpeg"
import image9 from "../assets/book9.jpeg"
import image10 from "../assets/book10.jpeg"
import image11 from "../assets/book11.jpeg"
import image12 from "../assets/book12.jpeg"
import image13 from "../assets/book13.jpeg"


export default function BookASpace() {
    const officeSpaces = [
      {
        name: "Work Station For 2 Persons",
        price: "₦20,000/day",
        amenities: ["Wi-Fi", "Air Conditioning", "24/7 Access"],
        images: [image1, image10, image11],
      },
      {
        name: "Work Station For 4 Persons",
        price: "₦40,000/day",
        amenities: ["Wi-Fi", "Shared Desks", "Free Coffee"],
        images: [image3, image4],
      },
      {
        name: "Small Executive Office",
        price: "₦20,000/day",
        amenities: ["Projector", "Whiteboard", "Wi-Fi"],
        images: [image13, image12, image2],
      },
      {
        name: "Big Executive Office",
        price: "₦50,000/day",
        amenities: ["Wi-Fi", "Air Conditioning", "24/7 Access"],
        images: [image6, image9],
      },
      {
        name: "Conference Room",
        price: "₦150,000/day",
        amenities: ["Projector", "Whiteboard", "Wi-Fi", "Air Conditioning"],
        images: [image5],
      },
      {
        name: "Meeting Room",
        price: "₦10,000/hour",
        amenities: ["Projector", "Whiteboard", "Wi-Fi", "Air Conditioning"],
        images: [image7, image8],
      },
    ];
  
    return (
      <div>
        <BookHero />
        <div className="container mx-auto px-4 py-8">
          <h2 className="text-6xl font-bold text-center mb-12 text-purple-500">
            Book a Space
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {officeSpaces.map((space, index) => (
              <div
                key={index}
                className="group bg-white shadow-lg rounded-lg overflow-hidden transition transform hover:scale-105"
              >
                <Swiper
                  modules={[Navigation, Pagination, Autoplay]}
                  spaceBetween={10}
                  slidesPerView={1}
                  navigation
                  pagination={{ clickable: true }}
                  autoplay={{ delay: 3000 }}
                  className="h-56"
                >
                  {space.images.map((img, idx) => (
                    <SwiperSlide key={idx}>
                      <img
                        src={img}
                        alt={space.name}
                        className="w-full h-full object-cover"
                      />
                    </SwiperSlide>
                  ))}
                </Swiper>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-800 mb-4">{space.name}</h3>
                  <p className="text-lg text-gray-600 font-semibold mb-4">
                    {space.price}
                  </p>
                  <ul className="text-gray-500 text-sm mb-6">
                    {space.amenities.map((amenity, i) => (
                      <li key={i} className="flex items-center mb-2">
                        <span className="mr-2">✔️</span>
                        {amenity}
                      </li>
                    ))}
                  </ul>
                  <button className="bg-blue-600 text-white py-2 px-4 w-full rounded-md shadow-md hover:bg-blue-700 transition">
                    Book Now
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
        <Footer
          Ficon={<Facebook />}
          Ticon={<Twitter />}
          Iicon={<Instagram />}
          Licon={<Linkedin />}
          Flink="https://www.facebook.com/profile.php?id=61558674541651&mibextid=ZbWKwL"
          Ilink="https://www.instagram.com/5amas_resources?igsh=MThlaTV5M2RlZTZwNQ=="
          Llink="https://www.linkedin.com/company/5amas-foundation"
          Tlink="https://www.x.com/5amastchltd?t=-545yqxqAKmN3F6M9jZaIA&s=08"
        />
      </div>
    );
  }
  