import * as React from 'react';
import TextField from '@mui/material/TextField';
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import DatePicker from '@mui/lab/DatePicker';

export default function DtPicker(props) {

    const {name, label, value, onChange,required,error} = props;

    const convertToDefEventPara = (name,value) => ({
        target: {
          name, value
        }
    })

  return (
    <LocalizationProvider dateAdapter={AdapterDateFns}>
      <DatePicker
        label={required? label +' *':label}
        name={name}
        value={value}
        // required ={required}
        onChange={Date =>onChange(convertToDefEventPara(name,Date))}
        renderInput={(params) => <TextField {...params} {...(error && {error:true,helperText:error})}/>}
      />

    </LocalizationProvider>
  );
}