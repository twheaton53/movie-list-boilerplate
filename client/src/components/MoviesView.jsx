import React from 'react';

const bg = {
  backgroundColor: "orange"
};

const MoviesView = ( { movie } ) => (
  <tr>
    <td>{movie.title}</td>
    <td><input type="button" value="watched" style={bg} /></td>
  </tr>
);

export default MoviesView;