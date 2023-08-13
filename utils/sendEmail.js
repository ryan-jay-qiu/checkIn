const mailer = require('nodemailer');

const transporter = mailer.createTransport({
  host: "smtp.qq.com",
  port: 465,
  secure: true,
  auth: {
    // TODO: replace `user` and `pass` values from <https://forwardemail.net>
    user: '839169472@qq.com',
    pass: 'bfqzruqcdpcmbbib'
  }
});
exports.sendMail=function(subject='签到',msg=''){
    transporter.sendMail({
        from: '"839169472@qq.com', // sender address
        to: "839169472@qq.com", // list of receivers
        subject: subject.toString() +"签到通知"+ new Date().toLocaleDateString(), // Subject line
        text: JSON.stringify(msg) , // plain text body
        // html: "<b>Hello world?</b>", // html body
      });
}
