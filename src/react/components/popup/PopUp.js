import React from 'react';

import '../../../assets/sass/main.scss';
import image9 from '../../../assets/img/nat-9.jpg';

const Popup = () => (
  <div className='popup' id='popup'>
    <div className="popup__content">
      <div className="popup__left">
        <img src={image9} alt="Tour" className='popup__img'/>
        <img src={image9} alt="Tour display" className='popup__img'/>
      </div>
      <div className="popup__right">
        <a href="#pricing" className="popup__close">&times;</a>
        <h2 className="heading-secondary util-margin-bottom-med">Start Booking Now</h2>
        <h3 className="heading-tertiary">Important &ndash; </h3>
        <p className="popup__text">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc sed neque feugiat lacus aliquet consectetur quis nec ante. Suspendisse dapibus feugiat nisl, vitae pellentesque leo porta pretium. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc sed neque feugiat lacus aliquet consectetur quis nec ante. Suspendisse dapibus feugiat nisl, vitae pellentesque leo porta pretium.
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc sed neque feugiat lacus aliquet consectetur quis nec ante. Suspendisse dapibus feugiat nisl, vitae pellentesque leo porta pretium.
        </p>
        <a href="/" className="btn btn--green">Book Now</a>
      </div>
    </div>
  </div>
)

export default Popup;
