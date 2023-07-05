import {
  GET_USER_LIST,
  GET_USER_SUCCESS,
  GET_USER_FAILURE,
} from "./actionTypes";
const initialState = {
  loading: false,
  lists: [],
  error: "",
};

export default function users(state = initialState, action) {
  switch (action.type) {
    case GET_USER_LIST:
      return {
        ...state,
        lists: action.payload,
      };

    default:
      return state;
  }
}
