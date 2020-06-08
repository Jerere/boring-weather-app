const express = require('express')
const fetch = require('node-fetch');
const app = express();
const port = 5000;
require('dotenv').config()

const WEATHER_API_KEY = process.env.WEATHER_API_KEY;
const GEO_API_KEY = process.env.GEO_API_KEY;

// weather api
app.get('/api/weather/:location', (req, res) => {
    const location = req.params.location;

    getGeoData(location)
        .then(data => getWeahterData(data))
        .then(data => res.send(data))
        .catch(err => console.log(err))
})

// fetch wheater
const getWeahterData = async coords => {
    if (!coords.code) {
        const url = `https://api.openweathermap.org/data/2.5/onecall?lat=${coords[1]}&lon=${coords[0]}&exclude=minutely&appid=${WEATHER_API_KEY}&units=metric`
        let data = await (await fetch(url)).json();
        return data;
    }
    else { return coords }
}

// fetch coordinates
const getGeoData = async location => {
    const url = `https://api.mapbox.com/geocoding/v5/mapbox.places/${location}.json?limit=1&autocomplete=false&access_token=${GEO_API_KEY}`;
    const response = await (await fetch(url)).json();

    try {
        const coords = response.features[0].center;
        return coords;
    }
    catch (e) {
        console.log(e);
        const error = {
            message: 'Location not found',
            code: 404
        }
        return error;
    }
}

app.listen(port, () => console.log(`Server started on port ${port}`))