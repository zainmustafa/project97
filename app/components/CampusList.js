import React from "react";
import Button from "@material-ui/core/Button";
import CampusItem from "./CampusItem";
import TextField from "@material-ui/core/TextField";

export default class CampusList extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            campusName: ""
        }
    }

  render() {
    const { OpenModal } = this.props;
    return (
      <div className="studentlist">
        <div className="studentlist-header">
          <h1>This student is registered to a campus</h1>
        </div>
        <div className="campuslist-lower">
          
          <div className="campuslist-items">
            <CampusItem />
          </div>
          <div className="campuslist-btns">
          <TextField
              className="campusStudentList-form-dropdown"
              select
              label="Select Campus"
              value={this.state.campusName}
              onChange={() => {}}
              
            >
              {/* {list.map(option => (
                <MenuItem key={option.value} value={option.value}>
                  {option.label}
                </MenuItem>
              ))} */}
            </TextField>
            <Button
              variant="contained"
              color="primary"
              className="campuslist-btn"
              onClick={() => openModal()}
            >
              Change Campus
            </Button>
          </div>
        </div>
      </div>
    );
  }
}
