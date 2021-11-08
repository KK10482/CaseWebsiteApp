import React, {useState} from 'react'
import { makeStyles } from '@mui/styles';
import { createTheme } from '@mui/material/styles';

export function useForm(initialFormValues, validateOnChange =false,validate) {

    const [values, setValues] = useState(initialFormValues);
    const [errors, setErrors] = useState({})

    const handleInputChange = e =>{
        const {name, value} = e.target
        setValues({
            ...values,
            [name]:value
        })
        if(validateOnChange)
            validate({[name]:value})
    }

    return {
        values,
        setValues,
        errors,
        setErrors,
        handleInputChange
    }
}

const theme = createTheme();
const useStyles = makeStyles({
    root: {
        '& .MuiFormControl-root': {
            width: '80%',
            margin: theme.spacing(1, 'auto'),
            
        }
    }
});

export function Form(props) {

    const classes = useStyles();
    const {children,...other} = props;
    return (
        <form className={classes.root} {...other}>
            {props.children}
        </form>
    )
}
