import { Card, Heading, Inset, Text } from "@radix-ui/themes";
import { motion } from "framer-motion";
import photo from "../assets/resources_ogo.png";
import { PhysicalBooking } from "../forms/PhysicalBooking";
import { VirtualBooking } from "../forms/VirtualBookin";

const Particle = () => {
  const randomX = Math.random() * 100;
  const randomY = Math.random() * 100;
  const randomDelay = Math.random() * 2;
  const colors = ["bg-red-400", "bg-purple-400", "bg-pink-400"];
  const randomColor = colors[Math.floor(Math.random() * colors.length)];

  return (
    <motion.div
      className={`absolute h-2 w-2 rounded-full ${randomColor}`}
      style={{
        left: `${randomX}%`,
        top: `${randomY}%`,
      }}
      animate={{
        y: [0, -30, 0],
        opacity: [0, 1, 0],
      }}
      transition={{
        duration: 3,
        repeat: Infinity,
        delay: randomDelay,
      }}
    />
  );
};

export function Booking({
  isPhysical,
  onOpenChange,
}: {
  isPhysical: boolean;
  onOpenChange: () => void;
}) {
  return (
    <div className="flex flex-col-reverse md:flex-row md:justify-around gap-6 items-center">
      {/* Particle effect */}
      {[...Array(20)].map((_, index) => (
        <Particle key={index} />
      ))}

      <div className="relative z-10">
        <motion.div
          className="mx-auto max-w-2xl rounded-lg bg-white bg-opacity-10 p-8 backdrop-blur-lg"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          {isPhysical ? (
            <PhysicalBooking onOpenChange={onOpenChange} />
          ) : (
            <VirtualBooking onOpenChange={onOpenChange} />
          )}
        </motion.div>
      </div>
      <div>
        <motion.h1
          className="mb-4 text-center text-2xl font-bold"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Book Your{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-400 to-purple-400">
            {isPhysical ? "Physical Office" : "Virtual Office"}
          </span>
        </motion.h1>

        <Card
          variant="ghost"
          style={{
            background: "var(--accent-3)",
            color: "black",
            padding: 40,
            borderRadius: 50,
          }}
        >
          <Inset style={{ width: "10rem", margin: "auto" }}>
            <img
              src={photo}
              alt=""
              className="mx-auto rounded-full size-[10rem] mb-8 hidden md:block"
            />
          </Inset>

          <div className="flex flex-col justify-center items-center">
            <Heading align={"center"} size={"4"}>
              For Immediate Response Please call
            </Heading>

            <div className="flex flex-col">
              <Text>(+234) 8055686805</Text>
              <Text>(+234) 8055686805</Text>
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
}
