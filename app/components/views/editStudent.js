import React, { Component } from "react";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";

export default class EditCampus extends Component {
  constructor() {
    super();
    this.state = {
      studentName: "",
      studentGpa: "",
      studentUrl: "",
      errors: {
        studentName: {
          text: "Student Name CAN NOT be blank",
          error: false
        },
        studentGpa: {
          text: "GPA must be a number between 0.0 and 4.0",
          error: false
        },
        studentUrl: {
          text: "Student URL CAN NOT be blank",
          error: false
        }
      }
    };
  }

  handleChange = e => {
    let target = e.target;
    let name = target.name;
    this.setState({ [name]: target.value });
  };

  handleSave = e => {
    const { studentName, studentUrl, errors } = this.state;
    const studentGpa = parseFloat(this.state.studentGpa);

    if (studentName.length < 1) errors.studentName.error = true;
    else errors.studentName.error = false;

    if (studentGpa < 0.0 || studentGpa > 4.0) errors.studentGpa.error = true;
    else errors.studentGpa.error = false;

    if (studentUrl.length < 1) errors.studentUrl.error = true;
    else errors.studentUrl.error = false;

    this.setState({ errors });
  };

  render() {
    const { errors } = this.state;

    return (
      <div>
        <div className="editCampus">
          <form noValidate autoComplete="off">
            <div className="editCampus-p">
              Student Name:
              <TextField
                id="name"
                value={this.state.studentName}
                name="studentName"
                onChange={e => this.handleChange(e)}
                margin="normal"
                fullWidth
                error={errors.studentName.error}
              />
              <span className="form-error-text">
                {errors.studentName.error ? errors.studentName.text : null}
              </span>
            </div>
            <div className="editCampus-p">
              GPA:
              <TextField
                id="name"
                value={this.state.studentGpa}
                name="studentGpa"
                onChange={e => this.handleChange(e)}
                margin="normal"
                type="number"
                fullWidth
                error={errors.studentGpa.error}
              />
              <span className="form-error-text">
                {errors.studentGpa.error ? errors.studentGpa.text : null}
              </span>
            </div>
            <div className="editCampus-p">
              Student URL:
              <TextField
                id="name"
                value={this.state.studentUrl}
                name="studentUrl"
                onChange={e => this.handleChange(e)}
                margin="normal"
                fullWidth
                error={errors.studentUrl.error}
              />
              <span className="form-error-text">
                {errors.studentUrl.error ? errors.studentUrl.text : null}
              </span>
            </div>
            <Button
              variant="contained"
              color="primary"
              onClick={this.handleSave}
            >
              Save Changes
            </Button>
          </form>
        </div>
      </div>
    );
  }
}
