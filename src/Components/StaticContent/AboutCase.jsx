import React from 'react'
import * as CaseInfo from '../../global';
import { makeStyles } from '@mui/styles';
import IconButton from "@mui/material/IconButton";
import { Card, CardContent, CardHeader, Divider, Typography } from '@mui/material';
import ViewListRoundedIcon from '@mui/icons-material/ViewListRounded';

const useStyles = makeStyles({
    headerRoot: {
        '& .MuiTypography-root': {
            color: '#337ab7',
            textDecoration: 'none',
            fontWeight: '600',
            fontSize: '20px'
        },
        '& .MuiSvgIcon-root': {
            color: '#337ab7',
            fontSize: '28px'
        }
    },
    aboutTitle: {
        fontWeight: '500',
        textAlign: 'center'
    },
    aboutContent: {
        textAlign: 'justify',
        paddingTop: '15px'
    }
});


export default function AboutCase() {

    const classes = useStyles();

    return (
        <Card>
            <CardHeader className={classes.headerRoot}
                avatar={
                    <IconButton >
                        <ViewListRoundedIcon />
                    </IconButton>
                }
                title="About This Case"
            />
            <CardContent >
                <Typography gutterBottom variant="body1" component="div" className={classes.aboutTitle}>
                    IF YOU PURCHASED CERTAIN BRANDED TITANIUM AND COBALT DRILL BITS AND SAW BLADES
                </Typography>
                <Typography gutterBottom variant="body1" component="div" className={classes.aboutTitle}>
                    BETWEEN APRIL 13, 2015, AND OCTOBER 13, 2021.
                </Typography>
                <Typography gutterBottom variant="body1" component="div" className={classes.aboutTitle}>
                    A CLASS ACTION SETTLEMENT MAY AFFECT YOUR RIGHTS.
                </Typography>
                <Divider />
                <Typography gutterBottom variant="body2" component="div" className={classes.aboutContent}>
                    Covered Products:
                    <ul>
                        <li>
                            Titanium and Cobalt drill bits sold under the DEWALT, Craftsman, Irwin, MAC Tools, Bostich (Titanium only),
                            and Matco (Cobalt only) brands (“Covered Drill Bits”); and
                        </li>
                        <li>
                            Certain Titanium saw blades sold under the DEWALT and Lenox brands (“Covered Saw Blades”).
                        </li>
                    </ul>
                </Typography>
                <Divider />
                <Typography gutterBottom variant="body2" component="div" className={classes.aboutContent} >
                    <strong>What is this about?</strong><br />
                    The lawsuit claims that Defendant Stanley Black & Decker, Inc. (“Defendant”) deceptively marketed the composition of
                    the Covered Drill Bits and Covered Saw Blades. As part of the Settlement, Defendant has agreed to modify the
                    packaging for these products and provide payments to customers. Defendant denies any wrongdoing.
                </Typography>
                <Typography gutterBottom variant="body2" component="div" className={classes.aboutContent} >
                    <strong>Who is included in the Settlement?</strong><br />
                    You may be included in the Settlement if you purchased Covered Drill Bits and/or Covered Saw Blades for personal use
                    between April 13, 2015 and October 13, 2021.
                </Typography>
                <Typography gutterBottom variant="body2" component="div" className={classes.aboutContent} >
                    <strong>What does the Settlement provide?</strong><br />
                    The Settlement will provide up to a maximum of $1,627,500 to pay Valid Claims, as well as other fees and expenses.
                    Settlement Class Members can receive up to $8.00, depending on their total purchases and the number of claims that
                    are submitted. The final amounts paid for valid claims may be reduced based on total number of claims received.
                </Typography>
                <Typography gutterBottom variant="body2" component="div" className={classes.aboutContent}>
                    <strong>What are my rights?</strong>
                    <ul>
                        <li>
                            <strong>Submit a Claim</strong> – You must submit a claim to get a monetary Benefit from this Settlement.
                            Claim Forms must be submitted online or postmarked by <strong>January 11, 2022.</strong>
                        </li>
                        <li>
                            <strong>Exclude Yourself</strong> This is the only option that allows you to keep your right to sue about
                            the claims in this lawsuit. You will not get any money from the Settlement. Your request for exclusion
                            must be postmarked by <strong>December 27, 2021.</strong>
                        </li>
                        <li>
                            <strong>File an Objection</strong> Stay in the Settlement but tell the Court why you think the Settlement
                            should not be approved. Objections must be submitted by <strong>December 27, 2021.</strong>
                        </li>
                    </ul>
                </Typography>
                <Typography gutterBottom variant="body2" component="div" className={classes.aboutContent} >
                    The Court will hold a Final Approval Hearing [in person/by video] in the Circuit Court of Baltimore County,
                    Maryland, located at 401 Bosley Ave, Towson, MD 21204, in the courtroom of the Honorable Judge Judith C. Ensor,
                    on March 18, 2022 at 1:30 p.m., to decide whether to approve the Settlement and to award Attorneys’ Fees of up
                    to $360,000 and Expenses of up to $15,000, and up to $2,500 to compensate the Class Representative. All briefs
                    and materials filed in support of the Settlement and the Application for Attorneys’ Fees and Expenses will be
                    made available on the Settlement Website at <a href={CaseInfo.CaseURL}>www.titaniumcobaltsettlement.com</a>. You may hire an attorney, at your
                    own expense, to appear at the hearing, but you do not have to.
                </Typography>
                <Typography gutterBottom variant="body2" component="div" className={classes.aboutContent} >
                    Claims will be paid only if the Court approves the Settlement and all appeals are resolved. Please be patient.
                    If the Settlement does not become effective, the litigation will continue.
                </Typography>
                <Typography gutterBottom variant="body2" component="div" className={classes.aboutContent} >
                    <strong>This is only a summary.</strong> For more information, please visit <a href={CaseInfo.CaseURL}>www.titaniumcobaltsettlement.com</a>,
                    or contact the Settlement Administrator at {CaseInfo.TollFree} or by writing to Starke v. Black & Decker, {CaseInfo.Address1},
                    {CaseInfo.Address1}
                </Typography>
            </CardContent>
        </Card>
    )
}
