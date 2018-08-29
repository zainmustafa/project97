import React, { Component } from "react";

export default class NavBar extends Component {
  render() {
    return (
      <div>
        <link>Home</link>
        <link>Campuses</link>
        {/* when onClink shoudl return the list w all campuses, the component Campuses */}
        <link>Students</link>
        {/* when onClick, should return all students */}
      </div>
    );
  }
}
