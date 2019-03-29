import React from 'react';
import { withRouter } from "react-router-dom";

import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';

import styles from './card-user.module.css';

const CardUser = withRouter(({ history, data }) =>
  <Card className={styles.card}>
    <CardContent>
      <h5>Name: {data.name}</h5>
      <p>email: {data.email}</p>
    </CardContent>
    <CardActions>
      <Button
        variant="contained"
        color="primary"
        size="small"
        onClick={() => {
          history.push('/users/' + data.id)
        }}
      >Details</Button>
    </CardActions>
  </Card>
)

export default CardUser;