import React from 'react';
import { motion } from 'framer-motion';
import { Routes, Route, Link } from 'react-router-dom';
import { 
  LayoutDashboard, 
  Users, 
  FileText, 
  AlertTriangle,
  Settings,
  LogOut,
  PieChart,
  Clock,
  CheckCircle
} from 'lucide-react';

// Import existing components
import { DashboardMetrics } from '../../components/dashboard/DashboardMetrics';
import { RecentTransactions } from '../../components/dashboard/RecentTransactions';
import { AlertsPanel } from '../../components/dashboard/AlertsPanel';
import { CustomWidgets } from '../../components/dashboard/CustomWidgets';

const AdminSidebar = () => {
  return (
    <div className="w-64 bg-white shadow-lg h-screen fixed left-0 top-0">
      <div className="p-6">
        <h2 className="text-2xl font-bold text-gray-800">Admin Panel</h2>
      </div>
      <nav className="mt-6">
        <Link
          to="/admin/dashboard"
          className="flex items-center px-6 py-3 text-gray-700 hover:bg-blue-50 hover:text-blue-700"
        >
          <LayoutDashboard className="h-5 w-5 mr-3" />
          Dashboard
        </Link>
        <Link
          to="/admin/customers"
          className="flex items-center px-6 py-3 text-gray-700 hover:bg-blue-50 hover:text-blue-700"
        >
          <Users className="h-5 w-5 mr-3" />
          Customers
        </Link>
        <Link
          to="/admin/reports"
          className="flex items-center px-6 py-3 text-gray-700 hover:bg-blue-50 hover:text-blue-700"
        >
          <FileText className="h-5 w-5 mr-3" />
          Reports
        </Link>
        <Link
          to="/admin/risk"
          className="flex items-center px-6 py-3 text-gray-700 hover:bg-blue-50 hover:text-blue-700"
        >
          <AlertTriangle className="h-5 w-5 mr-3" />
          Risk Assessment
        </Link>
        <Link
          to="/admin/settings"
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

const AdminOverview = () => {
  const stats = [
    { icon: Users, label: 'Total Customers', value: '1,234', trend: '+12%' },
    { icon: FileText, label: 'Active Audits', value: '56', trend: '+5%' },
    { icon: AlertTriangle, label: 'Risk Alerts', value: '23', trend: '-8%' },
    { icon: CheckCircle, label: 'Completed Tasks', value: '789', trend: '+15%' }
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.3 }}
    >
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        {stats.map((stat) => (
          <div key={stat.label} className="bg-white rounded-lg shadow-md p-6">
            <div className="flex items-center justify-between mb-4">
              <stat.icon className="h-8 w-8 text-blue-600" />
              <span className={`text-sm font-semibold ${
                stat.trend.startsWith('+') ? 'text-green-600' : 'text-red-600'
              }`}>
                {stat.trend}
              </span>
            </div>
            <h3 className="text-2xl font-bold mb-1">{stat.value}</h3>
            <p className="text-gray-600">{stat.label}</p>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
        <RecentTransactions />
        <AlertsPanel />
      </div>

      <CustomWidgets />
    </motion.div>
  );
};

export function AdminDashboard() {
  return (
    <div className="flex">
      <AdminSidebar />
      <div className="ml-64 flex-1 p-8">
        <Routes>
          <Route path="dashboard" element={<AdminOverview />} />
          <Route path="customers" element={<div>Customers Management</div>} />
          <Route path="reports" element={<div>Reports Management</div>} />
          <Route path="risk" element={<div>Risk Assessment</div>} />
          <Route path="settings" element={<div>Settings</div>} />
        </Routes>
      </div>
    </div>
  );
}
