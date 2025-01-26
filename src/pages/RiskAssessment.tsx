import React from 'react';
import { motion } from 'framer-motion';
import { AlertTriangle, Shield, TrendingUp, Activity } from 'lucide-react';

export function RiskAssessment() {
  const risks = [
    {
      id: '1',
      title: 'Market Volatility',
      description: 'Potential impact of market fluctuations on portfolio',
      level: 'high',
      status: 'monitoring',
      lastAssessment: '2024-03-15',
      nextReview: '2024-04-15'
    },
    {
      id: '2',
      title: 'Compliance Risk',
      description: 'Regulatory compliance assessment for new markets',
      level: 'medium',
      status: 'mitigated',
      lastAssessment: '2024-03-10',
      nextReview: '2024-04-10'
    }
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.3 }}
    >
      <div className="flex justify-between items-center mb-8">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Risk Assessment</h1>
          <p className="mt-1 text-sm text-gray-500">
            Monitor and manage potential risks
          </p>
        </div>
        <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700">
          New Assessment
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        <div className="bg-white p-6 rounded-lg shadow-md">
          <div className="flex items-center gap-3 mb-4">
            <AlertTriangle className="h-6 w-6 text-red-500" />
            <h3 className="font-medium">High Risk Items</h3>
          </div>
          <p className="text-3xl font-bold">3</p>
          <p className="text-sm text-gray-500 mt-2">Require immediate attention</p>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-md">
          <div className="flex items-center gap-3 mb-4">
            <Shield className="h-6 w-6 text-green-500" />
            <h3 className="font-medium">Mitigated Risks</h3>
          </div>
          <p className="text-3xl font-bold">12</p>
          <p className="text-sm text-gray-500 mt-2">Successfully addressed</p>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-md">
          <div className="flex items-center gap-3 mb-4">
            <TrendingUp className="h-6 w-6 text-blue-500" />
            <h3 className="font-medium">Risk Trend</h3>
          </div>
          <p className="text-3xl font-bold text-green-500">↓ 15%</p>
          <p className="text-sm text-gray-500 mt-2">Last 30 days</p>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-md">
          <div className="flex items-center gap-3 mb-4">
            <Activity className="h-6 w-6 text-purple-500" />
            <h3 className="font-medium">Active Monitoring</h3>
          </div>
          <p className="text-3xl font-bold">8</p>
          <p className="text-sm text-gray-500 mt-2">Under observation</p>
        </div>
      </div>

      <div className="bg-white rounded-lg shadow-md">
        <div className="p-6 border-b border-gray-200">
          <h2 className="text-lg font-semibold">Risk Register</h2>
        </div>
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Risk</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Description</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Level</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Last Assessment</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Next Review</th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {risks.map((risk) => (
                <tr key={risk.id}>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                    {risk.title}
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-500">
                    {risk.description}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full 
                      ${risk.level === 'high' ? 'bg-red-100 text-red-800' : 
                        risk.level === 'medium' ? 'bg-yellow-100 text-yellow-800' : 
                        'bg-green-100 text-green-800'}`}>
                      {risk.level}
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full 
                      ${risk.status === 'monitoring' ? 'bg-blue-100 text-blue-800' : 
                        'bg-green-100 text-green-800'}`}>
                      {risk.status}
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    {risk.lastAssessment}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    {risk.nextReview}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </motion.div>
  );
}
