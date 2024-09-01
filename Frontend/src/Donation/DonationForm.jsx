import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const DonationForm = () => {
  const navigate = useNavigate();

  // State to manage form data
  const [members, setMembers] = useState(['']);
  const [paymentType, setPaymentType] = useState('');
  const [email, setEmail] = useState('');
  const [mobile, setMobile] = useState('');
  const [amount, setAmount] = useState('');
  const [pan, setPan] = useState('');
  const [description, setDescription] = useState('');
  const [captcha, setCaptcha] = useState(generateCaptcha());
  const [captchaInput, setCaptchaInput] = useState('');
  const [agree, setAgree] = useState(false);

  // Function to generate captcha
  function generateCaptcha() {
    const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let captcha = '';
    for (let i = 0; i < 6; i++) {
      captcha += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    return captcha;
  }

  // Function to handle form submission
  const handleSubmit = (event) => {
    event.preventDefault();
    if (captchaInput === captcha) {
      // Redirect to the transaction page with form data
      navigate('/transaction', {
        state: {
          members,
          paymentType,
          email,
          mobile,
          amount,
          pan,
          description,
          agree
        }
      });
    } else {
      alert('Captcha is incorrect. Please try again.');
      setCaptcha(generateCaptcha()); // Refresh captcha
      setCaptchaInput(''); // Clear captcha input
    }
  };

  // Function to handle adding a new member
  const addMember = () => {
    setMembers([...members, '']);
  };

  // Function to handle removing a member
  const removeMember = (index) => {
    const newMembers = members.filter((_, i) => i !== index);
    setMembers(newMembers);
  };

  // Function to handle member name change
  const handleMemberChange = (index, value) => {
    const newMembers = members.slice();
    newMembers[index] = value;
    setMembers(newMembers);
  };

  return (
    <div className="bg-yellow-100 p-10">
      <div className="max-w-md mx-auto bg-white p-6 rounded-lg shadow-lg mt-20">
        <h2 className="text-lg font-bold mb-4 text-center">DONATION FORM</h2>
        <form onSubmit={handleSubmit}>
          <div id="members">
            {members.map((member, index) => (
              <div key={index} className="mb-4 member flex items-center">
                <input
                  type="text"
                  className="block w-full mt-1 border border-gray-300 rounded-md"
                  placeholder="Full Name"
                  value={member}
                  onChange={(e) => handleMemberChange(index, e.target.value)}
                  required
                />
                {members.length > 1 && (
                  <button
                    type="button"
                    className="ml-2 bg-red-500 text-white py-1 px-2 rounded-md hover:bg-red-600"
                    onClick={() => removeMember(index)}
                  >
                    ✖
                  </button>
                )}
              </div>
            ))}
          </div>
          <div className="mb-4">
            <button
              type="button"
              className="bg-green-500 text-white py-2 px-4 rounded-md hover:bg-green-600"
              onClick={addMember}
            >
              Add Member
            </button>
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">Choose Payment Type<span className="text-red-500">*</span></label>
            <select
              className="block w-full mt-1 border border-gray-300 rounded-md"
              value={paymentType}
              onChange={(e) => setPaymentType(e.target.value)}
              required
            >
              <option value="">---Select---</option>
              <option value="credit-card">Credit Card</option>
              <option value="debit-card">Debit Card</option>
              <option value="net-banking">Net Banking</option>
              <option value="upi">UPI</option>
              <option value="wallet">Wallet</option>
            </select>
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">Email ID<span className="text-red-500">*</span></label>
            <input
              type="email"
              className="block w-full mt-1 border border-gray-300 rounded-md"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">Mobile Number<span className="text-red-500">*</span></label>
            <input
              type="tel"
              className="block w-full mt-1 border border-gray-300 rounded-md"
              placeholder="Mobile Number"
              value={mobile}
              onChange={(e) => setMobile(e.target.value)}
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">Donation Amount in INR<span className="text-red-500">*</span></label>
            <input
              type="number"
              className="block w-full mt-1 border border-gray-300 rounded-md"
              placeholder="Amount in INR"
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">PAN Number</label>
            <input
              type="text"
              className="block w-full mt-1 border border-gray-300 rounded-md"
              placeholder="PAN Number"
              value={pan}
              onChange={(e) => setPan(e.target.value)}
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">Why are you donating to the college?</label>
            <textarea
              className="block w-full mt-1 border border-gray-300 rounded-md"
              placeholder="Please share your reasons for donating..."
              rows="4"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            ></textarea>
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">Captcha: <span className="font-bold text-blue-500">{captcha}</span><span className="text-red-500">*</span></label>
            <input
              type="text"
              className="block w-full mt-1 border border-gray-300 rounded-md"
              placeholder="Enter Captcha"
              value={captchaInput}
              onChange={(e) => setCaptchaInput(e.target.value)}
              required
            />
            <button
              type="button"
              className="text-sm text-blue-500 mt-2 hover:underline"
              onClick={() => setCaptcha(generateCaptcha())}
            >
              Refresh Captcha
            </button>
          </div>
          <div className="mb-4">
            <label className="inline-flex items-center">
              <input
                type="checkbox"
                className="form-checkbox text-blue-600"
                checked={agree}
                onChange={() => setAgree(!agree)}
              />
              <span className="ml-2 text-gray-700">I agree to receive communications on this donation over WhatsApp</span>
            </label>
          </div>
          <div className="text-center">
            <button
              type="submit"
              className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600"
            >
              PROCEED
            </button>
          </div>
          <div className="mt-4 text-center">
            <span className="text-gray-700">Number of Members: <span id="memberCount">{members.length}</span></span>
          </div>
        </form>
      </div>
    </div>
  );
};

export default DonationForm;
