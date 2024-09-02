import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const UpdateProfile = () => {
  const [profileData, setProfileData] = useState({
    fullName: '',
    profilePicture: '',
    gender: '',
    dateOfBirth: '',
    email: '',
    phone: '',
    address: '',
    collegeRollNumber: '',
    graduationYear: '',
    program: '',
    branch: '',
    college: '',
    cgpa: '',
    jobTitle: '',
    company: '',
    industry: '',
    experience: '',
    linkedIn: '',
    professionalLinks: '',
    achievements: '',
    skills: '',
    certifications: '',
    hobbies: '',
    volunteering: '',
    publications: '',
    mentorshipInterest: '',
    eventsParticipation: '',
    alumniMembership: '',
    donations: '',
    password: '', // Include this if needed for login
  });

  const navigate = useNavigate();

  useEffect(() => {
    // Retrieve user profile data from localStorage
    const storedData = JSON.parse(localStorage.getItem('userProfile'));
    if (storedData) {
      setProfileData(storedData);
    } else {
      navigate('/signin'); // Redirect to sign-in if no profile data is found
    }
  }, [navigate]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setProfileData({
      ...profileData,
      [name]: value,
    });
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setProfileData({
          ...profileData,
          profilePicture: reader.result,
        });
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSave = () => {
    localStorage.setItem('userProfile', JSON.stringify(profileData));
    navigate('/account');
  };

  return (
    <div className="flex justify-center items-center h-screen bg-gray-100">
      <div className="w-full max-w-3xl p-8 bg-white rounded-lg shadow-lg">
        <h2 className="text-2xl font-bold mb-6">Update Profile</h2>
        <div className="mb-6">
          <img
            src={profileData.profilePicture || 'https://via.placeholder.com/150'}
            alt="Profile"
            className="w-24 h-24 rounded-full mb-4"
          />
          <input type="file" onChange={handleFileChange} className="mb-4" />
        </div>
        <label className="block mb-4">
          <span className="text-gray-700">Full Name</span>
          <input
            type="text"
            name="fullName"
            value={profileData.fullName}
            onChange={handleInputChange}
            className="block w-full mt-1 px-4 py-2 border rounded-md"
          />
        </label>
        <label className="block mb-4">
          <span className="text-gray-700">Gender</span>
          <input
            type="text"
            name="gender"
            value={profileData.gender}
            onChange={handleInputChange}
            className="block w-full mt-1 px-4 py-2 border rounded-md"
          />
        </label>
        <label className="block mb-4">
          <span className="text-gray-700">Date of Birth</span>
          <input
            type="date"
            name="dateOfBirth"
            value={profileData.dateOfBirth}
            onChange={handleInputChange}
            className="block w-full mt-1 px-4 py-2 border rounded-md"
          />
        </label>
        <label className="block mb-4">
          <span className="text-gray-700">Email</span>
          <input
            type="email"
            name="email"
            value={profileData.email}
            onChange={handleInputChange}
            className="block w-full mt-1 px-4 py-2 border rounded-md"
          />
        </label>
        <label className="block mb-4">
          <span className="text-gray-700">Phone</span>
          <input
            type="text"
            name="phone"
            value={profileData.phone}
            onChange={handleInputChange}
            className="block w-full mt-1 px-4 py-2 border rounded-md"
          />
        </label>
        <label className="block mb-4">
          <span className="text-gray-700">Address</span>
          <input
            type="text"
            name="address"
            value={profileData.address}
            onChange={handleInputChange}
            className="block w-full mt-1 px-4 py-2 border rounded-md"
          />
        </label>
        <label className="block mb-4">
          <span className="text-gray-700">College Roll Number</span>
          <input
            type="text"
            name="collegeRollNumber"
            value={profileData.collegeRollNumber}
            onChange={handleInputChange}
            className="block w-full mt-1 px-4 py-2 border rounded-md"
          />
        </label>
        <label className="block mb-4">
          <span className="text-gray-700">Graduation Year</span>
          <input
            type="text"
            name="graduationYear"
            value={profileData.graduationYear}
            onChange={handleInputChange}
            className="block w-full mt-1 px-4 py-2 border rounded-md"
          />
        </label>
        <label className="block mb-4">
          <span className="text-gray-700">Program</span>
          <input
            type="text"
            name="program"
            value={profileData.program}
            onChange={handleInputChange}
            className="block w-full mt-1 px-4 py-2 border rounded-md"
          />
        </label>
        <label className="block mb-4">
          <span className="text-gray-700">Branch</span>
          <input
            type="text"
            name="branch"
            value={profileData.branch}
            onChange={handleInputChange}
            className="block w-full mt-1 px-4 py-2 border rounded-md"
          />
        </label>
        <label className="block mb-4">
          <span className="text-gray-700">College</span>
          <input
            type="text"
            name="college"
            value={profileData.college}
            onChange={handleInputChange}
            className="block w-full mt-1 px-4 py-2 border rounded-md"
          />
        </label>
        <label className="block mb-4">
          <span className="text-gray-700">CGPA</span>
          <input
            type="text"
            name="cgpa"
            value={profileData.cgpa}
            onChange={handleInputChange}
            className="block w-full mt-1 px-4 py-2 border rounded-md"
          />
        </label>
        <label className="block mb-4">
          <span className="text-gray-700">Job Title</span>
          <input
            type="text"
            name="jobTitle"
            value={profileData.jobTitle}
            onChange={handleInputChange}
            className="block w-full mt-1 px-4 py-2 border rounded-md"
          />
        </label>
        <label className="block mb-4">
          <span className="text-gray-700">Company</span>
          <input
            type="text"
            name="company"
            value={profileData.company}
            onChange={handleInputChange}
            className="block w-full mt-1 px-4 py-2 border rounded-md"
          />
        </label>
        <label className="block mb-4">
          <span className="text-gray-700">Industry</span>
          <input
            type="text"
            name="industry"
            value={profileData.industry}
            onChange={handleInputChange}
            className="block w-full mt-1 px-4 py-2 border rounded-md"
          />
        </label>
        <label className="block mb-4">
          <span className="text-gray-700">Experience</span>
          <input
            type="text"
            name="experience"
            value={profileData.experience}
            onChange={handleInputChange}
            className="block w-full mt-1 px-4 py-2 border rounded-md"
          />
        </label>
        <label className="block mb-4">
          <span className="text-gray-700">LinkedIn</span>
          <input
            type="text"
            name="linkedIn"
            value={profileData.linkedIn}
            onChange={handleInputChange}
            className="block w-full mt-1 px-4 py-2 border rounded-md"
          />
        </label>
        <label className="block mb-4">
          <span className="text-gray-700">Professional Links</span>
          <input
            type="text"
            name="professionalLinks"
            value={profileData.professionalLinks}
            onChange={handleInputChange}
            className="block w-full mt-1 px-4 py-2 border rounded-md"
          />
        </label>
        <label className="block mb-4">
          <span className="text-gray-700">Achievements</span>
          <input
            type="text"
            name="achievements"
            value={profileData.achievements}
            onChange={handleInputChange}
            className="block w-full mt-1 px-4 py-2 border rounded-md"
          />
        </label>
        <label className="block mb-4">
          <span className="text-gray-700">Skills</span>
          <input
            type="text"
            name="skills"
            value={profileData.skills}
            onChange={handleInputChange}
            className="block w-full mt-1 px-4 py-2 border rounded-md"
          />
        </label>
        <label className="block mb-4">
          <span className="text-gray-700">Certifications</span>
          <input
            type="text"
            name="certifications"
            value={profileData.certifications}
            onChange={handleInputChange}
            className="block w-full mt-1 px-4 py-2 border rounded-md"
          />
        </label>
        <label className="block mb-4">
          <span className="text-gray-700">Hobbies</span>
          <input
            type="text"
            name="hobbies"
            value={profileData.hobbies}
            onChange={handleInputChange}
            className="block w-full mt-1 px-4 py-2 border rounded-md"
          />
        </label>
        <label className="block mb-4">
          <span className="text-gray-700">Volunteering</span>
          <input
            type="text"
            name="volunteering"
            value={profileData.volunteering}
            onChange={handleInputChange}
            className="block w-full mt-1 px-4 py-2 border rounded-md"
          />
        </label>
        <label className="block mb-4">
          <span className="text-gray-700">Publications</span>
          <input
            type="text"
            name="publications"
            value={profileData.publications}
            onChange={handleInputChange}
            className="block w-full mt-1 px-4 py-2 border rounded-md"
          />
        </label>
        <label className="block mb-4">
          <span className="text-gray-700">Mentorship Interest</span>
          <input
            type="text"
            name="mentorshipInterest"
            value={profileData.mentorshipInterest}
            onChange={handleInputChange}
            className="block w-full mt-1 px-4 py-2 border rounded-md"
          />
        </label>
        <label className="block mb-4">
          <span className="text-gray-700">Events Participation</span>
          <input
            type="text"
            name="eventsParticipation"
            value={profileData.eventsParticipation}
            onChange={handleInputChange}
            className="block w-full mt-1 px-4 py-2 border rounded-md"
          />
        </label>
        <label className="block mb-4">
          <span className="text-gray-700">Alumni Membership</span>
          <input
            type="text"
            name="alumniMembership"
            value={profileData.alumniMembership}
            onChange={handleInputChange}
            className="block w-full mt-1 px-4 py-2 border rounded-md"
          />
        </label>
        <label className="block mb-4">
          <span className="text-gray-700">Donations</span>
          <input
            type="text"
            name="donations"
            value={profileData.donations}
            onChange={handleInputChange}
            className="block w-full mt-1 px-4 py-2 border rounded-md"
          />
        </label>
        <div className="text-center">
          <button
            onClick={handleSave}
            className="bg-blue-500 text-white px-6 py-2 rounded hover:bg-blue-600"
          >
            Save Profile
          </button>
        </div>
      </div>
    </div>
  );
};

export default UpdateProfile;
