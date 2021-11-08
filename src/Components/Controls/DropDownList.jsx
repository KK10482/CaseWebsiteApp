import React from 'react'
import { FormControl, FormHelperText, InputLabel, MenuItem, Select} from '@mui/material';


export default function DropDownList(props) {

    const {name, label, value, onChange, options, error = null, required} = props;

    return (
        <FormControl variant="outlined" 
        {...(error && {error:true})} >
            <InputLabel >{required? label +' *':label}</InputLabel>
            <Select
                name ={name}
                value={value}
                onChange={onChange}
                label={label}
                >
                    <MenuItem value=""></MenuItem>
                        {
                            options.map(
                                item =>(<MenuItem key={item.id} value={item.id}>{item.title}</MenuItem> )
                            )
                        }
            </Select>
            {error && <FormHelperText>{error}</FormHelperText>}
      </FormControl>
    )
}
