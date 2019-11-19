'use strict'
require('dotenv').config()

const AWS = require('aws-sdk')
const s3 = new AWS.S3()
const fs = require('fs')

const mime = require('mime-types')
// return a promise that is resolved or rejected
// based on if s3.upload succeeds or not
const s3Upload = function (file, fileName) {
  const bucketName = process.env.BUCKET_NAME
  const contentType = mime.lookup(file)
  // console.log(contentType)
  const extension = mime.extension(contentType)
  // console.log(extension)
  // file path is from root of directory where file is run from
  const stream = fs.createReadStream(file)
  const params = {
    // the bucket we upload it to
    Bucket: bucketName,
    // the title of the image
    // Key: 'key.' + extension,
    Key: `${fileName}.${extension}`,
    // the actual file or contents of the file
    Body: stream,
    ACL: 'public-read',
    ContentType: contentType
  }
  s3.upload(params, function (err, data) {
    console.log(err, data)
  })
  return new Promise((resolve, reject) => {
    // upload file to s3
    s3.upload(params, function (err, data) {
      // if it fails the promise rejects
      if (err) {
        reject(err)
        // if it succees then promise resolves with data
      } else {
        resolve(data)
      }
    })
  })
}

module.exports = s3Upload
