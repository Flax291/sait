const {DB} = require("./db");
const fs = require("fs");

class MailSender {
    static createTransporter = (nodemailer) => {
        MailSender._transporter = nodemailer.createTransport({
            port: 465,               // true for 465, false for other ports
            host: "smtp.mail.ru",
            auth: {
                user: 'vr_days_official@mail.ru',
                pass: 'KD3i1PpbmqZGMeLBVAyt',
            },
            secure: true,
        });
    }
    static  send = async (req, res) => {
        const mailData = {
            from: 'vr_days_official@mail.ru',  // sender address
            to: req.query.to,   // list of receivers
            subject: 'Ждем тебя на VR DAYS 2023',
            text: 'That was easy!',
            html: `<table width="100%" cellspacing="0" cellpadding="0" border="0">
    <tbody>
    <tr>
        <td align="center" bgcolor="#EAECF3" style="background-color:#030b1d">
            <table width="100%" cellpadding="0" cellspacing="0" border="0">
                <tbody>
                <tr>
                    <td align="center">

                        <table cellspacing="0" cellpadding="0"
                        ">
                <tbody>
                <tr>
                    <td align="center" style="padding-left:15px;padding-right:15px">
                        <table width="100%" cellpadding="0" cellspacing="0" border="0">


                            <tbody>
                            <tr style="width:100%;max-width:620px;min-width:340px">
                                <td style="font-size:0;line-height:0;font-family:Arial,Helvetica,sans-serif;color:#eaecf3;text-align:center">

                                    <span>&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;<wbr>&nbsp;&zwnj;&nbsp;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;<wbr>&nbsp;&zwnj;&nbsp;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;<wbr>&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;<wbr>&nbsp;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&nbsp;&zwnj;<wbr>&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&nbsp;&zwnj;<wbr>&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;<wbr>&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;<wbr>&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;</span>
                                </td>
                            </tr>

                            <tr>
                                <td valign="middle" align="left"
                                    style="font-weight:800;font-size:100px;font-family:Verdana,Helvetica,Arial,sans-serif;padding-bottom:20px;padding-top:20px">
                                    <a href=""
                                       style="text-decoration:none;color:#e0eaff" target="_blank"
                                       data-saferedirecturl="">
                                        VR DAYS 2023
                                    </a>
                                </td>
                            </tr>

                            <tr style="width:100%;max-width:620px;min-width:340px">
                                <td align="center" bgcolor="#ffffff"
                                    style="background-color:#ffffff;border-radius:20px 20px 20px 20px;padding-bottom:40px;padding-top:30px;overflow:hidden;padding-left:15px;padding-right:15px">

                                    <table width="540" cellspacing="0" cellpadding="0"
                                           style="width:100%;max-width:540px">

                                        <tbody>
                                        <tr>
                                            <td style="font-family:Verdana,Helvetica,Arial,sans-serif;font-style:normal;font-size:22px;line-height:29px;text-align:left;color:#27292d;padding-bottom:20px;font-weight:bold">
                                                ${req.query.name}, вы почти зарегистрированы на конференцию!
                                            </td>
                                        </tr>
                                        
                                        <tr>
                                            <td align="center" style="padding-bottom:40px;font-family:Verdana,Helvetica,Arial,sans-serif;font-size:16px">
                           
                                                <a href="http://192.168.88.253:5000/good_mail?from=${req.query.to}&name=${req.query.name}" style="background-color:#27292d;border-radius:6px;color:#ffffff;display:inline-block;font-family:Verdana,Helvetica,Arial,sans-serif;font-size:16px;line-height:50px;text-align:center;text-decoration:none;width:200px" target="_blank" data-saferedirecturl="">Подтвердить</a>
                              
                                            </td>
                                        </tr>


                                        <tr>
                                            <td align="center" style="padding-bottom:0px">
                                                <table width="100%" cellpadding="0" cellspacing="0"
                                                       border="0">

                                                    <tbody>
                                                    <tr>
                                                        <td style="font-family:Verdana,Helvetica,Arial,sans-serif;font-style:normal;font-size:16px;line-height:22px;text-align:left;padding-bottom:10px;color:#27292d">
                                                            <strong style="font-weight:bold">Где ?</strong>
                                                            M-1 Арена
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td style="font-family:Verdana,Helvetica,Arial,sans-serif;font-style:normal;font-size:16px;line-height:22px;text-align:left;padding-bottom:10px;color:#27292d">
                                                            <strong style="font-weight:bold">Когда ?</strong>
                                                            24 - 26 декабря
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td style="font-family:Verdana,Helvetica,Arial,sans-serif;font-style:normal;font-size:16px;line-height:22px;text-align:left;padding-bottom:40px;color:#27292d">
                                                            <strong style="font-weight:bold">Во сколько ?</strong>
                                                            12:00 - 18:00
                                                        </td>
                                                    </tr>
                                                    </tbody>
                                                </table>

                                            </td>
                                        </tr>


                                        </tbody>
                                    </table>

                                </td>
                            </tr>

                            <tr style="width:100%;max-width:620px;min-width:340px">
                                <td height="20" style="line-height:20px">&nbsp;</td>
                            </tr>


                            <tr style="width:100%;max-width:620px;min-width:340px">
                                <td align="center"
                                    style="padding-top:20px;padding-left:30px;padding-right:30px">
                                    <table width="100%" cellpadding="0" cellspacing="0" border="0">
                                        <tbody>
                                        <tr>
                                            <td valign="top">
                                                <table width="100%" cellpadding="0" cellspacing="0"
                                                       border="0">
                                                    <tbody>
                                                    <tr>
                                                        <td style="font-family:Verdana,Helvetica,Arial,sans-serif;text-align:left;font-style:normal;font-weight:normal;font-size:14px;line-height:22px;color:#8f95ab;padding-bottom:34px">
                                                            <a href="https://flax291.github.io/sait/"
                                                               style="text-decoration:none;color:#8f95ab"
                                                               target="_blank"
                                                               data-saferedirecturl="https://flax291.github.io/sait/">vr.days.ru</a><br>
                                                            <a href="tel:+79115674433"
                                                               style="text-decoration:none;color:#8f95ab"
                                                               target="_blank">8 (911) 567-44-33</a>
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                    </tr>
                                                    </tbody>
                                                </table>
                                            </td>
                                        </tr>
                                        </tbody>
                                    </table>

                                </td>
                            </tr>
                            </tbody>
                        </table>
                    </td>
                </tr>

                </tbody>
            </table>
        </td>
    </tr>
    </tbody>
</table></td></tr></tbody></table>`
        };

        MailSender._transporter.sendMail(mailData, (err, info) => {
            if (err) {
                console.log(err);
                res.status(200).send("Fail");
            } else {
                console.log(info);
                res.status(200).send("OK");
            }
        });
    }
    static getCountUsers = async (req, res) => {
        DB.getCount((count) => res.status(200).send(count + ""));
    }
    static addUser = async (req, res) => {
        DB.insert(req.query.from, req.query.name, () => {});
        console.log("попали");

        res.writeHead(200, {'Content-Type': 'text/html'});
        const myReadStream = fs.createReadStream(__dirname + '/template.html', 'utf8');
        myReadStream.pipe(res);
        //res.send("<h1>Спасибо за подтверждение!</h1>");
    }
}

module.exports.MailSender = MailSender;
