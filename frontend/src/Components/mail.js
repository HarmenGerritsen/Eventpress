const emailTemplate = {
  subject: 'Inschrijving Event',
  text: `Je bent ingeschreven!`,
  html: `<h1>Je bent ingeschreven!</h1>`,
};

await strapi.plugins.email.services.email.sendTemplatedEmail(
  {
    to: {ingevuldemail},
  },
  emailTemplate,
  {
    user: _.pick(user, ['username', 'email', 'firstname', 'lastname']),
  }
);
