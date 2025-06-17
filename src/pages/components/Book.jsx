import React, { useState, useEffect } from 'react'
import HTMLFlipBook from "react-pageflip";
import '../../App.css';
import bookCoverImage from '../../assets/bookCover.jpg';

function Book() {

  const projectsData = [
    {
      id: "001",
      name: "University Research Collaboration Platform",
      technologies: ["React.js", "Tailwind", "Firebase"],
      description: "A comprehensive web-based research collaboration platform that enables university researchers to connect, collaborate, and manage their research projects effectively. The platform facilitates project discovery, team collaboration, funding tracking, and peer review processes."
    },
    {
      id: "002",
      name: "Wits Parking App",
      technologies: ["Java", "Android Studio", "PHP", "MySQL"],
      description: "An Android app that makes finding parking and locating them easy. Includes booking ahead and search parking based on destinations to help university students and staff find convenient parking spots."
    },
    {
      id: "003",
      name: "67 Volunteer Platform",
      technologies: ["Flutter", "AWS"],
      description: "A Flutter application that helps promote opportunities for volunteers to volunteer for non-profit organizations while gaining experience. This was designed to help reduce unemployment by connecting people with meaningful volunteer work."
    },
    {
      id: "004",
      name: "myBible App",
      technologies: ["Flutter", "Spotify API", "Bible API"],
      description: "A Bible app that combines Bible reading with gospel music recommendations and daily Bible verses. Provides users with a comprehensive spiritual experience through integrated scripture and music."
    }
  ];

  return (
    <HTMLFlipBook 
        minWidth={200}
        minHeight={300}
      width={350} 
      height={500}
      maxShadowOpacity={0.5}
      drawShadow={true}
      showCover={true}
        size='fixed'
    >
      <div className="page" style={{ background: 'transparent' }}>
        <div className="page-content cover">
          <img 
            src={bookCoverImage} 
            alt="Projects Portfolio Cover" 
            className="book-cover-image"
          />
        </div>
      </div>

      {projectsData.map((project) => (
        <div className="page" key={project.id}>
          <div className="page-content">
            <div className="project-container">
              <div className="project-info">
                <h2 className="project-name">{project.name}</h2>
                <p className="project-number">Project #{project.id}</p>
                <div className="technologies">
                  {project.technologies.map((tech) => (
                    <span key={tech} className="project-tech">
                      {tech}
                    </span>
                  ))}
                </div>
                <p className="project-description">{project.description}</p>
              </div>
            </div>
          </div>
        </div>
      ))}

      <div className="page" style={{ background: 'transparent' }}>
        <div className="page-content cover">
          <h2 className="back-cover-title">Thank You!</h2>
          <p className="back-cover-text">For viewing my projects</p>
          <p className="back-cover-contact">Let's connect and build something amazing together</p>
        </div>
      </div>
    </HTMLFlipBook>
  );
}

export default Book