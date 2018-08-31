import React from "react";

const StudentCard = props => {
  return (
    <div
      className="studentcard"
      onClick={() =>
        props.history.push("/showStudent", { student: props.student })
      }
    >
      <div
        className="studentcard-img"
        style={{ backgroundImage: "url('student.jpeg')" }}
      />
      <div className="studentcard-content">
        <div className="studentcard-content-upper">
          <h3>{(props.student && props.student.name) || ""}</h3>
          <p>Campus Name</p>
        </div>
      </div>
    </div>
  );
};

export default StudentCard;
