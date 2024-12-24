import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import img1 from "../assets/cyber_security_updated_tmn9ga.jpg";
import img2 from "../assets/data-exe.png";
import img3 from "../assets/data_analytics_h1f8eo.png";
import img4 from "../assets/machine_learning2_3q3v0n.png";
import img5 from "../assets/website-designer1_q86cjl.png";
import img6 from "../assets/full_dev.jpeg";
import { PaystackButton } from 'react-paystack';

const courses = [
  {
    id: 1,
    title: 'Cyber Security (Ethical Hacking)',
    details: `This course covers the foundational principles of cyber security and ethical hacking. 
      You will learn how to identify and exploit vulnerabilities, protect systems from breaches, 
      and secure networks and servers. Topics include penetration testing, risk assessment, 
      and advanced security measures.`,
    duration: '6 months',
    fee: 450000,
    image: img1,
  },
  {
    id: 2,
    title: 'Data Analytics with Excel and Power BI',
    details: `Gain hands-on experience in analyzing and visualizing data using Microsoft Excel and Power BI. 
      This course teaches advanced Excel techniques, data cleaning, Power Query, Power Pivot, and dashboard creation. 
      By the end, you'll be proficient in extracting actionable insights from data and presenting them visually.`,
    duration: '2 months',
    fee: 250000,
    image: img2,
  },
  {
    id: 3,
    title: 'Data Analytics with Excel and Power BI - Weekend',
    details: `Tailored for busy professionals, this weekend program focuses on mastering Excel and Power BI. 
      Learn to process data efficiently, create powerful visualizations, and develop interactive dashboards 
      to support decision-making in your organization.`,
    duration: '2 months (Weekends)',
    fee: 250000,
    image: img3,
  },
  {
    id: 4,
    title: 'Data Science & Machine Learning with Python',
    details: `This comprehensive course dives into the world of data science and machine learning. 
      Learn Python programming, data preprocessing, statistical analysis, and machine learning algorithms 
      like regression, classification, and clustering. Build real-world projects to solidify your knowledge.`,
    duration: '4 months',
    fee: 600000,
    image: img4,
  },
  {
    id: 5,
    title: 'Front-End Development with React',
    details: `Develop cutting-edge websites and web applications using React, the most popular front-end library. 
      This course covers modern development techniques, including state management, responsive design, and 
      creating reusable components. By the end, you'll have a solid foundation to build and deploy dynamic web apps.`,
    duration: '3 months',
    fee: 210000,
    image: img5,
  },
  {
    id: 6,
    title: 'Full Stack Web Development with Node',
    details: `Become a full-stack developer by mastering Node.js for backend development and React for frontend development. 
      Learn to create RESTful APIs, manage databases with MongoDB, and integrate the entire stack to build 
      robust web applications. This course equips you with all the tools needed to build end-to-end applications.`,
    duration: '6 months',
    fee: 420000,
    image: img6,
  },
];

const CourseDetails: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const course = courses.find((c) => c.id === parseInt(id || ''));
  const [showModal, setShowModal] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    preferredContactMethod: '', // Added this property
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  if (!course) {
    return <div className="text-center mt-10 text-xl font-bold">Course not found</div>;
  }

  const paystackConfig = {
    email: formData.email,
    amount: course.fee * 100, // Paystack expects the amount in kobo
    publicKey: 'pk_live_937a6011bcefa0f6c8f59f64a5d110f53946ed8a',
    metadata: {
      custom_fields: [
        {
          display_name: "Name",
          variable_name: "name",
          value: formData.name,
        },
        {
          display_name: "Phone Number",
          variable_name: "phone",
          value: formData.phone,
        },
      ],
    },
    onSuccess: () => {
      alert('Payment Successful!');
      setShowModal(false);
    },
    onClose: () => {
      alert('Payment process was interrupted.');
    },
  };

  return (
    <div className="py-10 px-4 max-w-4xl mx-auto">
      <img src={course.image} alt={course.title} className="w-full max-h-80 object-contain rounded-lg mb-6" />
      <h1 className="text-3xl font-bold mb-4">{course.title}</h1>
      <p className="text-gray-700 mb-4">{course.details}</p>
      <p className="text-gray-700 mb-2">
        <strong>Duration:</strong> {course.duration}
      </p>
      <p className="text-gray-700 mb-6">
        <strong>Fee:</strong> ₦{course.fee.toLocaleString()}
      </p>
      <button
        className="bg-purple-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition duration-300"
        onClick={() => setShowModal(true)}
      >
        Apply Now
      </button>

      {showModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
          <div className="bg-white p-8 rounded-lg shadow-xl max-w-lg w-full">
            <h2 className="text-2xl font-bold text-gray-800 mb-6">Application Form</h2>
            <p className="text-gray-600 mb-4">
              Please fill in your details below. Once completed, click "Proceed to Payment" to finalize your application.
            </p>
            <form className="space-y-4">
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                placeholder="Full Name"
                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <input
                type="text"
                name="phone"
                value={formData.phone}
                onChange={handleInputChange}
                placeholder="Phone Number"
                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                placeholder="Email Address"
                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <textarea
                name="additionalInfo"
                placeholder="Any additional information or special requests"
                rows={3}
                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <select
                name="preferredContactMethod"
                onChange={handleInputChange}
                value={formData.preferredContactMethod || ""} // Ensuring the formData includes this field
                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                <option value="">Preferred Contact Method</option>
                <option value="phone">Phone</option>
                <option value="email">Email</option>
              </select>
            </form>
            <p className="text-gray-700 mt-6">
              <strong>Course Fee:</strong> ₦{course?.fee.toLocaleString()}
            </p>
            <div className="flex justify-between items-center mt-8">
              <button
                onClick={() => setShowModal(false)}
                className="py-2 px-6 bg-gray-400 text-white rounded-lg hover:bg-gray-500 transition duration-300"
              >
                Cancel
              </button>
              <div className="flex flex-col items-center">
                <p className="text-sm text-gray-500 mb-2">Click below to proceed to payment</p>
                <PaystackButton {...paystackConfig} className="py-2 px-6 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition duration-300" />
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default CourseDetails;
