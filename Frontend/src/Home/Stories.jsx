import React from 'react';

const Stories = () => {
  return (
    <>
      {/* Header Section */}
      <div
        className="relative bg-cover bg-center h-72"
        style={{ backgroundImage: 'url("path/to/your/background-image.jpg")' }}
      >
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="relative z-10 flex flex-col items-center justify-center h-full text-white text-center">
          <h1 className="text-4xl font-bold">Stories</h1>
          <p className="text-lg mt-2">
            Stay up to date with what's happening at Harvard and within the
            Harvard alumni community.
          </p>
          <a
            href="#"
            className="mt-4 px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded"
          >
            Read Stories from the Harvard Gazette
          </a>
        </div>
      </div>

      {/* Main Content Section */}
      <div className="min-h-screen flex items-center justify-center bg-gray-100">
        <div className="w-full max-w-4xl px-4 py-8">
          {/* Stories Section */}
          <div className="space-y-6">
            {/* Story 1 */}
            <div className="flex mb-6">
              <img
                src="path/to/image1.jpg"
                alt="Story Image"
                className="w-1/3 h-32 object-cover rounded-lg mr-4"
              />
              <div>
                <span className="text-gray-500 text-sm block mb-1">
                  August 27, 2024
                </span>
                <span className="text-blue-500 text-sm uppercase block mb-2">
                  Campus & Community
                </span>
                <h3 className="text-xl font-semibold mb-2">
                  Engaging Across Differences
                </h3>
                <p className="text-sm text-gray-700">
                  Shira Hoffer '25 founded a nonprofit aimed at promoting
                  open-mindedness and active listening, improving community
                  dynamics, and helping students build skills that will serve them
                  for life.
                </p>
              </div>
            </div>

            {/* Story 2 */}
            <div className="flex mb-6">
              <img
                src="path/to/image2.jpg"
                alt="Story Image"
                className="w-1/3 h-32 object-cover rounded-lg mr-4"
              />
              <div>
                <span className="text-gray-500 text-sm block mb-1">
                  August 26, 2024
                </span>
                <span className="text-blue-500 text-sm uppercase block mb-2">
                  Campus & Community
                </span>
                <h3 className="text-xl font-semibold mb-2">
                  Harvard Is Up to the Challenge
                </h3>
                <p className="text-sm text-gray-700">
                  With the start of the fall semester, President Alan M. Garber AB
                  '77, PhD '82 discusses the challenges and opportunities ahead.
                </p>
              </div>
            </div>

            {/* Story 3 */}
            <div className="flex mb-6">
              <img
                src="path/to/image3.jpg"
                alt="Story Image"
                className="w-1/3 h-32 object-cover rounded-lg mr-4"
              />
              <div>
                <span className="text-gray-500 text-sm block mb-1">
                  August 23, 2024
                </span>
                <span className="text-blue-500 text-sm uppercase block mb-2">
                  Science & Health
                </span>
                <h3 className="text-xl font-semibold mb-2">
                  A New Era in Biomedical Research
                </h3>
                <p className="text-sm text-gray-700">
                  Harvard scientists have made groundbreaking discoveries in the
                  field of biomedical research, paving the way for new treatments
                  and therapies.
                </p>
              </div>
            </div>

            {/* Add more stories here */}
          </div>
        </div>
      </div>
    </>
  );
};

export default Stories;
