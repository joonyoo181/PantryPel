import React from 'react';
import { TextField } from '@mui/material/';

function Textfield() {

  return (
    <div>
      <form noValidate autoComplete="off">
        <TextField id="outlined-basic" label="Outlined" variant="outlined" />
      </form>
    </div>
  );
}

export default Textfield;
