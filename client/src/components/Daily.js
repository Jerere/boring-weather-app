import React from 'react';
import weatherIcons from '../styles/weather-icons/weatherIcons.json';
import '../styles/weather-icons/weather-icons.min.css'

import { Card, makeStyles, Box, Grid, Typography, GridList, GridListTile, useMediaQuery, useTheme } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'space-around',
        overflow: 'hidden',

    },
    gridList: {
        width: '100%',
        flexWrap: 'nowrap',
        transform: 'translateZ(0)',
    },
    card: {
        padding: 5,
    },
    box: {
        margin: 8,
    },
    tile: {
        marginBottom: 12,
    }
}));

export default function Weekly(props) {

    const theme = useTheme();
    const matches = {
        xs: useMediaQuery(theme.breakpoints.down('xs')),
        sm: useMediaQuery(theme.breakpoints.down('sm'))
    }


    const columns = (matches) => {
        if (matches.xs) return 1.5
        else if (matches.sm) return 2.5
        else return 4.5
    }

    const icon = (code) => {
        var prefix = 'wi wi-';
        var icon = weatherIcons[code].icon;
        if (!(code > 699 && code < 800) && !(code > 899 && code < 1000)) {
            icon = 'day-' + icon;
        }

        icon = prefix + icon;
        return icon;
    }

    const dateOptions = { weekday: 'long', month: 'numeric', day: 'numeric' };
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <GridList className={classes.gridList} cols={columns(matches)} cellHeight={'auto'}>
                {props.daily.map((day) => (
                    <GridListTile key={day.dt} className={classes.tile}>
                        <Box boxShadow={4} borderRadius={8} className={classes.box}>
                            <Card className={classes.card} variant='outlined'>
                                <Typography variant="h6" display="inline">
                                    {new Intl.DateTimeFormat('en', dateOptions).format(new Date(day.dt * 1000))}
                                </Typography>
                                <Typography display="inline">
                                    <i className={icon(day.weather[0].id)}></i>
                                </Typography>
                                <Grid container spacing={4}>
                                    <Grid item xs={4}>
                                        <Typography>Morning</Typography>
                                        <Typography>Day</Typography>
                                        <Typography>Evening</Typography>
                                    </Grid>
                                    <Grid item xs={8}>
                                        <Typography>{day.temp.morn}</Typography>
                                        <Typography>{day.temp.day}</Typography>
                                        <Typography>{day.temp.eve}</Typography>
                                    </Grid>
                                </Grid>
                            </Card>
                        </Box>
                    </GridListTile>
                ))}
            </GridList>
        </div>
    )
}