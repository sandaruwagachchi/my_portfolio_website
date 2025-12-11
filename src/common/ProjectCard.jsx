import React from 'react';

function ProjectCard({ src, link, h3, p }) {
  return (
    <a href={link} target="_blank" style={{
      animation: 'fadeInUp 0.6s ease-out',
      display: 'block'
    }}>
      <img className="hover" src={src} alt={`${h3} logo`} />
      <h3>{h3}</h3>
      <p>{p}</p>
    </a>
  );
}

export default ProjectCard;
