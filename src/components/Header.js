import React, { useState } from "react";
import Navbar from "./Navbar";
import FadeLoader from "react-spinners/FadeLoader";
function Header(props) {
  const [state, setState] = useState("");
  const handleChange = (e) => {
    const value = e.target.value;
    setState(value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    props.onLoad();
    props.shrinkUrl(state);
    setState("");
  };
  return (
    <>
      <Navbar />
      <form className='header' onSubmit={handleSubmit}>
        <input
          type='text'
          className='input'
          onChange={handleChange}
          value={state}
          placeholder='Paste URL...
          '
        />
        {props.loading ? (
          <FadeLoader />
        ) : (
          <input type='submit' className='submit' value='Shrink' />
        )}
      </form>
    </>
  );
}

export default Header;
