import React from "react";
import { Search, Filter, Download, Eye } from "lucide-react";
import { Button } from "@/components/ui/button";

const SearchComponent = () => {
  const searchHistory = [
    {
      id: 1,
      query: "user analytics",
      results: 45,
      timestamp: "2 hours ago",
      user: "admin@example.com",
    },
    {
      id: 2,
      query: "sales report",
      results: 23,
      timestamp: "4 hours ago",
      user: "manager@example.com",
    },
    {
      id: 3,
      query: "customer feedback",
      results: 67,
      timestamp: "6 hours ago",
      user: "support@example.com",
    },
    {
      id: 4,
      query: "inventory status",
      results: 12,
      timestamp: "1 day ago",
      user: "admin@example.com",
    },
    {
      id: 5,
      query: "payment history",
      results: 89,
      timestamp: "2 days ago",
      user: "finance@example.com",
    },
  ];

  const popularSearches = [
    "user management",
    "sales analytics",
    "customer data",
    "inventory report",
    "payment processing",
    "order tracking",
    "product catalog",
    "billing information",
  ];

  return (
    <div className="p-6">
      <div className="flex items-center gap-3 mb-6">
        <Search className="w-6 h-6 text-blue-600" />
        <h1 className="text-2xl font-bold text-gray-800">Search & Analytics</h1>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Search Interface */}
        <div className="lg:col-span-2">
          <div className="bg-white rounded-lg shadow-md border p-6">
            <h2 className="text-lg font-semibold text-gray-800 mb-4">
              Advanced Search
            </h2>

            <div className="space-y-4">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                <input
                  type="text"
                  placeholder="Enter your search query..."
                  className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>

              <div className="flex gap-4">
                <div className="flex-1">
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Category
                  </label>
                  <select className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500">
                    <option>All Categories</option>
                    <option>Users</option>
                    <option>Products</option>
                    <option>Orders</option>
                    <option>Payments</option>
                    <option>Analytics</option>
                  </select>
                </div>

                <div className="flex-1">
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Date Range
                  </label>
                  <select className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500">
                    <option>Last 7 days</option>
                    <option>Last 30 days</option>
                    <option>Last 3 months</option>
                    <option>Last year</option>
                    <option>Custom range</option>
                  </select>
                </div>
              </div>

              <div className="flex gap-2">
                <Button className="flex items-center gap-2">
                  <Search className="w-4 h-4" />
                  Search
                </Button>
                <Button variant="outline" className="flex items-center gap-2">
                  <Filter className="w-4 h-4" />
                  Advanced Filters
                </Button>
              </div>
            </div>
          </div>

          {/* Search Results */}
          <div className="bg-white rounded-lg shadow-md border p-6 mt-6">
            <h2 className="text-lg font-semibold text-gray-800 mb-4">
              Recent Searches
            </h2>
            <div className="space-y-3">
              {searchHistory.map((search) => (
                <div
                  key={search.id}
                  className="flex items-center justify-between p-3 bg-gray-50 rounded-lg"
                >
                  <div className="flex-1">
                    <div className="flex items-center gap-3">
                      <Search className="w-4 h-4 text-gray-400" />
                      <div>
                        <p className="font-medium text-gray-800">
                          {search.query}
                        </p>
                        <p className="text-sm text-gray-500">
                          {search.user} • {search.timestamp}
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-sm text-gray-500">
                      {search.results} results
                    </span>
                    <Button variant="outline" size="sm">
                      <Eye className="w-4 h-4" />
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Sidebar */}
        <div className="space-y-6">
          {/* Popular Searches */}
          <div className="bg-white rounded-lg shadow-md border p-6">
            <h3 className="text-lg font-semibold text-gray-800 mb-4">
              Popular Searches
            </h3>
            <div className="space-y-2">
              {popularSearches.map((search, index) => (
                <button
                  key={index}
                  className="w-full text-left p-2 hover:bg-gray-50 rounded text-sm text-gray-600 hover:text-gray-800 transition-colors"
                >
                  {search}
                </button>
              ))}
            </div>
          </div>

          {/* Quick Actions */}
          <div className="bg-white rounded-lg shadow-md border p-6">
            <h3 className="text-lg font-semibold text-gray-800 mb-4">
              Quick Actions
            </h3>
            <div className="space-y-3">
              <Button variant="outline" className="w-full justify-start">
                <Download className="w-4 h-4 mr-2" />
                Export Search Results
              </Button>
              <Button variant="outline" className="w-full justify-start">
                <Filter className="w-4 h-4 mr-2" />
                Save Search Filter
              </Button>
              <Button variant="outline" className="w-full justify-start">
                <Eye className="w-4 h-4 mr-2" />
                View Search Analytics
              </Button>
            </div>
          </div>

          {/* Search Stats */}
          <div className="bg-white rounded-lg shadow-md border p-6">
            <h3 className="text-lg font-semibold text-gray-800 mb-4">
              Search Statistics
            </h3>
            <div className="space-y-3">
              <div className="flex justify-between">
                <span className="text-gray-600">Total Searches</span>
                <span className="font-semibold">1,234</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">This Week</span>
                <span className="font-semibold">156</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Most Searched</span>
                <span className="font-semibold">User Analytics</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SearchComponent;
