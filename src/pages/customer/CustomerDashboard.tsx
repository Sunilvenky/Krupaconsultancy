import React from 'react';
import { motion } from 'framer-motion';
import { Routes, Route, Link } from 'react-router-dom';
import {
  LayoutDashboard,
  FileText,
  AlertTriangle,
  Settings,
  LogOut,
  PieChart,
  Clock,
  Activity
} from 'lucide-react';
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  AreaChart,
  Area
} from 'recharts';

const data = [
  { name: 'Jan', value: 400 },
  { name: 'Feb', value: 300 },
  { name: 'Mar', value: 600 },
  { name: 'Apr', value: 800 },
  { name: 'May', value: 500 },
  { name: 'Jun', value: 700 },
];

const CustomerSidebar = () => {
  return (
    <div className="w-64 bg-white shadow-lg h-screen fixed left-0 top-0">
      <div className="p-6">
        <h2 className="text-2xl font-bold text-gray-800">My Dashboard</h2>
      </div>
      <nav className="mt-6">
        <Link
          to="/customer/dashboard"
          className="flex items-center px-6 py-3 text-gray-700 hover:bg-blue-50 hover:text-blue-700"
        >
          <LayoutDashboard className="h-5 w-5 mr-3" />
          Overview
        </Link>
        <Link
          to="/customer/reports"
          className="flex items-center px-6 py-3 text-gray-700 hover:bg-blue-50 hover:text-blue-700"
        >
          <FileText className="h-5 w-5 mr-3" />
          Reports
        </Link>
        <Link
          to="/customer/risk"
          className="flex items-center px-6 py-3 text-gray-700 hover:bg-blue-50 hover:text-blue-700"
        >
          <AlertTriangle className="h-5 w-5 mr-3" />
          Risk Analysis
        </Link>
        <Link
          to="/customer/settings"
          className="flex items-center px-6 py-3 text-gray-700 hover:bg-blue-50 hover:text-blue-700"
        >
          <Settings className="h-5 w-5 mr-3" />
          Settings
        </Link>
        <Link
          to="/"
          className="flex items-center px-6 py-3 text-red-600 hover:bg-red-50 hover:text-red-700 mt-auto"
        >
          <LogOut className="h-5 w-5 mr-3" />
          Logout
        </Link>
      </nav>
    </div>
  );
};

const CustomerOverview = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.3 }}
    >
      {/* Financial Overview */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <div className="bg-white rounded-lg shadow-md p-6">
          <div className="flex items-center justify-between mb-4">
            <div>
              <p className="text-gray-600">Total Balance</p>
              <h3 className="text-2xl font-bold">$45,250.00</h3>
            </div>
            <PieChart className="h-8 w-8 text-blue-600" />
          </div>
          <div className="text-sm text-green-600">+12.5% from last month</div>
        </div>

        <div className="bg-white rounded-lg shadow-md p-6">
          <div className="flex items-center justify-between mb-4">
            <div>
              <p className="text-gray-600">Pending Transactions</p>
              <h3 className="text-2xl font-bold">8</h3>
            </div>
            <Clock className="h-8 w-8 text-yellow-600" />
          </div>
          <div className="text-sm text-gray-600">Last updated 2 hours ago</div>
        </div>

        <div className="bg-white rounded-lg shadow-md p-6">
          <div className="flex items-center justify-between mb-4">
            <div>
              <p className="text-gray-600">Risk Score</p>
              <h3 className="text-2xl font-bold">85/100</h3>
            </div>
            <Activity className="h-8 w-8 text-green-600" />
          </div>
          <div className="text-sm text-green-600">Low Risk Profile</div>
        </div>
      </div>

      {/* Charts */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
        <div className="bg-white rounded-lg shadow-md p-6">
          <h3 className="text-lg font-semibold mb-4">Financial Activity</h3>
          <div className="h-80">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={data}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Line type="monotone" dataKey="value" stroke="#3B82F6" />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-md p-6">
          <h3 className="text-lg font-semibold mb-4">Risk Analysis Trend</h3>
          <div className="h-80">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={data}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Area type="monotone" dataKey="value" stroke="#10B981" fill="#D1FAE5" />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>

      {/* Recent Activity */}
      <div className="bg-white rounded-lg shadow-md">
        <div className="p-6 border-b border-gray-200">
          <h3 className="text-lg font-semibold">Recent Activity</h3>
        </div>
        <div className="p-6">
          <div className="space-y-6">
            {[1, 2, 3].map((item) => (
              <div key={item} className="flex items-center">
                <div className="flex-shrink-0">
                  <div className="h-10 w-10 rounded-full bg-blue-100 flex items-center justify-center">
                    <Activity className="h-5 w-5 text-blue-600" />
                  </div>
                </div>
                <div className="ml-4">
                  <p className="text-sm font-medium text-gray-900">
                    Risk assessment completed
                  </p>
                  <p className="text-sm text-gray-500">2 hours ago</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export function CustomerDashboard() {
  return (
    <div className="flex">
      <CustomerSidebar />
      <div className="ml-64 flex-1 p-8">
        <Routes>
          <Route path="dashboard" element={<CustomerOverview />} />
          <Route path="reports" element={<div>Reports</div>} />
          <Route path="risk" element={<div>Risk Analysis</div>} />
          <Route path="settings" element={<div>Settings</div>} />
        </Routes>
      </div>
    </div>
  );
}
