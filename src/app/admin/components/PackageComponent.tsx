import React from "react";
import { PackageCheck, Plus, Search, Filter } from "lucide-react";
import { Button } from "@/components/ui/button";

const PackageComponent = () => {
  const packages = [
    {
      id: 1,
      name: "Premium Package",
      price: "$99/month",
      status: "Active",
      subscribers: 150,
    },
    {
      id: 2,
      name: "Basic Package",
      price: "$29/month",
      status: "Active",
      subscribers: 320,
    },
    {
      id: 3,
      name: "Enterprise Package",
      price: "$299/month",
      status: "Active",
      subscribers: 45,
    },
    {
      id: 4,
      name: "Starter Package",
      price: "$9/month",
      status: "Inactive",
      subscribers: 0,
    },
    {
      id: 5,
      name: "Pro Package",
      price: "$59/month",
      status: "Active",
      subscribers: 89,
    },
  ];

  return (
    <div className="p-6">
      <div className="flex items-center gap-3 mb-6">
        <PackageCheck className="w-6 h-6 text-blue-600" />
        <h1 className="text-2xl font-bold text-gray-800">Package Management</h1>
      </div>

      <div className="flex justify-between items-center mb-6">
        <div className="flex gap-4">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
            <input
              type="text"
              placeholder="Search packages..."
              className="pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <Button variant="outline" className="flex items-center gap-2">
            <Filter className="w-4 h-4" />
            Filter
          </Button>
        </div>
        <Button className="flex items-center gap-2">
          <Plus className="w-4 h-4" />
          Add Package
        </Button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {packages.map((pkg) => (
          <div
            key={pkg.id}
            className="bg-white rounded-lg shadow-md border p-6"
          >
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold text-gray-800">
                {pkg.name}
              </h3>
              <span
                className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full ${
                  pkg.status === "Active"
                    ? "bg-green-100 text-green-800"
                    : "bg-red-100 text-red-800"
                }`}
              >
                {pkg.status}
              </span>
            </div>

            <div className="space-y-3">
              <div className="flex justify-between">
                <span className="text-gray-600">Price:</span>
                <span className="font-semibold text-gray-800">{pkg.price}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Subscribers:</span>
                <span className="font-semibold text-gray-800">
                  {pkg.subscribers}
                </span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Revenue:</span>
                <span className="font-semibold text-green-600">
                  $
                  {pkg.subscribers * parseInt(pkg.price.replace(/[^0-9]/g, ""))}
                </span>
              </div>
            </div>

            <div className="mt-6 flex gap-2">
              <Button variant="outline" size="sm" className="flex-1">
                Edit
              </Button>
              <Button
                variant="outline"
                size="sm"
                className="flex-1 text-red-600 hover:text-red-700"
              >
                {pkg.status === "Active" ? "Deactivate" : "Activate"}
              </Button>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-8 bg-white rounded-lg shadow-md border p-6">
        <h2 className="text-xl font-semibold text-gray-800 mb-4">
          Package Analytics
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="text-center">
            <div className="text-3xl font-bold text-blue-600">5</div>
            <div className="text-sm text-gray-500">Total Packages</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-green-600">604</div>
            <div className="text-sm text-gray-500">Total Subscribers</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-purple-600">$45,230</div>
            <div className="text-sm text-gray-500">Monthly Revenue</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PackageComponent;
