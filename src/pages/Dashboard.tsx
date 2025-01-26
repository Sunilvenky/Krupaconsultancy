import React from 'react';
import { motion } from 'framer-motion';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { DashboardMetrics } from '../components/dashboard/DashboardMetrics';
import { RecentTransactions } from '../components/dashboard/RecentTransactions';
import { AlertsPanel } from '../components/dashboard/AlertsPanel';
import { CustomWidgets } from '../components/dashboard/CustomWidgets';

const data = [
  { name: 'Jan', transactions: 400, reports: 240, risks: 140 },
  { name: 'Feb', transactions: 300, reports: 139, risks: 221 },
  { name: 'Mar', transactions: 200, reports: 980, risks: 229 },
  { name: 'Apr', transactions: 278, reports: 390, risks: 200 },
];

export function Dashboard() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.3 }}
    >
      <div className="mb-8">
        <h1 className="text-2xl font-bold text-gray-900">Dashboard Overview</h1>
        <p className="mt-1 text-sm text-gray-500">
          Welcome back! Here's what's happening with your projects.
        </p>
      </div>

      <DashboardMetrics />
      
      <div className="mb-8 bg-white p-6 rounded-lg shadow-md">
        <h2 className="text-lg font-semibold mb-4">Activity Overview</h2>
        <div className="h-80">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={data}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Bar dataKey="transactions" fill="#8884d8" name="Transactions" />
              <Bar dataKey="reports" fill="#82ca9d" name="Reports" />
              <Bar dataKey="risks" fill="#ffc658" name="Risks" />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <RecentTransactions />
        <AlertsPanel />
      </div>

      <CustomWidgets />
    </motion.div>
  );
}
