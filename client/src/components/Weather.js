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
    <div style={{ padding: 20 }}>
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
                {props.city && <Typography variant="h3">{props.city}</Typography>}
                {props.temperature && <Typography variant="body1">Temperature: {props.temperature}°C</Typography>}
                {props.feels_like && <Typography variant="body1">Feels like: {props.feels_like}°C</Typography>}
                {props.humidity && <Typography variant="body1">Humidity: {props.humidity}%</Typography>}
                {props.description && <Typography variant="body1">Description: {props.description}</Typography>}
              </CardContent>
            </Card>
          </Box>
        </Grow>
      }
    </div>
  );
}