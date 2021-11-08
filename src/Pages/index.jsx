import React from 'react';
import { Grid } from '@mui/material';
import StaticContent from '../Components/StaticContent/Static';
import { makeStyles } from '@mui/styles';
import { createTheme } from '@mui/material/styles';

const theme = createTheme();
const useStyles = makeStyles({
    root: {
        margin : theme.spacing(1, 'auto'),
    }
});
export default function Home() {

    const classes = useStyles();

    return (
        <>
            <div className={classes.root}>
                
                <Grid container spacing={2}>
                    <Grid item xs={12} md={8}>
                        <StaticContent.CaseInfo/>
                        <StaticContent.AboutCase/>
                    </Grid>
                    <Grid item xs={12} md={4}>
                        <StaticContent.CaseForms/>
                        <br/>
                        <StaticContent.CaseDocuments/>
                        <br/>
                        <StaticContent.CaseMilestones/>
                    </Grid>
                </Grid>
                <br/>
                <br/>
                <br/>
            </div>
        </>
    )
}
