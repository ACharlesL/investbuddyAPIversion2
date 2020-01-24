const express = require('express')
const Noauthresource = require('../models/noauthresource')
const handle = require('../../lib/error_handler')
// const customErrors = require('../../lib/custom_errors')
// const handle404 = customErrors.handle404
const router = express.Router()
router.use(function (req, res, next) {
  res.header('Access-Control-Allow-Origin', 'https://acharles001.gitlab.io/investbuddy ') // update to match the domain you will make the request from
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept')
  next()
})

router.get('/noauthresource', (req, res) => {
  Noauthresource.find()
    .then(noauthresource => {
      return noauthresource.map(noauthresource => noauthresource.toObject())
    })
    .then(noauthresource => res.status(200).json({noauthresource: noauthresource}))
    .catch(err => handle(err, res))
})

router.post('/noauthresource', (req, res) => {
  Noauthresource.create(req.body.noauthresource)
    .then(noauthresource => {
      res.status(201).json({ noauthresource: noauthresource.toObject() })
    })
    .catch(err => handle(err, res))
})

module.exports = router
