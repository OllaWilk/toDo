import React from 'react';
import styles from './Container.scss';
import PropTypes from 'prop-types';

const Container = ({children}) => (
  <div className= {styles.component}>
    {props.children}
  </div>
);

Container.propTypes= {
  children: PropTypes.node,
};

export default Container;