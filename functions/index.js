/**
 * Import function triggers from their respective submodules:
 *
 * const {onCall} = require("firebase-functions/v2/https");
 * const {onDocumentWritten} = require("firebase-functions/v2/firestore");
 *
 * See a full list of supported triggers at https://firebase.google.com/docs/functions
 */
// http://127.0.0.1:5001/clone-488e7/us-central1/api

// const {onRequest} = require("firebase-functions/v2/https");
// const logger = require("firebase-functions/logger");
const functions = require('firebase-functions');

const express = require('express');
const cors = require('cors');
const stripe = require('stripe')(
    'sk_test_51NViGHF7jzWbdatLtz60IJ8bDmgvyO2xVEDcTj77Lr6RJcEC9CnrDxvUimzp6KiLH0CoMnn8bNkzVeuTSKY58icx00ZvXcFH32'
);

// - App config
const app = express();

// - Middlewares
app.use(cors({ origin: true }));
app.use(express.json());

app.get('/', (request, response) => response.status(200).send('hello world from fre aklilu'));


app.post('/payments/create', async (request, response) => {
    const total = request.query.total;

    console.log('Payment Request Recieved for this amount >>> ', total);

    const paymentIntent = await stripe.paymentIntents.create({
        amount: total, // subunits of the currency
        currency: 'usd',
    });

    // OK - Created
    response.status(201).send({
        clientSecret: paymentIntent.client_secret,
    });
});

// - Listen command
exports.api = functions.https.onRequest(app);

