import React from 'react'
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import { makeStyles } from '@mui/styles';
import { createTheme } from '@mui/material/styles';
import { Typography } from '@mui/material';

const theme = createTheme();
const useStyles = makeStyles({
    root: {
        margin: theme.spacing(1, 'auto'),
    },
    pageContent: {
        marging: theme.spacing(1),
        padding: theme.spacing(3),
    },
    title: {
        fontWeight: '500',
        textAlign: 'center',
        fontSize : '22px'
    },
    content: {
        textAlign: 'center'
    }
});

export default function Confirmation() {

    
    const classes = useStyles();

    return (
        <>
            <div className={classes.root}>
                <Box>
                    <Paper className={classes.pageContent}>
                        <Typography gutterBottom variant="subtitle1" component="div" className={classes.title}>Confirmation</Typography>
                        <br />
                        <Typography gutterBottom variant="body1" component="div" className={classes.content}>
                            Thank you for submitting your claim. Your claim will be processed and reviewed soon. Please check back on
                            this website for any updates regarding case status, dates, or any information about when the settlement
                            payments will be sent.
                        </Typography>
                    </Paper>
                </Box>
            </div>
        </>
    )
}