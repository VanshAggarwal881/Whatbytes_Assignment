import React from "react";

function TestHeader({ title, details, icon, onUpdate }) {
  return (
    <div className="bg-white rounded-lg shadow mb-6">
      <div className="p-6">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <div className="h-12 w-12 flex-shrink-0">
              <img src={icon} alt={`${title} logo`} className="h-12 w-12" />
            </div>
            <div className="ml-4">
              <h2 className="text-xl font-semibold text-gray-900">{title}</h2>
              <p className="text-sm text-gray-500">{details}</p>
            </div>
          </div>
          <button
            onClick={onUpdate}
            className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 cursor-pointer"
          >
            Update
          </button>
        </div>
      </div>
    </div>
  );
}

export default TestHeader;
