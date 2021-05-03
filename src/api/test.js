const Stripe = require('stripe');
const SECRET = 'sk_test_51IlIoYBhf7mFz8SCqbBVBUk0WtAuHVW4Y14jZHJYR8kemiWvLWVawAHJDCwL5U4j36ri3rReEp45p3Z6aD6NM13M00Cq1s9TsP';
const stripe = new Stripe(SECRET);

const pay = async () => {
    // const { id, amount } = req.body
    const id = 'pm_1In5zYBhf7mFz8SCttkkRmBk';
    try {
        const payment = await stripe.paymentIntents.create({
            // Multiply amount * 100
            amount: 200 * 100, //req.body
            currency: 'usd',
            description: 'Describe the product',
            payment_method: id, //req.body
            confirm: true
        });
    
        console.log(payment);
    } catch (error) {
        console.log(error);
    }
}

pay();