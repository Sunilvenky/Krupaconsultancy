import React, { useCallback } from 'react';
import { useDropzone } from 'react-dropzone';
import { Upload, File, Loader } from 'lucide-react';

export function DocumentUpload() {
  const onDrop = useCallback((acceptedFiles: File[]) => {
    // Handle file upload logic here
  }, []);

  const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop });

  return (
    <div className="bg-white rounded-lg shadow-md p-6">
      <h2 className="text-xl font-semibold mb-4">Document Upload</h2>
      
      <div
        {...getRootProps()}
        className={`border-2 border-dashed rounded-lg p-8 text-center cursor-pointer transition-colors
          ${isDragActive ? 'border-blue-500 bg-blue-50' : 'border-gray-300 hover:border-gray-400'}`}
      >
        <input {...getInputProps()} />
        <Upload className="h-12 w-12 mx-auto text-gray-400 mb-4" />
        <p className="text-gray-600">
          {isDragActive ? 'Drop files here' : 'Drag & drop files here, or click to select files'}
        </p>
        <p className="text-sm text-gray-500 mt-2">
          Supported formats: PDF, DOC, DOCX, XLS, XLSX
        </p>
      </div>
    </div>
  );
}
