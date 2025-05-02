import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import { isLoggedIn } from "./utils/Auth";
import Login from "./Pages/Login";
import CoursesList from "./Pages/CoursesList";
import AddEditCourse from "./Pages/AddEditCourse";
import CourseDetails from "./Pages/CourseDetails";
const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route
        path="/courses"
        element={isLoggedIn() ? <CoursesList /> : <Navigate to="/" />}
      />
      <Route
        path="/courses/add"
        element={isLoggedIn() ? <AddEditCourse /> : <Navigate to="/" />}
      />
      <Route
        path="/courses/edit/:id"
        element={isLoggedIn() ? <AddEditCourse /> : <Navigate to="/" />}
      />
      <Route
        path="/courses/:id"
        element={isLoggedIn() ? <CourseDetails /> : <Navigate to="/" />}
      />
    </Routes>
  );
};

export default App;
