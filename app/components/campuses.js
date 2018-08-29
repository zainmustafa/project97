import React, { Component } from "react";

export default class Campuses extends Component {
  render() {
    return (
      <div>
        <h1>All Campuses</h1>
        <button id="add">>Add Campus</button>
        <form>
          <div>
            <img src="AltamiraBison.jpg" />
            <h3>Campus Name</h3>
            {/* {how many students, statful } */}
            <button>edit</button>
            <button>delete</button>
          </div>
        </form>
      </div>
    );
  }
}
