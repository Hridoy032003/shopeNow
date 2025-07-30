import React from "react";
import { CreditCard, Download, Eye, Plus, Filter } from "lucide-react";
import { Button } from "@/components/ui/button";

const BillingComponent = () => {
  const invoices = [
    {
      id: 1,
      customer: "John Doe",
      amount: 299.99,
      status: "Paid",
      date: "2024-01-15",
      invoice: "INV-001",
    },
    {
      id: 2,
      customer: "Jane Smith",
      amount: 149.99,
      status: "Pending",
      date: "2024-01-14",
      invoice: "INV-002",
    },
    {
      id: 3,
      customer: "Bob Johnson",
      amount: 599.99,
      status: "Paid",
      date: "2024-01-13",
      invoice: "INV-003",
    },
    {
      id: 4,
      customer: "Alice Brown",
      amount: 99.99,
      status: "Overdue",
      date: "2024-01-10",
      invoice: "INV-004",
    },
    {
      id: 5,
      customer: "Charlie Wilson",
      amount: 449.99,
      status: "Paid",
      date: "2024-01-12",
      invoice: "INV-005",
    },
  ];

  const billingStats = [
    {
      label: "Total Revenue",
      value: "$12,450",
      change: "+15%",
      color: "text-green-600",
    },
    {
      label: "Pending Payments",
      value: "$2,340",
      change: "+8%",
      color: "text-yellow-600",
    },
    {
      label: "Overdue Amount",
      value: "$890",
      change: "-5%",
      color: "text-red-600",
    },
    {
      label: "This Month",
      value: "$4,230",
      change: "+12%",
      color: "text-blue-600",
    },
  ];

  return (
    <div className="p-6">
      <div className="flex items-center gap-3 mb-6">
        <CreditCard className="w-6 h-6 text-blue-600" />
        <h1 className="text-2xl font-bold text-gray-800">Billing & Invoices</h1>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        {billingStats.map((stat, index) => (
          <div key={index} className="bg-white rounded-lg shadow-md border p-6">
            <h3 className="text-sm font-medium text-gray-500 mb-2">
              {stat.label}
            </h3>
            <p className="text-2xl font-bold text-gray-800">{stat.value}</p>
            <p className={`text-sm font-medium ${stat.color}`}>{stat.change}</p>
          </div>
        ))}
      </div>

      {/* Actions */}
      <div className="flex justify-between items-center mb-6">
        <div className="flex gap-4">
          <div className="relative">
            <input
              type="text"
              placeholder="Search invoices..."
              className="pl-4 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <Button variant="outline" className="flex items-center gap-2">
            <Filter className="w-4 h-4" />
            Filter
          </Button>
        </div>
        <Button className="flex items-center gap-2">
          <Plus className="w-4 h-4" />
          Create Invoice
        </Button>
      </div>

      {/* Invoices Table */}
      <div className="bg-white rounded-lg shadow-md border overflow-hidden">
        <div className="px-6 py-4 border-b border-gray-200">
          <h2 className="text-lg font-semibold text-gray-800">
            Recent Invoices
          </h2>
        </div>
        <table className="w-full">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Invoice
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Customer
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Amount
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Status
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Date
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Actions
              </th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {invoices.map((invoice) => (
              <tr key={invoice.id} className="hover:bg-gray-50">
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                  {invoice.invoice}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  {invoice.customer}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-semibold text-gray-900">
                  ${invoice.amount}
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <span
                    className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full ${
                      invoice.status === "Paid"
                        ? "bg-green-100 text-green-800"
                        : invoice.status === "Pending"
                        ? "bg-yellow-100 text-yellow-800"
                        : "bg-red-100 text-red-800"
                    }`}
                  >
                    {invoice.status}
                  </span>
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  {invoice.date}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                  <div className="flex gap-2">
                    <Button variant="outline" size="sm">
                      <Eye className="w-4 h-4" />
                    </Button>
                    <Button variant="outline" size="sm">
                      <Download className="w-4 h-4" />
                    </Button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Payment Methods */}
      <div className="mt-8 bg-white rounded-lg shadow-md border p-6">
        <h2 className="text-lg font-semibold text-gray-800 mb-4">
          Payment Methods
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="border border-gray-200 rounded-lg p-4">
            <div className="flex items-center gap-3 mb-3">
              <CreditCard className="w-5 h-5 text-blue-600" />
              <span className="font-medium">Credit Card</span>
            </div>
            <p className="text-sm text-gray-500">•••• •••• •••• 1234</p>
            <p className="text-sm text-gray-500">Expires 12/25</p>
          </div>

          <div className="border border-gray-200 rounded-lg p-4">
            <div className="flex items-center gap-3 mb-3">
              <CreditCard className="w-5 h-5 text-green-600" />
              <span className="font-medium">PayPal</span>
            </div>
            <p className="text-sm text-gray-500">user@example.com</p>
            <p className="text-sm text-gray-500">Connected</p>
          </div>

          <div className="border border-gray-200 rounded-lg p-4">
            <div className="flex items-center gap-3 mb-3">
              <CreditCard className="w-5 h-5 text-purple-600" />
              <span className="font-medium">Bank Transfer</span>
            </div>
            <p className="text-sm text-gray-500">Account: ****5678</p>
            <p className="text-sm text-gray-500">Verified</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BillingComponent;
