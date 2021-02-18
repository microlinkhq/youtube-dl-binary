'use strict'

const got = require('got')
const ms = require('ms')

const binaryUrl = require('.')

const ttl = ms('24h')

const cacheControl = `max-age=${ttl}, s-maxage=${ttl}, immutable, public`

module.exports = async (req, res) => {
  res.setHeader('Cache-Control', cacheControl)
  return got.stream(await binaryUrl(req.query)).pipe(res)
}
