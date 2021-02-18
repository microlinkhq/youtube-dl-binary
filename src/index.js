'use strict'

const got = require('got')

const ENDPOINT =
  'https://api.github.com/repos/ytdl-org/youtube-dl/releases?per_page=1'

module.exports = async ({ endpoint = ENDPOINT, platform = 'linux' } = {}) => {
  const [lastRelease] = await got(endpoint, {
    responseType: 'json',
    resolveBodyOnly: true
  })

  const { assets } = lastRelease

  const execName = platform === 'linux' ? 'youtube-dl' : 'youtube-dl.exe'
  const { browser_download_url: downloadUrl } = assets.find(
    ({ name }) => name === execName
  )

  return downloadUrl
}
