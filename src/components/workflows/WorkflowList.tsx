import React from 'react';
import { Clock, AlertCircle, CheckCircle2, Calendar, ArrowUpRight } from 'lucide-react';

interface Workflow {
  id: string;
  name: string;
  type: string;
  status: 'active' | 'pending' | 'completed';
  deadline: string;
  progress: number;
  assignee: string;
  priority: 'high' | 'medium' | 'low';
}

const workflows: Workflow[] = [
  {
    id: '1',
    name: 'Monthly Financial Review',
    type: 'Finance',
    status: 'active',
    deadline: '2024-04-15',
    progress: 65,
    assignee: 'John Doe',
    priority: 'high'
  },
  {
    id: '2',
    name: 'Vendor Payment Approval',
    type: 'Approval',
    status: 'pending',
    deadline: '2024-04-10',
    progress: 30,
    assignee: 'Jane Smith',
    priority: 'medium'
  }
];

export function WorkflowList() {
  return (
    <div className="bg-white rounded-lg shadow-md p-6">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-xl font-semibold">Active Workflows</h2>
        <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 flex items-center gap-2">
          <span>New Workflow</span>
          <ArrowUpRight className="h-4 w-4" />
        </button>
      </div>

      <div className="space-y-4">
        {workflows.map((workflow) => (
          <div key={workflow.id} className="border rounded-lg p-4">
            <div className="flex justify-between items-start mb-4">
              <div>
                <h3 className="font-medium text-lg">{workflow.name}</h3>
                <span className="text-sm text-gray-500">{workflow.type}</span>
              </div>
              <span className={`px-3 py-1 rounded-full text-sm font-medium
                ${workflow.priority === 'high' ? 'bg-red-100 text-red-800' :
                  workflow.priority === 'medium' ? 'bg-yellow-100 text-yellow-800' :
                  'bg-green-100 text-green-800'}`}>
                {workflow.priority} priority
              </span>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-4">
              <div className="flex items-center gap-2">
                <Clock className="h-4 w-4 text-gray-400" />
                <span className="text-sm text-gray-600">Due: {workflow.deadline}</span>
              </div>
              <div className="flex items-center gap-2">
                <AlertCircle className="h-4 w-4 text-gray-400" />
                <span className="text-sm text-gray-600">Status: {workflow.status}</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="h-4 w-4 text-gray-400" />
                <span className="text-sm text-gray-600">Progress: {workflow.progress}%</span>
              </div>
              <div className="flex items-center gap-2">
                <Calendar className="h-4 w-4 text-gray-400" />
                <span className="text-sm text-gray-600">Assignee: {workflow.assignee}</span>
              </div>
            </div>

            <div className="w-full bg-gray-200 rounded-full h-2.5">
              <div
                className="bg-blue-600 h-2.5 rounded-full"
                style={{ width: `${workflow.progress}%` }}
              ></div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
