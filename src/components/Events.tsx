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
        <h2 className="text-2xl font-bold text-center text-green-700 mb-4">
          🎓 Free JAMB Form Program
        </h2>

        {/* Image */}
        <div className="w-full overflow-hidden rounded-lg mb-4">
          <motion.img
            src="https://cdn.punchng.com/wp-content/uploads/2017/06/01170036/JAMB-logo.jpg"
            alt="Free JAMB Form Program"
            className="w-full h-48 object-cover lg:h-64"
            initial={{ scale: 0.9 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.5 }}
          />
        </div>

        {/* Content */}
        <div className="text-center">
          <p className="text-gray-700 mb-4">
            Get a <strong>free JAMB form</strong> and take the first step toward your academic success! Apply today and let’s support your educational journey.
          </p>

          {/* Benefits List */}
          <div className="mb-6">
            <h3 className="text-xl font-semibold text-green-700 mb-2">
              ✅ What You Get:
            </h3>
            <ul className="text-gray-700 text-sm list-disc list-inside">
              <li>100% Free JAMB Form</li>
              <li>Registration Assistance</li>
              <li>Exam Preparation Support</li>
              <li>Exclusive Study Materials</li>
              <li>Guidance from Education Experts</li>
            </ul>
          </div>

          {/* Call-to-Action Button */}
          <motion.button
            className="bg-green-600 text-white py-2 px-6 rounded-lg shadow-md hover:bg-green-700 transition-all"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() =>
              (window.location.href = "/foundation#jamb-program")
            }
          >
            Apply Now
          </motion.button>
        </div>
      </motion.div>
    </Modal>
  );
}

export default EventModal;
