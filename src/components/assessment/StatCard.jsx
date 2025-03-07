import React from "react";

function StatCard({ icon, value, label, bgColor, textColor }) {
  return (
    <div className="flex items-center">
      <div className={`p-3 rounded-full ${bgColor} ${textColor}`}>{icon}</div>
      <div className="ml-4">
        <div className="text-2xl font-semibold text-gray-900">{value}</div>
        <div className="text-sm text-gray-500">{label}</div>
      </div>
    </div>
  );
}

export default StatCard;
