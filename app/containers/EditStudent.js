import EditStudent from "../components/views/editStudent";
import { connect } from "react-redux";
import Student from "../store/actions/student";

const mapStateToProps = state => ({});

const mapDispatchToProps = dispatch => ({
  editStudent: obj => dispatch(Student.editStudent(obj))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(EditStudent);
