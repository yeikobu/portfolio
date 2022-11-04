import React, {useState, useEffect} from 'react';
import {db} from '../firebase/config'
import {collection, getDocs} from 'firebase/firestore';
import Project from './Project';
import '../styles/Portfolio.scss';
import { toBeInTheDocument } from '@testing-library/jest-dom/dist/matchers';

const Portfolio = () => {

  const [projects, setProjects] = useState([]);

  const fetchProjects = async () => {
    await getDocs(collection(db, 'projects'))
    .then((querySnapshot) => {
      const newData = querySnapshot.docs.map((doc) => ({...doc.data(), id:doc.id}));
      setProjects(newData);
      console.log(projects, newData);
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

          <div className='projects-container'>
            {
              projects.map((project, i) => (
                <Project key={i} description={project.description} img={project.img} link={project.link} title={project.title} />
              ))
            }
          </div>
          
        </div>
      </div>
    </>
  );
}

export default Portfolio;