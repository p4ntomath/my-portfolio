import React from 'react';
import Book from './components/Book';
import '../App.css';

function Projects() {
    return (
      <div className="w-full flex flex-col items-center justify-center gap-2 md:gap-4 py-2 md:py-4 min-h-0">
        {/* Top instruction row */}
        <div className="flex justify-center flex-shrink-0">
          <div className="bg-white/90 backdrop-blur-sm rounded-lg px-3 py-1.5 shadow-lg border border-gray-200">
            <p className="text-xs font-medium text-gray-700 text-center whitespace-nowrap">📖 My Projects</p>
            <p className="text-xs text-gray-600 text-center mt-1">Explore my development projects and tech stack</p>
          </div>
        </div>

        {/* Book row */}
        <div className="flex justify-center items-center w-full px-2 md:px-4">
          <Book />
        </div>
      </div>
    );
  }
export default Projects;