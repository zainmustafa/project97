import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class NavBar extends Component {
  render() {
    return (
      <div className="navbar">
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
        </ul>
        <ul>
          <li>
            <Link to="/campuses">Campuses</Link>
          </li>
          <li>
            <Link to="/students">Students</Link>
          </li>
        </ul>
      </div>
    );
  }
}
