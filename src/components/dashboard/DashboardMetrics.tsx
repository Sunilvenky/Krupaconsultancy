import React from 'react';
import { TrendingUp, TrendingDown, DollarSign, LineChart, PieChart, AlertCircle } from 'lucide-react';

export function DashboardMetrics() {
  const metrics = [
    { title: 'Total Revenue', value: '$124,500.00', change: 12.5, trend: 'up' },
    { title: 'Cash Flow', value: '$45,200.00', change: -5, trend: 'down' },
    { title: 'Budget Variance', value: '+8.3%', change: 3, trend: 'up' },
    { title: 'Profitability', value: '24.6%', change: 1.2, trend: 'up' }
  ];

  return (
    <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4 mb-8">
      {metrics.map((metric) => (
        <div key={metric.title} className="bg-white rounded-lg shadow-md p-6">
          <h3 className="text-sm font-medium text-gray-500">{metric.title}</h3>
          <div className="mt-2 flex items-baseline">
            <p className="text-2xl font-semibold text-gray-900">{metric.value}</p>
            <span className={`ml-2 flex items-center text-sm ${
              metric.trend === 'up' ? 'text-green-500' : 'text-red-500'
            }`}>
              {metric.trend === 'up' ? (
                <TrendingUp className="h-4 w-4 mr-1" />
              ) : (
                <TrendingDown className="h-4 w-4 mr-1" />
              )}
              {Math.abs(metric.change)}%
            </span>
          </div>
        </div>
      ))}
    </div>
  );
}
