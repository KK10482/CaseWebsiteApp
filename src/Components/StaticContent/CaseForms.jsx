import { Card, CardContent, CardHeader, Divider, IconButton, TableCell, TableRow } from '@mui/material'
import React from 'react'
import { makeStyles } from '@mui/styles';
import BusinessCenterRoundedIcon from '@mui/icons-material/BusinessCenterRounded';
import FolderOpenRoundedIcon from '@mui/icons-material/FolderOpenRounded';
import { Link } from 'react-router-dom';

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
    tableRow: {
        height: '10'
      },
      tableCell: {
        padding: "0px 10px",
        borderBottom: "none"
    }


});

export default function CaseForms() {

    const classes = useStyles();

    return (
        <Card >
            <CardHeader className={classes.headerRoot}
                avatar={
                    <IconButton >
                        <BusinessCenterRoundedIcon />
                    </IconButton>
                }
                title="Case Forms"
            />
            <Divider/>
            <CardContent >
                <TableRow className={classes.tableRow}>
                    <TableCell width="5%" className={classes.tableCell}>
                        <FolderOpenRoundedIcon />
                    </TableCell>
                    <TableCell className={classes.tableCell}>
                        <Link href="/Forms"><a>Electronic Claim Form</a></Link>
                    </TableCell>
                </TableRow>
                
            </CardContent>
        </Card>
    )
}
