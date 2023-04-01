import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

// components
import Boilerplate from "./components/Boilerplate";
import Home from "./screen/Home";
import Login from "./screen/authentication/Login";
import SignUp from "./screen/authentication/SignUp";
import Error from "./components/Error.jsx";
import StudentRegistrationForm from "./screen/StudentRegistrationForm";
import ListOfStudents from "./screen/ListOfStudents";
import CourseForm from "./screen/CourseForm";
import Dashboard from "./screen/dashboard/Dashboard";
import DashBoardHome from "./screen/dashboard/DashBoardHome.jsx";
import CourseList from "./screen/dashboard/CourseList.jsx";
import QuizForm from "./screen/dashboard/QuizForm.jsx";

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Boilerplate />}>
          <Route index element={<Home />} />
          <Route path="login" element={<Login />} />
          <Route path="signup" element={<SignUp />} />
          <Route
            path="student-registration-form"
            element={<StudentRegistrationForm />}
          />
          <Route path="list-of-students" element={<ListOfStudents />} />
          <Route path="course-form" element={<CourseForm />} />
          <Route path="dashboard" element={<Dashboard />}>
            <Route index element={<DashBoardHome />} />
            <Route path="course-list" element={<CourseList />} />
            <Route path="quiz-form" element={<QuizForm />} />
          </Route>
          <Route path="*" element={<Error />} />
        </Route>
      </Routes>
    </Router>
  );
}
