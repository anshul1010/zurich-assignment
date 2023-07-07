import { GET_USER_LIST } from "./actionTypes";
const initialState = {
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
