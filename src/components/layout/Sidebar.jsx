import React from "react";
import {
  HiOutlineChartPie,
  HiOutlineQuestionMarkCircle,
  HiOutlineTable,
} from "react-icons/hi";

function Sidebar({ activeItem }) {
  const menuItems = [
    {
      id: "dashboard",
      label: "Dashboard",
      icon: <HiOutlineChartPie className="h-5 w-5 mr-3" />,
    },
    {
      id: "skilltest",
      label: "Skill Test",
      icon: <HiOutlineQuestionMarkCircle className="h-5 w-5 mr-3" />,
    },
    {
      id: "internship",
      label: "Internship",
      icon: <HiOutlineTable className="h-5 w-5 mr-3" />,
    },
  ];

  return (
    <div className="w-full md:w-64 flex-shrink-0 mb-6 md:mb-0 bg-white shadow-sm">
      <nav className="space-y-2">
        {menuItems.map((item) => (
          <a
            key={item.id}
            href="#"
            className={`flex items-center px-4 py-3 rounded-lg ${
              activeItem === item.id
                ? "text-indigo-600 bg-indigo-50"
                : "text-gray-700 hover:bg-gray-100"
            }`}
          >
            {item.icon}
            <span>{item.label}</span>
          </a>
        ))}
      </nav>
    </div>
  );
}

export default Sidebar;
