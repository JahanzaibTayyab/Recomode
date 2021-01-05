const functions = require('firebase-functions');
const Stripe = require('stripe');
const stripe = Stripe('sk_test_51HyzS3CSXA43SZXtTBiV2jDR8MUVSrDOFsAcGvAB5oHSLNTasHvaFzBMzonaitwIcXYjw3nKH2wYODdDgLRG3hlc00D8MbMKCf');

// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//
// exports.helloWorld = functions.https.onRequest((request, response) => {
//     functions.logger.info("Hello logs!", { structuredData: true });
//     response.send("Hello from Firebase!");
// });

exports.completePaymentWithStripe = functions.https.onRequest((request, response) => {
    stripe.charges.create({
        amount: request.body.amount,
        currency: request.body.currency,
        source: 'tok_Master',
    }).then(charge =>
        response.send(charge)
    ).catch(error =>
        console.log(error)
    )
});