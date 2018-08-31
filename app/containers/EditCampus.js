import EditCampus from "../components/views/editCampus";
import { connect } from "react-redux";
import Campus from "../store/actions/campus";

const mapStateToProps = state => ({});

const mapDispatchToProps = dispatch => ({
  editCampus: obj => dispatch(Campus.editCampus(obj))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(EditCampus);
