import React from "react";

function SkillProgressBar({ skill, percentage }) {
  const getColorClass = (percent) => {
    if (percent >= 80) return "bg-green-500";
    if (percent >= 60) return "bg-orange-500";
    return "bg-red-500";
  };

  return (
    <div>
      <div className="flex justify-between mb-1">
        <span className="text-sm font-medium text-gray-700">{skill}</span>
        <span className="text-sm font-medium text-gray-700">{percentage}%</span>
      </div>
      <div className="w-full bg-gray-200 rounded-full h-2">
        <div
          className={`h-2 rounded-full ${getColorClass(percentage)}`}
          style={{ width: `${percentage}%` }}
        ></div>
      </div>
    </div>
  );
}

export default SkillProgressBar;
