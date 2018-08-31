import React, { Component } from "react";
import Button from "@material-ui/core/Button";
import CampusItem from "../CampusItem";
import Modal from "../../commons/modal";
import StudentCard from "../StudentCard";

export default class StudentsView extends Component {
  constructor() {
    super();
    this.state = { isModalOpen: false, campus_name: "" };
  }
  closeModal = () => {
    this.setState({ isModalOpen: false });
  };
  componentDidMount() {
    const { getAllStudent } = this.props;
    getAllStudent();
  }
  changeHandler = e => {
    let target = e.target;
    let name = target.name;
    this.setState({ [name]: target.value });
  };

  submitModal = () => {
    this.setState({ isModalOpen: false });
    const { addStudent } = this.props;
    const { name, imageUrl, email, gpa } = this.state;
    let obj = { name, imageUrl, email, gpa };
    addStudent(obj);
  };

  render() {
    const { isModalOpen } = this.state;
    const { allStudent } = this.props;
    return (
      <div className="campuses">
        <div className="campuses-header">
          <h1>All Students</h1>
          <Button
            variant="contained"
            color="primary"
            className="campuses-header-btn"
            onClick={() => this.setState({ isModalOpen: true })}
          >
            Add Student
          </Button>
        </div>
        <div className="campuses-content">
          {allStudent && allStudent.length ? (
            allStudent.map((student, ind) => (
              <StudentCard
                key={ind}
                student={student}
                history={this.props.history}
              />
            ))
          ) : (
            <p>There are no students registered in the database.</p>
          )}
        </div>
        <Modal
          isModalOpen={isModalOpen}
          title={"Student Name"}
          type={"student"}
          closeModal={() => this.closeModal()}
          changeHandler={e => this.changeHandler(e)}
          submitModal={() => this.submitModal()}
        />
      </div>
    );
  }
}
