import React from 'react';
import styles from './Card.scss';
import PropTypes from 'prop-types';

class Card extends React.Component {

    static propTypes = {
      title: PropTypes.node.isRequired,
      removeCard: PropTypes.func,
      id: PropTypes.node.isRequired,
    }

    render () {

      const {title, removeCard, id} = this.props;

      return (
        <div className= {styles.component}>
          <h3 className= {styles.title}> {title}</h3>
          <span className={styles.title} onClick={() => {
            if(window.confirm('Are You Shure ?')) {
              removeCard(id);
            }
          }
          }>X</span>
        </div>
      );
    }
}

export default Card;