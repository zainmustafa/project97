import React, { Component } from "react";
import Button from "@material-ui/core/Button";
import StudentList from "../StudentList";
class ShowCampus extends Component {
  constructor() {
    super();
    this.state = {};
  }

  deleteCampus = (id) => {
    this.props.history.push("/");
    this.props.deleteCampus(id);
  };

  render() {
    const { name, address, description, id } = this.props.location.state.campus;
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
              <h2>{name || ""}</h2>
              <p>{description || ""}</p>
            </div>
          </div>
          <div className="showCampus-lower">
            <div>
              <p>{address}</p>
            </div>
            <div className="showCampus-lower-btns">
              <Button
                onClick={() =>
                  this.props.history.push("/editCampus", {
                    campus: this.props.location.state.campus
                  })
                }
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
                onClick={() => this.deleteCampus(id)}
              >
                delete
              </Button>
            </div>
          </div>
          <StudentList
            addCampusStudent={() => this.props.addCampusStudent()}
            openModal={() => this.setState({ isModalOpen: true })}
          />
        </div>
      </div>
    );
  }
}

export default ShowCampus;
