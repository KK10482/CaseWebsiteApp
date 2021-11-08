import React from 'react'
import { makeStyles } from '@mui/styles';
import { TableCell, TableRow } from '@mui/material';
import EventRoundedIcon from '@mui/icons-material/EventRounded';

const useStyles = makeStyles({
    tableRow: {
        height: '10'
    },
    tableCell: {
        padding: "5px 10px",
    }


});
export default function Milestone(props) {

    const { title, date } = props;
    const classes = useStyles();

    return (
        <TableRow className={classes.tableRow}>
            <TableCell width="5%" className={classes.tableCell}>
                <EventRoundedIcon />
            </TableCell>
            <TableCell className={classes.tableCell}>
                {title}
            </TableCell>
            <TableCell width="5%" className={classes.tableCell}>
                {date}
            </TableCell>
        </TableRow>
    )
}
