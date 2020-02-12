import React from 'react';
import { Card, CardMedia, CardContent, makeStyles, Typography, Box } from '@material-ui/core';
import Detect from './Detect';

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
  let image = Detect(props.id)

  return (
    <div style={{ padding: 20 }}>
      {props.id &&
        <Box boxShadow={6} borderRadius={16}>
          <Card variant="outlined" className={classes.card}>
            <CardMedia
              className={classes.media}
              component="img"
              image={require(`../images/${image}.gif`)}
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
      }
    </div>
  );
}