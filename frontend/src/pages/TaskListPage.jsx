import React, { useState } from "react";
import Header from "../components/Header";
import TaskFilter from "../components/TaskFilter";
import TaskCard from "../components/TaskCard";
import BottomNavigation from "../components/BottomNavigation";

const TaskListPage = () => {
  const [activeFilter, setActiveFilter] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");
  const [sortBy, setSortBy] = useState("date");

  // ✅ State to manage tasks
  const [tasks, setTasks] = useState([
    { id: 1, project: "Grocery App", task: "Market Research", time: "10:00 AM", status: "Completed", statusColor: "bg-blue-500", priority: "High", date: "2025-02-12" },
    { id: 2, project: "Grocery App", task: "Competitive Analysis", time: "12:00 PM", status: "In Progress", statusColor: "bg-orange-500", priority: "Medium", date: "2025-02-13" },
    { id: 3, project: "Uber Eats Redesign", task: "Wireframe", time: "07:00 PM", status: "To do", statusColor: "bg-blue-400", priority: "Low", date: "2025-02-14" },
    { id: 4, project: "Design Sprint", task: "Pitch Deck", time: "09:00 PM", status: "To do", statusColor: "bg-blue-400", priority: "Medium", date: "2025-02-15" },
  ]);

  // ✅ Function to delete a task
  const deleteTask = (id) => {
    setTasks(tasks.filter(task => task.id !== id));
  };

  // ✅ Function to change task status (Prevents change if status is "Completed")
  const changeTaskStatus = (id) => {
    setTasks(tasks.map(task => {
      if (task.id === id && task.status !== "Completed") {
        const newStatus = task.status === "To do" ? "In Progress" : "Completed";
        const newStatusColor = newStatus === "To do" ? "bg-blue-400" : newStatus === "In Progress" ? "bg-orange-500" : "bg-blue-500";
        return { ...task, status: newStatus, statusColor: newStatusColor };
      }
      return task;
    }));
  };

  // ✅ Filtering, Searching, and Sorting
  const filteredTasks = tasks
    .filter(task => task.task.toLowerCase().includes(searchQuery.toLowerCase()) || task.project.toLowerCase().includes(searchQuery.toLowerCase()))
    .filter(task => activeFilter === "All" || task.status === activeFilter)
    .sort((a, b) => sortBy === "date" ? new Date(a.date) - new Date(b.date) : ["High", "Medium", "Low"].indexOf(a.priority) - ["High", "Medium", "Low"].indexOf(b.priority));

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#f8f9fa] to-[#fff] px-4 py-6">
      <Header />

      {/* Search Input */}
      <input
        type="text"
        placeholder="Search tasks..."
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        className="w-full p-2 border rounded-lg mt-4"
      />

      {/* Sort Dropdown */}
      <select onChange={(e) => setSortBy(e.target.value)} className="w-full p-2 border rounded-lg mt-4">
        <option value="date">Sort by Date</option>
        <option value="priority">Sort by Priority</option>
      </select>

      {/* Task Filter */}
      <TaskFilter activeFilter={activeFilter} setActiveFilter={setActiveFilter} />

      {/* Task List */}
      <div className="mt-4 space-y-4">
        {filteredTasks.length > 0 ? (
          filteredTasks.map((task) => (
            <TaskCard 
              key={task.id} 
              {...task} 
              deleteTask={() => deleteTask(task.id)}
              changeTaskStatus={() => changeTaskStatus(task.id)}
            />
          ))
        ) : (
          <p className="text-gray-500 text-center mt-6">No tasks available</p>
        )}
      </div>

      <BottomNavigation />
    </div>
  );
};

export default TaskListPage;
