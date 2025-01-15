import React from 'react';
import CourseCard from './CourseCard';

const CourseGrid: React.FC = () => {
  return (
    <div className="max-w-6xl mx-auto py-10 px-4">
       <h2 className="text-4xl text-purple-600 font-bold text-center mb-6">Our Courses</h2>
      <p className="text-center text-gray-600 mb-10">
        Our courses are carefully designed and structured to deliver the best quality to take you from beginner to advanced skill level.
      </p>
      <CourseCard />
    </div>
  );
};

export default CourseGrid;
