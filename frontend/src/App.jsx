import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { TaskProvider } from "./context/TaskContext";
import TaskListPage from "./pages/TaskListPage";
import AddProjectPage from "./pages/AddProjectPage";
import HomePage from "./pages/Homepage";


const App = () => {
  return (
    <TaskProvider>
      <Router>
        <Routes>
          <Route path="/" element={<HomePage/>} />
          <Route path="/tasks" element={<TaskListPage />} />
          <Route path="/add-project" element={<AddProjectPage />} />
        </Routes>
      </Router>
    </TaskProvider>
  );
};

export default App;
