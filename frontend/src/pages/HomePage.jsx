import React from "react";
import { useNavigate } from "react-router-dom";
// import illustration from "../assets/illustration.png"; // Uncomment when image is available

const HomePage = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-b from-[#f8f9fa] to-[#fff]">
      
      {/* Illustration */}
      <div className="relative w-64 h-64 flex justify-center">
        {/* <img src={illustration} alt="Illustration" className="w-full object-cover" /> */}
        
        {/* Floating Elements */}
        <div className="absolute top-4 left-10 w-6 h-6 bg-blue-400 rounded-full"></div>
        <div className="absolute top-10 right-10 w-5 h-5 bg-purple-400 rounded-full"></div>
        <div className="absolute bottom-8 left-5 w-4 h-4 bg-yellow-400 rounded-full"></div>
      </div>

      {/* Heading */}
      <h1 className="text-2xl font-semibold text-gray-900 mt-6 text-center">
        Task Management & <br /> To-Do List
      </h1>

      {/* Subtitle */}
      <p className="text-gray-600 text-center px-6 mt-2">
        This productive tool is designed to help <br />
        you better manage your task project-wise conveniently!
      </p>

      {/* Button with Navigation */}
      <button
        onClick={() => navigate("/tasks")} // Navigates to TaskListPage
        className="bg-purple-600 text-white px-6 py-3 rounded-full mt-6 text-lg font-medium shadow-lg hover:bg-purple-700 transition-all"
      >
        Let's Start →
      </button>
    </div>
  );
};

export default HomePage;
