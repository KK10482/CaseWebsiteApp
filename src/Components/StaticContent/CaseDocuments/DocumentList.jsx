import { Card, CardContent, CardHeader, Divider, IconButton, } from '@mui/material'
import React from 'react'
import { makeStyles } from '@mui/styles';
import ListAltRoundedIcon from '@mui/icons-material/ListAltRounded';
import Document from './Document';

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

export default function DocumentList() {

    const classes = useStyles();

    return (
        <Card >
            <CardHeader className={classes.headerRoot}
                avatar={
                    <IconButton >
                        <ListAltRoundedIcon />
                    </IconButton>
                }
                title="Case Documents"
            />
            <Divider/>
            <CardContent >
                <Document name="Preliminary Approval Order (PDF)" path="http://docs.simpluris.com/5727/BlackAndDecker_Starke_Preliminary Approval Order.pdf" />
                <Document name="Notice (PDF)" path="http://docs.simpluris.com/5727/BlackAndDecker_Starke_Short Form Notice.pdf" />
                <Document name="Claim Form (PDF)" path="http://docs.simpluris.com/5727/BlackAndDecker_Starke_Claim Form.pdf" />
            </CardContent>
        </Card>
    )
}
