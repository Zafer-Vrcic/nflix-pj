import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getPopular, getGenres } from "../redux/actions/movieActions";
import Hero from "../components/Hero";
import MovieList from "../components/MovieList";

const MainPage = () => {
  const state = useSelector((store) => store.genre);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getPopular());
    dispatch(getGenres());
  }, []);

  return (
    <div>
      <Hero />
      {state.isLoading ? (
        <div className="spinner-border text-primary" role="status"></div>
      ) : state.isError ? (
        <p>Ups.Something wrong.{state.isError} </p>
      ) : (
        state.genres && state.genres.map((genre) => (
          <MovieList key={genre.id} genre={genre} />
        ))
      )}
    </div>
  );
};

export default MainPage;
