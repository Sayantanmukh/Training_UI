const express = require('express');
const app = express();
const port = 9999;

app.listen(port, () => {
    console.log(`Go to http://localhost:${port}/ on browser.`);
});

app.get('/', (req, res) => {
    res.sendFile('C:\\Training-UI\\cadidate-info.html');
    // res.sendFile('index.html', { root: __dirname });
    console.log(`My app is running...`);
});

app.get('/home', (req, res) => {
    res.send(`Welcome to home page.`);
    console.log(`home`);
});

app.get('/about', (req, res) => {
    res.send(`Welcome to about page`);
    console.log(`about`);
});

app.get('/contact', (req, res) => {
    res.send(`Welcome to contact page`);
    console.log(`contact`);
});