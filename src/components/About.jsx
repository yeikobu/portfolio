import React from 'react';
import '../styles/About.scss';

const About = () => {
  return (
    <>
      <section className='profile-container'>
        <aside className='resume-container' >
          <h3> Hi! I'm Jacob 👋🏼</h3>
          <p> Software developer</p>
          <h1> "Solving problems by tech is my passion" </h1>
          <div className='sns-container'>
            <a href='https://www.instagram.com/dev.swift.jacob/'>
              <img src={require(`../images/sns/instagram.png`)} className='sns-icon' alt='instagram icon' />
            </a>
            <a href="https://www.linkedin.com/in/jacob-aguilar-campos-4b3406a4/">
              <img src={require(`../images/sns/linkedin.png`)} className='sns-icon' alt='linkedin icon' />
            </a>
            <a href="https://github.com/J-kobu/">
              <img src={require(`../images/sns/github.png`)} className='sns-icon' alt='github icon' />
            </a>
          </div>
        </aside>
        <aside>
          <img src={require(`../images/profile-pic.png`)} alt='Pic of jacob' className='profile-image' />
        </aside>
      </section>
      <section>
        <div className='about-me'>
          <h3 className='about-me-title'> About me</h3>
          <p className='about-me-text'>I'm a Software Engineer student based in Santiago, Chile.
            Since 2020 I started to learn programming at university.
            At present, I provide solutions with Swift and Javascript to many clients arround the world. 
            <br />
            <br />
            Now I'm a Student on<a href='https://platzi.com/r/j-kobu'>Platzi</a>
          </p>
        </div>
      </section>
    </>
  );
}

export default About;