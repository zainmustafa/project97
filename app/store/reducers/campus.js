import ActionType from "../actions/ActionType";

const initialState = {
  isLoading: false,
  allCampus: []
};

export default (state = initialState, action) => {
  switch (action.type) {
    /**
      Get All Campus
     **/
    case ActionType.GET_ALL_CAMPUS:
      return { ...state, isLoading: true };

    case ActionType.GET_ALL_CAMPUS_SUCCESS:
      return { ...state, isLoading: false, allCampus: action.payload };

    case ActionType.GET_ALL_CAMPUS_FAIL:
      return { ...state, isLoading: false };

    default:
      return state;
  }
};
