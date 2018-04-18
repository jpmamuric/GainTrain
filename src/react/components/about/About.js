import React from 'react';

import '../../../assets/sass/main.scss';

import nat1Large from '../../../assets/img/nat-1-large.jpg'
import nat1      from '../../../assets/img/nat-1.jpg'
import nat2Large from '../../../assets/img/nat-2-large.jpg'
import nat2      from '../../../assets/img/nat-2.jpg'
import nat3Large from '../../../assets/img/nat-3-large.jpg'
import nat3      from '../../../assets/img/nat-3.jpg'

const About = () => {
  return (
    <section className='section-about' id='about'>
      <div className='util-center-text util-margin-bottom-big'>
        <h2 className='heading-secondary'>
          Come see the wonders of nature
        </h2>
      </div>

      <div className='row'>
        <div className='col-1-of-2'>
          <h3 className='heading-tertiary util-margin-bottom-small'> Explore the uplifting serenity of nature </h3>
          <p className='paragraph'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc sed neque feugiat lacus aliquet consectetur quis nec ante. Suspendisse dapibus feugiat nisl, vitae pellentesque leo porta pretium
          </p>
          <h3 className='heading-tertiary  util-margin-bottom-small'> Professional guides on duty </h3>
          <p className='paragraph'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc sed neque feugiat lacus aliquet consectetur.
          </p>
          <a href='#header' className='btn-text'>
            Learn More &rarr;
          </a>
        </div>
        <div className='col-1-of-2'>
          <div className='composition'>
            { /* Resolution Switching*/ }
            <img
              srcSet={`${nat1} 1x, ${nat1Large} 2x`}
              sizes='(max-width: 56.25em), 18vw (max-width: 37.5em) 26vw, 18.75em'
              alt='Nature 1'
              className='composition__photo composition__photo--p1'
              src={nat1Large}
              />

            { /* Density Switching*/ }
            <img srcSet={`${nat2} 1x, ${nat2Large} 2x`} alt='Nature 2' className='composition__photo composition__photo--p2'/>

            <img srcSet={`${nat3} 1x, ${nat3Large} 2x`} alt='Nature 3' className='composition__photo composition__photo--p3'/>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About;
