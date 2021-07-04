import React from "react";

import { Link } from "react-router-dom";
function Navbar() {
  return (
    <header className='navbar'>
      <h1>URL SHORTENER</h1>
      <div>
        <Link to='/'>
          <button className='home'>Home</button>
        </Link>{" "}
        |{" "}
        <Link to='/about'>
          <button className='about'>About</button>
        </Link>
      </div>
    </header>
  );
}

export default Navbar;
