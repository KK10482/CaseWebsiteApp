import React from 'react'
import { TextField } from '@mui/material';

export default function Phone(props) {

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
                inputProps={{ maxLength: 10}}
            />
        </>
    )
}
