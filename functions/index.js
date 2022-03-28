const functions = require("firebase-functions");
const express = require("express");
const cors = require("cors");
const { request, response } = require("express");
const stripe = require("stripe")("sk_test_51KiB5rSB7Rz8inLpGRXM9xanzxINDBceMGFg4bsVoWGYr5w0EhUWQcP5HxcShIxRnPyoCJoWyPfQDV2AAntGllC7009PvklOvh");

//App Config
const app = express();

//Middlewars
app.use(cors({origin : true}));
app.use(express.json());


//API routes
app.get('/', (request, response) => response.status(200).send('hello world'))

app.post("/payments/create", async(request, response)=> {
    const total = request.query.total;
    console.log("payment Request received:", total)
    const paymentIntent = await stripe.paymentIntents.create({
        amount: total,
        currency: "usd"
    })
    response.status(201).send({
        clientSecret: paymentIntent.client_secret
    })
})

// Listen Command
exports.api = functions.https.onRequest(app); 


//http://localhost:5001/clone-2d476/us-central1/api