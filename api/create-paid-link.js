// Set your secret key. Remember to switch to your live secret key in production.
// See your keys here: https://dashboard.stripe.com/apikeys
import Stripe from 'stripe'
const stripe = new Stripe(process.env.STRIPE_API_KEY)

module.exports = async (req, res) => {
  if (!req.query.destination) {
    res.send('A destination URL is required to create a paid link.')
  }

  const paymentLink = await stripe.paymentLinks.create({
    line_items: [{ price: process.env.STRIPE_PAID_LINK_PRODUCT_ID, quantity: 1 }],
    after_completion: { type: 'redirect', redirect: { url: req.query.destination } }
  })

  res.send(paymentLink.url)
}
