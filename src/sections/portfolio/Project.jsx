import React from 'react';
import Card from '../../components/Card'; // Ensure the correct path to the Card component

const Project = ({ project }) => {
  return (
    <Card className="portfolio__project">
      
      <h4>{project.title}</h4>
      <p>{project.desc}</p>
      <div className="portfolio__project-cta">
        <a
          href={project.github}
          className="btn sm primary"
          target="_blank"
          rel="noopener noreferrer"
        >
          GitHub
        </a>
      </div>
    </Card>
  );
};

export default Project;
