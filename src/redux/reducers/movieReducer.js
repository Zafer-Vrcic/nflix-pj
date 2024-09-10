import { ActionTypes } from "./actionTypes";

const initialState = {
  popularMovies: [],
  isLoading: false,
  isError: false,
};

const movieReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case ActionTypes.SET_MOVİES_LOADİNG:
      return { ...state, isLoading: true };
    case ActionTypes.SET_MOVİES_ERROR:
      return { ...state, isLoading: false, isError: payload };
    case ActionTypes.SET_MOVİES:
      return {
        ...state,
        isLoading: false,
        isError: false,
        popularMovies: payload,
      };

    default:
      return state;
  }
};

export default movieReducer;
