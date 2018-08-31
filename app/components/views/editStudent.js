import React, { Component } from "react";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";

export default class EditCampus extends Component {
  constructor() {
    super();
    this.state = {
      name: "",
      gpa: "",
      imageUrl: "",
      errors: {
        name: {
          text: "Student Name CAN NOT be blank",
          error: false
        },
        gpa: {
          text: "GPA must be a number between 0.0 and 4.0",
          error: false
        },
        imageUrl: {
          text: "Student URL CAN NOT be blank",
          error: false
        }
      }
    };
  }
  componentDidMount() {
    const {
      name,
      email,
      id,
      imageUrl,
      gpa
    } = this.props.location.state.student;
    this.setState({
      name,
      email,
      id,
      gpa
    });
  }

  handleChange = e => {
    let target = e.target;
    let name = target.name;
    this.setState({ [name]: target.value });
  };

  handleSave = e => {
    const { name, imageUrl, errors, id } = this.state;
    const gpa = parseFloat(this.state.gpa);

    if (name.length < 1) errors.name.error = true;
    else errors.name.error = false;

    if (gpa < 0.0 || gpa > 4.0) errors.gpa.error = true;
    else errors.gpa.error = false;

    if (imageUrl.length < 1) errors.imageUrl.error = true;
    else errors.imageUrl.error = false;

    this.setState({ errors });
    if (!errors.name.error && !errors.gpa.error && !errors.imageUrl.error) {
      let obj = { name, imageUrl, id, gpa };
      this.props.editStudent(obj);
      this.props.history.push("showStudent", { student: obj });
    }
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
                value={this.state.name}
                name="name"
                onChange={e => this.handleChange(e)}
                margin="normal"
                fullWidth
                error={errors.name.error}
              />
              <span className="form-error-text">
                {errors.name.error ? errors.name.text : null}
              </span>
            </div>
            <div className="editCampus-p">
              GPA:
              <TextField
                id="name"
                value={this.state.gpa}
                name="gpa"
                onChange={e => this.handleChange(e)}
                margin="normal"
                type="number"
                fullWidth
                error={errors.gpa.error}
              />
              <span className="form-error-text">
                {errors.gpa.error ? errors.gpa.text : null}
              </span>
            </div>
            <div className="editCampus-p">
              Student URL:
              <TextField
                id="name"
                value={this.state.imageUrl}
                name="imageUrl"
                onChange={e => this.handleChange(e)}
                margin="normal"
                fullWidth
                error={errors.imageUrl.error}
              />
              <span className="form-error-text">
                {errors.imageUrl.error ? errors.imageUrl.text : null}
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
