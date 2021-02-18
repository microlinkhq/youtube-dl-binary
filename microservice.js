'use strict'

const ms = require('ms')

const binaryUrl = require('.')

const ttl = ms('24h')

const cacheControl = `max-age=${ttl}, s-maxage=${ttl}, immutable, public`

module.exports = async (req, res) => {
  res.setHeader('Cache-Control', cacheControl)
  res.status(200).send(await binaryUrl(req.query))
}
