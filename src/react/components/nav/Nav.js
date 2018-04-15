import React, { Component } from 'react';

import './Nav.css'

class Nav extends Component {
  state = {
    checked: false
  }

  render() {
    return (
      <div>
        <input type='checkbox' className='navigation__checkbox' id='nav-toggle'/>
        <label className='navigation__button' htmlFor='nav-toggle'>
          <span className='navigation__icon'>&nbsp;</span>
        </label>
        <div className='navigation__background' >&nbsp;</div>
        <nav className='navigation__main'>
          <ul className='navigation__list'>
            <li className='navigation__item'><a href='#about' className='navigation__link'>About</a></li>
            <li className='navigation__item'><a href='#benefits' className='navigation__link'>Benefits</a></li>
            <li className='navigation__item'><a href='#pricing' className='navigation__link'>Pricing</a></li>
            <li className='navigation__item'><a href='#review' className='navigation__link'>Reviews</a></li>
          </ul>
        </nav>
      </div>
    )
  }
}

export default Nav;
