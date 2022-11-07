import { collection, getDocs } from 'firebase/firestore';
import React, { useEffect, useState } from 'react';
import { db } from '../firebase/config';
import '../styles/Portfolio.scss';
import Project from './Project';

const Portfolio = () => {

  const [projects, setProjects] = useState([]);

  const mobileProjects = projects.filter(project => project.category === 'mobile');
  const webProjects = projects.filter(project => project.category === 'web');

  const fetchProjects = async () => {
    await getDocs(collection(db, 'projects'))
      .then((querySnapshot) => {
        const newData = querySnapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id }));
        const sortedData = newData.sort().reverse();
        setProjects(sortedData);
      })
  }

  useEffect(() => {
    fetchProjects();
  }, [])

  return (
    <>
      <div className='portfolio'>
        <div className='portfolio-container'>
          <h3>My Recent Work</h3>
          <div>
            <h5>Mobile Projects</h5>
            <div className='projects-container'>
              {
                mobileProjects.map((project, i) => (
                  <Project key={i} description={project.description} img={project.img} link={project.link} title={project.title} />
                ))
              }
            </div>
          </div>
          <div>
            <h5>Web Projects</h5>
            <div className='projects-container'>
              {
                webProjects.map((project, i) => (
                  <Project key={i} description={project.description} img={project.img} link={project.link} title={project.title} />
                ))
              }
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Portfolio;