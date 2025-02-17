import React from "react";
import { FaHome, FaCalendarAlt, FaPlus, FaList, FaUser } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const BottomNavigation = () => {
  const navigate = useNavigate();

  return (
    <div className="fixed bottom-0 w-full bg-white py-3 shadow-lg flex justify-around items-center">
      {/* Home Button */}
      <FaHome 
        className="text-gray-500 text-2xl cursor-pointer"
        onClick={() => navigate("/")} // Navigate to Home
      />

      {/* Add Project Button */}
      <button
        className="bg-purple-600 p-4 rounded-full shadow-lg"
        onClick={() => navigate("/add-project")} // Navigate to Add Project page
      >
        <FaPlus className="text-white text-2xl" />
      </button>

      {/* Task List Button */}
      <FaList 
        className="text-gray-500 text-2xl cursor-pointer"
        onClick={() => navigate("/tasks")} // Navigate to Task List page
      />
    </div>
  );
};

export default BottomNavigation;
