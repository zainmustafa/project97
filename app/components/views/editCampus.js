import React, { Component } from "react";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import CampusStudentList from "./campusStudentList";

export default class EditCampus extends Component {
  constructor() {
    super();
    this.state = {
      name: "",
      address: "",
      imageUrl: "",
      description: ""
    };
  }

  componentDidMount() {
    const { name, address, id, description } = this.props.location.state.campus;
    this.setState({
      name,
      address,
      id,
      description
    });
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
    const { name, address, imageUrl, description } = this.state;
    return (
      <div>
        <div className="editCampus">
          <form noValidate autoComplete="off">
            <div className="editCampus-p">
              Campus Name:
              <TextField
                id="name"
                value={name}
                name="name"
                onChange={e => this.handleChange(e)}
                margin="normal"
                fullWidth
              />
            </div>
            <div className="editCampus-p">
              Campus Location:
              <TextField
                id="name"
                value={address}
                name="address"
                onChange={e => this.handleChange(e)}
                margin="normal"
                fullWidth
              />
            </div>
            <div className="editCampus-p">
              Campus Image URL:
              <TextField
                id="name"
                value={imageUrl}
                name="imageUrl"
                onChange={e => this.handleChange(e)}
                margin="normal"
                fullWidth
              />
            </div>
            <div className="editCampus-p">
              Campus Description:
              <TextField
                id="multiline-static"
                value={description}
                multiline
                name="description"
                onChange={e => this.handleChange(e)}
                rows="4"
                margin="normal"
                fullWidth
              />
            </div>
            <Button
              variant="contained"
              color="primary"
              onClick={() => this.submitChanges()}
            >
              Save Changes
            </Button>
          </form>
          <CampusStudentList />
        </div>
      </div>
    );
  }
}
