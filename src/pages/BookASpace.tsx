import React, { useState } from "react";
import { Facebook, Instagram, Linkedin, Twitter } from "lucide-react";
import { Footer } from "../components/Footer";
import { BookHero } from "../components/BookHero";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import PaystackPop from "@paystack/inline-js";

// Import images
import image1 from "../assets/book1.jpeg";
import image2 from "../assets/book2.jpeg";
import image3 from "../assets/book3.jpeg";
import image4 from "../assets/book4.jpeg";
import image5 from "../assets/book5.jpeg";
import image6 from "../assets/book6.jpeg";
import image7 from "../assets/book7.jpeg";
import image8 from "../assets/book8.jpeg";
import image9 from "../assets/book9.jpeg";
import image10 from "../assets/book10.jpeg";
import image11 from "../assets/book11.jpeg";
import image12 from "../assets/book12.jpeg";
import image13 from "../assets/book13.jpeg";

// Define types for spaces
interface SpaceType {
  name: string;
  price: string;
  amenities: string[];
  images: string[];
}

export default function BookASpace() {
  const officeSpaces: SpaceType[] = [
    {
      name: "Work Station For 2 Persons",
      price: "20000",
      amenities: ["Wi-Fi", "Air Conditioning", "24/7 Access"],
      images: [image1, image10, image11],
    },
    {
      name: "Work Station For 4 Persons",
      price: "40000",
      amenities: ["Wi-Fi", "Shared Desks", "Free Coffee"],
      images: [image3, image4],
    },
    {
      name: "Small Executive Office",
      price: "20000",
      amenities: ["Projector", "Whiteboard", "Wi-Fi"],
      images: [image13, image12, image2],
    },
    {
      name: "Big Executive Office",
      price: "50000",
      amenities: ["Wi-Fi", "Air Conditioning", "24/7 Access"],
      images: [image6, image9],
    },
    {
      name: "Conference Room",
      price: "150000",
      amenities: ["Projector", "Whiteboard", "Wi-Fi", "Air Conditioning"],
      images: [image5],
    },
    {
      name: "Meeting Room",
      price: "10000",
      amenities: ["Projector", "Whiteboard", "Wi-Fi", "Air Conditioning"],
      images: [image7, image8],
    },
  ];

  const [selectedSpace, setSelectedSpace] = useState<SpaceType | null>(null);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    days: 1,
  });
  const [showModal, setShowModal] = useState(false);

  const openModal = (space: SpaceType) => {
    setSelectedSpace(space);
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
    setSelectedSpace(null);
  };

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const calculateTotal = () => {
    if (selectedSpace) {
      return parseInt(selectedSpace.price) * formData.days;
    }
    return 0;
  };

  const handlePayment = () => {
    if (!selectedSpace || !formData.name || !formData.email || !formData.phone) {
      alert("Please fill in all fields.");
      return;
    }

    const paystack = new PaystackPop();
    const amount = calculateTotal();

    // Define the type for transaction (you can refer to Paystack SDK types)
interface PaystackTransaction {
  reference: string;
  amount: number;
  email: string;
  status: string;
  transaction_date: string;
}

    paystack.newTransaction({
      key: "pk_live_937a6011bcefa0f6c8f59f64a5d110f53946ed8a", // Replace with your live Paystack public key
      email: formData.email,
      amount: amount * 100, // Convert to kobo
      onSuccess: (transaction: PaystackTransaction) => {
        console.log(transaction); // Log the transaction to the console
    
        const bookingData = {
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
          days: formData.days,
          space: selectedSpace.name,
          amountPaid: amount,
          dateBooked: new Date().toISOString(),
          transactionReference: transaction.reference, // Optionally save the transaction reference
        };
    
        fetch("https://fiveamas-backend-main.onrender.com/api/bookings", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(bookingData),
        })
          .then((response) => {
            if (!response.ok) {
              throw new Error("Failed to submit booking.");
            }
            return response.json();
          })
          .then(() => {
            alert("Booking successful!");
            closeModal();
          })
          .catch((error) => {
            alert(error.message || "Failed to submit booking. Please try again.");
          });
      },
      onCancel: () => {
        alert("Payment canceled.");
      },
    });
  };

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
                <h3 className="text-xl font-bold text-gray-800 mb-4">
                  {space.name}
                </h3>
                <p className="text-lg text-gray-600 font-semibold mb-4">
                  ₦{space.price}/day
                </p>
                <ul className="text-gray-500 text-sm mb-6">
                  {space.amenities.map((amenity, i) => (
                    <li key={i} className="flex items-center mb-2">
                      <span className="mr-2">✔️</span>
                      {amenity}
                    </li>
                  ))}
                </ul>
                <button
                  className="bg-purple-500 text-white py-2 px-4 w-full rounded-md shadow-md hover:bg-purple-700 transition"
                  onClick={() => openModal(space)}
                >
                  Book Now
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {showModal && selectedSpace && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg p-6 w-full max-w-md">
            <h2 className="text-2xl font-bold mb-4 text-center">
              Book {selectedSpace.name}
            </h2>
            <form>
              <label className="block mb-2">
                Name:
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  className="border rounded-md w-full px-2 py-1"
                />
              </label>
              <label className="block mb-2">
                Email:
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  className="border rounded-md w-full px-2 py-1"
                />
              </label>
              <label className="block mb-2">
                Phone:
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  className="border rounded-md w-full px-2 py-1"
                />
              </label>
              <label className="block mb-2">
                Number of Days:
                <input
                  type="number"
                  name="days"
                  value={formData.days}
                  min={1}
                  onChange={handleInputChange}
                  className="border rounded-md w-full px-2 py-1"
                />
              </label>
              <p className="text-lg font-bold mt-4">
                Total: ₦{calculateTotal()}
              </p>
              <button
                type="button"
                className="bg-purple-500 text-white py-2 px-4 rounded-md shadow-md w-full mt-4"
                onClick={handlePayment}
              >
                Proceed to Pay
              </button>
              <button
                type="button"
                className="bg-gray-600 text-white py-2 px-4 rounded-md shadow-md w-full mt-4"
                onClick={closeModal}
              >
                Cancel
              </button>
            </form>
          </div>
        </div>
      )}

      <Footer
        Ficon={<Facebook />}
        Ticon={<Twitter />}
        Iicon={<Instagram />}
        Licon={<Linkedin />}
        Flink="https://www.facebook.com/OlalekanIsaiah"
        Tlink="https://twitter.com/OlalekanIsaiah"
        Ilink="https://www.instagram.com/OlalekanIsaiah"
        Llink="https://www.linkedin.com/in/OlalekanIsaiah"
      />
    </div>
  );
}
