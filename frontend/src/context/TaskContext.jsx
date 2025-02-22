import { createContext, useState, useEffect } from "react";
import axios from "axios";

export const TaskContext = createContext();

const TaskProvider = ({ children }) => {
  const [tasks, setTasks] = useState(() => {
    const storedTasks = localStorage.getItem("tasks");
    return storedTasks ? JSON.parse(storedTasks) : [];
  });

  useEffect(() => {
    const fetchTasks = async () => {
      try {
        const token = localStorage.getItem("token");
        if (!token) return console.error("No authentication token found");

        const response = await axios.get("http://localhost:5000/api/tasks", {
          headers: { Authorization: `Bearer ${token}` },
        });
        setTasks(response.data.tasks);
      } catch (error) {
        console.error("Error fetching tasks:", error);
      }
    };

    fetchTasks();
  }, []);

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  const addTask = async (task) => {
    try {
      const token = localStorage.getItem("token");
      if (!token) return console.error("No authentication token found");

      const response = await axios.post("http://localhost:5000/api/tasks", task, {
        headers: { Authorization: `Bearer ${token}` },
      });

      setTasks((prevTasks) => [...prevTasks, response.data.newTask]);
    } catch (error) {
      console.error("Error adding task:", error);
    }
  };

  const deleteTask = async (taskId) => {
    try {
      const token = localStorage.getItem("token");
      if (!token) return console.error("No authentication token found");

      await axios.delete(`http://localhost:5000/api/tasks/${taskId}`, {
        headers: { Authorization: `Bearer ${token}` },
      });

      setTasks((prevTasks) => prevTasks.filter((task) => task._id !== taskId));
    } catch (error) {
      console.error("Error deleting task:", error);
    }
  };

  const updateTask = async (taskId, updatedData) => {
    try {
      const token = localStorage.getItem("token");
      if (!token) return console.error("No authentication token found");

      const response = await axios.put(`http://localhost:5000/api/tasks/${taskId}`, updatedData, {
        headers: { Authorization: `Bearer ${token}` },
      });

      setTasks((prevTasks) =>
        prevTasks.map((task) => (task._id === taskId ? response.data.updatedTask : task))
      );
    } catch (error) {
      console.error("Error updating task:", error);
    }
  };

  return (
    <TaskContext.Provider value={{ tasks, addTask, deleteTask, updateTask }}>
      {children}
    </TaskContext.Provider>
  );
};

export default TaskProvider;
