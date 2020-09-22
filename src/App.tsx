import React from 'react';
import Autocomplete from '@material-ui/lab/Autocomplete/Autocomplete';
import { TextField } from '@material-ui/core';

function App() {
  return (
    <div className="App">
      <header className="App-header">
      <Autocomplete
              options={['a', 'b', 'c']}
              renderInput={(params) => (
                <TextField
                  // eslint-disable-next-line react/jsx-props-no-spreading
                  {...params}
                  label="Autocomplete 1"
                  variant="outlined"
                />
              )}
        />
        <Autocomplete
                  options={['d', 'e', 'f']}
                  renderInput={(params) => (
                    // eslint-disable-next-line react/jsx-props-no-spreading
                    <TextField {...params} label="Autocomplete 2" variant="outlined" />
                  )}
                />
      </header>
    </div>
  );
}

export default App;
