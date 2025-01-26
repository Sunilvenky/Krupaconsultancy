import React from 'react';
import { FileText, CheckCircle, AlertCircle } from 'lucide-react';

export function DocumentProcessing() {
  return (
    <div className="bg-white rounded-lg shadow-md p-6 mt-6">
      <h2 className="text-xl font-semibold mb-4">Document Processing</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <div className="p-4 border rounded-lg">
          <div className="flex items-center justify-between mb-4">
            <h3 className="font-medium">OCR Processing</h3>
            <div className="text-green-500">
              <CheckCircle className="h-5 w-5" />
            </div>
          </div>
          <p className="text-sm text-gray-600">Automatically extract text from documents</p>
        </div>

        <div className="p-4 border rounded-lg">
          <div className="flex items-center justify-between mb-4">
            <h3 className="font-medium">AI Classification</h3>
            <div className="text-blue-500">
              <FileText className="h-5 w-5" />
            </div>
          </div>
          <p className="text-sm text-gray-600">Smart document categorization</p>
        </div>

        <div className="p-4 border rounded-lg">
          <div className="flex items-center justify-between mb-4">
            <h3 className="font-medium">Digital Signatures</h3>
            <div className="text-yellow-500">
              <AlertCircle className="h-5 w-5" />
            </div>
          </div>
          <p className="text-sm text-gray-600">Secure document signing</p>
        </div>
      </div>
    </div>
  );
}
