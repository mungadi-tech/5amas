import { Heading, Text } from "@radix-ui/themes";
import { useState } from "react";
import PaystackPop from "@paystack/inline-js";

type FoodItem = {
  id: number;
  image: string;
  title: string;
  price: number;
  description: string; // Added description for food items
};

const services = [
  {
    title: "Agriculture",
    description: "Sustainable farming practices and fresh produce",
    image: "https://www.5amasgroup.com/assets/agriculture-C-jnABBm.jpg",
  },
  {
    title: "Consumer Products",
    description: "Wide range of food products for everyday consumption",
    image: "https://www.5amasgroup.com/assets/consumer_products-_Wdi2bIW.jpg",
  },
  {
    title: "Corporate Catering",
    description: "Tailored food services for businesses and events",
    image: "https://www.5amasgroup.com/assets/catering-DeHLzz7m.jpg",
  },
  {
    title: "White Labelling",
    description: "Custom food product development and packaging solutions",
    image: "https://www.5amasgroup.com/assets/packaging-DjIMKa7E.jpg",
  },
  {
    title: "Indoor and Outdoor Catering",
    description: "Versatile catering services for all types of events",
    image: "https://www.5amasgroup.com/assets/outdoor_catering-B_62v5n1.jpg",
  },
];

const foods: FoodItem[] = [
  {
    id: 1,
    image: "https://glovo.dhmedia.io/image/menus-glovo/products/dd99781833fb3ad6ba0b123fe55c03aacbd85851880c81f6339821c38e4710a1?t=W3siYXZpZiI6eyJxIjoibG93In19LHsicmVzaXplIjp7IndpZHRoIjoyNjAsImhlaWdodCI6MjYwfX1d",
    title: "Kids Meal Hamburger",
    price: 6600,
    description: "A delicious hamburger meal for kids, served with fries and a drink.",
  },
  {
    id: 2,
    image: "https://glovo.dhmedia.io/image/menus-glovo/products/dd99781833fb3ad6ba0b123fe55c03aacbd85851880c81f6339821c38e4710a1?t=W3siYXZpZiI6eyJxIjoibG93In19LHsicmVzaXplIjp7IndpZHRoIjoyNjAsImhlaWdodCI6MjYwfX1d",
    title: "Kids Meal Cheeseburger",
    price: 6600,
    description: "A tasty cheeseburger meal for kids, served with fries and a drink.",
  },
  {
    id: 3,
    image: "https://glovo.dhmedia.io/image/menus-glovo/products/dd99781833fb3ad6ba0b123fe55c03aacbd85851880c81f6339821c38e4710a1?t=W3siYXZpZiI6eyJxIjoibG93In19LHsicmVzaXplIjp7IndpZHRoIjoyNjAsImhlaWdodCI6MjYwfX1d",
    title: "Kids Meal Chicken Burger",
    price: 6600,
    description: "A juicy chicken burger meal for kids, served with fries and a drink.",
  },
  {
    id: 4,
    image: "https://glovo.dhmedia.io/image/menus-glovo/products/dd99781833fb3ad6ba0b123fe55c03aacbd85851880c81f6339821c38e4710a1?t=W3siYXZpZiI6eyJxIjoibG93In19LHsicmVzaXplIjp7IndpZHRoIjoyNjAsImhlaWdodCI6MjYwfX1d",
    title: "Kids Meal Nuggets",
    price: 6600,
    description: "Crispy chicken nuggets meal for kids, served with fries and a drink.",
  },
];

export function BodyFood() {
  const [cart, setCart] = useState<{ id: number; quantity: number }[]>([]);
  const [total, setTotal] = useState(0);
  const [selectedFood, setSelectedFood] = useState<FoodItem | null>(null);

  const addToCart = (id: number) => {
    const existingItem = cart.find((item) => item.id === id);
    if (existingItem) {
      setCart(
        cart.map((item) =>
          item.id === id ? { ...item, quantity: item.quantity + 1 } : item
        )
      );
    } else {
      setCart([...cart, { id, quantity: 1 }]);
    }
    setTotal(total + foods.find((food) => food.id === id)!.price);
  };

  const handlePayment = () => {
    const paystack = new PaystackPop();
    paystack.newTransaction({
      key: "pk_test_YOUR_PAYSTACK_PUBLIC_KEY",
      amount: total * 100,
      email: "customer@example.com",
      onSuccess: () => alert("Payment successful!"),
      onCancel: () => alert("Payment canceled."),
    });
  };

  const openModal = (food: FoodItem) => {
    setSelectedFood(food);
  };

  const closeModal = () => {
    setSelectedFood(null);
  };

  return (
    <main className="bg-white">
      <div className="mx-auto px-4 my-10">
        <Heading
          size={{ initial: "7", md: "9" }}
          className="mb-8 text-emerald-400"
          align={"center"}
        >
          5AMAS Foods: Nourishing Innovation
        </Heading>
        <div className="mx-auto md:max-w-3xl text-center text-lg text-gray-600">
          <Text align={"center"} size={"2"}>
            From farm to table, 5AMAS Foods is committed to delivering quality,
            innovation, and sustainability in every bite.
          </Text>
        </div>
      </div>

      <section className="py-16 lg:py-24 px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="text-center transform transition duration-500 hover:scale-105"
            >
              <img
                src={service.image}
                alt={service.title}
                className="w-full h-48 object-cover rounded-lg mb-4"
              />
              <Heading size="5" className="mb-4 text-emerald-400">
                {service.title}
              </Heading>
              <Text size="2" className="text-gray-600">
                {service.description}
              </Text>
            </div>
          ))}
        </div>
      </section>

      <section className="py-16 lg:py-24 px-4 bg-gradient-to-b from-emerald-900 to-emerald-700">
  <Heading
    size={{ initial: "7", md: "9" }}
    className="mb-8 text-white drop-shadow-lg"
    align={"center"}
  >
    Order Food
  </Heading>
  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
    {foods.map((food) => (
      <div
        key={food.id}
        className="cursor-pointer transform transition duration-500 hover:scale-105 hover:shadow-xl bg-white/20 backdrop-blur-lg p-6 rounded-2xl shadow-md"
        onClick={() => openModal(food)}
      >
        <div className="relative overflow-hidden rounded-lg">
          <img
            src={food.image}
            alt={food.title}
            className="w-full h-48 object-cover rounded-lg transition-transform duration-300 hover:scale-110"
          />
        </div>
        <Heading size="4" className="mt-4 text-white font-semibold">
          {food.title}
        </Heading>
        <Text size="2" className="text-gray-200">
          ₦{food.price}
        </Text>
      </div>
    ))}
  </div>
</section>


      {selectedFood && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4">
          <div className="bg-white p-6 rounded-lg max-w-md w-full">
            <img
              src={selectedFood.image}
              alt={selectedFood.title}
              className="w-full h-48 object-cover rounded-lg mb-4"
            />
            <Heading size="5" className="mb-2 text-emerald-400">
              {selectedFood.title}
            </Heading>
            <Text size="2" className="text-gray-600 mb-4">
              {selectedFood.description}
            </Text>
            <Text size="2" className="text-gray-600 font-bold mb-4">
              ₦{selectedFood.price}
            </Text>
            <div className="flex justify-end space-x-2">
              <button
                onClick={closeModal}
                className="bg-gray-500 text-white px-4 py-2 rounded hover:bg-gray-600"
              >
                Close
              </button>
              <button
                onClick={() => addToCart(selectedFood.id)}
                className="bg-emerald-500 text-white px-4 py-2 rounded hover:bg-emerald-600"
              >
                Add to Cart
              </button>
            </div>
          </div>
        </div>
      )}

      <div className="fixed bottom-0 right-0 bg-white p-6 shadow-lg max-w-sm w-full">
        <Heading size="5" className="mb-4 text-emerald-400">
          Cart
        </Heading>
        <ul className="mb-4">
          {cart.map((item) => (
            <li key={item.id} className="flex justify-between items-center mb-2">
              <Text size="2" className="text-gray-600">
                {foods.find((food) => food.id === item.id)!.title} x {item.quantity}
              </Text>
              <Text size="2" className="text-gray-600">
                ₦{foods.find((food) => food.id === item.id)!.price * item.quantity}
              </Text>
            </li>
          ))}
        </ul>
        <div className="flex justify-between items-center mb-4">
          <Text size="2" className="text-gray-600 font-bold">
            Total:
          </Text>
          <Text size="2" className="text-gray-600 font-bold">
            ₦{total}
          </Text>
        </div>
        <button
          onClick={handlePayment}
          className="w-full bg-emerald-500 text-white px-4 py-2 rounded hover:bg-emerald-600"
        >
          Pay with Paystack
        </button>
      </div>
    </main>
  );
}