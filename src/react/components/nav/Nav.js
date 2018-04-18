import React, { Component } from 'react';
import { connect } from 'react-redux';

import * as actions from '../../../redux/actions/action_popup';
import '../../../assets/sass/main.scss';

/*
  const checkboxHack = (
    <div>
      <input type='checkbox' className='navigation__checkbox' id='nav-toggle'
        onClick={this.handleToggle}/>
      <label className='navigation__button' htmlFor='nav-toggle'>
        <span className='navigation__icon'>&nbsp;</span>
      </label>

      <div className='navigation__background' >&nbsp;</div>
      <nav className='navigation__main'>
        <ul className='navigation__list'>
          <li onClick={this.handleToggle} className='navigation__item'><a href='#about' className='navigation__link'>About</a></li>
          <li onClick={this.handleToggle} className='navigation__item'><a href='#benefits' className='navigation__link'>Benefits</a></li>
          <li onClick={this.handleToggle} className='navigation__item'><a href='#pricing' className='navigation__link'>Pricing</a></li>
          <li onClick={this.handleToggle} className='navigation__item'><a href='#review' className='navigation__link'>Reviews</a></li>
        </ul>
      </nav>
    </div>
  )
*/

class Nav extends Component {

  handleToggle = () => {

    this.props.isOpen
    ? this.props.togglePopup(false)
    : this.props.togglePopup(true)
  }

  render() {
    return (
      <div className='nav'>
        <div className={!this.props.isOpen ? 'navigation__button' : ' navigation__button nav__button'} onClick={this.handleToggle}>
          <span className={ !this.props.isOpen ? 'navigation__icon' : 'nav__icon'}>&nbsp;</span>
        </div>

        <div
          className={ this.props.isOpen
            ? `nav__backdrop nav__backdrop-show` : `nav__backdrop nav__backdrop-hide`
          } >
          <nav className={this.props.isOpen ? 'nav__content nav__content-show':'nav__content nav__content-hide'}>
            <ul className='navigation__list'>
              <li onClick={this.handleToggle} className='navigation__item'><a href='#about' className='navigation__link'>About</a></li>
              <li onClick={this.handleToggle} className='navigation__item'><a href='#benefits' className='navigation__link'>Benefits</a></li>
              <li onClick={this.handleToggle} className='navigation__item'><a href='#pricing' className='navigation__link'>Pricing</a></li>
              <li onClick={this.handleToggle} className='navigation__item'><a href='#review' className='navigation__link'>Reviews</a></li>
            </ul>
          </nav>
        </div>
      </div>
    );
  }
}

const mapStateToProps = ({ popup }) => {
  return { isOpen: popup.isOpen };
};

export default connect(mapStateToProps, actions)(Nav);
