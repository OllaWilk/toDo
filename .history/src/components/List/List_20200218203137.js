import React from 'react';
import styles from './List.scss';
import Hero from '../Hero/Hero';
import Column from '../Column/ColumnContainer';
import Creator from '../Creator/Creator';
import PropTypes from 'prop-types';
import {settings} from '../../data/dataStore';
import ReactHtmlParser from 'react-html-parser';
import Container from '../Container/Container';


class List extends React.Component {

    static propTypes= {
      title: PropTypes.node,
      image: PropTypes.node.isRequired,
      description: PropTypes.node,
      columns: PropTypes.array,
      addColumn: PropTypes.func,
    }

    static defaultProps= {
      description: settings.defaultListDescription,
    }

    render()  {

      const {title, image, description, columns, addColumn} = this.props;

      return (
        <section className= {styles.component}>
          <Hero titleText= {title} backgroundImage= {image}/>
          <div className= {styles.description}>
            {ReactHtmlParser(description)}
          </div>
          <div className= {styles.columns}>
            {columns.map(columnData => (
              <Column key={columnData.id} {...columnData} />
            ))}
          </div>
          <div className={styles.creator}>
            <Creator text={settings.columnCreatorText} action={addColumn}/>
          </div>
        </section>
      );
    }
}

export default List;