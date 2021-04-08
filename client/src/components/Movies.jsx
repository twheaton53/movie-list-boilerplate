import React from 'react';
import MoviesView from './MoviesView.jsx';

const Movies = ( { movies } ) => (
  <tbody>
    {movies.map((item, index) => (
      <MoviesView movie={item} key={index} />
    ))}
  </tbody>
);

export default Movies;