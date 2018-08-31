import React from "react";
import showCampus from "../components/views/showCampus";
import { connect } from "react-redux";
import Campus from "../store/actions/campus";

const mapStateToProps = state => ({});

const mapDispatchToProps = dispatch => ({
  addCampusStudent: () => dispatch(Campus.addCampusStudent()),
  deleteCampus: (id) => dispatch(Campus.deleteCampus(id))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(showCampus);
