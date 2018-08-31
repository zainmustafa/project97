import React from "react";
import Button from "@material-ui/core/Button";
import StudentCard from "./StudentCard";

export default ({ openModal }) => {
  return (
    <div className="studentlist">
      <div className="studentlist-header">
        <h1>Students on campus</h1>
        <Button
          variant="contained"
          color="primary"
          className="campuses-header-btn"
          onClick={() => openModal()}
        >
          Add Student
        </Button>
      </div>
      <div className="studentlist-items">
        <StudentCard />
        <StudentCard />
        <StudentCard />
        <StudentCard />
        <StudentCard />
        <StudentCard />
      </div>
    </div>
  );
};
