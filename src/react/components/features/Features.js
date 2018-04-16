import React from 'react';

import '../../../assets/sass/main.scss';

const Features = () => {
  return (
    <section className='section-features' id='benefits'>
      <div className='row'>
        <div className='col-1-of-4'>
          <div className='feature-box'>
            <i className='feature-box__icon icon-basic-world'></i>
            <h3 className='heading-teriary util-margin-bottom-small'>Find Your Passion</h3>
            <p className='feature-box__text'>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc sed neque feugiat lacus aliquet consectetur.
            </p>
          </div>
        </div>
        <div className='col-1-of-4'>
          <div className='feature-box'>
            <i className='feature-box__icon icon-basic-compass'></i>
            <h3 className='heading-teriary util-margin-bottom-small'>Regain your thoughts</h3>
            <p className='feature-box__text'>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc sed neque feugiat lacus aliquet consectetur.
            </p>
          </div>
        </div>
        <div className='col-1-of-4'>
          <div className='feature-box'>
            <i className='feature-box__icon icon-basic-map'></i>
            <h3 className='heading-teriary util-margin-bottom-small'>Train at Your Pace</h3>
            <p className='feature-box__text'>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc sed neque feugiat lacus aliquet consectetur.
            </p>
          </div>
        </div>
        <div className='col-1-of-4'>
          <div className='feature-box'>
            <i className='feature-box__icon icon-basic-heart'></i>
            <h3 className='heading-teriary util-margin-bottom-small'>Never Lose a Thought</h3>
            <p className='feature-box__text'>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc sed neque feugiat lacus aliquet consectetur.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Features;
