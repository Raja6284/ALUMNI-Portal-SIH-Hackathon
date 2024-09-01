// JobPost.jsx
import React, { useState } from 'react';
import { useJobs } from './JobContext';
import { useNavigate } from 'react-router-dom';

function JobPost() {
  const { addJob } = useJobs();
  const navigate = useNavigate();

  const [jobDetails, setJobDetails] = useState({
    title: '',
    company: '',
    location: '',
    type: '',
    description: '',
    requirements: '',
    salary: '',
    applyLink: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setJobDetails({ ...jobDetails, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addJob(jobDetails);
    setJobDetails({
      title: '',
      company: '',
      location: '',
      type: '',
      description: '',
      requirements: '',
      salary: '',
      applyLink: '',
    });
    navigate('/joblist');
  };

  return (
    <div className="bg-white rounded-lg shadow-lg p-8 w-full max-w-2xl mb-8">
      <h2 className="text-2xl font-bold mb-8 text-center">Create Job Post</h2>
      <form onSubmit={handleSubmit}>
        {/* Job Title */}
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="title">
            Job Title
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="title"
            name="title"
            type="text"
            placeholder="Enter job title"
            value={jobDetails.title}
            onChange={handleChange}
            required
          />
        </div>

        {/* Company */}
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="company">
            Company
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="company"
            name="company"
            type="text"
            placeholder="Enter company name"
            value={jobDetails.company}
            onChange={handleChange}
            required
          />
        </div>

        {/* Location */}
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="location">
            Location
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="location"
            name="location"
            type="text"
            placeholder="Enter job location"
            value={jobDetails.location}
            onChange={handleChange}
            required
          />
        </div>

        {/* Job Type */}
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="type">
            Job Type
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="type"
            name="type"
            type="text"
            placeholder="Full-time, Part-time, etc."
            value={jobDetails.type}
            onChange={handleChange}
            required
          />
        </div>

        {/* Description */}
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="description">
            Description
          </label>
          <textarea
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="description"
            name="description"
            placeholder="Enter job description"
            value={jobDetails.description}
            onChange={handleChange}
            required
          />
        </div>

        {/* Requirements */}
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="requirements">
            Requirements
          </label>
          <textarea
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="requirements"
            name="requirements"
            placeholder="Enter job requirements"
            value={jobDetails.requirements}
            onChange={handleChange}
            required
          />
        </div>

        {/* Salary */}
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="salary">
            Salary
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="salary"
            name="salary"
            type="text"
            placeholder="Enter salary range"
            value={jobDetails.salary}
            onChange={handleChange}
            required
          />
        </div>

        {/* Apply Link */}
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="applyLink">
            Apply Link
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="applyLink"
            name="applyLink"
            type="text"
            placeholder="Enter apply link"
            value={jobDetails.applyLink}
            onChange={handleChange}
            required
          />
        </div>

        <div className="flex items-center justify-center">
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            type="submit"
          >
            Post Job
          </button>
        </div>
      </form>
    </div>
  );
}

export default JobPost;
