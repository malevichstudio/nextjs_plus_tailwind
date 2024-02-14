import * as handlebars from 'handlebars';
import nodemailer from 'nodemailer';

const { MAILING_EMAIL, MAILING_PASSWORD } = process.env;

export default async function sendMail({ to, user_name, email_link, subject, template }) {
  let transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: MAILING_EMAIL,
      pass: MAILING_PASSWORD,
    },
  });

  //---- Html replacment
  const data = handlebars.compile(template);
  const replacments = {
    user_name,
    email_link,
  };
  const html = data(replacments);

  //---- Verify connection config
  await new Promise((resolve, reject) => {
    transporter.verify((error, success) => {
      if (error) {
        console.log(error);
        reject(error);
      } else {
        console.log('server is listening...');
        resolve(success);
      }
    });
  });

  //---- Send email
  const options = {
    from: MAILING_EMAIL,
    to,
    subject,
    html,
  };

  await new Promise((resolve, reject) => {
    transporter.sendMail(options, (err, info) => {
      if (err) {
        console.error(err);
        reject(err);
      } else {
        console.log(info);
        resolve(info);
      }
    });
  });
}
