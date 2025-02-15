import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const AddProjectPage = () => {
  const navigate = useNavigate();
  const [project, setProject] = useState({
    taskGroup: "Work",
    projectName: "",
    description: "",
    startDate: "",
    endDate: "",
    priority: "Medium",  // Default Priority
    tags: "",
  });

  const handleChange = (e) => {
    setProject({ ...project, [e.target.name]: e.target.value });
  };

  return (
    <div className="min-h-screen flex flex-col items-center bg-gradient-to-b from-[#f8f9fa] to-[#fff] px-6 py-4">
      
      {/* Header */}
      <div className="flex justify-between w-full max-w-lg">
        <button onClick={() => navigate(-1)}>⬅</button>
        <h2 className="text-xl font-semibold">Add Project</h2>
        <span>🔔</span>
      </div>

      {/* Task Group */}
      <div className="w-full max-w-lg bg-white p-4 rounded-lg shadow-md mt-4">
        <label className="text-gray-600">Task Group</label>
        <div className="flex justify-between items-center p-3 bg-gray-100 rounded-lg mt-2">
          <span className="font-semibold">{project.taskGroup}</span>
          <span>⬇</span>
        </div>
      </div>

      {/* Project Name */}
      <input
        type="text"
        name="projectName"
        placeholder="Project Name"
        value={project.projectName}
        onChange={handleChange}
        className="w-full max-w-lg p-3 border rounded-lg mt-4"
      />

      {/* Description */}
      <textarea
        name="description"
        placeholder="Description"
        value={project.description}
        onChange={handleChange}
        className="w-full max-w-lg p-3 border rounded-lg mt-4"
        rows="3"
      ></textarea>

      {/* Start Date Picker */}
      <div className="w-full max-w-lg bg-white p-4 rounded-lg shadow-md mt-4">
        <label className="text-gray-600">Start Date</label>
        <input 
          type="date"
          name="startDate"
          value={project.startDate}
          onChange={handleChange}
          className="w-full mt-2 p-2 border rounded-lg"
        />
      </div>

      {/* End Date Picker */}
      <div className="w-full max-w-lg bg-white p-4 rounded-lg shadow-md mt-4">
        <label className="text-gray-600">End Date</label>
        <input 
          type="date"
          name="endDate"
          value={project.endDate}
          onChange={handleChange}
          className="w-full mt-2 p-2 border rounded-lg"
        />
      </div>

      {/* Task Priority */}
      <div className="w-full max-w-lg bg-white p-4 rounded-lg shadow-md mt-4">
        <label className="text-gray-600">Priority</label>
        <select
          name="priority"
          value={project.priority}
          onChange={handleChange}
          className="w-full mt-2 p-2 border rounded-lg"
        >
          <option value="High">High</option>
          <option value="Medium">Medium</option>
          <option value="Low">Low</option>
        </select>
      </div>

      {/* Tags */}
      <input
        type="text"
        name="tags"
        placeholder="Add tags (comma separated)"
        value={project.tags}
        onChange={handleChange}
        className="w-full max-w-lg p-3 border rounded-lg mt-4"
      />

      {/* Add Project Button */}
      <button className="w-full max-w-lg bg-purple-600 text-white p-3 rounded-lg mt-6 font-semibold hover:bg-purple-700">
        Add Project
      </button>
    </div>
  );
};

export default AddProjectPage;
