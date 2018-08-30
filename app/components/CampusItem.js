import React from "react";
import Button from "@material-ui/core/Button";

const CampusItem = (props) => {
  return (
    <div
      className="campus-item"
      onClick={() => props.history.push("/showCampus")}
    >
      <div
        className="campus-item-img"
        style={{ backgroundImage: "url('student.jpeg')" }}
      />
      <div className="campus-item-content">
        <div className="campus-item-content-upper">
          <h1>Campus Name</h1>
          <p>5 students</p>
        </div>
        <div className="campus-item-content-btns">
          <Button
            variant="contained"
            color="primary"
            className="campus-item-content-btns-edit"
          >
            Edit
          </Button>
          <Button
            variant="contained"
            color="primary"
            className="campus-item-content-btns-delete"
          >
            Delete
          </Button>
        </div>
      </div>
    </div>
  );
};

export default CampusItem;
