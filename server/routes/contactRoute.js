const router = require('express').Router();
const nodemailer = require('nodemailer');
require('dotenv').config();




router.get('/', (req, res) => {
    res.send('contacted');
})



router.post('/', (req, res) => {

    let data = req.body;

    //smtp is a protocol for transporting messages every email providers support this protocol
    const { name, email, message } = req.body;

    let smtpTransport = nodemailer.createTransport({

        service: 'Gmail',
        //the port connect
        port: 465,
        //for authentication
        secure: false,
        auth: {
            user: process.env.EMAIL_USER,
            pass: process.env.EMAIL_PASS
        }

    });

    let mailOptions = {
        from: data.email,
        to: process.env.EMAIL_USER,
        subject: `Message from ${data.name}`,
        html: `
      <h3>Information</h3>
      <ul>
        <li>Name: ${data.name}</li>
        <li>Email: ${data.email}</li>
      </ul>
      <h3>Message</h3>
      <p>${data.message}</p>
    `
    };


    smtpTransport.sendMail(mailOptions, (err, response) => {
        if (err) {
            console.log("Error occurred:", err);
            return res.status(400).json({ msg: err.message });
        } else {
            console.log("Email sent successfully");
            return res.status(200).json({ msg: 'Message was sent' });
        }
    });
});


module.exports = router;

