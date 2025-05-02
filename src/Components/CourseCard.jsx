import React from "react";
import { useNavigate } from "react-router-dom";

const CourseCard = ({ course, onDelete }) => {
  const navigate = useNavigate();

  return (
    <div className="card">
      <img
        src={course.image || "https://via.placeholder.com/150"}
        alt="course"
      />
      <h3>{course.title}</h3>
      <p>{course.description.slice(0, 100)}...</p>
      <p>
        <strong>From:</strong> {course.startDate} <strong>To:</strong>{" "}
        {course.endDate}
      </p>
      <p>
        <strong>Price:</strong> ${course.price}
      </p>
      <button onClick={() => navigate(`/courses/${course.id}`)}>View</button>
      <button onClick={() => navigate(`/courses/edit/${course.id}`)}>
        Edit
      </button>
      <button onClick={() => onDelete(course.id)}>Delete</button>
    </div>
  );
};

export default CourseCard;
