import Modal from "react-modal";
import { motion } from "framer-motion";

// Apply default styles for react-modal
Modal.setAppElement("#root");

// Define the props type for EventModal
type EventModalProps = {
  onClose: () => void;
};

export function EventModal({ onClose }: EventModalProps) {
  return (
    <Modal
      isOpen={true}
      onRequestClose={onClose}
      className="w-full max-w-lg mx-auto mt-20 bg-white rounded-lg shadow-lg overflow-hidden relative p-6 lg:max-w-2xl"
      overlayClassName="fixed inset-0 bg-gray-800 bg-opacity-50 flex items-center justify-center"
    >
      <button
        onClick={onClose}
        className="absolute top-4 right-4 text-gray-500 hover:text-gray-800"
      >
        &times;
      </button>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        {/* Header */}
        <h2 className="text-2xl font-bold text-center text-purple-700 mb-4">
          🚀 Free Skill Acquisition Program
        </h2>

        {/* Image */}
        <div className="w-full overflow-hidden rounded-lg mb-4">
          <motion.img
            src="https://images.unsplash.com/photo-1531482615713-2afd69097998?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="Free Skill Acquisition Program"
            className="w-full h-48 object-cover lg:h-64"
            initial={{ scale: 0.9 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.5 }}
          />
        </div>

        {/* Content */}
        <div className="text-center">
          <p className="text-gray-700 mb-4">
            Empower yourself with <strong>practical skills</strong> for a brighter future! Join our free program and unlock new opportunities.
          </p>

          {/* Skills List */}
          <div className="mb-6">
            <h3 className="text-xl font-semibold text-purple-700 mb-2">
              🛠️ Skills You'll Learn:
            </h3>
            <ul className="text-gray-700 text-sm list-disc list-inside">
              <li>Tailoring & Fashion Design</li>
              <li>Graphic Design & Digital Marketing</li>
              <li>Catering & Baking</li>
              <li>Web Development & Coding</li>
              <li>Entrepreneurship & Financial Literacy</li>
            </ul>
          </div>

          {/* Call-to-Action Button */}
          <motion.button
            className="bg-purple-600 text-white py-2 px-6 rounded-lg shadow-md hover:bg-purple-700 transition-all"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() =>
              (window.location.href = "/foundation#skill-acquisition-event")
            }
          >
            Learn More
          </motion.button>
        </div>
      </motion.div>
    </Modal>
  );
}

export default EventModal;