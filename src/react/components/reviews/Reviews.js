import React from 'react';

import image8 from '../../../assets/img/nat-8.jpg';
import './Reviews.css';

const Reviews = () => (
  <section className='section-reviews'>
    <div className='util-center-text util-margin-bottom-big'>
      <h2 className='heading-secondary'>
        We strive to improve your success
      </h2>
    </div>
    <div className='row'>
      <div className='review'>
        <figure className='review__shape'>
          <img src={image8} alt='person review' className='review__img'/>
        </figure>
        <div className='review__text'>
          <h2 className='heading-tertiary util-margin-bottom-small'>
            I had an amazing time!
          </h2>
          <p className=''>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc sed neque feugiat lacus aliquet consectetur. Nunc sed neque feugiat lacus aliquet consectetur. Aliquet consectetur. Nunc sed neque feugiat lacus aliquet consectetur.
          </p>
        </div>
      </div>
    </div>
  </section>
)

export default Reviews;
