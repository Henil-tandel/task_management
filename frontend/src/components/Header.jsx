import React from "react";
import { IoNotificationsOutline } from "react-icons/io5";
import { IoChevronBackOutline } from "react-icons/io5";

const Header = () => {
  return (
    <div className="flex items-center justify-between text-gray-900">
      <IoChevronBackOutline className="text-2xl" />
      <h2 className="text-lg font-semibold">Today's Tasks</h2>
      <IoNotificationsOutline className="text-2xl" />
    </div>
  );
};

export default Header;
