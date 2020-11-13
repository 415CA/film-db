import React from 'react';
import Cast from './Cast';
import Crew from './Crew';
import Description from './Description';
import ReleaseDate from './ReleaseDate';
import Runtime from './Runtime';
import SocialMedia from './SocialMedia';
import UserScore from './UserScore';

const Details = () => {
  return (
    <>
      <Cast />
      <Crew />
      <Description />
      <ReleaseDate />
      <Runtime />
      <SocialMedia />
      <UserScore />
    </>
  );
};

export default Details;
