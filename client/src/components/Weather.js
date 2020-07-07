import React from 'react';
import { Card, Box, makeStyles, Typography, Grow, Grid, useMediaQuery, useTheme } from '@material-ui/core';

const useStyles = makeStyles({
  root: {
    padding: 10,
  },
  image: {
    width: '100%',
    maxHeight: 300,
    borderRadius: 6,
  },
});

export default function Weather(props) {
  const classes = useStyles();

  const theme = useTheme();
  const md = useMediaQuery(theme.breakpoints.up('md'))
  const cardHeight = md ? 300 : '100%';  

  return (
    <div>
      <Grow in={true}>
        <Box boxShadow={6} borderRadius={8} >
          <Card variant="outlined" className={classes.root} style={{height: cardHeight}} >
            <Grid container >
              <Grid item xs={6} container>
                <Grid item xs={12}>
                  <Typography variant="h3" noWrap>{props.city}</Typography>
                </Grid>
                <Grid item xs={12} container>
                  <Grid item xs={7} md={4}>
                    <Typography>Temperature</Typography>
                    <Typography>Wind speed</Typography>
                    <Typography>UV Index</Typography>
                  </Grid>
                  <Grid item xs={5} md={8}>
                    <Typography>{Math.round(props.current.temp)}°C</Typography>
                    <Typography>{props.current.wind_speed} m/s</Typography>
                    <Typography>{Math.round(props.current.uvi)}</Typography>
                  </Grid>
                </Grid>
              </Grid>
              <Grid item xs={6}
                container justify="center"
                alignItems="center">
                <img src={props.image} alt={props.current.weather[0].description} className={classes.image}></img>
              </Grid>
            </Grid>
          </Card>
        </Box>
      </Grow>
    </div>
  );
}