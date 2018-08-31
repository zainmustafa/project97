import { actionDispatch } from "../../utils/return-obj";
import ActionType from "./ActionType";
import { post, get, put, del } from "../../utils/api-calls";

export default class Student {
  static getAllStudent() {
    return dispatch => {
      dispatch(actionDispatch(ActionType.GET_ALL_STUDENT));
      get("/students")
        .then(success => {
          dispatch(actionDispatch(ActionType.GET_ALL_STUDENT_SUCCESS, success));
        })
        .catch(() => {
          dispatch(actionDispatch(ActionType.GET_ALL_STUDENT_FAIL));
        });
    };
  }

  static addStudent(obj) {
    return dispatch => {
      dispatch(actionDispatch(ActionType.ADD_STUDENT));
      post("/students", obj)
        .then(success => {
          dispatch(Student.getAllStudent());
          dispatch(actionDispatch(ActionType.ADD_STUDENT_SUCCESS));
        })
        .catch(() => {
          dispatch(actionDispatch(ActionType.ADD_STUDENT_FAIL));
        });
    };
  }
  static editStudent(obj) {
    return dispatch => {
      dispatch(actionDispatch(ActionType.EDIT_STUDENT));
      put("/students", obj)
        .then(success => {
          dispatch(Student.getAllStudent());
          dispatch(actionDispatch(ActionType.EDIT_STUDENT_SUCCESS));
        })
        .catch(() => {
          dispatch(actionDispatch(ActionType.EDIT_STUDENT_FAIL));
        });
    };
  }

  static deleteStudent(id) {
    return dispatch => {
      let obj = { id };
      dispatch(actionDispatch(ActionType.DELETE_STUDENT));
      del("/students", obj)
        .then(success => {
          dispatch(Student.getAllStudent());
          dispatch(actionDispatch(ActionType.DELETE_STUDENT_SUCCESS));
        })
        .catch(() => {
          dispatch(actionDispatch(ActionType.DELETE_STUDENT_FAIL));
        });
    };
  }

  static addCampusStudent(id) {
    return dispatch => {
      dispatch(actionDispatch(ActionType.ADD_CAMPUS_STUDENT));
      post()
        .then(success => {
          dispatch(actionDispatch(ActionType.ADD_CAMPUS_STUDENT_SUCCESS));
        })
        .catch(() => {
          dispatch(actionDispatch(ActionType.ADD_CAMPUS_STUDENT_FAIL));
        });
    };
  }

  static deleteCampusStudent(id) {
    return dispatch => {
      dispatch(actionDispatch(ActionType.DELETE_CAMPUS_STUDENT));
      del()
        .then(success => {
          dispatch(actionDispatch(ActionType.DELETE_CAMPUS_STUDENT_SUCCESS));
        })
        .catch(() => {
          dispatch(actionDispatch(ActionType.DELETE_CAMPUS_STUDENT_SUCCESS));
        });
    };
  }
}
