// src/components/NotFound.jsx
import React from 'react';

const NotFound = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 text-center p-4">
      <h1 className="text-5xl font-bold text-red-500">404</h1>
      <p className="mt-4 text-xl">Oops! The page you are looking for does not exist.</p>
      <p className="mt-2 text-lg">It might have been removed, renamed, or did not exist at all.</p>
      <a 
        href="/" 
        className="mt-6 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition duration-300"
      >
        Go Back to Home
      </a>
    </div>
  );
};

export default NotFound;
