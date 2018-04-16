import React from 'react';

import '../../../assets/sass/main.scss';

import greenLogo2 from '../../../assets/img/favicon.png'

const Footer = () => {
  return (
    <footer className='footer'>
      <div className='footer__logo-box'>
        <img src={greenLogo2} alt='gain train' />
      </div>
      <div className='row'>
        <div className='col-1-of-2'>
          <div className='footer__navigation'></div>
          <ul>
            <li className='footer__item'><a href='/' className='footer__link'>Company</a></li>
            <li className='footer__item'><a href='/' className='footer__link'>Contact Us</a></li>
            <li className='footer__item'><a href='/' className='footer__link'>Careers</a></li>
            <li className='footer__item'><a href='/' className='footer__link'>Privacy Policy</a></li>
            <li className='footer__item'><a href='/' className='footer__link'>Terms</a></li>
          </ul>
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
