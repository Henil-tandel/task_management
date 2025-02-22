import { useState, useContext } from "react";
import { TaskContext } from "../context/TaskContext"; // ✅ Import Task Context
import { useNavigate } from "react-router-dom";

const AddTaskPage = () => {
  const { addTask } = useContext(TaskContext); // ✅ Get addTask function
  const navigate = useNavigate();

  const [task, setTask] = useState({
    title: "",
    description: "",
    dueDate: "",
    priority: "Medium",
  });

  const handleChange = (e) => {
    setTask({ ...task, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!task.title.trim() || !task.dueDate) {
      alert("❌ Title and Due Date are required!");
      return;
    }

    addTask(task); // ✅ Store in Context
    navigate("/tasks"); // ✅ Redirect to Task List
  };

  return (
    <div className="min-h-screen flex flex-col items-center bg-gradient-to-b from-[#f8f9fa] to-[#fff] px-6 py-4">
      <h2 className="text-xl font-semibold">Add Task</h2>

      <form onSubmit={handleSubmit} className="w-full max-w-lg mt-4">
        <input type="text" name="title" placeholder="Task Title" value={task.title} onChange={handleChange} required className="w-full p-3 border rounded-lg" />
        <textarea name="description" placeholder="Task Description" value={task.description} onChange={handleChange} className="w-full p-3 border rounded-lg mt-4" />
        <input type="date" name="dueDate" value={task.dueDate} onChange={handleChange} required className="w-full p-3 border rounded-lg mt-4" />
        <select name="priority" value={task.priority} onChange={handleChange} className="w-full p-3 border rounded-lg mt-4">
          <option value="High">High Priority</option>
          <option value="Medium">Medium Priority</option>
          <option value="Low">Low Priority</option>
        </select>
        <button type="submit" className="w-full bg-purple-600 text-white p-3 rounded-lg mt-6">Add Task</button>
      </form>
    </div>
  );
};

export default AddTaskPage;
