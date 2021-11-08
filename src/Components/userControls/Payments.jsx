import React from 'react'
import * as PaymentChoices from '../../Data/PaymentChoices';
import controls from '../Controls/controls';
import userControls from '../../Components/userControls/usercontrols';

export default function Payments(props) {

    const { onChange, PaymentValues , PaymentErrors =null } = props;


    return (
        <>
            <controls.DropDownList
                name='paymentChoice'
                label='Payment Choice'
                value={PaymentValues.paymentChoice}
                onChange={onChange}
                required ={true}
                options={PaymentChoices.getPaymentChoices()}
                error={PaymentErrors.paymentChoice}
            />
            {PaymentValues.paymentChoice == 1?
            <controls.Input
                name='paymentUserName'
                label='Payment Account User Name'
                required ={true}
                value={PaymentValues.paymentUserName}
                onChange={onChange}
                error={PaymentErrors.paymentUserName}
            />:null}
            {PaymentValues.paymentChoice == 1 || PaymentValues.paymentChoice == 2 ?
            <controls.Input
                name='paymentEmail'
                label='Payment Account E-mail'
                required ={true}
                value={PaymentValues.paymentEmail}
                onChange={onChange}
                error={PaymentErrors.paymentEmail}
            />:null}
            {PaymentValues.paymentChoice == 1 || PaymentValues.paymentChoice == 2 || PaymentValues.paymentChoice == 3 ?
            <userControls.Phone
                name= 'paymentPhone'
                label= 'Payment Account Phone Number'
                required ={true}
                value={PaymentValues.paymentPhone}
                onChange={onChange}
                error={PaymentErrors.paymentPhone}
            />:null}        
        </>
    )
}
