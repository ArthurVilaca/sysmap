import React, { Component } from 'react';
import styles from './users.module.css';

import Service from '../../service'

import CardUser from '../../components/card-user';

class UsersPage extends Component {
  constructor() {
    super();
    this.state = {
      users: null
    }
  }

  async componentDidMount() {
    let users = await Service.get('/users')
    this.setState({ users: users.data })
  }

  render() {
    if(!this.state.users) return (<div>loading...</div>)
    let users = this.state.users;
    return (
      <div className={styles.section}>
        {
          users.map((user) => {
            return (
              <CardUser key={user.id} data={user} />
            )
          })
        }
      </div>
    );
  }
}

export default UsersPage;
