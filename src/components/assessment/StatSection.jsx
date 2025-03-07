import React from "react";
import StatCard from "./StatCard";
import {
  HiOutlineStar,
  HiOutlineChartBar,
  HiOutlineCheck,
} from "react-icons/hi";

function StatSection({ rank, percentile, score, totalQuestions }) {
  const statsData = [
    {
      icon: <HiOutlineStar className="h-6 w-6" />,
      value: rank,
      label: "YOUR RANK",
      bgColor: "bg-yellow-100",
      textColor: "text-yellow-600",
    },
    {
      icon: <HiOutlineChartBar className="h-6 w-6" />,
      value: `${percentile}%`,
      label: "PERCENTILE",
      bgColor: "bg-gray-100",
      textColor: "text-gray-600",
    },
    {
      icon: <HiOutlineCheck className="h-6 w-6" />,
      value: `${score} / ${totalQuestions}`,
      label: "CORRECT ANSWERS",
      bgColor: "bg-green-100",
      textColor: "text-green-600",
    },
  ];

  return (
    <div className="bg-white rounded-lg shadow mb-6">
      <div className="p-6">
        <h3 className="text-lg font-medium text-gray-900 mb-4">
          Quick Statistics
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {statsData.map((stat, index) => (
            <StatCard
              key={index}
              icon={stat.icon}
              value={stat.value}
              label={stat.label}
              bgColor={stat.bgColor}
              textColor={stat.textColor}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default StatSection;
