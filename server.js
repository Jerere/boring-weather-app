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
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${WEATHER_API_KEY}&units=metric`;
    getGeoData(location);    

    let data = getWeahterData(url)
        .then(data => res.send(data))
        .catch(err => console.log(err))
})

// fetch wheater
const getWeahterData = async url => {
    let response = await fetch(url);
    let data = await response.json();
    return data;
}

// fetch coordinates
const getGeoData = async location => {
    const url = `https://api.mapbox.com/geocoding/v5/mapbox.places/${location}.json?limit=1&access_token=${GEO_API_KEY}`;
    const response = await (await fetch(url)).json();
    
    let lon = response.features[0].center[0]
    let lat = response.features[0].center[1]
    console.log(location + ': ', lat, lon);
    
}

app.listen(port, () => console.log(`Server started on port ${port}`))