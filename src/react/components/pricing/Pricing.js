import React from 'react';

import './Pricing.css';

import Data from './PricingData.json'

const Pricing = () => (
  <section className='section-tours' id='pricing'>
    <div className='util-center-text util-margin-bottom-big' >
      <h2 className='heading-secondary'> Most Popular Courses </h2>
    </div>

    <div className='row'>
      {
        Data.map(course => (
          <div key={course.heading} className='col-1-of-3'>
            <div className='card'>
              <div className='card__side card__side--front'>
                <div className={`card__picture ${course.pictureModifier}`}/>
                <h4 className='card__heading'>
                  <span className={`card__heading-span ${course.headingModifier}`}>
                    {course.heading}
                  </span>
                </h4>
                <div className='card__details'>
                  <ul>
                    <li>{course.details.days}</li>
                    <li>{course.details.size}</li>
                    <li>Online: {course.details.online}</li>
                    <li>Difficulty : {course.details.difficulty}</li>
                  </ul>
                </div>
              </div>
              <div className={`card__side card__side--back ${course.backModifier}`}>
                <div className='card__cta'>
                  <div className='card__price-box'>
                    <p className='card__price-only'>Only</p>
                    <p className='card__price-value'>${course.ctaPrice}</p>
                  </div>
                  <a href='#popup' className='btn btn--white'>Enroll Now!</a>
                </div>
              </div>
            </div>
          </div>
        ))
      }
    </div>

    <div className='util-center-text util-margin-top-big' >
      <a href='/' className='btn btn--green'>Learn More</a>
    </div>


  </section>
)

export default Pricing;
