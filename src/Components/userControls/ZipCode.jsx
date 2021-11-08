import { TextField } from '@mui/material';
import React from 'react'

export default function ZipCode(props) {

    const { name, label, value, onChange, error=null,required } = props;


    return (
        <>
            <TextField
                size="small"
                // required ={required}
                label={required? label +' *':label}
                name={name}
                values={value}
                onChange={onChange}
                {...(error && {error:true,helperText:error})}
                inputProps={{ maxLength: 10, pattern: "^[0-9]{5}(?:-[0-9]{4})?$" }}
            />
        </>
    )
}
