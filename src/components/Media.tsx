import { Button, Heading, Text } from "@radix-ui/themes";
import {
  AnimatePresence,
  motion,
  useAnimation,
  useScroll,
  useTransform,
} from "framer-motion";
import { X, ZoomIn } from "lucide-react";
import { ImgHTMLAttributes, useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import pic7 from "../assets/building.jpg";
import kitchen from "../assets/kitchen.jpg";
import lubby from "../assets/lubby.jpg";
import pic6 from "../assets/pic1_optimized_1000.jpg";
import pic2 from "../assets/pic2_1_optimized_1000.jpg";
import pic3 from "../assets/pic3.jpg";
import pic4 from "../assets/pic4.jpg";
import pic5 from "../assets/pic5.jpg";
import { default as space3, default as space4 } from "../assets/space1.jpg";
import space6 from "../assets/space2.jpg";
import space1 from "../assets/space3.jpg";
import space2 from "../assets/space4.jpg";
import { default as pic8, default as station4 } from "../assets/space5.jpg";
import pic9 from "../assets/space6.jpg";
import waiting from "../assets/waiting.jpg";

const galleryItems = [
  {
    id: 1,
    title: "Conference/Training Room",
    image: space1,
    desc: "hhhhh",
  },
  {
    id: 2,
    title: "Work Station for 2",
    image: pic9,
    desc: "hhhhh",
  },
  {
    id: 3,
    title: "Work Station for 4",
    image: station4,
    desc: "hhhhh",
  },
  {
    id: 4,
    title: "Small EXEC Office",
    image: space4,
    desc: "hhhhh",
  },
  {
    id: 5,
    title: "Big EXEC Office",
    image: space2,
    desc: "hhhhh",
  },
  {
    id: 6,
    title: "Office Kitchen",
    image: kitchen,
    desc: "hhhhh",
  },
];

type GalleryItemsType = (typeof galleryItems)[0];

const Particle = ({ index }: { index: number }) => {
  const controls = useAnimation();

  useEffect(() => {
    controls.start({
      y: [0, -10, 0],
      transition: {
        duration: 2 + Math.random() * 2,
        repeat: Infinity,
        repeatType: "reverse",
        delay: index * 0.1,
      },
    });
  }, [controls, index]);

  return (
    <motion.div
      className="absolute h-1 w-1 rounded-full bg-blue-400 opacity-50"
      style={{
        left: `${Math.random() * 100}%`,
        top: `${Math.random() * 100}%`,
      }}
      animate={controls}
    />
  );
};

export function EnhancedFuturisticGallery() {
  const [selectedItem, setSelectedItem] = useState<GalleryItemsType | null>(
    null
  );
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({ target: containerRef });
  const y = useTransform(scrollYProgress, [0, 1], [0, -50]);

  useEffect(() => {
    const handleMouseMove = (e: any) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <div className="min-h-screen overflow-hidden text-white" ref={containerRef}>
      {/* Animated Background */}
      <div className="fixed inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-br from-red-900 to-purple-900 opacity-50"></div>
        <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))]"></div>
        {[...Array(50)].map((_, index) => (
          <Particle key={index} index={index} />
        ))}
      </div>

      {/* Cursor Trail */}
      <motion.div
        className="pointer-events-none fixed inset-0 z-50"
        animate={{
          background: `radial-gradient(circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(59, 130, 246, 0.15) 0%, rgba(59, 130, 246, 0) 80%)`,
        }}
        transition={{ type: "spring", damping: 10, stiffness: 100 }}
      />

      {/* Header */}
      <motion.header
        className="relative overflow-hidden py-20 text-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <h1 className="mb-4 text-5xl font-bold tracking-tight sm:text-6xl">
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-400 to-gray-600">
            Our Offices
          </span>
        </h1>
        <p className="mx-auto max-w-2xl text-xl text-gray-700">
          Explore our innovative projects shaping the future
        </p>
        <motion.div className="absolute inset-0 -z-10" style={{ y }}>
          <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500 opacity-30 blur-3xl"></div>
        </motion.div>
      </motion.header>

      {/* Gallery Grid */}
      <main className="container mx-auto px-4">
        <motion.div
          className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4"
          initial="hidden"
          animate="visible"
          variants={{
            visible: {
              transition: {
                staggerChildren: 0.1,
              },
            },
          }}
        >
          {galleryItems.map((item, index) => (
            <motion.div
              key={item.id}
              className="group relative overflow-hidden rounded-lg bg-red-500 p-4 shadow-lg backdrop-blur-sm transition-all duration-300 hover:scale-105 hover:bg-opacity-50"
              variants={{
                hidden: { opacity: 0, y: 50 },
                visible: { opacity: 1, y: 0 },
              }}
              whileHover={{ z: 10 }}
              animate={{
                y: [0, -5, 0],
                transition: {
                  duration: 3,
                  repeat: Infinity,
                  repeatType: "reverse",
                  delay: index * 0.2,
                },
              }}
              onClick={() => setSelectedItem(item)}
            >
              <div className="relative h-60 w-full overflow-hidden rounded-lg">
                <img
                  src={item.image}
                  alt={item.title}
                  className="transition-transform duration-300 group-hover:scale-110 object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100"></div>
              </div>
              <h3 className="mt-4 text-lg font-semibold">{item.title}</h3>
              <div className="absolute bottom-4 right-4 rounded-full bg-red-500 p-2 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                <ZoomIn className="h-5 w-5 text-white" />
              </div>
            </motion.div>
          ))}
        </motion.div>
      </main>

      {/* Modal for selected item */}
      {selectedItem && (
        <motion.div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-75 p-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <motion.div
            className="relative max-w-3xl rounded-lg bg-red-500 p-8 shadow-xl"
            initial={{ scale: 0.9, y: 20, opacity: 0 }}
            animate={{ scale: 1, y: 0, opacity: 1 }}
            exit={{ scale: 0.9, y: 20, opacity: 0 }}
            transition={{ type: "spring", damping: 15, stiffness: 100 }}
          >
            <button
              className="absolute right-4 top-4 text-gray-600 hover:text-white"
              onClick={() => setSelectedItem(null)}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
            <img
              src={selectedItem.image}
              alt={selectedItem.title}
              width={600}
              height={400}
              className="rounded-lg"
            />
            <h2 className="mt-4 text-2xl font-bold">{selectedItem.title}</h2>
            <p className="mt-4">{selectedItem.desc}</p>
          </motion.div>
        </motion.div>
      )}
    </div>
  );
}

const galleryImages = [
  {
    id: 1,
    src: space1,
    alt: "Office space 1",
  },
  {
    id: 2,
    src: space2,
    alt: "Reception area",
  },
  {
    id: 3,
    src: space3,
    alt: "Coworking space",
  },
  {
    id: 4,
    src: pic7,
    alt: "Office exterior",
  },

  {
    id: 5,
    src: pic2,
    alt: "Office exterior",
  },
  {
    id: 6,
    src: pic3,
    alt: "Office exterior",
  },
  {
    id: 7,
    src: pic4,
    alt: "Office exterior",
  },
  {
    id: 8,
    src: pic5,
    alt: "Office exterior",
  },
  {
    id: 9,
    src: pic6,
    alt: "Office exterior",
  },
  {
    id: 10,
    src: pic8,
    alt: "Office exterior",
  },
  {
    id: 11,
    src: pic9,
    alt: "Office exterior",
  },
  {
    id: 12,
    src: kitchen,
    alt: "Office exterior",
  },
  {
    id: 13,
    src: lubby,
    alt: "Office exterior",
  },
  {
    id: 14,
    src: waiting,
    alt: "Office exterior",
  },
  {
    id: 15,
    src: space6,
    alt: "Office exterior",
  },
];

const newsArticles = [
  {
    id: 1,
    title: "5amas Group Expands Virtual Office Services",
    date: "May 15, 2023",
    excerpt:
      "5amas Group announces the expansion of its virtual office services to meet the growing demand for flexible work solutions...",
  },
  {
    id: 2,
    title: "New Tech Hub Opens in Downtown Metro City",
    date: "April 28, 2023",
    excerpt:
      "5amas Group unveils its latest state-of-the-art tech hub in the heart of Metro City, offering cutting-edge facilities for startups and established tech companies alike...",
  },
  {
    id: 3,
    title:
      "5amas Group Partners with Local Businesses for Sustainability Initiative",
    date: "April 10, 2023",
    excerpt:
      "In a move towards greater environmental responsibility, 5amas Group announces a new partnership with local businesses to implement sustainable practices across its office spaces...",
  },
];

const GalleryModal = ({
  image,
  onClose,
}: {
  onClose: () => void;
  image: ImgHTMLAttributes<string>;
}) => (
  <motion.div
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    exit={{ opacity: 0 }}
    className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-75 p-4"
  >
    <div className="relative max-w-4xl">
      <img
        src={image.src}
        alt={image.alt}
        width={800}
        height={600}
        className="rounded-lg"
      />
      <button
        onClick={onClose}
        className="absolute -top-4 -right-4 rounded-full bg-red-500 p-2 text-white hover:bg-red-600"
      >
        <X size={24} />
      </button>
    </div>
  </motion.div>
);

type GalleryType = (typeof galleryImages)[0];
export function MediaPage() {
  const [selectedImage, setSelectedImage] = useState<GalleryType | null>(null);

  const openModal = (image: GalleryType) => setSelectedImage(image);
  const closeModal = () => setSelectedImage(null);

  return (
    <div className="min-h-screen ">
      <div className="container mx-auto px-4">
        <motion.h1
          className="mb-12 text-center text-5xl font-bold"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          5amas Group{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-400 to-purple-400">
            Media
          </span>
        </motion.h1>

        {/* Gallery Section */}
        <section className="mb-20">
          <h2 className="mb-8 text-center text-3xl font-semibold">
            Our Gallery
          </h2>
          <motion.div
            className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3"
            initial="hidden"
            animate="visible"
            variants={{
              hidden: { opacity: 0 },
              visible: {
                opacity: 1,
                transition: {
                  staggerChildren: 0.1,
                },
              },
            }}
          >
            {galleryImages.map((image) => (
              <motion.div
                key={image.id}
                variants={{
                  hidden: { opacity: 0, scale: 0.8 },
                  visible: { opacity: 1, scale: 1 },
                }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => openModal(image)}
                className="cursor-pointer overflow-hidden rounded-lg"
              >
                <img
                  src={image.src}
                  alt={image.alt}
                  width={400}
                  height={300}
                  className="transition-transform duration-300 hover:scale-110 mx-auto"
                />
              </motion.div>
            ))}
          </motion.div>
        </section>

        {/* News Section */}
        <section>
          <h2 className="mb-8 text-center text-3xl font-semibold">
            Latest News
          </h2>
          <div className="grid gap-4 md:grid-cols-3">
            {newsArticles.map((article) => (
              <motion.article
                key={article.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="rounded-lg bg-[var(--accent-3)] bg-opacity-50 p-6 backdrop-blur-lg"
              >
                <Heading>{article.title}</Heading>
                <p className="mb-4">
                  <Text color="gray" size={"1"}>
                    {article.date}
                  </Text>
                </p>
                <p>
                  <Text color="gray">{article.excerpt}</Text>
                </p>
                <motion.div
                  className="mt-4 inline-block text-red-400 hover:text-red-300"
                  whileHover={{ x: 5 }}
                >
                  <Link to={""}>
                    <Button>Read more</Button>
                  </Link>
                </motion.div>
              </motion.article>
            ))}
          </div>
        </section>

        {/* Gallery Modal */}
        <AnimatePresence>
          {selectedImage && (
            <GalleryModal
              image={selectedImage as unknown as ImgHTMLAttributes<string>}
              onClose={closeModal}
            />
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}
