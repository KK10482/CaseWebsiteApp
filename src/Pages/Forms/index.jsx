import React, { useState } from 'react'
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { Grid } from '@mui/material';
import Paper from '@mui/material/Paper';
import { makeStyles } from '@mui/styles';
import { createTheme } from '@mui/material/styles';
import { useForm, Form } from '../../Components/useForm';
import Controls from '../../Components/Controls/controls';
import userControls from '../../Components/userControls/usercontrols';
import FormDetails from '../../Components/StaticContent/FormDetails';
import * as ClaimData from '../../Data/ClaimData';
import { fontSize } from '@mui/system';

const initialFormValues = {
    firstName: '',
    lastName: '',
    address1: '',
    address2: '',
    city: '',
    stateID: '',
    zip: '',
    dayTimePhone: '',
    eveningPhone: '',
    email: '',
    attestation: false,
    amount: '',
    paymentChoice: '',
    paymentUserName: '',
    paymentEmail: '',
    paymentPhone: '',
    signDate: new Date(),
    signature: ''
}

const theme = createTheme();
const useStyles = makeStyles({
    pageContent: {
        marging: theme.spacing(3),
        padding: theme.spacing(3),
    },
    root: {
        margin: theme.spacing(1, 'auto'),
    },
    formTitle:{
        color: '#337ab7',
        fontWeight: 'bold'
    },
    formItalic: {
        fontStyle: 'italic'
    },
    formSubTitle: {
        textDecoration:'underline',
        paddingTop: '10px',
        fontWeight: 'bold'
    },
    formContent :{
        paddingTop: '10px',
        fontSize : '14px'
    }
});


export default function Forms() {

    const validate = (fieldValues = values) => {
        let temp = { ...errors }
        if ('firstName' in fieldValues)
            temp.firstName = fieldValues.firstName ? "" : "First Name is Required.";
        if ('lastName' in fieldValues)
            temp.lastName = fieldValues.lastName ? "" : "Last Name is Required.";
        if ('address1' in fieldValues)
            temp.address1 = fieldValues.address1 ? "" : "Street Address is Required.";
        if ('city' in fieldValues)
            temp.city = fieldValues.city ? "" : "City is Required.";
        if ('stateID' in fieldValues)
            temp.stateID = fieldValues.stateID.length !== 0 ? "" : "State is Required.";
        if ('zip' in fieldValues){
            temp.zip = fieldValues.zip ? "" : "Zip is Required.";
            if (fieldValues.zip != '')
                temp.zip = (/^[0-9]{5}(?:-[0-9]{4})?$/.test(fieldValues.zip)) ? "":"Zip code must be formatted properly (i.e. 12345 or 12345-6789)";
        }
        if ('dayTimePhone' in fieldValues){
            temp.dayTimePhone = fieldValues.dayTimePhone ? "" : "Required.";
            if (fieldValues.dayTimePhone != '')
                temp.dayTimePhone = (/^[0-9]{10}$/.test(fieldValues.dayTimePhone)) ? "":"Telephone number should be entered as a 10-digit number with no dashes (i.e. 1234567890)";
        }
        if ('eveningPhone' in fieldValues){
            temp.eveningPhone = fieldValues.eveningPhone ? "" : "Required.";
            if (fieldValues.eveningPhone != '')
                temp.eveningPhone = (/^[0-9]{10}$/.test(fieldValues.eveningPhone)) ? "":"Telephone number should be entered as a 10-digit number with no dashes (i.e. 1234567890)";
        }
        if ('email' in fieldValues){
            temp.email = fieldValues.email ? "" : "Email Address Required.";
            if (fieldValues.email != '')
                temp.email = (/^[a-zA-Z0-9.]+@[a-zA-Z0-9]+\.[A-Za-z]+$/.test(fieldValues.email)) ? "":"Email address must be properly formatted(i.e. name@domain.com)";
        }
        if ('amount' in fieldValues){
            temp.amount = fieldValues.amount ? "" : "Attestation Amount Required.";
            if (fieldValues.amount != '')
                temp.amount = (/^[0-9.]+\.[0-9]+$/.test(fieldValues.amount)) ? "":"Invalid Amount format 12346.99";
        }
        if ('paymentChoice' in fieldValues)
            temp.paymentChoice = fieldValues.paymentChoice.length !== 0 ? "" : "Payment Choice is Required.";
        if ('paymentUserName' in fieldValues)
            temp.paymentUserName = !fieldValues.paymentUserName && fieldValues.paymentChoice === '1' ? "Payment Account UserName is Required." : "";
        if ('paymentEmail' in fieldValues){
            temp.paymentEmail = !fieldValues.paymentEmail && (fieldValues.paymentChoice === '1' || 
                                                              fieldValues.paymentChoice === '2') ? "Payment Account Email is Required." : ""; 
            if (fieldValues.paymentEmail != '')
                temp.paymentEmail = (/^[a-zA-Z0-9.]+@[a-zA-Z0-9]+\.[A-Za-z]+$/.test(fieldValues.paymentEmail)) ? "":"Email address must be properly formatted(i.e. name@domain.com)";                                                  
        }
        if ('paymentPhone' in fieldValues){
            temp.paymentPhone = !fieldValues.paymentPhone && (fieldValues.paymentChoice === '1' || 
                                                              fieldValues.paymentChoice === '2' ||
                                                              fieldValues.paymentChoice === '3' )? "Payment Account Phone Number is Required." : "";                        
            if (fieldValues.paymentPhone != '')
                temp.paymentPhone = (/^[0-9]{10}$/.test(fieldValues.paymentPhone)) ? "":"Telephone number should be entered as a 10-digit number with no dashes (i.e. 1234567890)";
        }
        if ('signDate' in fieldValues)
            temp.signDate = fieldValues.signDate ? "" : "Date is Required.";
        if('signature' in fieldValues)
            temp.signature = fieldValues.signature ? "" : "Signature is Required.";
        setErrors({
            ...temp
        })

        if (fieldValues == values)
            return Object.values(temp).every(x => x == "");
    }

    const classes = useStyles();
    const [notify, setNotify] = useState({ isOpen: false, message: '', type: '' });

    const {
        values,
        setValues,
        errors,
        setErrors,
        handleInputChange
    } = useForm(initialFormValues, true, validate);

    const handleSubmit = e => {
        e.preventDefault();
        values.signature = ClaimData.GetSignature();
        if (validate()) {
            ClaimData.insertClaimData(values);
            setNotify({
                isOpen: true,
                message: 'Claim Submitted Successfully',
                type: 'success'
            })
        }
    }

    return (
        <>
            <div className={classes.root}>
                <FormDetails />
                <Box>
                    <Paper className={classes.pageContent}>
                        <Typography gutterBottom variant="subtitle1" component="div" className={classes.formTitle}>CLAIMANT INFORMATION</Typography>
                        <Typography gutterBottom variant="body2" component="div" className={classes.formItalic}>Fields marked with an asterisk (*) are required.</Typography>
                        <Form onSubmit={handleSubmit}>
                            <Grid container>
                                <Controls.Input
                                    name='firstName'
                                    label='First Name'
                                    required={true}
                                    value={values.firstName}
                                    onChange={handleInputChange}
                                    error={errors.firstName}
                                />
                                <Controls.Input
                                    name='lastName'
                                    label='Last Name'
                                    required={true}
                                    value={values.lastName}
                                    onChange={handleInputChange}
                                    error={errors.lastName}
                                />
                                <userControls.Address
                                    AddrValues={values}
                                    onChange={handleInputChange}
                                    AddrErrors={errors}
                                />
                                <userControls.Phone
                                    name='dayTimePhone'
                                    label='DayTime Phone Number'
                                    required={true}
                                    value={values.dayTimePhone}
                                    onChange={handleInputChange}
                                    error={errors.dayTimePhone}
                                />
                                <userControls.Phone
                                    name='eveningPhone'
                                    label='Evening Phone Number'
                                    required={true}
                                    value={values.eveningPhone}
                                    onChange={handleInputChange}
                                    error={errors.eveningPhone}
                                />
                                <Controls.Input
                                    name='email'
                                    label='Email Address'
                                    required={true}
                                    value={values.email}
                                    onChange={handleInputChange}
                                    error={errors.email}
                                />

                            </Grid>
                            <Typography gutterBottom variant="subtitle2" component="div" className={classes.formSubTitle}>Attestation</Typography>
                            <Grid container>
                                <userControls.CheckBoxAmount
                                    chkName='attestation'
                                    txtName='amount'
                                    label='I purchased one or more Covered Products between April 13, 2015 and October 13, 2021, and I spent a total of approximately:'
                                    values={values}
                                    onChange={handleInputChange}
                                    error={errors.amount}
                                />
                            </Grid>
                            <Typography gutterBottom variant="subtitle2" component="div" className={classes.formSubTitle}>
                                Payment Selection – SELECT ONLY ONE FORM OF PAYMENT
                            </Typography>
                            <Grid container>
                                <userControls.Payments
                                    PaymentValues={values}
                                    onChange={handleInputChange}
                                    PaymentErrors={errors}
                                />
                            </Grid>
                            <Typography gutterBottom variant="subtitle2" component="div" className={classes.formSubTitle}>
                                Submission to Jurisdiction of the Court
                            </Typography>
                            <Typography gutterBottom variant="body2" component="div" className={classes.formContent}>
                                By signing below, you are submitting to the jurisdiction of Baltimore County, Maryland.</Typography>
                            <Typography gutterBottom variant="subtitle2" component="div" className={classes.formSubTitle}>
                                Certification under Penalty of Perjury</Typography>
                            <Typography gutterBottom variant="body2" component="div" className={classes.formContent}>
                                <strong>I hereby certify under penalty of perjury that:</strong></Typography>
                            <Typography gutterBottom variant="body2" component="div" className={classes.formContent}>
                                <ol>
                                    <li>
                                        I have read the Settlement Agreement and agree to its terms, including the Released Claims;
                                    </li>
                                    <li>
                                        The information provided in this Claim Form is accurate and complete to the best of my knowledge,
                                        information, and belief;
                                    </li>
                                    <li>
                                        I am a member of the Settlement Class and did not request to Opt-Out from the Settlement Class;
                                    </li>
                                    <li>
                                        I am neither (a) a Person who purchased or acquired the Product for resale; (b) an employee of
                                        Defendant; (c) a Person who has filed for exclusion from the Settlement Class; (d) a governmental
                                        entity; nor (e) a judicial officer to whom this Action is assigned, or any member of the judge’s
                                        immediate family;
                                    </li>
                                    <li>
                                        I have not submitted any other Claim for the same purchases and have not authorized any other Person
                                        or entity to do so, and know of no other Person or entity having done so on my behalf;
                                    </li>
                                    <li>
                                        I will timely provide any additional information requested by the Settlement Administrator to validate
                                        my Claim;
                                    </li>
                                    <li>
                                        I understand that by submitting this Claim Form, I am deemed to have given a complete Release of all
                                        Released Claims; and
                                    </li>
                                    <li>
                                        I understand that Claims will be audited for veracity, accuracy, and fraud. Illegible Claim Forms
                                        can be rejected. If a Claim Form is determined not to be a Valid Claim, it will be rejected.
                                    </li>
                                </ol>
                            </Typography>
                            <Grid container>
                                <Controls.SignaturePad
                                    name='signature'
                                    label='Signature'
                                    required={true}
                                    value={values.signature}
                                    onChange={handleInputChange}
                                    error={errors.signature}
                                />
                                <Controls.DtPicker
                                    name='signDate'
                                    label='Dated'
                                    required={true}
                                    value={values.signDate}
                                    onChange={handleInputChange}
                                    error={errors.signDate}
                                />
                            </Grid>
                            <Grid container sx={{ textAlign: 'right' }}>
                                <Controls.Button
                                    type="Submit"
                                    text="Submit"
                                />
                            </Grid>
                        </Form>
                    </Paper>
                    <userControls.Notifcation
                        notify={notify}
                        setNotify={setNotify}
                    />
                </Box>
                <br />
                <br />
                <br />
            </div>
        </>
    )
}
