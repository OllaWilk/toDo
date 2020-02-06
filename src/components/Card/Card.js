import React from 'react';
import styles from './Card.scss';
import PropTypes from 'prop-types';

class Card extends React.Component {

    static PropTypes = {
        title: PropTypes.node.isRequired,
    }

    render () {
        return (
            <div className= {styles.component}>
                <h3 className= {styles.title}> {this.props.title}</h3>
            </div>
        )
    }
}

export default Card;