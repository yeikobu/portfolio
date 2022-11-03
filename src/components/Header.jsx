import React from 'react';
import '../styles/Header.scss'

const Header = () => {
  return (
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
          <a href='/#'>Reach me</a>
        </li>
      </ul>
    </nav>
  );
}

export default Header;