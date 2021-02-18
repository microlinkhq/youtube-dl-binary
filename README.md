<div align="center">
  <img src="https://cdn.microlink.io/logo/banner.png"">
</div>

> Tiny tool for downloading the latest `youtube-dl` version available.

## Usage

### Using as microservice

Just query against [youtube-dl-binary.vercel.app](https://youtube-dl-binary.vercel.app). Binary is cached every 24 hours.

* for UNIX (Linux/Mac): [youtube-dl-binary.vercel.app](https://youtube-dl-binary.vercel.app)
* for Windows: [youtube-dl-binary.vercel.app?platform=win](https://youtube-dl-binary.vercel.app?platform=win)

### Using at Node.js

first install the module

```bash
npm install youtube-dl-binary
```

Then you can interact with it

```js
const youtubeDlBinary = require('youtube-dl-binary')
const got = require('got')
const fs = require('fs)

;(async () => {
  got.stream(await youtubeDlBinary()).pipe(fs.createWriteStream('youtube-dl'))
})()
```

## License

**youtube-dl-binary** © [microlink.io](https://microlink.io), released under the [MIT](https://github.com/microlinkhq/youtube-dl-binary/blob/master/LICENSE.md) License.<br>
Authored and maintained by [microlink.io](https://microlink.io) with help from [contributors](https://github.com/microlinkhq/youtube-dl-binary/contributors).

> [microlink.io](https://microlink.io) · GitHub [microlink.io](https://github.com/microlinkhq) · Twitter [@microlinkhq](https://twitter.com/microlinkhq)
