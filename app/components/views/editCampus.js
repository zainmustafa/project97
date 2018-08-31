import React, { Component } from "react";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import CampusStudentList from "./campusStudentList";

export default class EditCampus extends Component {
  constructor() {
    super();
    this.state = {
      campus_name: "",
      campus_location: "",
      campus_imageUrl: "",
      campus_description: ""
    };
  }

  handleChange = e => {
    let target = e.target;
    let name = target.name;
    this.setState({ [name]: target.value });
  };

  submitChanges = () => {
    const { editCampus } = this.props;
    editCampus(this.state);
  };

  render() {
    return (
      <div>
        <div className="editCampus">
          <form noValidate autoComplete="off">
            <div className="editCampus-p">
              Campus Name:
              <TextField
                id="name"
                value={this.state.name}
                name="campus_name"
                onChange={e => this.handleChange(e)}
                margin="normal"
                fullWidth
              />
            </div>
            <div className="editCampus-p">
              Campus Location:
              <TextField
                id="name"
                value={this.state.name}
                name="campus_location"
                onChange={e => this.handleChange(e)}
                margin="normal"
                fullWidth
              />
            </div>
            <div className="editCampus-p">
              Campus Image URL:
              <TextField
                id="name"
                value={this.state.name}
                name="campus_imageUrl"
                onChange={e => this.handleChange(e)}
                margin="normal"
                fullWidth
              />
            </div>
            <div className="editCampus-p">
              Campus Description:
              <TextField
                id="multiline-static"
                multiline
                name="campus_description"
                onChange={e => this.handleChange(e)}
                rows="4"
                margin="normal"
                fullWidth
              />
            </div>
            <Button variant="contained" color="primary">
              Save Changes
            </Button>
          </form>
          <CampusStudentList />
        </div>
      </div>
    );
  }
}
