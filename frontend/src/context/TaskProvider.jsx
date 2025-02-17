import { createContext, useState } from "react";

export const TaskContext = createContext();

export const TaskProvider = ({ children }) => {
  const [tasks, setTasks] = useState([]);

  // ✅ Function to add a task (Date should not be in the past)
  const addTask = (newTask) => {
    const today = new Date().toISOString().split("T")[0]; // Get today's date (YYYY-MM-DD)

    if (newTask.date < today) {
      alert("Task date cannot be in the past.");
      return;
    }

    setTasks([...tasks, { id: Date.now(), ...newTask }]);
  };

  // ✅ Function to delete a task
  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  // ✅ Function to update task status
  const changeTaskStatus = (id) => {
    setTasks(tasks.map((task) => {
      if (task.id === id && task.status !== "Completed") {
        const newStatus = task.status === "To do" ? "In Progress" : "Completed";
        const newStatusColor = newStatus === "To do" ? "bg-blue-400" : newStatus === "In Progress" ? "bg-orange-500" : "bg-blue-500";
        return { ...task, status: newStatus, statusColor: newStatusColor };
      }
      return task;
    }));
  };

  return (
    <TaskContext.Provider value={{ tasks, addTask, deleteTask, changeTaskStatus }}>
      {children}
    </TaskContext.Provider>
  );
};
