import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { genre, search, TMDB } from '../../API';
import { Poster } from '../../Components';
import SearchHeader from '../../Components/Search/SearchHeader';

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
      <SearchHeader />
      <form 
        className='flex items-center justify-center pa4 black-80'
        onSubmit={event => {
          setUrl(TMDB + search(query));
          event.preventDefault();
        }} >
        <input
          className='input-reset ba b--black-20 pa2 mb2 db w-100 measure'
          type='text'
          value={query}
          onChange={event => setQuery(event.target.value)}
        />
        <button 
          className='f6 link dim br2 ph3 pv2 mb2 dib white bg-black'
          type='submit'
        >Search</button>
      </form>

      {isError && <div>Something went wrong ...</div>}

      {isLoading ? (
        <div className='tc f1 i'>Loading ...</div>
      ) : (
          <Poster movies={data} />
      )}
    </>
  );
};

export default Search;