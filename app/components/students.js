import React, { Component } from "react";

export default class Campuses extends Component {
  render() {
    return (
      <div>
        <h1>All Students</h1>
        <button id="add">Add Campus</button>
        <form>
          {/* 25 of these forms? */}
          <div>
            {/* may forms? */}
            <img src="student.jpg" alt="[student image]" />
            <link>
              <h3>Student Name</h3>
            </link>
            <link>
              <h3>Campus Name</h3>
            </link>
          </div>
        </form>
      </div>
    );
  }
}
