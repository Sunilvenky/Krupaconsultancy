import React from 'react';
import { Calendar, Clock, Bell, Users, Repeat } from 'lucide-react';

export function WorkflowScheduler() {
  return (
    <div className="bg-white rounded-lg shadow-md p-6 mt-6">
      <h2 className="text-xl font-semibold mb-6">Workflow Scheduler</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <div className="border rounded-lg p-4">
          <div className="flex items-center gap-3 mb-4">
            <Calendar className="h-5 w-5 text-blue-600" />
            <h3 className="font-medium">Recurring Tasks</h3>
          </div>
          <div className="space-y-2">
            <div className="flex items-center justify-between text-sm">
              <span>Monthly Reports</span>
              <span className="text-gray-500">Every 1st</span>
            </div>
            <div className="flex items-center justify-between text-sm">
              <span>Team Updates</span>
              <span className="text-gray-500">Weekly</span>
            </div>
          </div>
        </div>

        <div className="border rounded-lg p-4">
          <div className="flex items-center gap-3 mb-4">
            <Bell className="h-5 w-5 text-yellow-600" />
            <h3 className="font-medium">Notifications</h3>
          </div>
          <div className="space-y-2">
            <div className="flex items-center justify-between text-sm">
              <span>Email Alerts</span>
              <span className="text-gray-500">Enabled</span>
            </div>
            <div className="flex items-center justify-between text-sm">
              <span>Push Notifications</span>
              <span className="text-gray-500">Enabled</span>
            </div>
          </div>
        </div>

        <div className="border rounded-lg p-4">
          <div className="flex items-center gap-3 mb-4">
            <Clock className="h-5 w-5 text-green-600" />
            <h3 className="font-medium">SLA Monitoring</h3>
          </div>
          <div className="space-y-2">
            <div className="flex items-center justify-between text-sm">
              <span>Response Time</span>
              <span className="text-gray-500">&lt; 2 hours</span>
            </div>
            <div className="flex items-center justify-between text-sm">
              <span>Resolution Time</span>
              <span className="text-gray-500">&lt; 24 hours</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
