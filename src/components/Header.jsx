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
          <a href='/#' className='btn-portfolio'> Portfolio</a>
          <div className='menu-content'>
            <a href='/#'>About me</a>
            <a href='/#'>My recent work</a>
            <a href='/#'>What I know in</a>
          </div>
        </div>
        <a href='/#'>Blog </a>
        <a href='/#' onClick={() => {setModalToggle(true)}}>Contact me</a>
      </nav>
    </header>
  );
}

export default Header;