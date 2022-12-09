class MailSender {

    static createTransporter = (nodemailer) => {
        MailSender._transporter = nodemailer.createTransport({
            port: 465,               // true for 465, false for other ports
            host: "smtp.gmail.com",
            auth: {
                user: 'fedorichev16@gmail.com',
                pass: 'cjcimfbeswhgekbn',
            },
            secure: true,
        });
    }

    static  send = async (req, res) => {
        const mailData = {
            from: 'fedorichev16@gmail.com',  // sender address
            to: req.query.to,   // list of receivers
            subject: 'Ждем тебя на VR DAYS 2023',
            text: 'That was easy!',
            html: `<table width="100%" cellspacing="0" cellpadding="0" border="0"><tbody><tr>
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
                                        <tr style="width:100%;max-width:620px;min-width:340px" >
                                            <td style="font-size:0;line-height:0;font-family:Arial,Helvetica,sans-serif;color:#eaecf3;text-align:center">

                                                <span>&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;<wbr>&nbsp;&zwnj;&nbsp;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;<wbr>&nbsp;&zwnj;&nbsp;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;<wbr>&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;<wbr>&nbsp;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&nbsp;&zwnj;<wbr>&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&nbsp;&zwnj;<wbr>&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;<wbr>&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;<wbr>&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;</span>
                                            </td>
                                        </tr>

                                        <tr>
                                            <td valign="middle" align="left"
                                                style="font-weight:800;font-size:100px;font-family:Verdana,Helvetica,Arial,sans-serif;padding-bottom:20px;padding-top:20px">
                                                <a href=""
                                                   style="text-decoration:none;color:#e0eaff" target="_blank"
                                                   data-saferedirecturl="https://www.google.com/url?q=https://Netology.mckx.ru/c/ZX4KAAQAAACY-QBS/G4JKAg/87mLdvvyBuwXmnkS/?u%3Dhttps%253A%252F%252Fnetology.ru%252F%253Futm_source%253Dtriggers%2526utm_medium%253Demail%2526utm_campaign%253D15_minutes_before_ou&amp;source=gmail&amp;ust=1670628848964000&amp;usg=AOvVaw1RDfcT06m3d_QEIc0cvdvU">
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
                                                            ${req.query.name}, вы зарегистрированы на конференцию
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
                                                                        <a href="https://Netology.mckx.ru/c/ZX4KAAQAAACY-QBS/KoJKAg/GbmZnjdGXq6ODaO_/?u=https%3A%2F%2Fnetology.ru%2F%3Futm_source%3Dtriggers%26utm_medium%3Demail%26utm_campaign%3D15_minutes_before_ou"
                                                                           style="text-decoration:none;color:#8f95ab"
                                                                           target="_blank"
                                                                           data-saferedirecturl="https://www.google.com/url?q=https://Netology.mckx.ru/c/ZX4KAAQAAACY-QBS/KoJKAg/GbmZnjdGXq6ODaO_/?u%3Dhttps%253A%252F%252Fnetology.ru%252F%253Futm_source%253Dtriggers%2526utm_medium%253Demail%2526utm_campaign%253D15_minutes_before_ou&amp;source=gmail&amp;ust=1670628848964000&amp;usg=AOvVaw105Hrj-jNpA_VjR_jBJqxN">vr.days.ru</a><br>
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
                </tr></tbody></table></td></tr></tbody></table>`
        };

        MailSender._transporter.sendMail(mailData,  (err, info) => {
            if (err) {
                console.log(err);
                res.status(200).send("Fail");
            } else {
                console.log(info);
                res.status(200).send("OK");
            }
        });
    }
}

module.exports.MailSender = MailSender;
