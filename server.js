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
    const coords = location.split(',');
    
    getWeahterData(coords)
        .then(data => res.send(data))
        .catch(err => console.log(err))
})

// location search api
app.get('/api/location/:input', (req, res) => {
    
    const input = req.params.input;
    console.log(input);

    const url = `https://api.mapbox.com/geocoding/v5/mapbox.places/${input}.json?types=place&limit=5&access_token=${GEO_API_KEY}`;
    searchLocation(url)
        .then(data => res.send(data))
        .catch(err => console.log(err))
})

const searchLocation = async url => {
    const data = await (await fetch(url)).json()
    return data;
}
// fetch wheater
const getWeahterData = async coords => {
    const url = `https://api.openweathermap.org/data/2.5/onecall?lat=${coords[1]}&lon=${coords[0]}&exclude=minutely&appid=${WEATHER_API_KEY}&units=metric`
    let data = await (await fetch(url)).json();
    return data;
}

app.listen(port, () => console.log(`Server started on port ${port}`))