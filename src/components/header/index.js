import React, { Component } from 'react';
import { withRouter } from "react-router-dom";
import { Link } from 'react-router-dom'

import styles from './header.module.css';

class Header extends Component {

  render() {
    return (
        <header className={styles.header}>
          <div className={styles.divInline}>
            <div
              className={styles.title} 
              onClick={() => {
                this.props.history.push('/home')
              }}
            >Sysmap</div>
            <div className={styles.right}>
              <Link to="/posts">posts</Link>
            </div>
            <div className={styles.right}>
              <Link to="/users">users</Link>
            </div>
          </div>
        </header>
    );
  }
}

export default withRouter(Header);