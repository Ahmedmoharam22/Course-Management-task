import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

const AddEditCourse = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const [course, setCourse] = useState({
    title: '',
    description: '',
    image: '',
    startDate: '',
    endDate: '',
    price: '',
  });

  useEffect(() => {
    if (id) {
      const storedCourses = JSON.parse(localStorage.getItem('courses')) || [];
      const courseToEdit = storedCourses.find(c => c.id === id);
      if (courseToEdit) setCourse(courseToEdit);
    }
  }, [id]);

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    if (name === 'image') {
      const reader = new FileReader();
      reader.onload = () => setCourse(prev => ({ ...prev, image: reader.result }));
      reader.readAsDataURL(files[0]);
    } else {
      setCourse(prev => ({ ...prev, [name]: value }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const storedCourses = JSON.parse(localStorage.getItem('courses')) || [];

    if (id) {
      const updated = storedCourses.map(c => c.id === id ? { ...course, id } : c);
      localStorage.setItem('courses', JSON.stringify(updated));
    } else {
      course.id = Date.now().toString();
      storedCourses.push(course);
      localStorage.setItem('courses', JSON.stringify(storedCourses));
    }

    navigate('/courses');
  };

  return (
    <div className="form-container">
      <h2>{id ? 'Edit Course' : 'Add Course'}</h2>
      <form onSubmit={handleSubmit}>
        <input name="title" placeholder="Title" value={course.title} onChange={handleChange} required />
        <textarea name="description" placeholder="Description" value={course.description} onChange={handleChange} required />
        <input type="file" name="image" onChange={handleChange} />
        {course.image && <img src={course.image} alt="preview" width={100} />}
        <input type="date" name="startDate" value={course.startDate} onChange={handleChange} />
        <input type="date" name="endDate" value={course.endDate} onChange={handleChange} />
        <input type="number" name="price" placeholder="Price" value={course.price} onChange={handleChange} />
        <button type="submit">{id ? 'Update' : 'Add'}</button>
      </form>
    </div>
  );
};

export default AddEditCourse;


