import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const CourseDetails = () => {
  const { id } = useParams();
  const [course, setCourse] = useState(null);

  useEffect(() => {
    const storedCourses = JSON.parse(localStorage.getItem('courses')) || [];
    const selectedCourse = storedCourses.find(c => c.id === id);
    if (selectedCourse) setCourse(selectedCourse);
  }, [id]);

  if (!course) return <p>Course not found</p>;

  return (
    <div className="page">
      <h2>{course.title}</h2>
      <img src={course.image} alt="course" width={300} />
      <p>{course.description}</p>
      <p><strong>Start:</strong> {course.startDate}</p>
      <p><strong>End:</strong> {course.endDate}</p>
      <p><strong>Price:</strong> ${course.price}</p>
    </div>
  );
};

export default CourseDetails;


