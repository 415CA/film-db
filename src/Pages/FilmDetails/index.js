import React from 'react';
import Details from '../../Components/Details';

const FilmDetails = (film) => {
  const TMDB_ID = film.match.params.id; 
  
  return (
    <div>
      <Details film={TMDB_ID}/>
    </div>
  );
};

export default FilmDetails;
