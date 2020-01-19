const mongoose = require('mongoose')

const noauthresourceSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true
  },
  text: {
    type: String,
    required: true
  }

}, {
  timestamps: true
})

module.exports = mongoose.model('Noauthresource', noauthresourceSchema)
