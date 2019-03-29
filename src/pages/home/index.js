import React, { Component } from 'react';
import { Link } from 'react-router-dom'

class HomePage extends Component {
  render() {
    return (
      <div>
        <div>
          <Link to="/posts">posts</Link>
        </div>

        <div>
          <Link to="/users">users</Link>
        </div>
      </div>
    );
  }
}

export default HomePage;
