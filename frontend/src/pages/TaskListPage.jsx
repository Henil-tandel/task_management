import React, { useState, useContext } from "react";
import { TaskContext } from "../context/TaskProvider";
import TaskCard from "../components/TaskCard";
import TaskFilter from "../components/TaskFilter";
import Header from "../components/Header";
import BottomNavigation from "../components/BottomNavigation"; // Import BottomNavigation

const TaskListPage = () => {
  const { tasks } = useContext(TaskContext);
  const [activeFilter, setActiveFilter] = useState("All");
  const [searchDate, setSearchDate] = useState("");

  // Filter tasks by status and date
  const filteredTasks = tasks
    .filter((task) => {
      if (activeFilter === "All") return true;
      return task.status === activeFilter;
    })
    .filter((task) => {
      if (!searchDate) return true; // If no date is selected, return all tasks
      return task.date === searchDate; // Filter by exact date
    });

  const handleDateChange = (e) => {
    setSearchDate(e.target.value);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#f8f9fa] to-[#fff] px-4 py-6 flex flex-col">
      <Header />
      
      {/* Date Search Input */}
      <div className="flex justify-center mt-4">
        <input
          type="date"
          value={searchDate}
          onChange={handleDateChange}
          className="w-full max-w-lg p-3 border rounded-lg"
        />
      </div>

      {/* Task Filter Component */}
      <TaskFilter activeFilter={activeFilter} setActiveFilter={setActiveFilter} />

      <div className="mt-4 space-y-4 flex-grow">
        {filteredTasks.length > 0 ? (
          filteredTasks.map((task) => <TaskCard key={task.id} {...task} />)
        ) : (
          <p className="text-gray-500 text-center mt-6">No tasks available</p>
        )}
      </div>

      {/* Include Bottom Navigation at the bottom */}
      <BottomNavigation />
    </div>
  );
};

export default TaskListPage;
