import React from 'react';
import '../styles/About.scss';

const About = () => {
  return (
    <>
      <section className='profile-container' alt='Jacob Aguilar'>
        <aside className='resume-container' >
          <h3> Hi! I'm Jacob Aguilar👋🏼 </h3>
          <p> iOS Developer</p>
          <h1> "Solving problems by tech is my passion" </h1>
          <div className='sns-container'>
            <a href='https://twitter.com/yeikobu_'>
              <img src='https://firebasestorage.googleapis.com/v0/b/portfolio-c3ddb.appspot.com/o/about%2Ftwitter.png?alt=media&token=51852a80-d7fa-4f29-9a7d-bec97a02f9a1' className='sns-icon' alt='Jacob Aguilar Instagram' />
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
          <h3 className='about-me-title' >About me</h3>
          <p className='about-me-text'>I am a Software development student based in Santiago de Chile.
            <br />
            <br />
            Currently, I am in the process of growing as a person by studying business and finance, as well as software development and improving my soft skills on <a href='https://platzi.com/r/yeikobu'>Platzi</a>. 
            <br />
            <br />
            I have created native mobile projects for Android and iOS. I have also developed small web projects.
            <br />
            <br />
            I like inline skating, and skates become my main transportation when I'm in the city. So if I show up to a meeting sweaty, you know why.
          </p>
        </div>
      </section>
    </>
  );
}

export default About;