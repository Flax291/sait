const express = require("express");
const bodyParser = require('body-parser');
const nodemailer = require('nodemailer');
const {MailSender} = require("./mail_sender");
const app = express();

app.use(bodyParser.json());

app.use(bodyParser.urlencoded({extended: false}));

const port = process.env.PORT || 5000;

MailSender.createTransporter(nodemailer);

app.post('/post_mail', MailSender.send);



app.listen(port, () => {
    console.log(`Server listening on port ${port}`);
});