import React from "react";

const StudentCard = () => {
  return (
    <div className="studentcard">
      <div
        className="studentcard-img"
        style={{ backgroundImage: "url('student.jpeg')" }}
      />
      <div className="studentcard-content">
        <div className="studentcard-content-upper">
          <h3>Student Name</h3>
          <p>Campus Name</p>
        </div>
      </div>
    </div>
  );
};

export default StudentCard;
