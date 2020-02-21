import React from 'react';
import {NavLink, Link} from 'react-router-dom';
import styles from './Header.scss';
import Container from '../Container/Container';
import Icon from '../Icon/Icon';
import {settings} from '../../data/dataStore';
import Search from '../Search/Search';

class Header extends React.Component {

  render() {

    const {home, info, faq, active}=settings.header.links;

    return (
      <header className={styles.component}>
        <Container>
          <div className={styles.wrapper}>
            <Link className={styles.logo} to='/'>
              <Icon name={settings.headerIcon} />
            </Link>
            <nav>
              <NavLink exact to={home.path} activeClassName={active}>{home.title}</NavLink>
              <NavLink exact to={info.path}  activeClassName={active}>{info.title}</NavLink>
              <NavLink exact to={faq.path}  activeClassName={active}>{faq.title}</NavLink>
            </nav>
            <Search />
          </div>
        </Container>
      </header>
    );
  }
}

export default Header;

