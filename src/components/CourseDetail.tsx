import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { courses } from './Courses';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const CourseDetail: React.FC = () => {
  const [showModal, setShowModal] = useState(false);
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phoneNumber: '',
    address: '',
    comments: '',
  });

  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  const { id } = useParams<{ id: string }>();
  const course = courses.find((course) => course.id === id);

  if (!course) {
    return <div className="text-center text-red-500 text-xl font-bold">Course not found!</div>;
  }

  const handleApply = () => {
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const response = await fetch('https://fiveamas-backend.onrender.com/api/applications/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        toast.success('Application submitted successfully!', {
          position: 'top-right',
          autoClose: 3000,
        });
        
        setFormData({
          fullName: '',
          email: '',
          phoneNumber: '',
          address: '',
          comments: '',
        });
      } else {
        toast.error('Failed to submit application. Please try again.', {
          position: 'top-right',
          autoClose: 3000,
        });
      }
    } catch (error) {
      toast.error('An error occurred. Please try again later.', {
        position: 'top-right',
        autoClose: 3000,
      });
    }
  };

  return (
    <div className="max-w-5xl mx-auto py-12 px-6">
       <ToastContainer />
      {/* Header */}
      <div className="text-center mb-12" data-aos="fade-down">
        <h1 className="text-5xl font-bold text-purple-800 mb-4">{course.title}</h1>
        <p className="text-lg text-gray-600">{course.description}</p>
      </div>

      {/* Image Section */}
      <div className="mb-12" data-aos="fade-up">
        <img
          src={course.image}
          alt={course.title}
          className="w-full rounded-lg shadow-lg"
        />
      </div>

      {/* What You'll Learn */}
      <div
        className="bg-white rounded-lg shadow-lg p-8 mb-12"
        data-aos="fade-right"
      >
        <h2 className="text-3xl font-semibold text-gray-800 mb-6">
          What You'll Learn
        </h2>
        <ul className="list-disc pl-6 space-y-4 text-lg text-gray-700">
          {course.whatYouLearn.map((item, index) => (
            <li key={index} className="flex items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 text-purple-600 mr-3"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M16.707 5.293a1 1 0 00-1.414 0L7 13.586 4.707 11.293a1 1 0 10-1.414 1.414l3 3a1 1 0 001.414 0l9-9a1 1 0 000-1.414z"
                  clipRule="evenodd"
                />
              </svg>
              {item}
            </li>
          ))}
        </ul>
      </div>

      {/* Curriculum Highlights */}
      <div
        className="bg-white rounded-lg shadow-lg p-8 mb-12"
        data-aos="fade-left"
      >
        <h2 className="text-3xl font-semibold text-gray-800 mb-6">
          Curriculum Highlights
        </h2>
        <ul className="list-disc pl-6 space-y-4 text-lg text-gray-700">
          {course.highlights.map((item, index) => (
            <li key={index} className="flex items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 text-purple-600 mr-3"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path d="M10 15l-3.5 2.1 1.1-4.3L4 8.9l4.5-.4L10 4.5l1.5 4 4.5.4-3.6 2.9 1.1 4.3z" />
              </svg>
              {item}
            </li>
          ))}
        </ul>
      </div>

      {/* Payment Options */}
      <div
        className="bg-white rounded-lg shadow-lg p-8 mb-12"
        data-aos="fade-right"
      >
        <h2 className="text-3xl font-semibold text-gray-800 mb-6">
          Tuition & Payment Options
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div
            className="p-6 border rounded-lg shadow-md bg-gray-50 hover:bg-purple-100 hover:shadow-lg cursor-pointer transition duration-300"
            onClick={() => alert('You selected Full Payment')}
          >
            <h3 className="text-xl font-bold text-gray-800">Full Payment</h3>
            <p className="text-lg text-gray-600">{course.tuitionFull}</p>
          </div>
          <div
            className="p-6 border rounded-lg shadow-md bg-gray-50 hover:bg-purple-100 hover:shadow-lg cursor-pointer transition duration-300"
            onClick={() => alert('You selected Installment Payment')}
          >
            <h3 className="text-xl font-bold text-gray-800">Installment Payment</h3>
            <p className="text-lg text-gray-600">{course.tuitionInstallment}</p>
          </div>
        </div>
      </div>

      {/* Next Start Date */}
      <div
        className="bg-white rounded-lg shadow-lg p-8 text-center"
        data-aos="zoom-in"
      >
        <h2 className="text-3xl font-semibold text-gray-800 mb-4">
          Next Start Date
        </h2>
        <p className="text-lg text-gray-600">{course.startDate}</p>
      </div>

       {/* Apply Now Button */}
       <div className="text-center mb-12 mt-8">
        <button
          className="bg-purple-600 text-white px-6 py-3 rounded-lg shadow-lg hover:bg-purple-700 transition duration-300"
          onClick={handleApply}
        >
          Apply Now
        </button>
      </div>

      {/* Modal */}
      {showModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg shadow-lg max-w-lg w-full p-6 relative">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">Apply for {course.title}</h2>
            <form className="space-y-4" onSubmit={handleSubmit}>
              <div>
                <label className="block text-gray-600 mb-2">Full Name</label>
                <input
                  type="text"
                  name="fullName"
                  value={formData.fullName}
                  onChange={handleChange}
                  className="w-full border rounded-lg px-4 py-2"
                  placeholder="Enter your full name"
                  required
                />
              </div>
              <div>
                <label className="block text-gray-600 mb-2">Email</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full border rounded-lg px-4 py-2"
                  placeholder="Enter your email"
                  required
                />
              </div>
              <div>
                <label className="block text-gray-600 mb-2">Phone Number</label>
                <input
                  type="tel"
                  name="phoneNumber"
                  value={formData.phoneNumber}
                  onChange={handleChange}
                  className="w-full border rounded-lg px-4 py-2"
                  placeholder="Enter your phone number"
                  required
                />
              </div>
              <div>
                <label className="block text-gray-600 mb-2">Address</label>
                <input
                  type="text"
                  name="address"
                  value={formData.address}
                  onChange={handleChange}
                  className="w-full border rounded-lg px-4 py-2"
                  placeholder="Enter your address"
                />
              </div>
              <div>
                <label className="block text-gray-600 mb-2">Questions or Comments</label>
                <textarea
                  name="comments"
                  value={formData.comments}
                  onChange={handleChange}
                  className="w-full border rounded-lg px-4 py-2"
                  placeholder="Enter any questions or comments"
                  rows={4}
                ></textarea>
              </div>
              <button
                type="submit"
                className="bg-purple-600 text-white px-4 py-2 rounded-lg shadow-lg hover:bg-purple-700 transition duration-300"
              >
                Submit Application
              </button>
            </form>
            <button
              className="absolute top-2 right-2 text-gray-600 hover:text-gray-800"
              onClick={closeModal}
            >
              ✖
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default CourseDetail;
