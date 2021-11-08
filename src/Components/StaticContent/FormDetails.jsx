import React from 'react'
import { makeStyles } from '@mui/styles';
import * as CaseInfo from './../../global';
import Paper from '@mui/material/Paper';
import { Typography } from '@mui/material';
import { Box } from '@mui/system';
import { createTheme } from '@mui/material/styles';

const theme = createTheme();
const useStyles = makeStyles({
    pageContent:{
        padding: theme.spacing(3),
    },
    caseTitle: {
        fontWeight: '500',
    },
    caseaddress: {
        textAlign: 'justify',
    },
    content:{
        textAlign :'center',
        paddingTop: '25px',
        paddingLeft: '50px'
    },
    formTilte:{
        textAlign :'center',
        textDecoration :'underline',
        fontWeight: '500',
        paddingTop: '20px',
    },
    formContent:{
        textAlign: 'justify',
        paddingTop: '15px'
    }
});

export default function FormDetails() {

    const classes = useStyles();

    return (
        <>
            <Box >
                <Paper className={classes.pageContent}>
                    <Typography gutterBottom variant="body2" component="div" className={classes.caseTitle}>{CaseInfo.CaseName}</Typography>
                    <Typography gutterBottom variant="body2" component="div" className={classes.caseaddress}>Case No. C-03-CV-21-001091</Typography>
                    <Typography gutterBottom variant="body2" component="div" className={classes.caseaddress}>Baltimore County Circuit Court, Maryland</Typography>
                    <Typography gutterBottom variant="body2" component="div" className={classes.content}>
                        For use by purchasers of Titanium and Cobalt drill bits sold under the DEWALT, Craftsman, Irwin, MAC Tools, 
                        Bostich (Titanium only), and Matco (Cobalt only) brands (“Covered Drill Bits”) and certain Titanium saw 
                        blades sold under the DEWALT and Lenox brands (“Covered Saw Blades”) (together, the “Covered Products”) between April 13, 
                        2015 and October 13, 2021.
                    </Typography>
                    <Typography gutterBottom variant="body2" component="div" className={classes.formTilte}>ELECTRONIC CLAIM FORM</Typography>
                    <Typography gutterBottom variant="body2" component="div" className={classes.formTilte}>GENERAL INSTRUCTIONS</Typography>
                    <Typography gutterBottom variant="body2" component="div" className={classes.formContent} >
                        <strong>Settlement Class Members who seek payment from the Settlement must complete and return this Claim Form.</strong> 
                        Completed Claim Forms must be mailed to the Settlement Administrator at Starke v. Black & Decker, 
                        {CaseInfo.Address1}, {CaseInfo.Address2}, or can be submitted online via the settlement website, 
                        <a href={CaseInfo.CaseURL}>www.titaniumcobaltsettlement.com</a>. <strong>Claim Forms submitted via mail 
                        must be POSTMARKED BY JANUARY 11, 2022. CLAIM FORMS SUBMITTED ONLINE MUST BE SUBMITTED NO LATER 
                        THAN 11:59 pm, Pacific Time on JANUARY 11, 2022.</strong>
                    </Typography>
                    <Typography gutterBottom variant="body2" component="div" className={classes.formContent} >
                        Before you complete and submit this Claim Form by mail or online, you should read and be familiar with the 
                        Notice of Proposed Class Action Settlement (the “Notice”) available at <a href={CaseInfo.CaseURL}>www.titaniumcobaltsettlement.com</a>. 
                        Defined terms (with initial capitals) used in these General Instructions have the same meaning as set forth in the 
                        Settlement Agreement. By submitting this Claim Form, you acknowledge that you have read and understand the Notice, 
                        and you agree to the Released Claims included as a material term of the Settlement Agreement.
                    </Typography>
                    <Typography gutterBottom variant="body2" component="div" className={classes.formContent} >
                        If you fail to submit a timely Claim Form, your Claim may be rejected, and you may be precluded from any 
                        recovery from the Settlement Fund. If you are a member of the Settlement Class and you do not timely and 
                        validly request to Opt-Out from the Settlement Class, you will be bound by any judgment entered by the 
                        Court approving the Settlement regardless of whether you submit a Claim Form. To receive the most 
                        current information, receive updates, and to file your Claim please visit the settlement website 
                        at <a href={CaseInfo.CaseURL}>www.titaniumcobaltsettlement.com</a>.
                    </Typography>
                </Paper>
            </Box>
        </>
    )
}
