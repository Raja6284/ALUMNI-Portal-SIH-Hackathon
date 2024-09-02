import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const Account = () => {
  const [profileData, setProfileData] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const storedData = JSON.parse(localStorage.getItem('userProfile'));
    if (storedData) {
      setProfileData(storedData);
    } else {
      navigate('/signin');
    }
  }, [navigate]);

  const handleSignOut = () => {
    localStorage.removeItem('userProfile');
    navigate('/signin');
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100 p-8">
      {profileData ? (
        <div className="w-full max-w-3xl p-8 bg-white rounded-lg shadow-lg">
          <div className="flex items-center mb-6">
            <img
              src={profileData.profilePicture || 'https://via.placeholder.com/150'}
              alt="Profile"
              className="w-24 h-24 rounded-full object-cover mr-6"
            />
            <div>
              <h2 className="text-2xl font-bold text-gray-800">{profileData.fullName}</h2>
              <p className="text-gray-600">{profileData.jobTitle}</p>
            </div>
          </div>
          <div className="mb-8">
            <h3 className="text-xl font-semibold text-gray-700 mb-4">Personal Information</h3>
            <p><strong>Full Name:</strong> {profileData.fullName}</p>
            <p><strong>Gender:</strong> {profileData.gender}</p>
            <p><strong>Date of Birth:</strong> {profileData.dateOfBirth}</p>
            <p><strong>Email:</strong> {profileData.email}</p>
            <p><strong>Phone:</strong> {profileData.phone}</p>
            <p><strong>Address:</strong> {profileData.address}</p>
          </div>
          <div className="mb-8">
            <h3 className="text-xl font-semibold text-gray-700 mb-4">Academic Information</h3>
            <p><strong>College Roll Number:</strong> {profileData.collegeRollNumber}</p>
            <p><strong>Graduation Year:</strong> {profileData.graduationYear}</p>
            <p><strong>Program:</strong> {profileData.program}</p>
            <p><strong>Branch:</strong> {profileData.branch}</p>
            <p><strong>College:</strong> {profileData.college}</p>
            <p><strong>CGPA:</strong> {profileData.cgpa}</p>
          </div>
          <div className="mb-8">
            <h3 className="text-xl font-semibold text-gray-700 mb-4">Professional Information</h3>
            <p><strong>Job Title:</strong> {profileData.jobTitle}</p>
            <p><strong>Company:</strong> {profileData.company}</p>
            <p><strong>Industry:</strong> {profileData.industry}</p>
            <p><strong>Experience:</strong> {profileData.experience}</p>
            <p><strong>LinkedIn:</strong> <a href={profileData.linkedIn} className="text-blue-500">{profileData.linkedIn}</a></p>
            <p><strong>Professional Links:</strong> {profileData.professionalLinks}</p>
            <p><strong>Achievements:</strong> {profileData.achievements}</p>
          </div>
          <div className="mb-8">
            <h3 className="text-xl font-semibold text-gray-700 mb-4">Additional Information</h3>
            <p><strong>Skills:</strong> {profileData.skills}</p>
            <p><strong>Certifications:</strong> {profileData.certifications}</p>
            <p><strong>Hobbies:</strong> {profileData.hobbies}</p>
            <p><strong>Volunteering:</strong> {profileData.volunteering}</p>
            <p><strong>Publications:</strong> {profileData.publications}</p>
          </div>
          <div className="text-center">
            <button
              onClick={() => navigate('/update-profile')}
              className="bg-green-500 text-white px-6 py-2 rounded hover:bg-green-600 mr-4"
            >
              Edit Profile
            </button>
            <button
              onClick={handleSignOut}
              className="bg-red-500 text-white px-6 py-2 rounded hover:bg-red-600"
            >
              Sign Out
            </button>
          </div>
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default Account;
