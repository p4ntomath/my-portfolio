import React from 'react';
import Book from './components/Book';
import '../App.css';

function Projects() {
    return (
      <div className="container">
        {/* Top instruction - positioned with enough margin to clear book */}
        <div className="absolute top-[30px] left-1/2 transform -translate-x-1/2 z-20">
          <div className="bg-white/90 backdrop-blur-sm rounded-lg px-3 py-1.5 shadow-lg border border-gray-200">
            <p className="text-xs font-medium text-gray-700 text-center whitespace-nowrap">📖 My Projects</p>
            <p className="text-xs text-gray-600 text-center mt-1">Explore my development projects and tech stack</p>
          </div>
        </div>

        <Book />
      </div>
    );
  }
export default Projects;