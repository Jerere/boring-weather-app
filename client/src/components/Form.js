import React from 'react';
import { TextField, IconButton, Grid, makeStyles } from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search';
import { Alert, AlertTitle } from '@material-ui/lab';

const useStyles = makeStyles(theme => ({
  FormTextField: {
    fontSize: '1.5em',
    width: '10em',
  },
  FormInputLabel: {
    fontSize: '1.5em',
    
  }
}))

export default function Form(props) {
  const classes = useStyles();

  return (
    <div >
      <Grid container>
        <form onSubmit={props.getWeather} autoComplete="off">
          <TextField name="city" label="Location" className={classes.textfield}
            InputProps={{
              classes: {
                input: classes.FormTextField
              }
            }}
            InputLabelProps={{
              classes: {
                root: classes.FormInputLabel
              }
            }}
          />
          <IconButton aria-label="search" type="submit">
            <SearchIcon fontSize="large" />
          </IconButton>
        </form>

        {props.error &&
          <Alert severity="error">
            <AlertTitle>{props.error}</AlertTitle>
          </Alert>
        }
      </Grid>
    </div >
  );
}
