import React, { Component } from 'react';
import styles from './user.module.css';

import Service from '../../service'

class UserPage extends Component {
  constructor() {
    super();
    this.state = {
      user: null
    }
  }

  async componentDidMount() {
    let user = await Service.get('/users/' + this.props.match.params.id)
    this.setState({ user: user.data })
  }

  render() {
    if(!this.state.user) return (<div>loading...</div>)
    let user = this.state.user;
    return (
      <div className={styles.section}>
        <h3>Name: {user.name}</h3>
        <h5>username: {user.username}</h5>
        <h5>email: {user.email}</h5>
        <h5>phone: {user.phone}</h5>
        <h5>website: {user.website}</h5>

        <hr />
        <p><b>address</b></p>
        <p>street: {user.address.street}</p>
        <p>suite: {user.address.suite}</p>
        <p>city: {user.address.city}</p>
        <p>zipcode: {user.address.zipcode}</p>

        <p><b>geo location</b></p>
        <p>lat: {user.address.geo.lat}</p>
        <p>lng: {user.address.geo.lng}</p>

        <hr />
        <p><b>company</b></p>
        <p>name: {user.company.name}</p>
        <p>catchPhrase: {user.company.catchPhrase}</p>
        <p>bs: {user.company.bs}</p>
      </div>
    );
  }
}

export default UserPage;
