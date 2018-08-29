import React, { Component } from "react";

export default class addNewCampus extends Component {
  render() {
    return (
      <div>
        <h1>New Campus Form</h1>
        {/* <navbar />  attach everywhere or keep it fixed?*/}
        <form action="">
          Campus Name{" "}
          <input
            type="text"
            name="campusName"
            value="campusName"
            placeholder="enter Campus Name"
          />
          <imput type="submit" name="addCampus" value="Submit" />
        </form>
      </div>
    );
  }
}
