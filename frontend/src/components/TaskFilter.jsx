import React from "react";

const TaskFilter = ({ activeFilter, setActiveFilter }) => {
  const filters = ["All", "To do", "In Progress", "Completed"];

  return (
    <div className="flex space-x-4 mt-4">
      {filters.map((filter) => (
        <button
          key={filter}
          onClick={() => setActiveFilter(filter)}
          className={`px-4 py-2 rounded-full text-sm font-medium ${
            activeFilter === filter ? "bg-purple-600 text-white" : "bg-gray-200"
          }`}
        >
          {filter}
        </button>
      ))}
    </div>
  );
};

export default TaskFilter;
