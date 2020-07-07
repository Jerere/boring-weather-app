import React from 'react';
import { Card, makeStyles, Box } from '@material-ui/core';
import { Chart } from 'react-charts'

const useStyles = makeStyles(theme => ({
    chart: {
        fontFamily: 'Arial',
        width: '100%',
        height: 300,
        margin: 10,
    },
}))

export default function WeahterChart(props) {

    const classes = useStyles();

    const hourlyTemp = props.hourly.map(data => ({
        x: new Date(data.dt * 1000),
        y: data.temp,
        r: undefined
    }))

    const data = [
        {
            label: 'Temperature',
            datums: hourlyTemp,
        },
    ]
    const axes = [
        { primary: true, type: 'time', position: 'bottom' },
        { type: 'linear', position: 'left' },
    ]

    const series = ({
        showPoints: false
    })

    const getSeriesStyle = React.useCallback(
        () => ({
            transition: 'all .5s ease'
        }),
        []
    )
    const getDatumStyle = React.useCallback(
        () => ({
            transition: 'all .5s ease'
        }),
        []
    )

    return (
        <div >
            <Box boxShadow={6} borderRadius={8}>
                <Card variant="outlined" >
                    <div className={classes.chart}>
                        <Chart
                            data={data}
                            axes={axes} 
                            series={series}
                            tooltip
                            getSeriesStyle={getSeriesStyle}
                            getDatumStyle={getDatumStyle} />
                    </div>
                </Card>
            </Box>
        </div>
    )
}