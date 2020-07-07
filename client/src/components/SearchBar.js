import React, { useState } from 'react'
import Autocomplete from "@material-ui/lab/Autocomplete";
import { TextField, Grid } from '@material-ui/core';

const SearchBar = ({getWeather}) => {
    const [items, setItems] = useState([]);

    const isEmpty = input => {
        return (!input || /^\s*$/.test(input));
    }

    const getItems = async location => {
        setItems([]);
        if (isEmpty(location)) return;
        const url = `/api/location/${location}`;
        const data = await (await fetch(url)).json();

        data.features.map(place => {
            return setItems(prevState => {
                return [
                    ...prevState,
                    {
                        place_name: place.place_name,
                        id: place.id,
                        coords: place.center
                    }
                ];
            });
        });
    };
    const makeGet = (place) => {
        if (isEmpty(place)) return
        getWeather(place.coords, place.place_name)
    };

    return (
        <div>
            <Grid item>
                <Autocomplete
                    options={items}
                    autoHighlight
                    freeSolo
                    getOptionLabel={option => option.place_name}
                    getOptionSelected={(option, value) => option.id === value}
                    onChange={(event, newValue) => {
                        makeGet(newValue)
                    }}
                    renderInput={params => (
                        <TextField {...params} label="Search location" style={{ width: '60%' }} name="city" variant="outlined" />
                    )}
                    onInputChange={(event, newInputValue) => {
                        getItems(newInputValue);
                    }}
                />
            </Grid>
        </div>
    )
}

export default SearchBar;
