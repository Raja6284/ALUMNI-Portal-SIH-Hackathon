// JobList.jsx
import React from 'react';
import { useJobs } from './JobContext';

function JobList() {
  const { jobs } = useJobs();

  return (
    <div className="container mx-auto p-8">
      <h1 className="text-3xl font-bold mb-8 text-center">Job Listings</h1>

      <div className="bg-white rounded-lg shadow-lg p-8 w-full max-w-4xl mx-auto mt-8">
        <h2 className="text-2xl font-bold mb-4">Available Jobs</h2>
        {jobs.length === 0 ? (
          <p className="text-gray-600">No jobs available. Please add a job.</p>
        ) : (
          <ul>
            {jobs.map((job, index) => (
              <li key={index} className="mb-4 p-4 border rounded shadow-sm">
                <h3 className="text-xl font-bold mb-2">{job.title}</h3>
                <p className="text-gray-700">Company: {job.company}</p>
                <p className="text-gray-600">Location: {job.location}</p>
                <p className="text-gray-600">Type: {job.type}</p>
                <p className="text-gray-600">Salary: {job.salary}</p>
                <p className="text-gray-600 mt-2">Description: {job.description}</p>
                <p className="text-gray-600 mt-2">Requirements: {job.requirements}</p>
                <p className="text-blue-500 mt-2">
                  <a href={job.applyLink} target="_blank" rel="noopener noreferrer">
                    Apply Here
                  </a>
                </p>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}

export default JobList;
