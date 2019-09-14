import React from "react";

function Header() {
  return (
    <nav className='navbar navbar-expand-lg navbar-light bg-light'>
      <a className='navbar-brand' href='/'>
        Star Wars
      </a>
      <div className='collapse navbar-collapse' id='navbarSupportedContent'>
        <ul className='navbar-nav mr-auto'>
          <li className='nav-item active'>
            <a className='nav-link' href='/'>
              Home <span className='sr-only'>(current)</span>
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Header;
