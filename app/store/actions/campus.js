import { actionDispatch } from "../../utils/return-obj";
import ActionType from "./ActionType";
import { post, get, put, del } from "../../utils/api-calls";
export default class Campus {
  static getAllCampus() {
    return dispatch => {
      dispatch(actionDispatch(ActionType.GET_ALL_CAMPUS));
      get('/campuses')
        .then(success => {
          dispatch(actionDispatch(ActionType.GET_ALL_CAMPUS_SUCCESS, success));
        })
        .catch(() => {
          dispatch(actionDispatch(ActionType.GET_ALL_CAMPUS_FAIL));
        });
    };
  }

  static addCampus(obj) {
    return dispatch => {
      dispatch(actionDispatch(ActionType.ADD_CAMPUS));
      post('/campuses', obj)
        .then(success => {
          dispatch(Campus.getAllCampus())
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
      put('/campuses', obj)
        .then(success => {
          dispatch(Campus.getAllCampus())
          dispatch(actionDispatch(ActionType.EDIT_CAMPUS_SUCCESS));
        })
        .catch(() => {
          dispatch(actionDispatch(ActionType.EDIT_CAMPUS_FAIL));
        });
    };
  }

  static deleteCampus(id) {
    return dispatch => {
      let obj ={id}
      dispatch(actionDispatch(ActionType.DELETE_CAMPUS));
      del('/campuses', obj)
        .then(success => {
          dispatch(Campus.getAllCampus())
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
