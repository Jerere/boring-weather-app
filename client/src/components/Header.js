import React from 'react';
import { Typography, Grid, Link, makeStyles, Paper } from '@material-ui/core/';
import Form from './Form'

const useStyles = makeStyles(theme => ({
    link: {
        fontSize: '1.5em',

    },
    header: {
        padding: theme.spacing(1),
    }
}))

export default function Header(props) {
    const classes = useStyles();

    return (
        <div >
            <Paper elevation={2} className={classes.header}>
                <Grid container alignItems="center" justify="flex-start" spacing={0} >
                    <Grid item xs={12} md={6}>
                        <Typography variant="h1">Weather App</Typography>
                    </Grid>

                    <Grid item xs={12} md={3}>
                        <Form
                            getWeather={props.getWeather}
                            error={props.error}
                        />
                    </Grid>
                    <Grid item xs={12} md={3}>
                        <Link className={classes.link}
                            href="https://github.com/Jerere/boring-weather-app"
                            variant="body2"
                            rel="noopener noreferrer"
                            target="_blank">
                            boring-weather-app
                    </Link>
                    </Grid>
                </Grid>
            </Paper>
        </div >
    )
}
