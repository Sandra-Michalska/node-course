const express = require('express');

const app = express();

// Ex 1 - using middleware, next()...
// app.use((req, res, next) => {
//     console.log('##Middleware 1');
//     next();
// });

// app.use((req, res, next) => {
//     console.log('##Middleware 2');
//     res.send('<h1>Hello Express.js response ;)</h1>');
// });


// Ex 2
app.use('/', (req, res, next) => {
    console.log('##This runs on every request ;)');
    next(); // go further ;)
});

app.use('/test', (req, res, next) => {
    console.log('##Middleware test ;)');
    res.send('<h1>Test route</h1>');
});

app.use('/', (req, res, next) => {
    console.log('##Middleware default ;)');
    res.send('<h1>Any other route</h1>');
});


app.listen(3000);