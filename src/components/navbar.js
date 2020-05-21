import React from "react";

export default function Navbar() {
  
  return (
    <nav>
      <a href="">BELIEVE</a>
      <input id="menu" name="menu" type="checkbox" />
      <label className="navicon" htmlFor="menu">
        <span></span>
        <span></span>
        <span></span>
      </label>
      <ul className="navlist">
        <li><a href="">APPS</a></li>
        <li><a href="">QUALITY</a></li>
        <li><a href="">DATASCIENCE</a></li>
        <li><a href="">WEB</a></li>
      </ul>
    </nav>
  )
}