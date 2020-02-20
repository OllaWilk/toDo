import React from 'react';
import Container from '../Container/Container';
import Hero from '../Hero/Hero';
import {faq} from '../../data/dataStore';
import styles from './Faq.scss';

const Faq = () => (
  <Container>
    <Hero titleText={faq.title} backgroundImage={faq.image} />
    <p>{faq.textContent}</p>
    {Object.keys(faq.questions).map(item => {
      return (
        <div className={styles.article} key={item}>
          <p className={styles.question}>{faq.questions[item].question}</p>
          <p className={styles.answer}>{faq.questions[item].answer}</p>
        </div>
      );
    })}
  </Container>
);

export default Faq;