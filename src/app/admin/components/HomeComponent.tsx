import React from "react";
import { House } from "lucide-react";

const HomeComponent = () => {
  return (
    <div className="p-6">
      <div className="flex items-center gap-3 mb-6">
        <House className="w-6 h-6 text-blue-600" />
        <h1 className="text-2xl font-bold text-gray-800">Dashboard Home</h1>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <div className="bg-white p-6 rounded-lg shadow-md border">
          <h3 className="text-lg font-semibold text-gray-800 mb-2">
            Total Sales
          </h3>
          <p className="text-3xl font-bold text-green-600">$12,450</p>
          <p className="text-sm text-gray-500 mt-1">+15% from last month</p>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-md border">
          <h3 className="text-lg font-semibold text-gray-800 mb-2">
            Total Orders
          </h3>
          <p className="text-3xl font-bold text-blue-600">1,234</p>
          <p className="text-sm text-gray-500 mt-1">+8% from last month</p>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-md border">
          <h3 className="text-lg font-semibold text-gray-800 mb-2">
            Active Users
          </h3>
          <p className="text-3xl font-bold text-purple-600">892</p>
          <p className="text-sm text-gray-500 mt-1">+12% from last month</p>
        </div>
      </div>

      <div className="mt-8 bg-white p-6 rounded-lg shadow-md border">
        <h2 className="text-xl font-semibold text-gray-800 mb-4">
          Recent Activity
        </h2>
        <div className="space-y-3">
          <div className="flex items-center gap-3 p-3 bg-gray-50 rounded">
            <div className="w-2 h-2 bg-green-500 rounded-full"></div>
            <span className="text-sm text-gray-600">
              New order #1234 received
            </span>
            <span className="text-xs text-gray-400 ml-auto">2 min ago</span>
          </div>
          <div className="flex items-center gap-3 p-3 bg-gray-50 rounded">
            <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
            <span className="text-sm text-gray-600">
              Payment processed for order #1230
            </span>
            <span className="text-xs text-gray-400 ml-auto">15 min ago</span>
          </div>
          <div className="flex items-center gap-3 p-3 bg-gray-50 rounded">
            <div className="w-2 h-2 bg-yellow-500 rounded-full"></div>
            <span className="text-sm text-gray-600">New user registration</span>
            <span className="text-xs text-gray-400 ml-auto">1 hour ago</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeComponent;
