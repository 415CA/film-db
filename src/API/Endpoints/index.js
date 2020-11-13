const TMDB_API = process.env.REACT_APP_TMDB_API;
const NY_TIMES_API = process.env.REACT_APP_NY_TIMES_API;

const genre = {
  action: `/discover/movie?api_key=${TMDB_API}&with_genres=28&append_to_response=videos,images&include_image_language=en`,
  adventure: `/discover/movie?api_key=${TMDB_API}&with_genres=12&append_to_response=videos,images&include_image_language=en`,
  animation: `/discover/movie?api_key=${TMDB_API}&with_genres=35&append_to_response=videos,images&include_image_language=en`,
  comedy: `/discover/movie?api_key=${TMDB_API}&with_genres=80&append_to_response=videos,images&include_image_language=en`,
  documentary: `/discover/movie?api_key=${TMDB_API}&with_genres=99&append_to_response=videos,images&include_image_language=en`,
  drama: `/discover/movie?api_key=${TMDB_API}&with_genres=18&append_to_response=videos,images&include_image_language=en`,
  family: `/discover/movie?api_key=${TMDB_API}&with_genres=10751&append_to_response=videos,images&include_image_language=en`,
  horror: `/discover/movie?api_key=${TMDB_API}&with_genres=27&append_to_response=videos,images&include_image_language=en`,
  romance: `/discover/movie?api_key=${TMDB_API}&with_genres=10749&append_to_response=videos,images&include_image_language=en`,
  scienceFiction: `/discover/movie?api_key=${TMDB_API}&with_genres=878&append_to_response=videos,images&include_image_language=en`,
  thriller: `/discover/movie?api_key=${TMDB_API}&with_genres=53&append_to_response=videos,images&include_image_language=en`,

  trending: `/trending/movie/week?api_key=${TMDB_API}&append_to_response=videos,images&include_image_language=en`,
  popular: `/movie/popular?api_key=${TMDB_API}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=true`,
  discover: `/discover/movie?api_key=${TMDB_API}&append_to_response=videos,images&include_image_language=en`,
  upcoming: `/movie/upcoming?api_key=${TMDB_API}&language=en-US`,
  nowPlaying: `/movie/now_playing?api_key=${TMDB_API}&language=en-US`,
};

const search = (query, pageNum = 1) => {
  return `/search/movie?api_key=${TMDB_API}&language=en-US&query=${query}&page=${pageNum}&include_adult=false`;
};

const details = (tmdbID) => {
  return `/movie/${tmdbID}?api_key=${TMDB_API}&language=en-US&append_to_response=%26append_to_response%3Dvideos%2Cimages`;
};

const videos = (tmdbID) => {
  return `/movie/${tmdbID}/videos?api_key=${TMDB_API}&language=en-US`;
};

const recommendations = (tmdbID, pageNum) => {
  return `/movie/${tmdbID}/recommendations?api_key=${TMDB_API}&language=en-US&page=${pageNum}`;
};

const similarMovies = (tmdbID, pageNum) => {
  return `/movie/${tmdbID}/similar?api_key=${TMDB_API}&language=en-US&page=${pageNum}`;
};

const reviews = (tmdbID, pageNum) => {
  return `/movie/${tmdbID}/reviews?api_key=${TMDB_API}&language=en-US&page=${pageNum}`;
};

const credits = (tmdbID) => {
  return `/movie/${tmdbID}/credits?api_key=${TMDB_API}`;
};

const socialMedia = (tmdbID) => {
  return `/movie/${tmdbID}/external_ids?api_key=${TMDB_API}`;
};

const explore = (tmdbID, pageNum = 1) => {
  return {
    details: details(tmdbID),
    videos: videos(tmdbID),
    recommendations: recommendations(tmdbID, pageNum),
    similarMovies: similarMovies(tmdbID, pageNum),
    reviews: reviews(tmdbID, pageNum),
    credits: credits(tmdbID),
    socialMedia: socialMedia(tmdbID),

  };
};

  const nytreviews = (title) => {
    return `?order=by-title&query=${title}&api-key=${NY_TIMES_API }`;
  };

export { genre, search, explore, nytreviews };
