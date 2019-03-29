import React, { Component } from 'react';
import styles from './comments.module.css';

import Service from '../../service'

import CardComment from '../../components/card-comment';

class CommentsPage extends Component {
  constructor() {
    super();
    this.state = {
      comments: null
    }
  }

  async componentDidMount() {
    let comments = await Service.get('/posts/' + this.props.match.params.id + '/comments')
    this.setState({ comments: comments.data })
  }

  render() {
    if(!this.state.comments) return (<div>loading...</div>)
    let comments = this.state.comments;
    return (
      <div className={styles.section}>
        {
          comments.map((comment) => {
            return (
              <CardComment key={comment.id} data={comment} />
            )
          })
        }
      </div>
    );
  }
}

export default CommentsPage;
