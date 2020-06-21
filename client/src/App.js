import React from 'react';
import Header from './components/Header';
//import Form from './components/Form';
import Weather from './components/Weather';
import { Grid, createMuiTheme, responsiveFontSizes, ThemeProvider } from '@material-ui/core'
import OptImage from './components/OptImage';
import WeatherChart from './components/WeatherChart';
import Daily from './components/Daily'

let theme = createMuiTheme();
theme = responsiveFontSizes(theme);

class App extends React.Component {

  state = {
    city: undefined,
    timezone: undefined,
    current: undefined,
    hourly: undefined,
    daily: undefined,
    id: undefined,
    image: undefined,
    error: undefined
  }

  getWeather = async (e) => {

    e.preventDefault();
    const inputLocation = e.target.elements.city.value;
    const url = `/api/weather/${inputLocation}`
    const data = await (await fetch(url)).json();
    const location = inputLocation.charAt(0).toUpperCase() + inputLocation.slice(1)

    if (data.code !== 404) {

      this.setState({
        city: location,
        timezone: data.timezone,
        current: data.current,
        hourly: data.hourly,
        daily: data.daily,
        id: data.current.weather[0].id,
        image: OptImage(data.current.weather[0].id),
        error: undefined
      })
    }
    else if (data.code === 404) {
      this.setState({
        city: undefined,
        timezone: undefined,
        current: undefined,
        hourly: undefined,
        daily: undefined,
        id: undefined,
        image: undefined,
        error: data.message
      })
    }
  }

  render() {
    return (
      <div>
        <ThemeProvider theme={theme}>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <Header
                getWeather={this.getWeather}
                error={this.state.error} />
            </Grid>
            <Grid item xs={12} md={6}>
              <Weather
                city={this.state.city}
                timezone={this.state.timezone}
                current={this.state.current}
                id={this.state.id}
                image={this.state.image}
              />
            </Grid>
            <Grid item xs={12} md={6} >
              {this.state.hourly &&
                <WeatherChart
                  hourly={this.state.hourly}
                  daily={this.state.daily}
                />}
            </Grid>
            <Grid item xs={12}>
              {this.state.daily &&
                <Daily daily={this.state.daily}
                />
              }
            </Grid>
          </Grid>
        </ThemeProvider>
      </div>
    )
  }
};

export default App;
