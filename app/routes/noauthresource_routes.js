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
  // const noauthresourceObj = {
  //   title: req.body.title,
  //   text: req.body.text
  // }
  noauthresource.create(req.body.noauthresourceObj)
    .then(noauthresource => {
      res.status(201).json({ noauthresource: noauthresource.toObject() })
    })
    .catch(err => handle(err, res))
})

module.exports = router
