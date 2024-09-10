import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import { Spinner } from "reactstrap";
import millify from "millify";
import ReactPlayer from "react-player";
import { baseImgURL, options } from "../constant";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css"; // Ensure you have this import


const DetailPage = () => {
  const [movie, setMovie] = useState(null);
  const { id } = useParams();

  // Fetch movie data
  useEffect(() => {
    axios
      .get(`https://api.themoviedb.org/3/movie/${id}?append_to_response=credits%2Cvideos%2Ctranslations&language=en-US`, options)
      .then((res) => setMovie(res.data));
  }, [id]);

  // Select the first video or any specific video
  const getFirstVideo = () => {
    if (movie && movie.videos.results.length > 0) {
      return movie.videos.results[0];
    }
    return null;
  };

  const VideoPlayer = ({ video }) => {
    if (!video) return null;

    return (
      <div className="mt-5 video-player d-flex align-items-center justify-content-center">
        <div style={{ width: "45em", height: "50vh" }}>
          <ReactPlayer
            url={`https://www.youtube.com/watch?v=${video.key}`}
            width="100%"
            height="100%"
            controls
          />
        </div>
      </div>
    );
  };

  return (
    <div className="row">
      {!movie ? (
        <Spinner
          color="warning"
          type="grow"
          style={{
            height: "5rem",
            width: "5rem",
            margin: "20em",
            marginLeft: "60em",
          }}
        >
          Loading...
        </Spinner>
      ) : (
        <>
          {/* Banner Component */}
          <div className="col-12 banner">
            <img
              className="w-100 h-100 object-fit-cover"
              src={baseImgURL + movie.backdrop_path}
              alt={movie.title}
            />
            <h1 className=" text-center text-white">Videos about Movie</h1>
            <div className="banner-bg">
              <span>{movie.title}</span>
            </div>
          </div>

          {/* Video Player */}
          <div className="col-12">
            <VideoPlayer video={getFirstVideo()} />
          </div>

          {/* Other details */}
          <div className="col-md-6 mt-4 p-4">
            {/* Companies */}
            <h3 className="mt-4">Production Companies</h3>
            <div className="d-flex flex-wrap gap-4">
              {movie.production_companies.map((i) => (
                <div className="bg-secondary rounded p-2 d-flex align-items-center" key={i.id}>
                  {i.logo_path ? (
                    <img
                      className="object-fit-contain"
                      width={100}
                      height={100}
                      src={baseImgURL + i.logo_path}
                      alt={i.name}
                    />
                  ) : (
                    <span className="company">{i.name}</span>
                  )}
                </div>
              ))}
            </div>
            {/* Languages */}
            <h3 className="mt-4">Spoken Languages</h3>
            <div className="d-flex flex-wrap gap-4">
              {movie.spoken_languages.map((i) => (
                <div className="bg-white rounded p-2 d-flex align-items-center" key={i.iso_639_1}>
                  <span className="company">{i.name}</span>
                </div>
              ))}
            </div>
            {/* Countries */}
            <h3 className="mt-4">Producing Countries</h3>
            <div className="d-flex flex-wrap gap-4">
              {movie.production_countries.map((i) => (
                <div className="bg-white rounded p-2 d-flex align-items-center" key={i.iso_3166_1}>
                  <span className="company">{i.name}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right Side */}
          <div className="col-md-6 mt-4 pt-4">
            <p className="lead"> {movie.overview} </p>
            <p>
              <span>Budget:</span>
              <span className="text-success">{millify(movie.budget)}$</span>
            </p>
            <p>
              <span>Revenue Amount of the Movie:</span>
              <span className="text-success">{millify(movie.revenue)}$</span>
            </p>
            <h2 className="d-flex justify-content-center">Subtitle Options</h2>
            <div className="d-flex flex-wrap gap-4">
              {movie.translations.translations.map((i) => (
                <div className="bg-white rounded p-2 d-flex align-items-center" key={i.iso_639_1}>
                  <span className="company">{i.name}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Actors */}
          <div className="col-12 p-4 my-3">
            <h2>Actors</h2>
            <Splide
              options={{
                height: "13rem",
                gap: ".5em",
                pagination: false,
                autoWidth: true,
              }}
            >
              {movie.credits.cast.map((i) => (
                <SplideSlide key={i.id}>
                  <div className="actor-card h-100">
                    <img
                      className="movie"
                      src={
                        i.profile_path
                          ? baseImgURL + i.profile_path
                          : "/default-pic.jpg"
                      }
                      alt={i.name}
                    />
                    <p>
                      <span>{i.character}</span>
                      <span>{i.name}</span>
                    </p>
                  </div>
                </SplideSlide>
              ))}
            </Splide>
          </div>
        </>
      )}
    </div>
  );
};

export default DetailPage;
