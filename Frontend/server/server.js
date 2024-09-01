// // const express = require('express');
// // const bodyParser = require('body-parser');
// // const axios = require('axios');
// import express from 'express';
// import bodyParser from 'body-parser';
// import axios from 'axios';
// //import { config } from 'dotenv';

// const app = express();
// const port = 5000;

// app.use(bodyParser.json());

// const PAYPAL_CLIENT_ID = 'YOUR_PAYPAL_CLIENT_ID';
// const PAYPAL_SECRET = 'YOUR_PAYPAL_SECRET';
// const PAYPAL_API = 'https://api-m.sandbox.paypal.com'; // Sandbox API for testing

// app.post('/api/create-order', async (req, res) => {
//   const { amount, description, email } = req.body;

//   const PAYPAL_CLIENT_ID = "AcH3IaxkZk-1sbj1njvASwytQWkSp2jGYiQY1dr8lqqPboVGMTzs9l_266-ezyHBRz7w-rGN7nyTyI3G";

//   const PAYPAL_SECRET = "EKMLcF_5INQw7raQkbsFMgGAaTHhTy4XHgpWAHpw0gyOEOshua38SbE6WnaF8QSrcW24zu_gCBIMYk-l";

//   try {
//     const response = await axios.post(
//       `${PAYPAL_API}/v2/checkout/orders`,
//       {
//         intent: 'CAPTURE',
//         purchase_units: [{
//           amount: {
//             currency_code: 'USD',
//             value: amount,
//           },
//           description: description,
//         }],
//         payer: {
//           email_address: email,
//         },
//       },
//       {
//         headers: {
//           'Content-Type': 'application/json',
//           'Authorization': `Basic ${Buffer.from(`${PAYPAL_CLIENT_ID}:${PAYPAL_SECRET}`).toString('base64')}`,
//         },
//       }
//     );

//     res.json(response.data);
//   } catch (error) {
//     console.error('Error creating PayPal order:', error);
//     res.status(500).json({ error: 'Failed to create PayPal order' });
//   }
// });

// app.listen(port, () => {
//   console.log(`Server is running on http://localhost:${port}`);
// });
