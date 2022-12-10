const express = require("express");
const bodyParser = require('body-parser');
const nodemailer = require('nodemailer');
const {MailSender} = require("./mail_sender");
const {DB} = require("./db");
const app = express();

app.use(bodyParser.json());

app.use(bodyParser.urlencoded({extended: false}));

const port = process.env.PORT || 5000;

MailSender.createTransporter(nodemailer);

app.get('/post_mail', MailSender.send);

app.get('/good_mail', MailSender.addUser);

app.get('/get_count', MailSender.getCountUsers);

app.listen(port, () => {
    console.log(`Server listening on port ${port}`);
    for (let i = 0; i < 1241; i++) {
        DB.insert(`test_${i}@gmail.com`, `name_${i}`, () => {
        });
    }
});
