const express = require('express')
const noauthresource = require('../models/noauthresource')
const handle = require('../../lib/error_handler')
// const customErrors = require('../../lib/custom_errors')
// const handle404 = customErrors.handle404
const router = express.Router()

router.get('/noauthresource', (req, res) => {
  noauthresource.find()
    .then(noauthresource => {
      return noauthresource.map(noauthresource => noauthresource.toObject())
    })
    .then(noauthresource => res.status(200).json({noauthresource: noauthresource}))
    .catch(err => handle(err, res))
})

router.post('/noauthresource', (req, res) => {
 
  noauthresource.create(req.body.noauthresource)
    .then(noauthresource => {
      res.status(201).json({ noauthresource: noauthresource.toObject() })
    })
    .catch(err => handle(err, res))
})

module.exports = router
