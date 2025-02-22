import { useContext, useEffect, useState } from "react";
import { TaskContext } from "../context/TaskContext";
import TaskCard from "../components/TaskCard";
import Header from "../components/Header";
import BottomNavigation from "../components/BottomNavigation";

const TaskListPage = () => {
  const { tasks } = useContext(TaskContext);
  const [searchDate, setSearchDate] = useState("");
  const [filteredTasks, setFilteredTasks] = useState([]);

  useEffect(() => {
    if (!Array.isArray(tasks)) {
      setFilteredTasks([]);
    } else {
      setFilteredTasks(
        tasks.filter((task) => !searchDate || task.dueDate === searchDate)
      );
    }
  }, [tasks, searchDate]);

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#f8f9fa] to-[#fff] px-4 py-6 flex flex-col">
      <Header />

      <div className="flex justify-center mt-4">
        <input
          type="date"
          value={searchDate}
          onChange={(e) => setSearchDate(e.target.value)}
          className="w-full max-w-lg p-3 border rounded-lg"
        />
      </div>

      <div className="mt-4 space-y-4 flex-grow">
        {filteredTasks.length > 0 ? (
          filteredTasks.map((task) => (
            <TaskCard
              key={task._id}
              project={task.title}
              task={task.description}
              time={task.dueDate}
              status="Pending"
              statusColor="bg-yellow-500"
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
