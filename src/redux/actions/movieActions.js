import axios from "axios";
import { options } from "../../constant";
import { ActionTypes } from "../reducers/actionTypes";

// baseurel for is for the all request which we need to do this site declare a baseurl to make easy
axios.defaults.baseURL = "https://api.themoviedb.org/3";

//to request popular films and to put in the store
export const getPopular = () => (dispatch) => {
  //to informate reducer about loading
  dispatch({
    type: ActionTypes.SET_MOVİES_LOADİNG,
  });

  axios
    .get("/movie/popular", options)
    //   if request is success informate to reducer
    .then((res) =>
      dispatch({
        type: ActionTypes.SET_MOVİES,
        payload: res.data.results,
      })
    )

    //if request is failed send information about error to reducer
    .catch((err) => {
      dispatch({
        type: ActionTypes.SET_MOVİES_ERROR,
        payload: err.message,
      });
    });
};

//for the put category in the store

export const getGenres = () => (dispatch) => {
  dispatch({ type: ActionTypes.SET_GENRES_LOADING });
  axios
    .get("genre/movie/list?language=en", options)
    .then((res) => {
      dispatch({ type: ActionTypes.SET_GENRES, payload: res.data.genres });
    })
    .catch((err) =>
      dispatch({ type: ActionTypes.SET_GENRES_ERROR, payload: err.message })
    );
};
