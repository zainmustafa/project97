import React, { Component } from "react";
import Button from "@material-ui/core/Button";
import StudentList from "../StudentList";
import CampusList from "../CampusList";
class ShowCampus extends Component {
  constructor() {
    super();
    this.state = {};
  }

  render() {
    return (
      <div className="showCampus">
        <div className="showCampus-upper">
          <div style={{ display: "flex" }}>
            <div
              className="showCampus-upper-img"
              style={{
                backgroundImage: "url('demmy.png')"
              }}
            />
            <div className="showCampus-upper-text">
              <h2>Student Name</h2>
              <p>GPA 3.4</p>
            </div>
          </div>
          <div className="showCampus-lower">
            <div />
            <div className="showCampus-lower-btns">
              <Button
                onClick={() => this.props.history.push("/editStudent")}
                variant="contained"
                color="primary"
                className="showCampus-lower-btns-edit"
              >
                edit
              </Button>
              <Button
                variant="contained"
                color="primary"
                className="showCampus-lower-btns-delete"
              >
                delete
              </Button>
            </div>
          </div>
          <CampusList openModal={() => this.setState({ isModalOpen: true })} />
        </div>
      </div>
    );
  }
}

export default ShowCampus;
