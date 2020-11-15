import React from 'react';

const Review = ({ review }) => {
  return (
    <div className='pa4'>
      <blockquote className='athelas ml0 mt0 pl4 black-90 bl bw2 b--black'>
        <h5>{review.headline}</h5>
        <p className='f6 f5-m f4-l lh-copy measure mt0'>
          {review.summary_short}
        </p>
        <cite className='f6 ttu tracked fs-normal'>{review.byline}</cite>
      </blockquote>
    </div>
  );
};

export default Review;
