import { FormControl, FormLabel, Grid } from '@mui/material';
import React from 'react'
import controls from '../Controls/controls';
import { makeStyles } from '@mui/styles';
import { createTheme } from '@mui/material/styles';

const theme = createTheme();
const useStyles = makeStyles({
    root: {
        '& .MuiFormControl-root': {
            width: '40%',
            margin: theme.spacing(2, 'auto'),

        }
    }
});

export default function CheckBoxAmount(props) {

    const { chkName, txtName, label, onChange, size, error = null, values } = props;
    const classes = useStyles();

    return (
        <>
            <FormControl>
                <Grid container>
                    <Grid item xs={1}>
                        <controls.Checkbox
                            name={chkName}
                            label=''
                            value={values.attestation}
                            onChange={onChange}
                            size={size}
                        />
                    </Grid>
                    <Grid item xs={11} className={classes.root}>
                        <FormLabel sx={{ paddingRight: 2 }}>{label}</FormLabel>
                        <controls.AmountInput
                            name={txtName}
                            value={values.amount}
                            onChange={onChange}
                            error={error}
                        />
                    </Grid>
                </Grid>
            </FormControl>
        </>
    )
}
