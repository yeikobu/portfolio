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
              <img src='https://firebasestorage.googleapis.com/v0/b/portfolio-c3ddb.appspot.com/o/about%2Finstagram.png?alt=media&token=f8f330d2-7dea-409b-ade5-09521bf6b0b4' className='sns-icon' alt='Jacob Aguilar Instagram' />
            </a>
            <a href="https://www.linkedin.com/in/jacob-aguilar-campos-4b3406a4/">
              <img src='https://firebasestorage.googleapis.com/v0/b/portfolio-c3ddb.appspot.com/o/about%2Flinkedin.png?alt=media&token=91eeb5ce-0d6a-4537-94d1-4dc3284a1ae8' className='sns-icon' alt='Jacob Aguilar Likedin' />
            </a>
            <a href="https://github.com/J-kobu/">
              <img src='https://firebasestorage.googleapis.com/v0/b/portfolio-c3ddb.appspot.com/o/about%2Fgithub.png?alt=media&token=034c09cc-d4b2-4cb7-a2fa-aad751051f08' className='sns-icon' alt='Jacob Aguilar Github' />
            </a>
          </div>
        </aside>
        <aside>
          <img src='https://firebasestorage.googleapis.com/v0/b/portfolio-c3ddb.appspot.com/o/about%2Fprofile-pic.png?alt=media&token=461cc54f-1fca-4dc4-b42a-af9cec4b1c26' alt='Jacob Aguilar' className='profile-image' />
        </aside>
      </section>
      <section>
        <div className='about-me'>
          <h3 className='about-me-title' > About me</h3>
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