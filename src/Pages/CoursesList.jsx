import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import CourseCard from '../Components/CourseCard';


const CoursesList = () => {
  const [courses, setCourses] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const storedCourses = JSON.parse(localStorage.getItem('courses')) || [];
    setCourses(storedCourses);
  }, []);

  const deleteCourse = (id) => {
    const updatedCourses = courses.filter(c => c.id !== id);
    setCourses(updatedCourses);
    localStorage.setItem('courses', JSON.stringify(updatedCourses));
  };

  return (
    <div className="page">
      <h2>All Courses</h2>
      <button onClick={() => navigate('/courses/add')}>Add New Course</button>
      <div className="grid">
        {courses.map(course => (
          <CourseCard key={course.id} course={course} onDelete={deleteCourse} />
        ))}
      </div>
    </div>
  );
};

export default CoursesList;


