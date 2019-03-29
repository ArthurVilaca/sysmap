import React, { Component } from 'react';
import styles from './footer.module.css';

class Footer extends Component {
  render() {
    return (
        <footer className={styles.footer}>
          <div className={styles.name}>Arthur Fonseca Vilaça</div>
          <div className={styles.email}>vilaca.arthur.f@gmail.com</div>
        </footer>
    );
  }
}

export default Footer;
