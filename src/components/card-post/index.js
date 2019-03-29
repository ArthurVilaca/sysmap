import React from 'react';
import { withRouter } from "react-router-dom";

import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';

import styles from './card-post.module.css';

const CardPost = withRouter(({ history, data }) =>
  <Card className={styles.card}>
    <CardContent>
      <h5>Title: {data.title}</h5>
      <p>Description: {data.body}</p>
    </CardContent>
    <CardActions>
      <Button
        variant="contained"
        color="primary"
        size="small"
        onClick={() => {
          history.push('/posts/' + data.id + '/comments')
        }}
      >Comments</Button>
    </CardActions>
  </Card>
)

export default CardPost;