import React from "react";
import { FaHome, FaCalendarAlt, FaPlus, FaList, FaUser } from "react-icons/fa";
import { useNavigate } from "react-router-dom"; // ✅ Import useNavigate

const BottomNavigation = () => {
  const navigate = useNavigate(); // ✅ Initialize navigate function

  return (
    <div className="fixed bottom-0 w-full bg-white py-3 shadow-lg flex justify-around items-center">
      <FaHome className="text-gray-500 text-2xl" />
      <FaCalendarAlt className="text-gray-500 text-2xl" />

      {/* ✅ Wrap in button & Add onClick for navigation */}
      <button
        className="bg-purple-600 p-4 rounded-full shadow-lg"
        onClick={() => navigate("/add-project")}
      >
        <FaPlus className="text-white text-2xl" />
      </button>

      <FaList className="text-gray-500 text-2xl" />
      <FaUser className="text-gray-500 text-2xl" />
    </div>
  );
};

export default BottomNavigation;
