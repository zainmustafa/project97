import ActionType from "../actions/ActionType";

const initialState = {
  isLoading: false,
  allStudent: []
};

export default (state = initialState, action) => {
  switch (action.type) {
    /**
      Get All Campus
     **/
    case ActionType.GET_ALL_STUDENT:
      return { ...state, isLoading: true };

    case ActionType.GET_ALL_STUDENT_SUCCESS:
      return { ...state, isLoading: false, allStudent: action.payload };

    case ActionType.GET_ALL_STUDENT_FAIL:
      return { ...state, isLoading: false };

    default:
      return state;
  }
};
