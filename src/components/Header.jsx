import React from 'react';
import '../styles/Header.scss';

const Header = ( {setModalToggle} ) => {

  return (
    <header>
      <div className='logo-container'>
        <a href="/#" className='jacob-logo-link'>
          <img src={require(`../images/jacobaguilar.png`)} alt="Jacob aguilar's logo" className='logo' />
        </a>
      </div>
      <nav>
        <div className='dropdown-menu'>
          <a href='/' className='btn-portfolio'> Portfolio</a>
          <div className='menu-content'>
            <a href='#about-me'>About me</a>
            <a href='#portfolio'>My recent work</a>
            <a href='#knowledge'>What I know in</a>
          </div>
        </div>
        <a href='/' className='blog'> </a>
        {/* <a href='/#' onClick={() => {setModalToggle(true)}}>Contact me</a> */}
        <p onClick={() => {setModalToggle(true)}}>Contact me</p>
      </nav>
    </header>
  );
}

export default Header;