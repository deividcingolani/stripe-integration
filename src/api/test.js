const Stripe = require('stripe');
const stripe = Stripe('sk_test_51IlIoYBhf7mFz8SCqbBVBUk0WtAuHVW4Y14jZHJYR8kemiWvLWVawAHJDCwL5U4j36ri3rReEp45p3Z6aD6NM13M00Cq1s9TsP');

const pay = async (req, res) => {
    // var paymentIntent;
    // try {
    //     paymentIntent = await stripe.paymentIntents.create({
    //         amount: 200,
    //         currency: "usd",
    //         payment_method_types: ["card"],
    //         receipt_email: "cingolanidavid@gmail.com",
    //     });
    //     console.log(paymentIntent);
    // } catch (error) {
    //     console.log(error);
    //     process.exit(1);
    // }
    try {
        const paymentConfirm = await stripe.paymentIntents.confirm(
            'pm_1In2mHBhf7mFz8SCWq0gXVDZ',
            { payment_method: "pm_card_visa" }
        );
        console.log('------------------------------------------------------------');
        console.log(paymentConfirm);
    } catch (error) {
        console.log(error);
    }
}

pay();