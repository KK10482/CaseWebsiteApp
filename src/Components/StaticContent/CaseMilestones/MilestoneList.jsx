import { Card, CardContent, CardHeader, Divider, IconButton } from '@mui/material';
import React from 'react'
import ListAltRoundedIcon from '@mui/icons-material/ListAltRounded';
import Milestone from './Milestone';
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles({
    headerRoot: {
        '& .MuiTypography-root': {
            color: '#337ab7',
            textDecoration: 'none',
            fontWeight: '600',
            fontSize: '20px',
            padding: "0px 5px",
        },
        '& .MuiSvgIcon-root': {
            color: '#337ab7',
            fontSize: '28px'
        }
    },
});

export default function MilestoneList() {

    const classes = useStyles();

    return (
        <Card>
            <CardHeader className={classes.headerRoot}
                avatar={
                    <IconButton >
                        <ListAltRoundedIcon />
                    </IconButton>
                }
                title="Important Dates"
            />
            <Divider />
            <CardContent >
                <Milestone title="Claims Deadline" date="01/11/2022" />
                <Milestone title="Opt Out Deadline" date="12/27/2021" />
                <Milestone title="Objection Deadline" date="12/27/2021" />
                <Milestone title="Objection Deadline" date="03/18/2022 at 1:30 p.m." />
            </CardContent>
        </Card>
    )
}
