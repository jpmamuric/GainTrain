import React from 'react';

import reviewData from './Reviews.json';
import videoMp4 from '../../../assets/img/video.mp4';
import videoWebm from '../../../assets/img/video.webm'
import '../../../assets/sass/main.scss';

const Reviews = () => (
  <section className='section-reviews' id='review'>
    <div className='background-video'>
      <video
        autoPlay
        muted
        loop
        className='background-video__content'>
        <source src={videoMp4} type='video/mp4'/>
        <source src={videoWebm} type='video/webm'/>
        Sorry, your browser does not support this video.
      </video>
    </div>

    <div className='util-center-text util-margin-bottom-big'>
      <h2 className='heading-secondary'>
        Latest Reviews
      </h2>
    </div>

      {
        reviewData.map(review => (
          <div className='row' key={review.name}>
            <div className='review'>
              <figure className='review__shape'>
                <div className={`review__img ${review.picture}`}/>
                <figcaption className='review__caption'>{review.name}</figcaption>
              </figure>
              <div className='review__text'>
                <h2 className='heading-tertiary util-margin-bottom-small'>
                  {review.heading}
                </h2>
                <p className=''>
                  {review.comment}
                </p>
              </div>
            </div>
          </div>
        ))
      }

      <div className='util-center-text util-margin-top-big'>
        <a href='/' className='btn-text'>Read All Reviews</a>
      </div>

  </section>
)

export default Reviews;
