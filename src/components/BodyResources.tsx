import {  Heading, Text, Button } from "@radix-ui/themes";
import { motion } from "framer-motion";
import { Link } from "react-router-dom"; // For navigation
import { Swiper, SwiperSlide } from "swiper/react"; // For sliders
import { Autoplay, Pagination, Navigation } from "swiper/modules"; // Swiper features
import "swiper/css"; // Swiper styles
import "swiper/css/pagination"; // Swiper pagination styles
import "swiper/css/navigation"; // Swiper navigation styles

export function BodyResources() {
  return (
    <>
      <main className="bg-white">
        {/* About Us Section */}
        <section className="py-20 lg:py-28 bg-gradient-to-b from-gray-50 to-white relative">
  <div className="container mx-auto px-6 lg:px-12">
    {/* Animated Heading */}
    <motion.div
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="text-center"
    >
      <Heading
        size={{ initial: "7", md: "9" }}
        className="mb-6 text-transparent bg-clip-text bg-gradient-to-r from-purple-700 via-pink-500 to-orange-500 font-extrabold"
      >
        WELCOME TO 5AMAS HUB
      </Heading>
    </motion.div>

    {/* Styled Text Container */}
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.6 }}
      className="max-w-3xl mx-auto bg-white p-6 md:p-8 rounded-xl shadow-lg border border-gray-200"
    >
      <Text align="center" size="3" className="text-gray-800 leading-relaxed">
        <span className="font-semibold text-purple-600">5amas Hub</span> is a premier business and innovation center offering 
        a range of services to support <span className="text-orange-500 font-medium">entrepreneurs, startups,</span> 
        and established businesses. Our mission is to provide a <span className="text-purple-700 font-medium">conducive environment</span> 
        for growth, collaboration, and success.
      </Text>
    </motion.div>
  </div>
</section>

        {/* Offices Section with Slider */}
        <section className="py-16 lg:py-24 bg-gray-50">
  <div className="container mx-auto px-4">
    <Heading
      size={{ initial: "8", md: "9" }}
      className="mb-8 text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-orange-500 font-extrabold"
      align="center"
    >
      OUR OFFICES
    </Heading>

    {/* Centered & Narrowed Swiper Slider */}
    <div className="max-w-3xl mx-auto">
      <Swiper
        modules={[Autoplay, Pagination, Navigation]}
        spaceBetween={30}
        slidesPerView={1}
        autoplay={{ delay: 3000 }}
        pagination={{ clickable: true }}
        navigation
        loop
        className="mySwiper"
      >
        {[
          {
            title: "Private Offices",
            description: "Fully furnished private offices for teams of all sizes.",
            image: "https://www.5amasgroup.com/assets/book9-m8l2bsH_.jpeg",
          },
          {
            title: "Co-Working Spaces",
            description: "Flexible desks in a collaborative environment.",
            image: "https://www.5amasgroup.com/assets/book10-B8ozp7Wm.jpeg",
          },
          {
            title: "Meeting Rooms",
            description: "State-of-the-art meeting rooms with advanced technology.",
            image: "https://www.5amasgroup.com/assets/book5-b5RPDBM_.jpeg",
          },
        ].map((office, index) => (
          <SwiperSlide key={index}>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="bg-white rounded-lg shadow-lg overflow-hidden"
            >
              <img src={office.image} alt={office.title} className="w-full h-96 object-cover" />
              <div className="p-6">
                <Heading size="6" className="mb-2 text-purple-600 font-extrabold">
                  {office.title}
                </Heading>
                <Text size="3" className="text-gray-700 font-bold">
                  {office.description}
                </Text>
              </div>
            </motion.div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>

    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="flex justify-center mt-12"
    >
      <Link to="/book-space">
        <Button
          size="4"
          variant="solid"
          className="bg-gradient-to-r from-purple-600 to-orange-500 text-white hover:from-purple-700 hover:to-orange-600 font-extrabold py-4 px-8 text-xl"
        >
          Book an Office
        </Button>
      </Link>
    </motion.div>
  </div>
</section>


        {/* Our Services Section */}
        <section className="py-16 lg:py-24">
  <div className="container mx-auto px-4">
    <Heading
      size={{ initial: "7", md: "8" }}
      className="mb-8 text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-orange-500"
      align={"center"}
    >
      OUR SERVICES
    </Heading>
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
      {[
        {
          title: "Office Space Rental",
          description: "Flexible and modern office spaces tailored to your business needs.",
          image: "https://www.5amasgroup.com/assets/space3-BrvqVo_o.jpg",
        },
        {
          title: "Web Development/Application",
          description: "Custom web and mobile application development for your business.",
          image: "https://www.5amasgroup.com/assets/full-stack-eCGcbiuc.jpeg",
        },
        {
          title: "Tech Academy",
          description: "Training programs to upskill your team in the latest technologies.",
          image: "https://www.5amasgroup.com/assets/trained-CKK4RzeF.png",
        },
        {
          title: "Foundation",
          description: "Supporting initiatives that drive social and technological change.",
          image: "https://www.5amasgroup.com/assets/foundation3-BRL8o3KV.png",
        },
        {
          title: "Catering Service",
          description: "Delicious and healthy food options for your team and events.",
          image: "https://img1.wsimg.com/isteam/ip/8fa9801a-9459-437f-ac41-7e7e90b4e436/Making%20Egusi%20Soup%20Recipe%20(with%20Assorted%20Meat)%20.jpg",
        },
      ].map((service, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: index * 0.2 }}
          className="bg-white rounded-lg shadow-lg overflow-hidden"
        >
          <img src={service.image} alt={service.title} className="w-full h-48 object-cover" />
          <div className="p-6">
            <Heading size="5" className="mb-2 text-purple-600">
              {service.title}
            </Heading>
            <Text size="2" className="text-gray-700">
              {service.description}
            </Text>
          </div>
        </motion.div>
      ))}
    </div>
  </div>
</section>
        {/* Premium Amenities Section */}
        <section className="py-16 lg:py-24 bg-gray-50">
  <div className="container mx-auto px-4">
    <Heading
      size={{ initial: "7", md: "8" }}
      className="mb-8 text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-orange-500 font-extrabold"
      align="center"
    >
      PREMIUM AMENITIES
    </Heading>
    
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
      {[
        { title: "Air-Conditioned Spaces", description: "Stay comfortable in our fully air-conditioned offices.", icon: "❄️" },
        { title: "Secure Mail Handling", description: "Mail forwarding & secure handling services.", icon: "📦" },
        { title: "Unlimited Internet", description: "High-speed, reliable internet connection.", icon: "🌐" },
        { title: "24/7 Access", description: "Round-the-clock access to your office space.", icon: "🕒" },
        { title: "Reception & Support", description: "Dedicated customer support and reception.", icon: "💁‍♀️" },
        { title: "Business Services", description: "Printing, scanning, and admin support.", icon: "📄" },
        { title: "Free Parking", description: "Complimentary parking for you and your guests.", icon: "🚗" },
        { title: "Lounge & Kitchen", description: "Relax in our comfortable lounge areas.", icon: "☕" },
        { title: "Meeting Room", description: "State-of-the-art meeting rooms available.", icon: "🏢" },
        { title: "Security", description: "Advanced security systems for peace of mind.", icon: "🔒" },
      ].map((amenity, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: index * 0.1 }}
          className="bg-white rounded-lg shadow-lg p-6 text-center"
        >
          <div className="text-4xl mb-4 text-purple-600">{amenity.icon}</div>
          <Heading size="5" className="mb-2 text-purple-600 font-bold">
            {amenity.title}
          </Heading>
          <Text size="2" className="text-gray-700">
            {amenity.description}
          </Text>
        </motion.div>
      ))}
    </div>
  </div>
</section>


        {/* Testimonials Section */}
        <section className="py-16 lg:py-24 bg-gray-50">
  <div className="container mx-auto px-4">
    <Heading
      size={{ initial: "7", md: "8" }}
      className="mb-8 text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-orange-500 font-extrabold"
      align="center"
    >
      WHAT OUR CLIENTS SAY
    </Heading>

    <Swiper
      modules={[Autoplay, Pagination]}
      spaceBetween={30}
      slidesPerView={1}
      autoplay={{ delay: 5000 }}
      pagination={{ clickable: true }}
      loop
      className="mySwiper"
    >
      {[
        {
          name: "John Doe",
          role: "CEO, Tech Innovators",
          comment: "5amas Hub has been a game-changer for our team. The facilities are top-notch, and the community is inspiring.",
          image: "https://randomuser.me/api/portraits/men/32.jpg",
        },
        {
          name: "Jane Smith",
          role: "Founder, Creative Solutions",
          comment: "The co-working spaces are perfect for collaboration, and the amenities are fantastic. Highly recommended!",
          image: "https://randomuser.me/api/portraits/women/45.jpg",
        },
        {
          name: "Michael Johnson",
          role: "Freelance Developer",
          comment: "Fast internet, quiet spaces, and great networking opportunities. This place is a gem!",
          image: "https://randomuser.me/api/portraits/men/12.jpg",
        },
        {
          name: "Lisa Wong",
          role: "Marketing Consultant",
          comment: "The ambiance is so motivating. I love the professionalism and friendly environment here!",
          image: "https://randomuser.me/api/portraits/women/25.jpg",
        },
        {
          name: "David Brown",
          role: "Startup Founder",
          comment: "The best co-working space I’ve used. Everything is well-organized, and the staff is amazing!",
          image: "https://randomuser.me/api/portraits/men/52.jpg",
        },
      ].map((testimonial, index) => (
        <SwiperSlide key={index}>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="bg-white rounded-lg shadow-lg p-8 text-center"
          >
            <img src={testimonial.image} alt={testimonial.name} className="w-20 h-20 rounded-full mx-auto mb-4" />
            <Text size="2" className="italic mb-4 text-gray-700">
              "{testimonial.comment}"
            </Text>
            <Heading size="5" className="mb-2 text-purple-600 font-bold">
              {testimonial.name}
            </Heading>
            <Text size="1" className="text-gray-600">
              {testimonial.role}
            </Text>
          </motion.div>
        </SwiperSlide>
      ))}
    </Swiper>
  </div>
</section>


        {/* Call-to-Action Banner */}
        <section className="py-16 lg:py-24 bg-gradient-to-r from-purple-600 to-orange-500">
          <div className="container mx-auto px-4 text-center">
            <Heading
              size={{ initial: "7", md: "8" }}
              className="mb-8 text-white"
              align={"center"}
            >
              READY TO JOIN OUR COMMUNITY?
            </Heading>
            <Text size="2" className="mb-8 text-white">
              Book your office space today and take your business to the next level.
            </Text>
            <br />
            <Link to="/book-space">
              <Button size="3" variant="solid" className="bg-white text-purple-600 hover:bg-gray-100">
                Get Started
              </Button>
            </Link>
          </div>
        </section>
      </main>
    </>
  );
}