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
          Campus Address{" "}
          <input
            type="text"
            name="campusAddress"
            value="campusAddress"
            placeholder="enter Campus Address"
          />
          <imput type="submit" name="addCampus" value="Submit" />
          {/* line 84 onSubmit should: Make an AJAX request that causes the new campus to be persisted in the database */}
          {/* line 85 Add the new campus to the list of campuses without needing to refresh the page */}
        </form>
      </div>
    );
  }
}
