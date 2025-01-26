import React from 'react';
import { TrendingUp, TrendingDown, Minus } from 'lucide-react';
import { MetricCard as MetricCardType } from '../../types';

export function MetricCard({ title, value, change, trend }: MetricCardType) {
  const getTrendIcon = () => {
    if (!trend) return <Minus className="h-4 w-4" />;
    return trend === 'up' ? (
      <TrendingUp className="h-4 w-4 text-green-500" />
    ) : (
      <TrendingDown className="h-4 w-4 text-red-500" />
    );
  };

  const getTrendColor = () => {
    if (!change) return 'text-gray-500';
    return change >= 0 ? 'text-green-500' : 'text-red-500';
  };

  return (
    <div className="bg-white rounded-lg shadow-md p-6">
      <h3 className="text-sm font-medium text-gray-500">{title}</h3>
      <div className="mt-2 flex items-baseline">
        <p className="text-2xl font-semibold text-gray-900">{value}</p>
        {change && (
          <span className={`ml-2 flex items-center text-sm ${getTrendColor()}`}>
            {getTrendIcon()}
            <span className="ml-1">{Math.abs(change)}%</span>
          </span>
        )}
      </div>
    </div>
  );
}
