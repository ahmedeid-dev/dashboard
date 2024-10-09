import * as React from 'react';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import top100Films from './films';

export default function ComboBox({ label = '', labelStyle='', style = '', width = 300, ...props }) {
  return <>
    <div className="flex flex-col">
      <h2 className={`${labelStyle}`}>{label}</h2>
      <Autocomplete
        className={`${style} w-full`}
        disablePortal
        options={top100Films}
        sx={{ width }}
        renderInput={(params) => <TextField {...params} label={label} />}
      />
    </div>
  </>
}


