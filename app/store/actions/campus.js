import { actionDispatch } from "../../utils/return-obj";
import ActionType from "./ActionType";
import { post, get, put, del } from "../../utils/api-calls";
export default class Campus {
  static getAllCampus() {
    return dispatch => {
      dispatch(actionDispatch(ActionType.GET_ALL_CAMPUS));
      get()
        .then(success => {
          dispatch(actionDispatch(ActionType.GET_ALL_CAMPUS_SUCCESS));
        })
        .catch(() => {
          dispatch(actionDispatch(ActionType.GET_ALL_CAMPUS_FAIL));
        });
    };
  }

  static addCampus(name) {
    return dispatch => {
      dispatch(actionDispatch(ActionType.ADD_CAMPUS));
      post()
        .then(success => {
          dispatch(actionDispatch(ActionType.ADD_CAMPUS_SUCCESS));
        })
        .catch(() => {
          dispatch(actionDispatch(ActionType.ADD_CAMPUS_FAIL));
        });
    };
  }
  static editCampus(obj) {
    return dispatch => {
      dispatch(actionDispatch(ActionType.EDIT_CAMPUS));
      put()
        .then(success => {
          dispatch(actionDispatch(ActionType.EDIT_CAMPUS_SUCCESS));
        })
        .catch(() => {
          dispatch(actionDispatch(ActionType.EDIT_CAMPUS_FAIL));
        });
    };
  }

  static deleteCampus(id) {
    return dispatch => {
      dispatch(actionDispatch(ActionType.DELETE_CAMPUS));
      del()
        .then(success => {
          dispatch(actionDispatch(ActionType.DELETE_CAMPUS_SUCCESS));
        })
        .catch(() => {
          dispatch(actionDispatch(ActionType.DELETE_CAMPUS_FAIL));
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
