import React from 'react';
import '../styles/Header.scss';

const Header = () => {
  return (
    <header>
      <nav>
        <ul>
          <li>
            <a href='/#'>About me</a>
          </li>
          <li>
            <a href='/#'>Portfolio</a>
          </li>
          <li>
            <a href='/#'>Blog </a>
          </li>
          <li>
            <a href='/#'>Contact me</a>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;