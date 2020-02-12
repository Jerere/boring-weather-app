import React from 'react';
import { TextField, IconButton, Paper, makeStyles } from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search';
import { Alert, AlertTitle } from '@material-ui/lab';

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    
    '& > *': {
      backgroundColor: "#eee",
    },
  },
}));

export default function Form(props) {

  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Paper elevation={6}>
      <form onSubmit={props.getWeather} autoComplete="off" style={{margin: 10}}>
        <TextField id="standard-basic" variant="standard" name="city" label="Location"/>
        <IconButton aria-label="search" type="submit">
          <SearchIcon fontSize="large" />
        </IconButton>
      </form>

      {props.error &&
        <Alert severity="error">
          <AlertTitle>{props.error}</AlertTitle>
        </Alert>
      }
      </Paper>
    </div>
  );
}
