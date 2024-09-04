const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const cors = require("cors");

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true}));

const fs = require('fs');

//Код ниже нужно будет изменить так, чтобы информация сохранялась не в JSON, а в базу данных 
app.post("/subscription", (req, res) => {
    const pushSubscription = req.body;
    console.log('Received subscription:', pushSubscription);

    if (Object.keys(pushSubscription).length === 0) {
        console.error('Received empty subscription data');
        return res.status(400).send('Empty subscription data');
    }

    fs.writeFile("subscription.json", JSON.stringify(pushSubscription, null, 2), (err) => {
        if (err) {
            console.error('Error writing to file:', err);
            return res.status(500).send("Failed to save subscription.");
        }
        res.status(200).send("Subscription saved successfully.");
    });
});

app.listen(3000, "0.0.0.0");