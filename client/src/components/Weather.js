import React from 'react';
import { Card, Box, makeStyles, Typography, Grow, Grid } from '@material-ui/core';

const useStyles = makeStyles({
  root: {
    maxWidth: '100%',
    height: 300,
    padding: 10,
  },
  image: {
    maxHeight: '100%'
  },
});

export default function Weather(props) {
  const classes = useStyles();
  //const imgUrl = require(`../images/thunder2.jpg`)

  return (
    <div>
      {props.image &&
        <Grow in={true}>
          <Box boxShadow={6} borderRadius={8} >
          <Card variant="outlined" className={classes.root}>
            <Grid container>
              <Grid item xs={6} container>
                <Grid item xs={12}>
                  <Typography variant="h3" noWrap> {props.city}  {Math.round(props.current.temp)}°C </Typography>
                </Grid>
                <Grid item xs={12}>
                  <Typography variant="body2" >({props.timezone})</Typography>
                </Grid>
                <Grid item xs={12}>
                  <Typography variant="body1">Temperature: {props.current.temp}°C</Typography>
                </Grid>
              </Grid>
              <Grid item xs={6} container>
                <Grid item xs={12}>
                  image
                </Grid>
              </Grid>
            </Grid>
            </Card>
          </Box>
        </Grow>
      }
    </div>
  );
}