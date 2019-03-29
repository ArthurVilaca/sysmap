import React from 'react';
import { withRouter } from "react-router-dom";

import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';

import styles from './card-comment.module.css';

const CardComment = withRouter(({ history, data }) =>
  <Card className={styles.card}>
    <CardContent>
      <h5>Name: {data.name}</h5>
      <p>Email: {data.email}</p>
      <p>Body: {data.body}</p>
    </CardContent>
  </Card>
)

export default CardComment;