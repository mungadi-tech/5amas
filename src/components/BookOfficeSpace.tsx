import { Dialog } from "@radix-ui/themes";
import { AnimatePresence, motion } from "framer-motion";
import { Check } from "lucide-react";
import { useState } from "react";
import { Booking } from "./Booking";

const physicalOffices = [
  {
    name: "Single Table",
    price: 2000,
    features: [
      "24/7 Access",
      "High-speed Internet",
      "Meeting Room Credits",
      "Mail Handling",
    ],
  },
  {
    name: "Double Table",
    price: 3000,
    features: [
      "Private Office",
      "Dedicated Receptionist",
      "Printing Services",
      "Catering Options",
    ],
  },
  {
    name: "Work Station For 4",
    price: 5000,
    features: [
      "Custom Floor Plan",
      "Branded Space",
      "Event Space Access",
      "Concierge Service",
    ],
  },
  {
    name: "Small Exec Office",
    price: 5000,
    features: [
      "Custom Floor Plan",
      "Branded Space",
      "Event Space Access",
      "Concierge Service",
    ],
  },
  {
    name: "Big Exec Office",
    price: 10000,
    features: [
      "Custom Floor Plan",
      "Branded Space",
      "Event Space Access",
      "Concierge Service",
    ],
  },
  {
    name: "Board Room",
    price: 10000,
    features: [
      "Custom Floor Plan",
      "Branded Space",
      "Event Space Access",
      "Concierge Service",
    ],
  },
  {
    name: "Bouquet Space",
    price: "15000",
    features: [
      "Custom Floor Plan",
      "Branded Space",
      "Event Space Access",
      "Concierge Service",
    ],
  },
];

const virtualOffices = {
  single: [
    {
      name: "Virtual Startup",
      price: 10000,
      features: [
        "Customer service team for all walk-in enquiries",
        "Prestigious business address",
        "Access to the facility at a subsidized charge",
      ],
    },
    {
      name: "Virtual Startup Max",
      price: 15000,
      features: [
        "Customer service team for all walk-in enquiries",
        "Prestigious business address",
        "Access to the facility at a subsidized charge",
        "Mail handling and forwarding services",
      ],
    },
    {
      name: "Virtual Flexi",
      price: 40500,
      features: [
        "Customer service team for all walk-in enquiries",
        "Prestigious business address",
        "Access to the Internet",
        "Mail handling and forwarding services",
        "Designated phone number E1 line",
        "Professional call agent",
      ],
    },
    {
      name: "Virtual Flexi Max",
      price: 53500,
      features: [
        "Customer service team for all walk-in enquiries",
        "Prestigious business address",
        "Access to the Internet",
        "Mail handling and forwarding services",
        "Designated phone number E1 line",
        "Professional call agent",
        "4 days free use of the 1-Man Office per month no roll over",
        "A dedicated Secretary",
        "Professional call agent",
      ],
    },
    {
      name: "Virtual Startup Max",
      price: 152500,
      features: [
        "Customer service team for all walk-in enquiries",
        "Prestigious business address",
        "Access to the Internet",
        "Mail handling and forwarding services",
        "Designated phone number E1 line",
        "Professional call agent",
        "4 days free use of the 1-Man Office per month no roll over",
        "A dedicated Secretary",
        "An official email address for your company Charges apply",
      ],
    },
  ],
  dual: [
    {
      name: "Virtual Startup Duo",
      price: 16000,
      features: [
        "Customer service team for all walk-in enquiries",
        "Prestigious business address",
        "Access to the facility at a subsidized charge",
      ],
    },

    {
      name: "Virtual Startup Max Duo",
      price: 2400,
      features: [
        "Customer service team for all walk-in enquiries",
        "Prestigious business address",
        "Access to the facility at a subsidized charge",
        "Mail handling and forwarding services",
      ],
    },
    {
      name: "Virtual Flexi Duo",
      price: 64800,
      features: [
        "ustomer service team for all walk-in enquiries",
        "Prestigious business address",
        "Mail handling and forwarding services",
        "Designated phone number (E1 line)",
        "Professional call agent",
      ],
    },
    {
      name: "Virtual Flexi Max Duo",
      price: 85600,
      features: [
        "ustomer service team for all walk-in enquiries",
        "Prestigious business address",
        "Access to the Internet",
        "Mail handling and forwarding services",
        "Designated phone number (E1 line)",
        "Professional call agent",
        "3 days free use of the 1-Man Office per month (no roll over)",
      ],
    },
    {
      name: "Virtual Max Premium Duo",
      price: 244000,
      features: [
        "ustomer service team for all walk-in enquiries",
        "Prestigious business address",
        "Access to the Internet",
        "Mail handling and forwarding services",
        "Designated phone number E1 line",
        "Professional call agent",
        "4 days free use of the 1-Man Office per month no roll over",
        "A dedicated Secretary",
        "An official email address for your company Charges apply",
      ],
    },
  ],
};

type VirtualType = typeof virtualOffices;
type VirtualKeyType = keyof VirtualType;

export function BookOfficeSpace() {
  const [activeVirtualTab, setActiveVirtualTab] =
    useState<VirtualKeyType>("single");
  const [open, onOpenChange] = useState(false);

  return (
    <div>
      {/* Physical Office Spaces */}
      <section className="mb-20">
        <h2 className="mb-8 text-center text-3xl font-semibold">
          Physical Office Spaces
        </h2>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {physicalOffices.map((office, index) => (
            <motion.div
              key={office.name}
              className="relative overflow-hidden rounded-lg bg-white bg-opacity-10 p-6 backdrop-blur-lg transition-all duration-300 hover:bg-opacity-20"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ scale: 1.05 }}
            >
              <div className="absolute -right-10 -top-10 h-40 w-40 rounded-full bg-gradient-to-br from-blue-500 to-emerald-500 opacity-50 blur-2xl"></div>
              <h3 className="mb-4 text-2xl font-bold">{office.name}</h3>
              <p className="mb-6 text-4xl font-bold">
                ₦{office.price}
                <span className="text-lg font-normal">/hour</span>
              </p>
              <ul className="space-y-2">
                {office.features.map((feature, idx) => (
                  <li key={idx} className="flex items-center">
                    <Check className="mr-2 h-5 w-5 text-purple-400" />
                    {feature}
                  </li>
                ))}
              </ul>
              <Dialog.Root onOpenChange={onOpenChange} open={open}>
                <Dialog.Trigger>
                  <motion.button
                    className="mt-6 w-full rounded-full bg-gradient-to-r from-red-500 to-purple-500 py-2 font-semibold text-white transition-all hover:from-blue-600 hover:to-emerald-600"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    Choose Plan
                  </motion.button>
                </Dialog.Trigger>
                <Dialog.Content
                  //   width={"100%"}
                  minWidth={"98%"}
                  // maxHeight={"40rem"}
                  className="bg-gradient-to-br max-h-[48rem] md:max-h-[55rem] from-purple-900 via-red-800 to-purple-900 text-white"
                >
                  <Booking
                    isPhysical
                    onOpenChange={() => onOpenChange(false)}
                  />
                </Dialog.Content>
              </Dialog.Root>
            </motion.div>
          ))}
        </div>
      </section>
      {/* Virtual Office Plans */}
      <section>
        <h2 className="mb-8 text-center text-3xl font-semibold">
          Virtual Office Plans
        </h2>
        <div className="mb-8 flex justify-center">
          <motion.button
            className={`mr-4 rounded-full px-6 py-2 font-semibold ${
              activeVirtualTab === "single"
                ? "bg-red-600 text-white"
                : "bg-white bg-opacity-10 text-blue-300"
            }`}
            onClick={() => setActiveVirtualTab("single")}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Single Location
          </motion.button>
          <motion.button
            className={`rounded-full px-6 py-2 font-semibold ${
              activeVirtualTab === "dual"
                ? "bg-purple-500 text-white"
                : "bg-white bg-opacity-10 text-purple-300"
            }`}
            onClick={() => setActiveVirtualTab("dual")}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Dual Location
          </motion.button>
        </div>
        <AnimatePresence mode="wait">
          <motion.div
            key={activeVirtualTab}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="grid gap-8 md:grid-cols-3"
          >
            {virtualOffices[activeVirtualTab].map((plan, index) => (
              <motion.div
                key={plan.name}
                className="relative overflow-hidden rounded-lg bg-white bg-opacity-10 p-6 backdrop-blur-lg transition-all duration-300 hover:bg-opacity-20"
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ scale: 1.05 }}
              >
                <div className="absolute -right-10 -top-10 h-40 w-40 rounded-full bg-gradient-to-br from-purple-500 to-pink-500 opacity-50 blur-2xl"></div>
                <h3 className="mb-4 text-2xl font-bold">{plan.name}</h3>
                <p className="mb-6 text-4xl font-bold">
                  ₦{plan.price}
                  <span className="text-lg font-normal">/month</span>
                </p>
                <ul className="space-y-2">
                  {plan.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center">
                      <Check className="mr-2 h-5 w-5 text-emerald-400" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <Dialog.Root onOpenChange={onOpenChange} open={open}>
                  <Dialog.Trigger>
                    <motion.button
                      className="mt-6 w-full rounded-full bg-gradient-to-r from-red-500 to-purple-500 py-2 font-semibold text-white transition-all hover:from-blue-600 hover:to-emerald-600"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      Choose Plan
                    </motion.button>
                  </Dialog.Trigger>
                  <Dialog.Content
                    //   width={"100%"}
                    minWidth={"98%"}
                    maxHeight={"40rem"}
                    className="bg-gradient-to-br from-purple-900 via-red-800 to-purple-900 text-white"
                  >
                    <Booking
                      isPhysical={false}
                      onOpenChange={() => onOpenChange(false)}
                    />
                  </Dialog.Content>
                </Dialog.Root>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>
      </section>
    </div>
  );
}
