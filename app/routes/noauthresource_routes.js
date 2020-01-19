const express = require('express')
const noauthresource = require('../models/noauthresource')
const handle = require('../../lib/error_handler')
// const customErrors = require('../../lib/custom_errors')
// const handle404 = customErrors.handle404
const router = express.Router()

router.get('/noauthresource', (req, res) => {
  noauthresource.find()
    .then(noauthresource => {
      return res.send(Object.values(noauthresource))
    })
    .then(noauthresource => res.status(200).json({noauthresource: noauthresource}))
    .catch(err => handle(err, res))
})

router.post('/noauthresource', (req, res) => {
  const noauthresourceObj = {
    title: req.body.title,
    text: req.body.text
  }
  return res.send(noauthresourceObj)
})

module.exports = router
