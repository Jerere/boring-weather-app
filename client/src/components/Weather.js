import React from 'react';
import { Card, CardMedia, CardContent, makeStyles, Typography, Box, Grow } from '@material-ui/core';

const useStyles = makeStyles({
  card: {
    maxWidth: 400,
  },
  media: {
    height: 140,
  },
});

export default function Weather(props) {
  const classes = useStyles();
  return (
    <div>
      {props.image &&
        <Grow in={true}>
          <Box boxShadow={6} borderRadius={16}>
            <Card variant="outlined" className={classes.card}>
              <CardMedia
                className={classes.media}
                component="img"
                image={props.image}
              />
              <CardContent>
                {props.city && <Typography variant="h3" noWrap>{props.city}  {Math.round(props.current.temp)}°C</Typography>}
                {props.timezone && <Typography variant="body2" >({props.timezone})</Typography>}
                {props.current && <Typography variant="body1">Temperature: {props.current.temp}°C</Typography>}
              </CardContent>
            </Card>
          </Box>
        </Grow>
      }
    </div>
  );
}