/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';

import logo from "../../assests/logo.webp"
import Search from './Search';
const Navbar = () => {
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
  <div className="container-fluid">
    <a className="navbar-brand" href="/"><img src={logo}/></a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
    <div className="search-bar mx-auto">
      
       {/* <Search/> */}
        </div>

     
    </div>
  </div>
</nav>
        </div>
    );
};

export default Navbar;