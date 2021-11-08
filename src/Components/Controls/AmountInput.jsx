import { FormControl, FormHelperText, InputAdornment, InputLabel, OutlinedInput } from '@mui/material'
import React from 'react'

export default function AmountInput(props) {

    const { name, label, value, onChange, error = null } = props

    const convertToDefEventPara = (name, value) => ({
        target: {
            name, value
        }
    })

    return (
        <FormControl {...(error && { error: true })}>
            <InputLabel>{label}</InputLabel>
            <OutlinedInput
                value={value}
                onChange={e => onChange(convertToDefEventPara(name, e.target.value))}
                startAdornment={<InputAdornment position="start">$</InputAdornment>}
                label={label}
                inputProps={{ maxLength: 10}}
            />
            {error && <FormHelperText>{error}</FormHelperText>}
        </FormControl>
    )
}
