import React from "react";
import Button from "@material-ui/core/Button";

const CampusItem = props => {
  return (
    <div className="campus-item">
      <div
        className="campus-item-img"
        style={{ backgroundImage: "url('student.jpeg')" }}
      />
      <div className="campus-item-content">
        <div className="campus-item-content-upper">
          <h1>{props.campus && props.campus.name || ''}</h1>
          <p>5 students</p>
        </div>
        <div className="campus-item-content-btns">
          <Button
            variant="contained"
            color="classic"
            className="campus-item-content-btns-edit"
            onClick={() =>
              props.history.push("/showCampus", { campus: props.campus })
            }
          >
            View
          </Button>
          <Button
            variant="contained"
            color="primary"
            className="campus-item-content-btns-edit"
            onClick={() =>
              props.history.push("/editCampus", { campus: props.campus })
            }
          >
            Edit
          </Button>
          <Button
            variant="contained"
            color="primary"
            className="campus-item-content-btns-delete"
            onClick={() => props.deleteCampus(props.campus.id)}
          >
            Delete
          </Button>
        </div>
      </div>
    </div>
  );
};

export default CampusItem;
