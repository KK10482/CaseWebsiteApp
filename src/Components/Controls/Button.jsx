import React from 'react';
import { Button as MuiButton } from '@mui/material';
import { makeStyles } from '@mui/styles';
import { createTheme } from '@mui/material/styles';

const theme = createTheme();
const useStyles = makeStyles({
    root: {
        backgroundColor: '#154c79',
        margin: theme.spacing(1, 'auto'),
        textTransform: 'none'
    },
});


export default function Button(props) {

    const { text, size, variant, onClick, ...other } = props;
    const classes = useStyles();

    return (
        <MuiButton
            variant={variant || "contained"}
            size={size || "large"}
            onClick={onClick}
            classes ={{root:classes.root}}
            {...other}
        >
            {text}
        </MuiButton>
    )
}
