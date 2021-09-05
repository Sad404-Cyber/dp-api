<div align="center">
<img src="https://telegra.ph/file/627122d38e643af870fa7.jpg" alt="Logo" width="170" />

## DP-API

</div>

<p align="center">
<a href="##"><img title="dp-api" src="https://img.shields.io/static/v1?label=package&message=dp-api&color=blue"></a>
</p>
<p align="center">
  <a href="https://github.com/dappauhuy"><img title="Author" src="https://img.shields.io/badge/Author-dappauhuy-red.svg?style=for-the-badge&logo=github" /></a>
</p>
<p align="center">
<a href="#"><img title="api-module" src="https://img.shields.io/static/v1?label=FREE&message=dp-api&color=blue"></a>
</p>

## ```INSTALL And UNINSTALL```
> npm install dp-api
>  
> npm uninstall dp-api


## ```Tiktok Downloader```
```
const dp = require('dp-api')
const url = 'https://vm.tiktok.com/ZSJ3K8BV4/'

dp.tiktokDown(url)
.then((data) => {
  console.log(data)
})
```

## ```Instagram Downloader```
```
const dp = require('dp-api')
const url = 'https://www.instagram.com/p/CTErs6vsJKd/'

dp.igDownload(url)
.then((data) => {
  console.log(data)
})
```

## ```Twitter Downloader```
```
const dp = require('dp-api')
const url = 'https://twitter.com/i/status/1432866536264540163'

dp.twitterDown(url)
.then((data) => {
  console.log(data)
})
```

## ```Emoji Scraper```
```
const dp = require('dp-api')
const emoji = '😂'

dp.emojiScraper(emoji)
.then((data) => {
  console.log(data)
})
```

## ```Wikipedia```
```
const dp = require('dp-api')
const query = 'anime'

dp.wikiPedia(query)
.then((data) => {
  console.log(data)
})
```

## ```Kusonime```
```
const dp = require('dp-api')
const query = 'boruto'

dp.kusoNime(query)
.then((data) => {
  console.log(data)
})
```

## ```OtakuDesu```
```
const dp = require('dp-api')
const query = 'boruto'

dp.otakuDesu(query)
.then((data) => {
  console.log(data)
})
```

## ```Otakudesu Ongoing```
```
const dp = require('dp-api')

dp.otakuDesuOngoing()
.then((data) => {
  console.log(data)
})
```

## ```WebToons```
```
const dp = require('dp-api')
const query = 'just friend'

dp.webToons(query)
.then((data) => {
  console.log(data)
})
```

## ```Tebak Gambar```
```
const dp = require('dp-api')

dp.tebakGambar()
.then((data) => {
  console.log(data)
})
```

## ```Mui Halal```
```
const dp = require('dp-api')
const produk = 'tempe'
const page = 1

dp.muiHalal(produk, page)
.then((data) => {
  console.log(data)
})
```

  # Thanks To
* [`DappaUhuy`](https://github.com/dappauhuy)