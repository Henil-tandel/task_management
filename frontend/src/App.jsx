import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { UserProvider } from "./context/UserContext";
import { TaskProvider } from "./context/TaskProvider";
import UserProtectedWrapper from "./components/UserProtectedWrapper"; // Import UserProtectedWrapper
import TaskListPage from "./pages/TaskListPage";
import AddProjectPage from "./pages/AddProjectPage";
import HomePage from "./pages/Homepage";
import RegisterPage from "./pages/RegisterPage";
import LoginPage from "./pages/LoginPage";


const App = () => {
  return (
    <UserProvider> {/* Provides the user context */}
      <TaskProvider> {/* Provides the task context */}
        <Router>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/register" element={<RegisterPage />} />
            <Route path="/login" element={<LoginPage />} />
            
            {/* Protected Routes */}
            <Route path="/tasks" element={<UserProtectedWrapper><TaskListPage /></UserProtectedWrapper>} />
            <Route path="/add-project" element={<UserProtectedWrapper><AddProjectPage /></UserProtectedWrapper>} />
          </Routes>
        </Router>
      </TaskProvider>
    </UserProvider>
  );
};

export default App;
