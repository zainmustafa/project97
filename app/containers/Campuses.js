import CampusesView from "../components/views/CampusesView";
import { connect } from "react-redux";
import Campus from "../store/actions/campus";

const mapStateToProps = state => ({
  allCampus: state.campusReducer.allCampus
});

const mapDispatchToProps = dispatch => ({
  getAllCampus: () => dispatch(Campus.getAllCampus()),
  addCampus: name => dispatch(Campus.addCampus(name)),
  deleteCampus: id => dispatch(Campus.deleteCampus(id))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CampusesView);
