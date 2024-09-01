import React from 'react';

const Event = () => {
  return (
    <>
      {/* Header Section */}
      <div
        className="relative bg-cover bg-center h-64"
        style={{ backgroundImage: 'url("path/to/your/background-image.jpg")' }}
      >
        <div className="absolute inset-0 bg-black opacity-60"></div>
        <div className="relative z-10 flex flex-col items-center justify-center h-full text-white text-center">
          <h1 className="text-2xl font-bold">Programs & Events</h1>
          <p className="text-base mt-2">
            Engage with the worldwide community of Harvard alumni wherever you
            are—on campus, online, and in your region—through programs and events.
          </p>
          <div className="mt-4 space-x-2">
            <a
              href="#"
              className="px-3 py-1.5 bg-blue-600 hover:bg-blue-700 text-white rounded text-sm"
            >
              View All Events
            </a>
            <a
              href="#"
              className="px-3 py-1.5 bg-blue-600 hover:bg-blue-700 text-white rounded text-sm"
            >
              View Virtual Events
            </a>
          </div>
        </div>
      </div>

      {/* Main Content Section */}
      <div className="container mx-auto px-4 py-8 flex flex-wrap">
        {/* Sidebar */}
        <div className="w-full md:w-1/4 bg-white p-4 rounded-lg shadow-md mb-6 md:mb-0">
          <ul className="space-y-2">
            <li>
              <a href="#" className="text-blue-600 hover:underline text-sm">
                All Events
              </a>
            </li>
            <li>
              <a href="#" className="text-blue-600 hover:underline text-sm">
                Featured Programs
              </a>
            </li>
            <li>
              <a href="#" className="text-blue-600 hover:underline text-sm">
                Online Learning
              </a>
            </li>
          </ul>
        </div>

        {/* Events Section */}
        <div className="w-full md:w-3/4 md:pl-6">
          {/* Filters and Info */}
          <div className="mb-6">
            <h2 className="text-xl font-bold mt-4">Upcoming Events</h2>

            {/* Search and Filter */}
            <div className="flex items-center mt-4">
              <input
                type="text"
                placeholder="Search"
                className="border border-gray-300 rounded p-2 mr-4 w-full md:w-auto text-sm"
              />
              <select className="border border-gray-300 rounded p-2 mr-4 text-sm">
                <option>- Any -</option>
                <option>Arts</option>
                <option>Athletics</option>
                <option>Virtual</option>
              </select>
              <button
                className="px-3 py-1.5 bg-blue-600 hover:bg-blue-700 text-white rounded text-sm"
              >
                Apply
              </button>
            </div>
          </div>

          {/* Event 1 */}
          <div className="flex mb-6 items-center">
            <div className="w-16 text-center mr-4">
              <p className="text-base font-bold text-gray-800">SEP</p>
              <p className="text-xl font-bold text-gray-800">01</p>
            </div>
            <div className="flex-grow">
              <span className="text-gray-500 text-xs uppercase">Arts, Athletics, Virtual</span>
              <h3 className="text-base font-semibold mt-1">
                Discover the Power of Shakti Breath and DMT Breathing
              </h3>
            </div>
            <img
              src="path/to/image1.jpg"
              alt="Event Image"
              className="w-12 h-12 rounded-full"
            />
          </div>

          {/* Event 2 */}
          <div className="flex mb-6 items-center">
            <div className="w-16 text-center mr-4">
              <p className="text-base font-bold text-gray-800">SEP</p>
              <p className="text-xl font-bold text-gray-800">03</p>
            </div>
            <div className="flex-grow">
              <span className="text-gray-500 text-xs uppercase">Virtual</span>
              <h3 className="text-base font-semibold mt-1">
                SIG: Successful Aging – monthly group for Young and Old — and In-Between!
              </h3>
              <p className="text-xs text-gray-700">
                The Harvard Club of San Francisco
              </p>
            </div>
            <img
              src="path/to/image2.jpg"
              alt="Event Image"
              className="w-12 h-12 rounded-full"
            />
          </div>

          {/* Add more events here */}
        </div>
      </div>
    </>
  );
};

export default Event;
