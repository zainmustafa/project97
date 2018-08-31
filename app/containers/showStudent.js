import React from "react";
import showStudent from "../components/views/showStudent";
import { connect } from "react-redux";
import Student from "../store/actions/student";

const mapStateToProps = state => ({
  allStudent: state.studentReducer.allStudent
});

const mapDispatchToProps = dispatch => ({
  deleteStudent: id => dispatch(Student.deleteStudent(id)),
  getAllStudent: () => dispatch(Student.getAllStudent())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(showStudent);
