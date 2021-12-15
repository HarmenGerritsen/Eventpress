// File: config/plugins.js

module.exports = ({ env }) => ({
    // ...
    email: {
      provider: 'nodemailer',
      providerOptions: {
        host: env('EMAIL_SMTP_HOST', 'smtp.example.com'),
        port: env('EMAIL_SMTP_PORT', 587),
        auth: {
          user: env('EMAIL_SMTP_USER'),
          pass: env('EMAIL_SMTP_PASS'),
        },
      },
      settings: {
        defaultFrom: env('EMAIL_ADDRESS_FROM'),
        defaultReplyTo: env('EMAIL_ADDRESS_REPLY', env('EMAIL_ADDRESS_REPLY')),
      },
    },
    // ...
  })