import React from 'react';
import { AlertCircle, Bell } from 'lucide-react';

export function AlertsPanel() {
  const alerts = [
    { type: 'warning', message: 'Budget threshold exceeded in Marketing department' },
    { type: 'info', message: 'New financial report available for review' },
    { type: 'critical', message: 'Unusual transaction pattern detected' }
  ];

  return (
    <div className="bg-white rounded-lg shadow-md p-6">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-lg font-medium text-gray-900">Custom Alerts</h3>
        <Bell className="h-5 w-5 text-gray-500" />
      </div>
      <div className="space-y-4">
        {alerts.map((alert, index) => (
          <div
            key={index}
            className={`flex items-start p-4 rounded-lg ${
              alert.type === 'warning' ? 'bg-yellow-50' :
              alert.type === 'critical' ? 'bg-red-50' : 'bg-blue-50'
            }`}
          >
            <AlertCircle className={`h-5 w-5 mr-3 ${
              alert.type === 'warning' ? 'text-yellow-500' :
              alert.type === 'critical' ? 'text-red-500' : 'text-blue-500'
            }`} />
            <p className="text-sm text-gray-700">{alert.message}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
