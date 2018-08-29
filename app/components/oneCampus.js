import React, { Component } from "react";

export default class oneCampus extends Component {
  render() {
    return (
      <div>
        <div>
          {/* <h1>{this.campus.name</h1> */}
          {/* campus image */}
          {/* cammpus address, below the pic */}
          {/* campus description */}
          <button>edit</button>
          <button>delete</button>
        </div>
        <div>
          <h2>Students on campus</h2>
          <button id="add">>Add Students</button>
          {/* list of all students of this campus and their referencing pages. Some campuses may not have students; especially if just added */}
        </div>
      </div>
    );
  }
}
