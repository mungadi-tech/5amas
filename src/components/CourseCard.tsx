import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { courses } from './Courses';
import AOS from 'aos';
import 'aos/dist/aos.css';

const CourseCard: React.FC = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-4 py-8">
      {courses.map((course, index) => (
        <div
          key={course.id}
          className="bg-white rounded-lg shadow-lg overflow-hidden transform hover:-translate-y-2 hover:shadow-2xl transition duration-300"
          data-aos="fade-up"
          data-aos-delay={`${index * 100}`}
        >
          {/* Course Image */}
          <div className="relative h-40">
            <img
              src={course.image}
              alt={course.title}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
          </div>

          {/* Course Details */}
          <div className="p-6 flex flex-col justify-between h-48">
            <h3 className="text-xl font-semibold text-gray-800 mb-2">
              {course.title}
            </h3>
            <p className="text-gray-600 text-sm line-clamp-2 mb-4">
              {course.description}
            </p>
            <Link
              to={`/course/${course.id}`}
              className="bg-purple-600 text-white text-center py-2 rounded-md hover:bg-purple-700 transition duration-300"
            >
              View Details
            </Link>
          </div>
        </div>
      ))}
    </div>
  );
};

export default CourseCard;
