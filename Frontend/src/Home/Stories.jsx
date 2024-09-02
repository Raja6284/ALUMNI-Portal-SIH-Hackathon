import React from 'react';
import { Link } from 'react-router-dom';
import { useStories } from '../contexts/StoryContext';

const Stories = () => {
  const { stories } = useStories();

  return (
    <>
      <div className="pt-20 z-20">
        <div
          className="relative bg-cover bg-center h-72"
          style={{ backgroundImage: 'url("path/to/your/background-image.jpg")' }}
        >
          <div className="absolute inset-0 bg-black opacity-50"></div>
          <div className="relative z-1 flex flex-col items-center justify-center h-full text-white text-center">
            <h1 className="text-4xl font-bold">Stories</h1>
            <p className="text-lg mt-2">
              Stay up to date with what's happening at Harvard and within the
              Harvard alumni community.
            </p>
          </div>
        </div>

        <div className="text-center mt-8">
          <Link
            to="/storyform"
            className="inline-block px-4 py-2 bg-green-600 hover:bg-green-700 text-white rounded"
          >
            Create a New Story
          </Link>
        </div>

        <div className="min-h-screen flex items-center justify-center bg-gray-100">
          <div className="w-full max-w-4xl px-4 py-8">
            <div className="space-y-6">
              {stories.map((story, index) => (
                <div key={index} className="flex mb-6">
                  <img
                    src={story.image || 'path/to/default/image.jpg'} // Use default image if none is provided
                    alt="Story Image"
                    className="w-1/3 h-32 object-cover rounded-lg mr-4"
                  />
                  <div>
                    <span className="text-gray-500 text-sm block mb-1">{story.date}</span>
                    <span className="text-blue-500 text-sm uppercase block mb-2">{story.category}</span>
                    <h3 className="text-xl font-semibold mb-2">{story.title}</h3>
                    <p className="text-sm text-gray-700">{story.content}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Stories;
