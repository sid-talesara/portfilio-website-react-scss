import React, { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { MovieState } from "../movieState";
import MovieDetailStyled from "../assets/MovieDetails.scss";
const MovieDetail = () => {
  let history = useLocation();
  const url = location.pathname;
  const [movies, setMovies] = useState(MovieState);
  const [movie, setMovie] = useState(null);

  useEffect(() => {
    const currentMovie = movies.filter((stateMovie) => stateMovie.url === url);
    setMovie(currentMovie[0]);
  }, [movies, url]);

  return (
    <>
      {movie && (
        <div className="details">
          <div className="headline">
            <h2>{movie.title}</h2>
            <img src={movie.mainImg} alt="" />
          </div>
          <div className="awards">
            {movie.awards.map((award) => (
              <Award
                title={award.title}
                description={award.description}
                key={award.title}
              />
            ))}
          </div>
          <div className="image-display">
            <img src={movie.secondaryImg} alt="" />
          </div>
        </div>
      )}
    </>
  );
};

const Award = ({ title, description }) => {
  return (
    <div className="award-item">
      <h3>{title}</h3>
      <div className="line"></div>
      <p>{description}</p>
    </div>
  );
};
export default MovieDetail;
