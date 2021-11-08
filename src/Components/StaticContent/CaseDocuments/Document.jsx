import { TableCell, TableRow } from '@mui/material';
import React from 'react'
import InsertDriveFileRoundedIcon from '@mui/icons-material/InsertDriveFileRounded';
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles({
    tableRow: {
        height: '10'
      },
      tableCell: {
        padding: "5px 10px",
    }


});

export default function Document(props) {

    const {name, path} = props;
    const classes = useStyles();

    return (
        <TableRow className={classes.tableRow}>
            <TableCell width="5%" className={classes.tableCell}>
                <InsertDriveFileRoundedIcon/>
            </TableCell>
            <TableCell className={classes.tableCell}>
                <a href={path} target="_blank" rel="noopener noreferrer">{name}</a>
            </TableCell>
          </TableRow>
    )
}
