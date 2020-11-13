import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { genre, search, TMDB } from '../../API';
import { Poster } from '../../Components';

const Search = () => {
  const [data, setData] = useState([]);
  const [query, setQuery] = useState('');
  const [url, setUrl] = useState(TMDB + genre.popular);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      setIsError(false);
      setIsLoading(true);
      try {
        const result = await axios(url);
        setData(result.data.results);
      } catch (error) {
        setIsError(true);
      }
      setIsLoading(false);
    };

    fetchData();
  }, [url]);

  return (
    <>
      <form 
        className='pa4 black-80'
        onSubmit={event => {
          setUrl(TMDB + search(query));
          event.preventDefault();
        }} >
        <div className='measure'>
        <input
          type='text'
          value={query}
          onChange={event => setQuery(event.target.value)}
        />
        <button type='submit'>Search</button>
        </div>
      </form>

      {isError && <div>Something went wrong ...</div>}

      {isLoading ? (
        <div>Loading ...</div>
      ) : (
          <Poster movies={data} />
      )}
    </>
  );
};

export default Search;