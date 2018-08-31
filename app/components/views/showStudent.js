import React, { Component } from "react";
import Button from "@material-ui/core/Button";
import StudentList from "../StudentList";
import CampusList from "../CampusList";
import student from "../../store/reducers/student";
class ShowCampus extends Component {
  constructor() {
    super();
    this.state = {
      student: {}
    };
  }

  componentDidMount() {
    const { allStudent } = this.props;
    const { id } = this.props.location.state.student;
    let student =
      allStudent &&
      allStudent.length &&
      allStudent.find(student => student.id === id);
    this.setState({
      student
    });
  }

  deleteStudent = id => {
    const { deleteStudent } = this.props;
    deleteStudent(id);
    this.props.history.push("/students");
  };
  render() {
    const { gpa, name, id } = this.state.student;
    return (
      <div className="showCampus">
        <div className="showCampus-upper">
          <div style={{ display: "flex" }}>
            <div
              className="showCampus-upper-img"
              style={{
                backgroundImage: "url('demmy.png')"
              }}
            />
            <div className="showCampus-upper-text">
              <h2>{name}</h2>
              <p>GPA + {gpa || ""}</p>
            </div>
          </div>
          <div className="showCampus-lower">
            <div />
            <div className="showCampus-lower-btns">
              <Button
                onClick={() =>
                  this.props.history.push("/editStudent", {
                    student: this.props.location.state.student
                  })
                }
                variant="contained"
                color="primary"
                className="showCampus-lower-btns-edit"
              >
                edit
              </Button>
              <Button
                variant="contained"
                color="primary"
                className="showCampus-lower-btns-delete"
                onClick={() => this.deleteStudent(id)}
              >
                delete
              </Button>
            </div>
          </div>
          <CampusList openModal={() => this.setState({ isModalOpen: true })} />
        </div>
      </div>
    );
  }
}

export default ShowCampus;
