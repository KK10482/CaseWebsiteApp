import React from 'react'
import Box from '@mui/material/Box';
import * as CaseInfo from './../../global';
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
        // border: '1px groove grey',
    },
    subtitle: {
        fontWeight: '500'
    },
    caseTitle: {
        fontWeight: '500',
        textAlign: 'center'
    },
    content: {
        textAlign: 'center'
    }
});

export default function Contact() {

    const classes = useStyles();

    return (
        <>
            <div className={classes.root}>
                <Box>
                    <Paper className={classes.pageContent}>
                        <Typography gutterBottom variant="subtitle1" component="div" className={classes.subtitle}>If you have questions, please contact the Administrator at the contact information below.</Typography>
                        <br />
                        <Typography gutterBottom variant="body1" component="div" className={classes.caseTitle}>{CaseInfo.CaseName}</Typography>
                        <Typography gutterBottom variant="body1" component="div" className={classes.content}>c/o Simpluris, Inc.</Typography>
                        <Typography gutterBottom variant="body1" component="div" className={classes.content}>{CaseInfo.Address1}</Typography>
                        <Typography gutterBottom variant="body1" component="div" className={classes.content}>{CaseInfo.Address2}</Typography>
                        <Typography gutterBottom variant="body1" component="div" className={classes.content}>Toll Free: {CaseInfo.TollFree}</Typography>
                    </Paper>
                </Box>
            </div>
        </>
    )
}
