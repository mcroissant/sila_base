import React from 'react';
import TextField from '@material-ui/core/TextField';
import Autocomplete, { createFilterOptions } from '@material-ui/lab/Autocomplete';

const filter = createFilterOptions();

export default function FreeSoloCreateOption() {
    const [value, setValue] = React.useState(null);

    return (
        <Autocomplete
            value={value}
            // @ts-ignore
            onChange={(event, newValue) => {
                if (newValue && newValue.inputValue) {
                    setValue({
                        // @ts-ignore
                        title: newValue.inputValue,
                    });

                    return;
                }

                setValue(newValue);
            }}
            // @ts-ignore
            filterOptions={(options, params) => {
                // @ts-ignore
                const filtered = filter(options, params);

                if (params.inputValue !== '') {
                    filtered.push({
                        inputValue: params.inputValue,
                        title: `Add "${params.inputValue}"`,
                    });
                }

                return filtered;
            }}
            id="free-solo-with-text-demo"
            options={top100Films}
            getOptionLabel={(option) => {
                // e.g value selected with enter, right from the input
                if (typeof option === 'string') {
                    return option;
                }
                // @ts-ignore
                if (option.inputValue) {
                    // @ts-ignore
                    return option.inputValue;
                }
                return option.title;
            }}
            renderOption={(option) => option.title}
            style={{ width: 300 }}
            freeSolo
            renderInput={(params) => (
                <TextField {...params} label="Free solo with text demo" variant="outlined" />
            )}
        />
    );
}

// Top 100 films as rated by IMDb users. http://www.imdb.com/chart/top
const top100Films = [
    { title: 'The Shawshank Redemption', year: 1994 },
    { title: 'The Godfather', year: 1972 },
];
