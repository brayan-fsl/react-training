import React from 'react';
import { Link } from 'react-router-dom';

export const Header = () => {

  return (
    <header className="header">
      <div className="content-container">
        <div className="header__content">
          <Link className="header__title" to="/posts">
            <h1>Blog</h1>
          </Link>
        </div>
      </div>
    </header>
  )
}

export default Header;