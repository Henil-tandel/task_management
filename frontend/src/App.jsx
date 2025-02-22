import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import HomePage from "./pages/HomePage";
import RegisterPage from "./pages/RegisterPage";
import LoginPage from "./pages/LoginPage";
import TaskListPage from "./pages/TaskListPage";
import AddTaskPage from "./pages/AddTaskPage"; // ✅ Import AddTaskPage
import { useContext, useEffect } from "react";
import { UserContext } from "./context/UserContext";
import UserProtectedWrapper from "./pages/UserProtectedWrapper";

const App = () => {
  const { user, setUser } = useContext(UserContext);

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      setUser({ token });
    }
  }, [setUser]);

  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/register" element={user ? <Navigate to="/tasks" /> : <RegisterPage />} />
      <Route path="/login" element={user ? <Navigate to="/tasks" /> : <LoginPage />} />
      <Route 
        path="/tasks" 
        element={
          <UserProtectedWrapper>
            <TaskListPage />
          </UserProtectedWrapper>
        } 
      />
      <Route 
        path="/add-tasks" 
        element={
          <UserProtectedWrapper>
            <AddTaskPage /> {/* ✅ AddTaskPage route */}
          </UserProtectedWrapper>
        } 
      />
      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
  );
};

export default App;
