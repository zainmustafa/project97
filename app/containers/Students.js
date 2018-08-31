import React from "react";
import StudentsView from "../components/views/StudentsView";
import { connect } from "react-redux";
import Student from "../store/actions//student";

const mapStateToProps = state => ({
  allStudent: state.studentReducer.allStudent
});

const mapDispatchToProps = dispatch => ({
  deleteStudent: id => dispatch(Student.deleteStudent(id)),
  getAllStudent: () => dispatch(Student.getAllStudent()),
  addStudent: obj => dispatch(Student.addStudent(obj))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(StudentsView);
