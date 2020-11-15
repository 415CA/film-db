import React from 'react';
import { Link } from 'react-router-dom';

import { image } from '../../API';


const Poster = ({ movies }) => {

  return (
    <>
      <div className='cf'>
        {movies.map((movie) => {
          return (
            <div key={movie.id}>
              { movie.poster_path ? (
                <Link
                  to={{
                    pathname: `/films/${movie.id}`,
                    state: { movie }
                  }}
                  className='fl w-50 w-25-l link overflow-hidden'
                >
                  <div
                    role='img'
                    aria-label={movie.title}
                    className='grow aspect-ratio--4x6'
                    style={{
                      backgroundImage: `url(${image}${movie.poster_path})`, 
                      backgroundRepeat: 'no-repeat', 
                      backgroundPosition: 'center', 
                      backgroundSize: 'cover',
                    }}
                  />
                </Link>
              ) : ( 
                null
              )}
            </div>
          );
        })};
      </div>
    </>
  );
};

export default Poster;
