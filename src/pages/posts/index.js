import React, { Component } from 'react';
import styles from './posts.module.css';

import Service from '../../service'

import CardPost from '../../components/card-post';

class PostsPage extends Component {
  constructor() {
    super();
    this.state = {
      posts: null
    }
  }

  async componentDidMount() {
    let posts = await Service.get('/posts')
    this.setState({ posts: posts.data })
  }

  render() {
    if(!this.state.posts) return (<div>loading...</div>)
    let posts = this.state.posts;
    return (
      <div className={styles.section}>
        {
          posts.map((post) => {
            return (
              <CardPost key={post.id} data={post} />
            )
          })
        }
      </div>
    );
  }
}

export default PostsPage;
