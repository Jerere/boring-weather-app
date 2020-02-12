import React from 'react';
import Title from './components/Title';
import Form from './components/Form';
import Weather from './components/Weather';
import { Grid, createMuiTheme, responsiveFontSizes, ThemeProvider } from '@material-ui/core'

const API_KEY = "your_api_key_here_:)";

let theme = createMuiTheme();
theme = responsiveFontSizes(theme);

class App extends React.Component {

  state = {
    city: undefined,
    temperature: undefined,
    feels_like: undefined,
    humidity: undefined,
    description: undefined,
    id: undefined,
    error: undefined
  }

  getWeather = async (e) => {
    e.preventDefault();
    const city = e.target.elements.city.value;
    const api_call = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`);
    const data = await api_call.json();

    if (data.cod === 200) {
      this.setState({
        city: data.name,
        temperature: data.main.temp,
        feels_like: data.main.feels_like,
        humidity: data.main.humidity,
        description: data.weather[0].description,
        id: data.weather[0].id,
        error: ""
      })
    }
    else if (data.cod !== 200) {
      this.setState({
        city: undefined,
        temperature: undefined,
        feels_like: undefined,
        humidity: undefined,
        description: undefined,
        id: undefined,
        error: data.message
      })
    }
  }

  render() {
    return (
      <div>
        <ThemeProvider theme={theme}>
          <Grid container
            spacing={2}
            justify="center"
            alignItems="center"
            direction="column"
          >
            <Grid>
              <Title />
            </Grid>
            <Grid>
              <Form getWeather={this.getWeather}
                error={this.state.error} />
            </Grid>
            <Grid item>
              <Weather
                city={this.state.city}
                temperature={this.state.temperature}
                feels_like={this.state.feels_like}
                humidity={this.state.humidity}
                description={this.state.description}
                id={this.state.id}
              />
            </Grid>
          </Grid>
        </ThemeProvider>
      </div>
    )
  }
};

export default App;
