import React, { Component } from "react";

export default class oneStudent extends Component {
  render() {
    return (
      <div>
        <div>
          {/* <h1>{this.student.firstname</h1> */}
          {/* <h1>{this.student.lastname</h1> */}
          {/* student image */}
          {/* student email */}
          {/* student gpa */}
          <button>edit</button>
          <button>delete</button>
        </div>
        <div>
          <h3>This student is regestered to a campus</h3>
          {/* campus student belongs to, with campus img, name, how many students there? */}
          {/* <select>{this.Campuses.list}</select> */}
          <button>Change Campus</button>
        </div>
      </div>
    );
  }
}
