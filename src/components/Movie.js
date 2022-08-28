import React from 'react';

export default function Movie({ poster_path, title, vote_average }) {
  const IMG_BASE_URL = 'http://image.tmdb.org/t/p/w1280';

  return (
    <div className="movie-container">
      <img src={IMG_BASE_URL + poster_path} alt={`${title} 포스터`} />
      <div className="movie-info">
        <h2>{title}</h2>
        <p>{vote_average}</p>
      </div>
    </div>
  );
}
