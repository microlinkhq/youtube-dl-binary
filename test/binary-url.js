'use strict'

const test = require('ava')

const binaryUrl = require('../src/binary-url')

test('for unix (by default)', async t => {
  t.false((await binaryUrl()).endsWith('.exe'))
})

test('for windows', async t => {
  t.true((await binaryUrl({ platform: 'win' })).endsWith('.exe'))
})
