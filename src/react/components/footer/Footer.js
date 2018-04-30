import React from 'react';

import greenLogo2 from '../../../assets/img/favicon.png'
import whiteLogo from '../../../assets/img/logo-white.png'

const footingItems = [
   'Company', 'Contact', 'Careers', 'Privacy', 'Terms'
];


const Footer = () => {
  return (
    <footer className='footer'>
      <div className='footer__logo-box'>
        <picture>
          <source srcSet={greenLogo2} media="(max-width: 37.5em)"/>
          <img src={whiteLogo} alt='gain train' className='footer__logo'/>
        </picture>

      </div>
      <div className='row'>
        <div className='col-1-of-2'>
          <div className='footer__navigation'>
            <ul>
              {
                footingItems.map((item, i) => (
                  <li key={i} className='footer__item'><a href='/' className='footer__link'>{item}</a></li>
                ))
              }
            </ul>
          </div>
        </div>
        <div className='col-1-of-2'>
          <p className='footer__copyright'>
            <span className='footer__span'>
              Built by Copyright &copy; <a href='/' className='footer__link'>Jan Peter Mamuric </a>.
              2017 - { new Date().getFullYear() }.
            </span>

            <br />
            Original web design accredited to to Jonas Schmedtmann.
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer;
