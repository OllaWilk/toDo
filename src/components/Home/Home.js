import React from 'react';
import styles from './Home.scss';
import List from '../List/ListContainer';
import PropTypes from 'prop-types';
import Search from '../Search/SearchContainer';
import {listData} from '../../data/dataStore';


class Home extends React.Component {

  static = {
    lists: listData || [],
  }

  static propTypes = {
    title: PropTypes.node,
    subtitle: PropTypes.node,
    lists: PropTypes.array,
  }

  render() {
    const {title, subtitle, lists} = this.props;
    return (
      <main className={styles.component}>
        <h1 className={styles.title}>{title}</h1>
        <h2 className={styles.subtitle}>{subtitle}</h2>
        <Search />
        <div className= {styles.columns}>
          {lists.map(listData => (
            <List key={listData.id} {...listData} />
          ))}
        </div>
      </main>
    );
  }
}

export default Home;
