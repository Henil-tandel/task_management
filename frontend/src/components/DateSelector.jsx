import React, { useState } from "react";

const DateSelector = () => {
  const [selectedDate, setSelectedDate] = useState("25");

  const dates = [
    { day: "Fri", date: "23" },
    { day: "Sat", date: "24" },
    { day: "Sun", date: "25" },
    { day: "Mon", date: "26" },
    { day: "Tue", date: "27" },
  ];

  return (
    <div className="flex justify-between mt-4">
      {dates.map((d) => (
        <div
          key={d.date}
          onClick={() => setSelectedDate(d.date)}
          className={`flex flex-col items-center py-2 px-3 rounded-lg ${
            selectedDate === d.date ? "bg-purple-600 text-white" : "bg-white shadow"
          }`}
        >
          <span className="text-sm">{d.day}</span>
          <span className="text-lg font-bold">{d.date}</span>
        </div>
      ))}
    </div>
  );
};

export default DateSelector;
