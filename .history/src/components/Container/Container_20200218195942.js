import React from 'react';
import styles from './Hero.scss';
import PropTypes from 'prop-types';
import ReactHtmlParser from 'react-html-parser';

const Hero = props => (
  <div className= {styles.component}>
      
  </div>
);

Hero.propTypes= {
  titleText: PropTypes.node.isRequired,
  backgroundImage: PropTypes.string,
};

export default Hero;