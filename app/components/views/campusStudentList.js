import React, { Component } from "react";
import Button from "@material-ui/core/Button";
import classNames from "classnames";
import InputAdornment from "@material-ui/core/InputAdornment";
import TextField from "@material-ui/core/TextField";
import MenuItem from "@material-ui/core/MenuItem";

export default class CampusStudentList extends Component {
  constructor() {
    super();
    this.state = {};
  }
  handleChange = e => {
    let target = e.target;
    let name = target.name;
    this.setState({ [name]: target.value });
  };

  render() {
    let list = [
      { label: "abc", value: "abcd" },
      { label: "abc", value: "abcd" },
      { label: "abc", value: "abcd" },
      { label: "abc", value: "abcd" }
    ];
    return (
      <div>
        <h2>Student on Campus</h2>
        <div>
          <div className="campusStudentList-form">
            <TextField
              className="campusStudentList-form-dropdown"
              select
              label="Select student"
              value={this.state.weightRange}
              onChange={() => this.handleChange(e)}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">Kg</InputAdornment>
                )
              }}
            >
              {list.map(option => (
                <MenuItem key={option.value} value={option.value}>
                  {option.label}
                </MenuItem>
              ))}
            </TextField>
            <Button variant="contained" color="primary">
              Add to Changes
            </Button>
          </div>
          {/* <p> There are no students currently registered to this campus.</p> */}
          <div className="studentrow">
      <div className="studentrow-left">
        <div
          className="studentrow-left-img"
          style={{ backgroundImage: "url('student.jpeg')", backgroundSize: "cover", backgroundRepeat: "no-repeat" }}
        />
        <h2>Student Name</h2>
      </div>
      <div className="studentrow-right-items">
        <Button
          variant="contained"
          color="primary"
          className="studentrow-right-items-btn"
        >
          Remove From Campus
        </Button>
      </div>
    </div>
        </div>
      </div>
    );
  }
}
