import React, { Component } from "react";
import Button from "@material-ui/core/Button";
import StudentList from "../StudentList";
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
              <h2>Fast University</h2>
              <p>
                She has shown us that with hard work and determination anything
                is possible. My mother is patient and when she puts her heart on
                something, she doesn’t give up until she sees results. My mother
                runs several successful businesses and is able to juggle between
                her business and taking care of us. This is something I can only
                hope to have.
              </p>
            </div>
          </div>
          <div className="showCampus-lower">
            <div>
              <p>323 W Address St</p>
              <p>Citystate, Provence 98988</p>
            </div>
            <div className="showCampus-lower-btns">
              <Button
                onClick={() => this.props.history.push("/editCampus")}
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
          <StudentList addCampusStudent={this.props.addCampusStudent()} openModal={() => this.setState({ isModalOpen: true })} />
        </div>
      </div>
    );
  }
}

export default ShowCampus;
