import React from "react";

const TaskCard = ({ project, task, time, status, statusColor, deleteTask, changeTaskStatus }) => {
  return (
    <div className="bg-white shadow-md rounded-lg p-4 flex flex-col">
      <span className="text-gray-500 text-sm">{project}</span>
      <span className="text-gray-900 font-semibold">{task}</span>

      <div className="flex justify-between items-center mt-2">
        <span className="text-blue-500 text-sm">{time}</span>
        <span className={`text-white px-2 py-1 text-xs rounded-full ${statusColor}`}>
          {status}
        </span>
      </div>

      {/* Buttons */}
      <div className="flex justify-between mt-3">
        {/* Status Change Button (Disabled if status is "Completed") */}
        <button 
          onClick={changeTaskStatus} 
          className={`px-3 py-1 rounded-md text-xs ${
            status === "Completed" ? "bg-gray-400 cursor-not-allowed" : "bg-green-500 text-white"
          }`}
          disabled={status === "Completed"}
        >
          Change Status
        </button>

        {/* Delete Button */}
        <button 
          onClick={deleteTask} 
          className="bg-red-500 text-white px-3 py-1 rounded-md text-xs">
          Delete
        </button>
      </div>
    </div>
  );
};

export default TaskCard;
