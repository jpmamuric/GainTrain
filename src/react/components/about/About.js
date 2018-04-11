import React from 'react';

import './About.css';

import nat1 from '../../../assets/img/nat-1-large.jpg'
import nat2 from '../../../assets/img/nat-2-large.jpg'
import nat3 from '../../../assets/img/nat-3-large.jpg'

const About = () => {
  return (
    <section className='section-about' id='about'>
      <div className='util-center-text util-margin-bottom-big'>
        <h2 className='heading-secondary'>
          Improve your creativity with dynamic training
        </h2>
      </div>

      <div className='row'>
        <div className='col-1-of-2'>
          <h3 className='heading-tertiary util-margin-bottom-small'> Online group classes </h3>
          <p className='paragraph'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc sed neque feugiat lacus aliquet consectetur quis nec ante. Suspendisse dapibus feugiat nisl, vitae pellentesque leo porta pretium
          </p>
          <h3 className='heading-tertiary  util-margin-bottom-small'> One-on-One training </h3>
          <p className='paragraph'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc sed neque feugiat lacus aliquet consectetur.
          </p>
          <a href='#header' className='btn-text'>
            Learn More &rarr;
          </a>
        </div>
        <div className='col-1-of-2'>
          <div className='composition'>
            <img src={nat1} alt='Nature 1' className='composition__photo composition__photo--p1'/>
            <img src={nat2} alt='Nature 2' className='composition__photo composition__photo--p2'/>
            <img src={nat3} alt='Nature 3' className='composition__photo composition__photo--p3'/>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About;
