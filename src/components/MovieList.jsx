import axios from "axios";
import { useEffect, useState } from "react";
import { baseImgURL, options } from "../constant";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";
import { Link } from "react-router-dom";
const MovieList = ({ genre }) => {
  const [movies, setMovies] = useState(null);
  //we will request films depends on the category id, after that we will list with slider
  useEffect(() => {
    axios
      .get(
        `https://api.themoviedb.org/3/discover/movie?with_genres=${genre.id}`,
        options
      )
      .then((res) => setMovies(res.data.results));
  }, []);

  return (
    <div className="p-4">
      <h1 className="mb-3">{genre.name} </h1>
      <Splide options={{
        gap:"1rem",
        autoWidth:true,
        pagination:false,
        loop:true,

      }}>
        {movies?.map((movie) => (
          <SplideSlide>
            <Link to={`/detail/${movie.id}`}>
            <img className="movie" src={baseImgURL + movie.poster_path} />
            </Link>
          </SplideSlide>
        ))}
      </Splide>
    </div>
  );
};

export default MovieList;
