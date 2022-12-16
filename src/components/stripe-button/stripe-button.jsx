import StripeCheckout from "react-stripe-checkout";

const StripeCheckoutButton = ({ price }) => {
    const priceForStripe = price * 100;
    const publishableKey = 'pk_test_51MFbjWL8pVXkAKV1Slhiy53sm4iRnLSxQIC8Vtonp0fyuhIIZkoDTk1t3GXPyrdyNSRxB921XQMiWmLHQw4xVNCb00VXWmUMyc';

    const onToken = token => {
        console.log(token);
        alert('Payment successful');
    }

    return (
        <StripeCheckout
            label="Pay now"
            name="CRWN Clothing Ltd."
            billingAddress
            shippingAddress
            image="/favicon.ico"
            description={`Your total is $${price}`}
            amount={priceForStripe}
            panelLabel="Pay Now"
            token={onToken}
            stripeKey={publishableKey}
        />
    );
}

export default StripeCheckoutButton;