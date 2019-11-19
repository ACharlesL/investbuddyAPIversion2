'use strict'

const s3Upload = require('./../lib/aws-s3-upload')
const file = process.argv[2]
const fileName = process.argv[3] || 'default'

s3Upload(file, fileName)
  .then(console.log)
  .then(console.error)
