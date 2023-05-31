
//http://localhost:3000


import express from 'express';
import nodemailer from 'nodemailer';
import path, { dirname } from 'path';
import { fileURLToPath } from 'url';

const app = express();
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

app.use(express.urlencoded({extended: true}));
app.use(express.json());
app.use(express.static(path.join(__dirname)));

app.listen(3000, () => {
  console.log('Server is running on port 3000');
});

app.post('/send', (req, res) => {
  const { firstname, lastname, email, phonenumber, subject, tellussomething } = req.body;

  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: 'sashapup22222@gmail.com',
      pass: 'xyghczyzzhvrdiac' 
    }
  });
 
  const mailOptions = {
    from: 'sashapup22222@gmail.com',
    to: 'sashapup22222@gmail.com',
    subject: `New Form Submission: ${subject}`,
    html: `   
      <p><strong>First Name:</strong> ${firstname}</p>
      <p><strong>Last Name:</strong> ${lastname}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Phone Number:</strong> ${phonenumber}</p>
      <p><strong>Subject:</strong> ${subject}</p>
      <p><strong>Tell Us Something:</strong> ${tellussomething}</p>
    `
  };
 
  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.error(error);
      res.status(500).send('Error.');
    } else {
      console.log('Success' );
      res.send('Success');
    }
  });
});


//http://localhost:3000