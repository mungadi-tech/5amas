import React from 'react';
import { Link } from 'react-router-dom';
import img1 from "../assets/cyber_security_updated_tmn9ga.jpg"
import img2 from "../assets/data-exe.png"
import img3 from "../assets/data_analytics_h1f8eo.png"
import img4 from "../assets/machine_learning2_3q3v0n.png"
import img5 from "../assets/website-designer1_q86cjl.png"
import img6 from "../assets/programming-img1_eeqa1j.jpg"


interface Course {
  id: number;
  title: string;
  image: string;
  buttonText: string;
}

const courses: Course[] = [
  {
    id: 1,
    title: 'Cyber Security (Ethical Hacking)',
    image: `${img1}`,
    buttonText: 'Apply Now',
  },
  {
    id: 2,
    title: 'Data Analytics with Excel and Power BI',
    image: `${img2}`,
    buttonText: 'Apply Now',
  },
  {
    id: 3,
    title: 'Data Analytics with Excel and Power BI - Weekend',
    image: `${img3}`,
    buttonText: 'Apply Now',
  },
  {
    id: 4,
    title: 'Data Science & Machine Learning with Python',
    image: `${img4}`,
    buttonText: 'Apply Now',
  },
  {
    id: 5,
    title: 'Front-End Development with React',
    image: `${img5}`,
    buttonText: 'Apply Now',
  },
  {
    id: 6,
    title: 'Full Stack Web Development with Node',
    image: `${img6}`,
    buttonText: 'Apply Now',
  },
];

const BodyTech: React.FC = () => {
  return (
    <div className="py-10 px-4 max-w-7xl mx-auto">
      <h2 className="text-center text-5xl text-purple-600 font-bold mb-4">Our Courses</h2>
      <p className="text-center text-1xl text-gray-600 mb-8">
        Our courses are carefully designed and structured to deliver the best quality to take you from beginner to advanced skill level.
      </p>
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {courses.map((course) => (
          <div
            key={course.id}
            className="bg-white rounded-lg shadow-lg transform transition duration-300 hover:-translate-y-2 hover:shadow-2xl"
          >
            <img
              src={course.image}
              alt={course.title}
              className="h-48 w-full object-cover rounded-t-lg"
            />
            <div className="p-6 flex flex-col">
              <h3 className="text-lg font-semibold text-center mb-4">{course.title}</h3>
              <Link to={`/course/${course.id}`}>
                <button
                  className="mt-auto bg-purple-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition duration-300"
                >
                  {course.buttonText}
                </button>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BodyTech;