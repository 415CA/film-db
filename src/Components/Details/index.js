import React, { useEffect, useState } from 'react';
import { axios, movies, explore, nyTimes, nytReviews } from '../../API';
import Cast from './Cast';
import Crew from './Crew';
import Description from './Description';
import ReleaseDate from './ReleaseDate';
import Runtime from './Runtime';
import SocialMedia from './SocialMedia';
import UserScore from './UserScore';
import PosterScroll from './PosterScroll';
import Backdrop from './Backdrop';
import Review from './Review';

const Details = ({ film }) => {
  const [details, setDetails] = useState({});
  const [videos, setVideos] = useState({});
  const [recommendations, setRecommendations] = useState({});
  const [similarMovies, setSimilarMovies] = useState({});
  const [reviews, setReviews] = useState({});
  const [credits, setCredits] = useState({});
  const [socialMedia, setSocialMedia] = useState({});
  const [nyTimesReview, setNYTimesReview] = useState({});

  useEffect(() => {
  async function getDetails() {
    const detailObject = await axios.all(
      [
        movies.get(explore(film).details),
        movies.get(explore(film).videos),
        movies.get(explore(film).recommendations),
        movies.get(explore(film).similarMovies),
        movies.get(explore(film).reviews),
        movies.get(explore(film).credits),
        movies.get(explore(film).socialMedia),
      ])
      .then(
        axios.spread((...responses) => {
          setDetails(responses[0].data);
          setVideos(responses[1].data.results);
          setRecommendations(responses[2].data.results);
          setSimilarMovies(responses[3].data.results);
          setReviews(responses[4].data);
          setCredits(responses[5].data);
          setSocialMedia(responses[6].data);
          nyTimes
            .get(nytReviews(responses[0].data.title))
            .then((response) => {
              setNYTimesReview(
                filterReview(responses[0].data.title, response.data.results)
              );
            });
        })
      );
    return detailObject;
  }
    getDetails();
}, []);

  const filterReview = (title, reviewData) => {
    return reviewData.filter((review) => review.display_title === title)[0];
  };

  return (
    <>
      <Backdrop backdrop={details.backdrop_path} title={details.original_title}/>
      <h1>{details.original_title}</h1>
      <a href={details.homepage}>Website</a>
      <Cast cast={credits.cast} />
      <Crew crew={credits.cast} />
      <Description description={details.overview} />
      <ReleaseDate releaseDate={details.release_date} />
      <Runtime runtime={details.runtime} />
      <SocialMedia socialMedia={socialMedia} />
      <UserScore userScore={details.vote_average} />
      {/* {recommendations ? <PosterScroll films={recommendations} /> : null}
      {similarMovies ? <PosterScroll films={similarMovies} /> : null} */}
      { nyTimesReview ? <Review review={nyTimesReview} /> : null }
      {/* <Videos videos={videos} /> */}
    </>
  );
};

export default Details;
