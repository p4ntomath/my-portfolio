import HTMLFlipBook from "react-pageflip";
import '../../App.css';
import bookCoverImage from '../../assets/bookCover.png';

function Book() {

  const projectsData = [
    {
      id: "1",
      name: "DropsTo",
      technologies: ["React.js", "Node.js", "Express.js", "MongoDB"],
      description: "A secure and user-friendly file sharing platform that enables users to upload, share, and manage files efficiently. Features include drag-and-drop uploads, secure file sharing via links, file expiration settings, and real-time upload progress tracking for seamless file management.",
      image: "https://images.unsplash.com/photo-1544377193-33dcf4d68fb5?w=400&h=250&fit=crop&crop=faces",
      liveLink: "https://dropsto.app/"
    },
    {
      id: "2",
      name: "mycoverletter",
      technologies: ["Next.js", "TypeScript", "Tailwind CSS", "AI API"],
      description: "An innovative web application that leverages artificial intelligence to help job seekers create compelling, personalized cover letters. Users input their details and job descriptions, and the AI generates professional, tailored cover letters that highlight relevant skills and experiences for specific positions.",
      image: "https://images.unsplash.com/photo-1586281380349-632531db7ed4?w=400&h=250&fit=crop&crop=faces",
      liveLink: "https://mycoverletter.tech/"
    },
    {
      id: "3",
      name: "University Research Collaboration Platform",
      technologies: ["React.js", "Tailwind CSS", "Firebase"],
      description: "A comprehensive web-based research collaboration platform that enables university researchers to connect, collaborate, and manage their research projects effectively. Features include project discovery, team collaboration tools, funding tracking, and peer review processes for academic research enhancement.",
      image: "https://images.unsplash.com/photo-1551434678-e076c223a692?w=400&h=250&fit=crop&crop=faces",
      liveLink: "https://re-search.azurewebsites.net/"
    },
    {
      id: "4",
      name: "Personal Portfolio Website",
      technologies: ["React.js", "Tailwind CSS", "JavaScript", "Vite"],
      description: "A modern and interactive personal portfolio website showcasing professional experience, projects, and skills. Built with responsive design principles and engaging animations to create an immersive user experience that effectively presents professional capabilities and achievements.",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&h=250&fit=crop&crop=faces",
      liveLink: "https://mahlatse-rabothata.me/"
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