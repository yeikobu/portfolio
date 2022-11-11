import React from 'react';
import '../styles/Project.scss';

const Project = ({ description, img, link, title}) => {
  return (
    <a href={link} className='project-container'>
      <a href={link} className="project-title">{title}</a>
      <h4 className='project-description'>{description}</h4>
      <a href={link}>
        <img src={img} alt={title} className="project-image" />
      </a>
    </a>
  );
}

export default Project;