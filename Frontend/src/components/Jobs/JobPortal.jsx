import React from 'react';
import { Link } from 'react-router-dom';

function JobPortal() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 p-6">
      <h1 className="text-4xl font-extrabold mb-8 text-gray-900">Welcome to Job Portal</h1>
      <div className="bg-white rounded-lg shadow-lg p-8 w-full max-w-md">
        <div className="text-center mb-8">
          <h2 className="text-2xl font-semibold mb-4">Navigate to</h2>
        </div>
        <div className="flex flex-col items-center">
          <Link
            to="/jobpost"
            className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-3 px-6 rounded mb-4 w-full text-center transition-colors"
          >
            Post a Job
          </Link>
          <Link
            to="/joblist"
            className="bg-green-500 hover:bg-green-600 text-white font-bold py-3 px-6 rounded w-full text-center transition-colors"
          >
            View Job List
          </Link>
        </div>
      </div>
    </div>
  );
}

export default JobPortal;
