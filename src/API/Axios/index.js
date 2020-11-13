import axios from 'axios'; 

const TMDB_API = process.env.REACT_APP_TMDB_API;
const NY_TIMES_API = process.env.REACT_APP_NY_TIMES_API;
const TMDB = 'https://api.themoviedb.org/3';

const movies = axios.create({
  baseURL: 'https://api.themoviedb.org/3',
  headers: {
    Accept: 'application/json',
    'Content-type': 'application/json;charset=utf-8',
    Authorization: TMDB_API,
  },
});

const nyTimes = axios.create({
  baseURL: 'https://api.nytimes.com/svc/movies/v2/reviews/search.json',
  headers: {
    Accept: 'application/json',
    'Content-type': 'application/json',
    Authorization: NY_TIMES_API,
  },
});

const image = 'https://image.tmdb.org/t/p/original';

export { axios, image, movies, nyTimes, TMDB };
