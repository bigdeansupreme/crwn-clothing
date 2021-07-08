import React from 'react';
import StripeCheckout from 'react-stripe-checkout';


const StripeCheckoutButton = ({ price }) => {
    const priceForStripe = price * 100
    const publishableKey = 'pk_test_51JB3nYLJkgMPnoODbKwJa7lvzYnRhdupU8jZojKRnSUS0ik001qHOtpA51ewPC2e1EJM3lZWf8rz8fkAURk9V92K00xd2TU2Sl';

    const onToken = token => {
        console.log(token)
        alert('payment successful')
    }

    return (
        <StripeCheckout 
            label='Pay Now'
            name='CRWN Clothing'
            billingAddress
            shippingAddress
            image='https://svgshare.com/i/CUz.svg'
            description={`Your total is $${price}`}
            amount={priceForStripe}
            panelLabel='Pay Now'
            token={onToken}
            stripeKey={publishableKey}
        />
    )
}

export default StripeCheckoutButton;