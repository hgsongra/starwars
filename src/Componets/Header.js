import React from "react";

const Header = props => {
  const { error, film } = props;
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
          {error ? (
            ""
          ) : (
            <li className='nav-item'>
              <a className='nav-link disabled' href='/' aria-disabled='true'>
                {film.title}
              </a>
            </li>
          )}
        </ul>
      </div>
    </nav>
  );
};

export default Header;
