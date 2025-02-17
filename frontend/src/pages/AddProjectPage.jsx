import React, { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { TaskContext } from "../context/TaskProvider";

const AddProjectPage = () => {
  const navigate = useNavigate();
  const { addTask } = useContext(TaskContext);
  const [project, setProject] = useState({
    taskGroup: "Work",
    projectName: "",
    description: "",
    startDate: "",
    endDate: "",
    priority: "Medium",
    tags: "",
  });

  const handleChange = (e) => {
    setProject({ ...project, [e.target.name]: e.target.value });
  };

  const handleSubmit = () => {
    const today = new Date().toISOString().split("T")[0];

    if (!project.projectName.trim()) {
      alert("Project name is required.");
      return;
    }
    if (!project.startDate || project.startDate < today) {
      alert("Start date should be today or later.");
      return;
    }

    addTask({
      id: Date.now(),
      project: project.projectName,
      task: project.description,
      date: project.startDate,
      priority: project.priority,
      status: "To do",
      statusColor: "bg-blue-400",
    });

    navigate("/tasklist");
  };

  return (
    <div className="min-h-screen flex flex-col items-center bg-gradient-to-b from-[#f8f9fa] to-[#fff] px-6 py-4">
      <h2 className="text-xl font-semibold">Add Project</h2>
      
      <input type="text" name="projectName" placeholder="Project Name" value={project.projectName} onChange={handleChange} className="w-full max-w-lg p-3 border rounded-lg mt-4" />

      <textarea name="description" placeholder="Description" value={project.description} onChange={handleChange} className="w-full max-w-lg p-3 border rounded-lg mt-4" rows="3"></textarea>

      <input type="date" name="startDate" value={project.startDate} onChange={handleChange} className="w-full max-w-lg p-3 border rounded-lg mt-4" />

      <button onClick={handleSubmit} className="w-full max-w-lg bg-purple-600 text-white p-3 rounded-lg mt-6 font-semibold hover:bg-purple-700">
        Add Project
      </button>
    </div>
  );
};

export default AddProjectPage;