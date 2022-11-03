import React from 'react';
import '../styles/Portfolio.scss';

const Portfolio = ({ projectTitle, projectDescription, projectImg, projectLink }) => {
  return (
    <>
      <div className='portfolio'>
        <section className='portfolio-container'>
          <h3>My Recent Work</h3>

          <div className='projects-container'>
            <div className='project-container'>
              <a href="https://github.com/J-kobu/MyEasyCryptoManager" className="project-title">My Easy Crypto Manager</a>
              <h4 className='project-description'> A Crypto asset tracker/manager app. Created using Swift, SwiftUI, Rest API and Core Haptics to access the haptics engine.</h4>
              <a href="https://github.com/J-kobu/MyEasyCryptoManager">
                <img src="https://media.giphy.com/media/2mKfZnSqtfA9ZQQBuk/giphy.gif" alt="My easy crypto manager" className="project-image" />
              </a>
            </div>


            <div className='project-container'>
              <a href="https://github.com/J-kobu/MyEasyCryptoManager" className="project-title">My Easy Crypto Manager</a>
              <h4 className='project-description'> A Crypto asset tracker/manager app. Created using Swift, SwiftUI, Rest API and Core Haptics to access the haptics engine.</h4>
              <a href="https://github.com/J-kobu/MyEasyCryptoManager">
                <img src="https://media.giphy.com/media/2mKfZnSqtfA9ZQQBuk/giphy.gif" alt="My easy crypto manager" className="project-image" />
              </a>
            </div>

            <div className='project-container'>
              <a href="https://github.com/J-kobu/MyEasyCryptoManager" className="project-title">My Easy Crypto Manager</a>
              <h4 className='project-description'> A Crypto asset tracker/manager app. Created using Swift, SwiftUI, Rest API and Core Haptics to access the haptics engine.</h4>
              <a href="https://github.com/J-kobu/MyEasyCryptoManager">
                <img src="https://media.giphy.com/media/2mKfZnSqtfA9ZQQBuk/giphy.gif" alt="My easy crypto manager" className="project-image" />
              </a>
            </div>

            <div className='project-container'>
              <a href="https://github.com/J-kobu/MyEasyCryptoManager" className="project-title">My Easy Crypto Manager</a>
              <h4 className='project-description'> A Crypto asset tracker/manager app. Created using Swift, SwiftUI, Rest API and Core Haptics to access the haptics engine.</h4>
              <a href="https://github.com/J-kobu/MyEasyCryptoManager">
                <img src="https://media.giphy.com/media/2mKfZnSqtfA9ZQQBuk/giphy.gif" alt="My easy crypto manager" className="project-image" />
              </a>
            </div>
          </div>

        </section>
      </div>
    </>
  );
}

export default Portfolio;