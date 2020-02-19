import React from 'react';
import {NavLink, Link} from 'react-router-dom';
import styles from './Header.scss';
import Container from '../Container/Container';
import PropTypes from 'prop-types';
import Icon from '../Icon/Icon';

class Header extends React.Component {

    static propTypes = {
      to: PropTypes.string,
    }

    render() {
      return (
        <header className={styles.component}>
          <Container>
            <div className={styles.wrapper}>
              <Link className={styles.logo} to='/'>
                <Icon />
              </Link>
              <nav>
                <NavLink exact to='/'>Home</NavLink>
                <NavLink exact to='/info'>Info</NavLink>
              </nav>
            </div>
          </Container>
        </header>
      );
    }
}

export default Header;

