import React from 'react';
import { image } from '../../../API';

const PosterScroll = ({ films }) => {
  console.log('films', films);
  return (
    <div>
      PosterScroll
      {films.map(film => {
        return (
          <div key={film.id}>
          {film.original_title}
          <img src={`${image}${film.poster_path}`} alt={film.original_title} />
          </div>
        );
      })}
    </div>
  );
};

export default PosterScroll;
