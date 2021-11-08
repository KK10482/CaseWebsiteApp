import { FormControl, FormControlLabel, Checkbox as MuiCheckbox } from '@mui/material'
import React from 'react'
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles({
    root: {
        '& .MuiCheckbox-root': {
            verticalAlign: 'top',
            
        }
    }
});

export default function Checkbox(props) {
    
    const {name, label, value, onChange,required, size} = props;

    const convertToDefEventPara = (name,value) => ({
        target:{
            name, value
        }
    })

    const classes = useStyles();

    return (
        <>
            <FormControl className={classes.root}>
                <FormControlLabel  
                    control={<MuiCheckbox 
                        name ={name}
                        required = {required}
                        checked={value}
                        size={size}
                        onChange ={e => onChange(convertToDefEventPara(name, e.target.checked))}
                        
                    />}
                    label={label}
                />
            </FormControl>
        </>
    )
}
