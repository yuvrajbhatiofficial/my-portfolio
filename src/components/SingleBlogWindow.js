import React from 'react';

const SingleBlogWindow = ({ blog, onClose }) => {
  return (
    <div 
      className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50"
      onClick={onClose}
    >
      <div 
        className="bg-slate-800 p-8 rounded-lg max-w-3xl w-full max-h-[90vh] overflow-y-auto relative"
        onClick={e => e.stopPropagation()}
      >
        {/* Close Button */}
        <button 
          onClick={onClose}
          className="absolute top-0 right-0 text-white hover:text-gray-300  mb-2 p-3 text-2xl"
        >
          ×
        </button>

        {/* Blog Content */}
        <div className="mt-2">
          <img src={blog.image} alt={blog.CardTitle} className="w-full rounded-lg mb-6" />
          <div className="mb-4">
            <span className="bg-blue-700 text-white px-4 py-1 rounded text-xs font-semibold">
              {blog.date}
            </span>
          </div>
          <h2 className="text-2xl font-bold text-white mb-4">{blog.CardTitle}</h2>
          <p className="text-white leading-relaxed">
            {blog.CardDescription}
            {/* Add more content here for the full blog post */}
            <br /><br />
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor 
            incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis 
            nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
          </p>
        </div>
      </div>
    </div>
  );
};

export default SingleBlogWindow; 