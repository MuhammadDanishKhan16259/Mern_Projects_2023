import { Outlet, useNavigate } from "react-router-dom";

export default function Dashboard() {
  let navigate = useNavigate();
  return (
    <section className="dashboard">
      <button onClick={() => navigate("course-list")}>Course List</button>
      <button onClick={() => navigate("quiz-form")}>Quize form</button>
      <Outlet />
    </section>
  );
}
