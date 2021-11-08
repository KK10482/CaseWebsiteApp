import { Button, FormControl, FormHelperText, InputLabel, Paper } from '@mui/material';
import { makeStyles } from '@mui/styles';
import { border, width } from '@mui/system';
import React, {useState, useRef} from 'react'
import SignatureCanvas from 'react-signature-canvas';
import controls from './controls';
import { createTheme } from '@mui/material/styles';
import * as ClaimData from '../../Data/ClaimData';

const theme = createTheme();
const useStyles = makeStyles({
    root: {
        backgroundColor : '#f5f5f5',
        margin: '40px 10px 5px 10px',
        border : '1px groove #bdbdbd'
    },
    signaturePad: {
        width: "100%",
    },
    button: {
        marginLeft: '10px',  
        height:'30px',
        width: '40px'
    }
});


export default function SignaturePad(props) {

    const classes = useStyles();

    const [imageURL, setImageURL] = useState(null);

    const {name, label, value, onChange, options, error = null, required} = props;

    let sigPad = useRef({});

    const clear = () =>{
        sigPad.current.clear();
        ClaimData.ClearSignature();
    }

    const saveSign = () =>  {
        if(!sigPad.current.isEmpty())
            ClaimData.insertSignature(sigPad.current.getTrimmedCanvas().toDataURL("image/png"));
    }
    
    return (
        <FormControl  {...(error && {error:true})}  >
            <InputLabel >{required? label +' *':label}</InputLabel>
            <Paper elevation={3} >
                    <div className={classes.root}>
                        <SignatureCanvas 
                            ref={sigPad}
                            clearOnResize={false}
                            penColor='navy'
                            canvasProps={{ className: classes.signaturePad}}
                        />
                    
                    </div>
                    <controls.Button className={classes.button}
                        text="Clear"
                        onClick={clear}
                    />
                    <controls.Button className={classes.button}
                        text="Save"
                        onClick={saveSign}
                    />                                
                    {error && <FormHelperText>{error}</FormHelperText>}
            </Paper>
            
        </FormControl>
    )
}
