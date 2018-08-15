const stripe = require('stripe')('sk_test_fJodJbPgGi0KM42EvCgMAufO')


exports.handler = async function(event){
    const {
        tokenId,
        email,
        name,
        description,
        amount
    } = JSON.parse(event.body)
    const customer = await stripe.customers.create({
        description:email,
        source: tokenId
    
    })

    await stripe.charges.create({
        customer: cusomer.id,
        amount, 
        name,
        description, 
        currency: 'usd'
    })
}