const mongoose = require('mongoose')

/**
 *  Database schema for users
 *  discordId
 *  Username
 *  Link to Avatar
 *  
 *  Payment type
 *  Payment method: Default is stripe/card
 *  Paymentresult: payment id, payment status, update_time, email address,
 *  firstpayment: Date of first payment (stripe api for this)
 *  
 * LicenseKey
 */
const DiscordUserSchema = new mongoose.Schema({
    discordId: { type: String, required: true },
    username: { type: String, required: true },
    avatarLink: { type: String, required: true },
    email: { type: String, required: true },
    discordHash: { type: String, required: true },

    stripe_id: { type: String, default: 'none' },
    stripe_subscription_id: { type: String, default: 'none' },

    lifetimePayment: { type: Boolean, required: true, default: false },
    
    firstPayment: { type: String, default: false },
    currentPayment: {type: String, default: ''},
    nextDue: {type: String, default: ''},
    
    licenseKey: { type: String, default: 'TK-12345-67890-ABCDE' }
});

const DiscordUser = module.exports = mongoose.model('User', DiscordUserSchema)
