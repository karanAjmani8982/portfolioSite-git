const sgMail = require("@sendgrid/mail");

// SENDGRID_API_KEY = "";

// sgMail.setApiKey(SENDGRID_API_KEY);

sgMail.setApiKey(process.env.SENDGRID_API_KEY);

const boldName = "Name";
const boldEmail = "Email Address";
const boldMessagge = "Message";

// const sendEmailToMe = (name, email, message) => {
//     sgMail.send({
//         to: 'karanajmani72@gmail.com',
//         from: 'karanajmani7272@gmail.com',
//         subject: `Message from ${name}`,
//         text: `${message}<emailID of sender: ${email}>`
//     })
// }

// const boldString = (substr) => `<b>${substr}</b>`;

const sendEmailToMe = (name, email, message) => {
  sgMail.send({
    to: "karanajmani72@gmail.com",
    from: "karanajmani7272@gmail.com",
    subject: `Message from ${name}`,
    text: `${boldName} : ${name} \n\ ${boldEmail} : ${email} \n\ ${boldMessagge} : ${message}`,
  });
};

const sendEmailToUser = (name, email) => {
  sgMail.send({
    to: email,
    from: "karanajmani7272@gmail.com",
    subject: "Thanks for Contacting!",
    text: `Hey, ${name} thanks for contacting us! My team will reach out to you soon!`,
  });
};

module.exports = {
  sendEmailToMe,
  sendEmailToUser,
};

// template string ``

// sgMail.send({
//     to: 'karanajmani72@gmail.com',
//     from: 'karanajmani7272@gmail.com',
//     subject: 'This is my first email creation!',
//     text: 'I hope this one actually get to you.'
// })
