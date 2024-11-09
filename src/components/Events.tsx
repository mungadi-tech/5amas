import Modal from "react-modal";
import { motion } from "framer-motion";
import eventImage from "../assets/toilet_day.jpeg"; // Replace with your actual image path

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
        <h2 className="text-2xl font-semibold text-center text-purple-700 mb-4">
          Upcoming Event: World Toilet Day
        </h2>
        <div
          className="main-event flex flex-col lg:flex-row"
          style={{ alignItems: "center" }}
        >
          <div className="w-full overflow-hidden rounded-lg mb-4">
            <motion.img
              src={eventImage}
              alt="World Toilet Day"
              className="h-full h-48 object-cover lg:h-64"
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.5 }}
            />
          </div>
          <div className="eventmodal">
            <p className="text-center text-gray-700 mb-4 text-1xl">
              Join us in raising awareness about sanitation issues around the world as we celebrate World Toilet Day.
            </p>

            <div className="flex justify-center">
              <motion.button
                className="bg-purple-600 text-white py-2 px-4 rounded-lg shadow-md hover:bg-purple-700"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() =>
                  (window.location.href = "/foundation#world-toilet-day-event")
                }
              >
                Know More
              </motion.button>
            </div>
          </div>
        </div>
      </motion.div>
    </Modal>
  );
}

export default EventModal;
