'use strict'

module.exports = {
  send: async (ctx) => {
    const body = ctx.request.body
    const sendTo = body.usermail
    strapi.log.debug(`Trying to send an email to ${sendTo}`)

    try {
      const emailOptions = {
        to: sendTo,
        subject: 'Eventpress',
        html: `<h1>Gelukt!</h1><p>Je bent ingeschreven.</p>`,
      }
      await strapi.plugins['email'].services.email.send(emailOptions)
      strapi.log.debug(`Email sent to ${sendTo}`)
      ctx.send({ message: 'Email sent' })
    } catch (err) {
      strapi.log.error(`Error sending email to ${sendTo}`, err)
      ctx.send({ error: 'Error sending email' })
    }
  },
}