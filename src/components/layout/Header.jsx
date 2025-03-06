import React from "react";

function Header() {
  return (
    <header className="bg-white shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
        <div className="flex items-center">
          <div className="flex-shrink-0">
            <div className="flex items-center">
              <div className="font-bold text-2xl text-gray-900">WhatBytes</div>
            </div>
          </div>
        </div>
        <div className="flex items-center">
          <span className="text-gray-800 font-medium">Username</span>
        </div>
      </div>
    </header>
  );
}

export default Header;
