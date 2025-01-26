import React from 'react';

export function CustomWidgets() {
  const widgets = [
    { title: 'Cash Flow Analysis', type: 'chart' },
    { title: 'Profitability Metrics', type: 'metrics' },
    { title: 'Budget vs Actual', type: 'comparison' },
    { title: 'Trend Analysis', type: 'forecast' }
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
      {widgets.map((widget) => (
        <div key={widget.title} className="bg-white rounded-lg shadow-md p-6">
          <h3 className="text-lg font-medium text-gray-900 mb-4">{widget.title}</h3>
          <div className="h-48 bg-gray-50 rounded-lg">
            <div className="flex items-center justify-center h-full">
              <p className="text-gray-500">{widget.type} widget placeholder</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
