import React, { useState, useEffect } from 'react'
import HTMLFlipBook from "react-pageflip";
import '../../App.css';
import bookCoverImage from '../../assets/bookCover.png';

function Book() {

  const projectsData = [
    {
      id: "1",
      name: "University Research Collaboration Platform",
      technologies: ["React.js", "Tailwind", "Firebase"],
      description: "web-based research collaboration platform that enables university researchers to connect, collaborate, and manage their research projects effectively. The platform facilitates project discovery, team collaboration, funding tracking, and peer review processes.",
      image: "https://images.unsplash.com/photo-1551434678-e076c223a692?w=400&h=250&fit=crop&crop=faces",
      liveLink: "https://re-search.azurewebsites.net"
    },
    {
      id: "2",
      name: "Wits Parking App",
      technologies: ["Java", "Android Studio", "PHP", "MySQL"],
      description: "this solution addresses the chronic parking scarcity on campus through an intelligent parking management system. The MVP features real-time spot tracking where users log their parking location (including lot/spot numbers with staff/student restrictions) and update availability upon departure, while the enhancement layer introduces reservation capabilities optimized by destination proximity and time duration",
      image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&h=250&fit=crop&crop=faces",
      liveLink: "https://drive.google.com/file/d/1u9WwJhZS1B8NULRGXBsSCtHZ_Lvr4zQp/view?usp=drive_link"
    },
    {
      id: "3",
      name: "67 Volunteer Platform",
      technologies: ["Flutter", "AWS"],
      description: "A comprehensive Flutter application that bridges the gap between passionate volunteers and impactful non-profit organizations. The platform streamlines volunteer discovery by matching users with opportunities that align with their skills, interests, and availability while helping them gain valuable experience and build meaningful connections. the app creates an ecosystem where volunteers can easily find, apply for, and track their community service initiatives.",
      image: "https://images.unsplash.com/photo-1559027615-cd4628902d4a?w=400&h=250&fit=crop&crop=faces",
      liveLink : "https://github.com/p4ntomath/Sixty7Flutter"
    },
    {
      id: "4",
      name: "myBible App",
      technologies: ["Flutter", "Spotify API", "Bible API"],
      description: "a spiritually enriching mobile app designed to deepen daily faith practices through curated content and modern technology. the app delivers an inspirational Bible Verse of the Day and Gospel Song of the Day, along with personalized scripture and music recommendations. By blending intuitive design with meaningful spiritual resources, it creates a seamless digital sanctuary that nurtures devotion and connection through both scripture and song",
      image: "https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=400&h=250&fit=crop&crop=faces",
      liveLink: "https://drive.google.com/file/d/1A8fWp80j4eYT_t1U3kJvVKxyrxGZarNu/view?usp=drive_link"
    }
  ];

  return (
    <HTMLFlipBook 
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
          <div className="page-content project-page">
            <div className="project-header">
              <h2 className="project-title">{project.name}</h2>
              <span className="project-id">{project.id}</span>
            </div>
            <div className="project-image-container">
              <img 
                src={project.image} 
                alt={project.name}
                className="project-image"
              />
            </div>
            
            <div className="project-details">
              <div className="tech-stack">
                {project.technologies.map((tech, index) => (
                  <span key={index} className="tech-badge">
                    {tech}
                  </span>
                ))}
              </div>
              
              <p className="project-desc">{project.description}</p>
              
              {project.liveLink && (
                <a 
                  href={project.liveLink} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="live-link-btn to-blue-400"
                >
                  [view/download]
                </a>
              )}
            </div>
          </div>
        </div>
      ))}

      <div className="page" style={{ background: 'transparent' }}>
        <div className="page-content cover">
        </div>
      </div>
    </HTMLFlipBook>
  );
}

export default Book