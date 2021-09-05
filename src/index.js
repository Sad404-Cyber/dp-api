const fetch = require('node-fetch')
const cheerio = require('cheerio')
const formData = require('form-data')

function tiktokDown(url) {
  return new Promise(async (resolve, reject) => {
    const baseUrl = 'https://musicaldown.com'
    const optionsGet = {
      method: 'GET',
      headers: {
        'cookie': '_ga=GA1.2.688739287.1629705556; session_data=9870dd1869284d4b242c75054922ca80; _gid=GA1.2.879595532.1630422474; _gat_gtag_UA_197840056_1=1; __gads=ID=4762a0dcb9efc7df-224881c43bcb0053:T=1629705557:RT=1630422562:S=ALNI_MbtviOkS9FNAff0DmsmPc0mMGs08w',
        'sec-ch-ua': '"Chromium";v="92", " Not A;Brand";v="99", "Google Chrome";v="92"',
        'user-agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/92.0.4515.159 Safari/537.36'
      }
    }
    const getHtml = await fetch(baseUrl, optionsGet).then(rsp => rsp.text())
    const $ = cheerio.load(getHtml)
    const action = $('form').attr('action')
    const urlName = $('form > div > div > input').eq(0).attr('name')
    const tokenName = $('form > div > div > input').eq(1).attr('name')
    const tokenValue = $('form > div > div > input').eq(1).attr('value')
    const bodyForm = new formData()
    bodyForm.append(urlName, url)
    bodyForm.append(tokenName, tokenValue)
    bodyForm.append('verify', 1)
    const optionsPost = {
      method: 'POST',
      body: bodyForm,
      headers: {
        'cookie': '_ga=GA1.2.688739287.1629705556; session_data=9870dd1869284d4b242c75054922ca80; _gid=GA1.2.879595532.1630422474; _gat_gtag_UA_197840056_1=1; __gads=ID=4762a0dcb9efc7df-224881c43bcb0053:T=1629705557:RT=1630422562:S=ALNI_MbtviOkS9FNAff0DmsmPc0mMGs08w',
        'sec-ch-ua': '"Chromium";v="92", " Not A;Brand";v="99", "Google Chrome";v="92"',
        'user-agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/92.0.4515.159 Safari/537.36'
      }
    }
    const getHtml2 = await fetch(baseUrl + action, optionsPost).then(rsp => rsp.text())
    const $$ = cheerio.load(getHtml2)
    const action2 = $$('form').attr('action')
    const getHtml3 = await fetch(baseUrl + action2, optionsGet).then(rsp => rsp.text())
    const $$$ = cheerio.load(getHtml3)
    resolve({
      status: true,
      message: 'By DappaUhuy',
      result: {
        thumb: $$('.welcome.section > .container > .row > .col.s12.l4 > img').attr('src'),
        mp4: {
          server_1: $$('.welcome.section > .container > .row > .col.s12.l8 > a').eq(0).attr('href'),
          server_2: $$('.welcome.section > .container > .row > .col.s12.l8 > a').eq(1).attr('href'),
          direct_link: $$('.welcome.section > .container > .row > .col.s12.l8 > a').eq(2).attr('href'),
          qr: $$('.welcome.section > .container > .row > .col.s12.l8 > p > img').attr('src')
        },
        mp3: {
          preview: $$$('.welcome.section > .container > .row > .col.s12.l4 > audio > source').attr('src'),
          server_1: $$$('.welcome.section > .container > .row > .col.s12.l8 > a').eq(0).attr('href'),
          server_2: $$$('.welcome.section > .container > .row > .col.s12.l8 > a').eq(1).attr('href'),
          direct_link: $$$('.welcome.section > .container > .row > .col.s12.l8 > a').eq(2).attr('href'),
          qr: $$$('.welcome.section > .container > .row > .col.s12.l8 > p > img').attr('src')
        }
      }
    })
  })
}

function igDownload(url) {
  return new Promise(async (resolve, reject) => {
    const baseUrl = 'https://keeppost.com'
    const optionsGet = {
      method: 'GET',
      headers: {
        'accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.9',
        'sec-ch-ua': '"Google Chrome";v="93", " Not;A Brand";v="99", "Chromium";v="93"',
        'user-agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/93.0.4577.63 Safari/537.36'
      }
    }
    const getHtml = await fetch(baseUrl, optionsGet).then(rsp => rsp.text())
    const $ = cheerio.load(getHtml)
    const build_id = $('input[name="build_id"]').attr('value')
    const build_key = $('input[name="build_key"]').attr('value')
    const bodyForm = new formData()
    bodyForm.append('url', url)
    bodyForm.append('build_id', build_id)
    bodyForm.append('build_key', build_key)
    const optionsPost = {
      method: 'POST',
      body: bodyForm,
      headers: {
        'accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.9',
        'sec-ch-ua': '"Google Chrome";v="93", " Not;A Brand";v="99", "Chromium";v="93"',
        'user-agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/93.0.4577.63 Safari/537.36'
      }
    }
    const getHtml2 = await fetch(baseUrl + '/process.php', optionsPost).then(rsp => rsp.text())
    const $$ = cheerio.load(getHtml2)
    resolve({
      status: true,
      message: 'By DappaUhuy',
      result: $$('.success > a').attr('href')
    })
  })
}

function twitterDown(url) {
  return new Promise(async (resolve, reject) => {
    const bodyForm = new formData()
    bodyForm.append('url', url)
    const optionsPost = {
      method: 'POST',
      body: bodyForm,
      headers: {
        'cookie': '_ga=GA1.2.1410189489.1630650655; _gid=GA1.2.95965189.1630650656; __gads=ID=8c5bb9c8c08571ab-22722b8c84cb001c:T=1630650656:RT=1630650656:S=ALNI_MYuAHfO543UXBFcCKILbqjWCEhpSg; XSRF-TOKEN=eyJpdiI6Im1UXC8zemE0UXFlYmJEbXoyNm1BeG5BPT0iLCJ2YWx1ZSI6InFNc0xOV0kxUHRaUG53VHdybHhOYnhPaTVMRWo5UExEVTJNSG4xOUFCQ2JEdjBvcGJGMUswS0pUZzNYTDAzNGFPUCtNMDFNOVp5REw2K3dTdUt5NG13PT0iLCJtYWMiOiIzODk5ZGVkM2I2ZjdjMTJhY2Y4NWI2MDY1OTc4OTVkZjFkMjhkOThhYmIyYzU5MzMxZjA0ZDEwNmQyZDViZDRlIn0%3D; laravel_session=eyJpdiI6IkRYK2M3U0VLSGxSQkFGTzRkdW9IeHc9PSIsInZhbHVlIjoiSEVMaUEyWTZUclU2MVN3NzFWdTQ0K2pQbFwvVVQ1d3gzTXJzakRYVFJtQlJvamwxczJnc2VqMHhid1QwdityMGJpd3J0M0h4bFI4RFA2Z09vUkg3T1BBPT0iLCJtYWMiOiJjN2U0ZDYzMTc3Zjg2OTEyOTVlNzgwNWRiMjZjNjMzMWM1NWMxODk3MTY2NjdhNTQ2Zjc0NzU5NTQzNGFjYzBiIn0%3D; __atuvc=5%7C35; __atuvs=6131c11f7c1d0b45004',
        'sec-ch-ua': '"Google Chrome";v="93", " Not;A Brand";v="99", "Chromium";v="93"',
        'user-agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/93.0.4577.63 Safari/537.36'
      }
    }
    const getHtml = await fetch('https://www.savetweetvid.com/downloader', optionsPost).then(rsp => rsp.text())
    const $ = cheerio.load(getHtml)
    resolve({
      status: true,
      message: 'By DappaUhuy',
      result: {
        title: $('.card > .row > .col-md-4.col-sm-4').text().trim().replace(/\n/g, ' '),
        hd: $('.col-md-8.col-sm-8.col-table').find('a').eq(0).attr('href'),
        medium: $('.col-md-8.col-sm-8.col-table').find('a').eq(1).attr('href'),
        low: $('.col-md-8.col-sm-8.col-table').find('a').eq(2).attr('href')
      }
    })
  })
}

function emojiScraper(emoji) {
  return new Promise(async (resolve, reject) => {
    if(emoji.match(/[a-z|0-9]/gi)) {
      resolve('Jangan huruf/angka bjir')
    }
    const optionsGet = {
      method: 'GET',
      headers: {
        'user-agent': 'Mozilla/5.0 (Linux; Android 9; Redmi 7A) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/80.0.3987.99 Mobile Safari/537.36'
      }
    }
    const getHtml = await fetch('https://emojipedia.org/search?q=' + encodeURI(emoji), optionsGet).then(rsp => rsp.text())
    const $ = cheerio.load(getHtml)
    const Apple = $('section.vendor-list > ul > li').find('div.vendor-image > img').eq(0).attr('srcset').replace(/ 2x/gi, '')
    const Google = $('section.vendor-list > ul > li').find('div.vendor-image > img').eq(1).attr('srcset').replace(/ 2x/gi, '')
    const Samsung = $('section.vendor-list > ul > li').find('div.vendor-image > img').eq(2).attr('srcset').replace(/ 2x/gi, '')
    const Microsoft = $('section.vendor-list > ul > li').find('div.vendor-image > img').eq(3).attr('srcset').replace(/ 2x/gi, '')
    const WhatsApp = $('section.vendor-list > ul > li').find('div.vendor-image > img').eq(4).attr('srcset').replace(/ 2x/gi, '')
    const Twitter = $('section.vendor-list > ul > li').find('div.vendor-image > img').eq(5).attr('srcset').replace(/ 2x/gi, '')
    const Skype = $('section.vendor-list > ul > li').find('div.vendor-image > img').eq(6).attr('srcset').replace(/ 2x/gi, '')
    const JoyPixels = $('section.vendor-list > ul > li').find('div.vendor-image > img').eq(7).attr('srcset').replace(/ 2x/gi, '')
    const OpenMoji = $('section.vendor-list > ul > li').find('div.vendor-image > img').eq(8).attr('srcset').replace(/ 2x/gi, '')
    const emojidex = $('section.vendor-list > ul > li').find('div.vendor-image > img').eq(9).attr('srcset').replace(/ 2x/gi, '')
    const Messager = $('section.vendor-list > ul > li').find('div.vendor-image > img').eq(10).attr('srcset').replace(/ 2x/gi, '')
    const LG = $('section.vendor-list > ul > li').find('div.vendor-image > img').eq(11).attr('srcset').replace(/ 2x/gi, '')
    const HTC = $('section.vendor-list > ul > li').find('div.vendor-image > img').eq(12).attr('srcset').replace(/ 2x/gi, '')
    const Mozilla = $('section.vendor-list > ul > li').find('div.vendor-image > img').eq(13).attr('srcset').replace(/ 2x/gi, '')
    const SoftBank = $('section.vendor-list > ul > li').find('div.vendor-image > img').eq(14).attr('srcset').replace(/ 2x/gi, '')
    const Docomo = $('section.vendor-list > ul > li').find('div.vendor-image > img').eq(15).attr('srcset').replace(/ 2x/gi, '')
    const au_by_KDDI = $('section.vendor-list > ul > li').find('div.vendor-image > img').eq(16).attr('srcset').replace(/ 2x/gi, '')
    resolve({
      status: true,
      message: 'By DappaUhuy',
      result: {
        Apple,
        Google,
        Samsung,
        Microsoft,
        WhatsApp,
        Twitter,
        Skype,
        JoyPixels,
        OpenMoji,
        emojidex,
        Messager,
        LG,
        HTC,
        Mozilla,
        SoftBank,
        Docomo,
        au_by_KDDI
      }
    })
  })
}

function wikiPedia(query) {
  return new Promise(async (resolve, reject) => {
    const baseUrl = 'https://id.m.wikipedia.org/w/index.php?search=' + query
    const optionsGet = {
      method: 'GET',
      headers: {
        'user-agent': 'Mozilla/5.0 (Linux; Android 9; Redmi 7A) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/80.0.3987.99 Mobile Safari/537.36'
      }
    }
    const getHtml = await fetch(baseUrl, optionsGet).then(rsp => rsp.text())
    const $ = cheerio.load(getHtml)
    let thumb = $('.thumb.tright > .thumbinner > a').find('img').attr('src')
    if (thumb === undefined) thumb = '//pngimg.com/uploads/wikipedia/wikipedia_PNG35.png'
    thumb = 'https:' + thumb
    resolve({
      status: true,
      message: 'By DappaUhuy',
      title: $('.pre-content.heading-holder > .page-heading > h1').text(),
      thumb: thumb,
      result: $('.mw-parser-output > #mf-section-0 > p').text().trim()
    })
  })
}

function kusoNime(query) {
  return new Promise(async (resolve, reject) => {
    const optionsGet = {
      method: 'GET',
      headers: {
        'user-agent': 'Mozilla/5.0 (Linux; Android 9; Redmi 7A) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/80.0.3987.99 Mobile Safari/537.36'
      }
    }
    const getHtml = await fetch('https://kusonime.com/?s=' + query + '&post_type=anime', optionsGet).then(rsp => rsp.text())
    const $ = cheerio.load(getHtml)
    const url = []
    $('div > div > ul > div > div > div').each(function() {
      url.push($(this).find('a').attr('href'))
    })
    const randomUrl = url[Math.floor(Math.random() * url.length)]
    const getHtml2 = await fetch(randomUrl, optionsGet).then(rsp => rsp.text())
    const $$ = cheerio.load(getHtml2)
    resolve({
      status: true,
      message: 'By DappaUhuy',
      result: {
        title: $$('.vezone > .venser').find('.jdlz').text(),
        thumb: $$('.vezone > .venser').find('div > img').attr('src'),
        views: $$('.vezone > .venser').find('div > div > span').text().trim().replace(' Views', ''),
        genre: $$('.vezone > .venser').find('.lexot > .info > p').eq(1).text().replace('Genre : ', ''),
        seasons: $$('.vezone > .venser').find('.lexot > .info > p').eq(2).text().replace('Seasons : ', ''),
        producers: $$('.vezone > .venser').find('.lexot > .info > p').eq(3).text().replace('Producers: ', ''),
        type: $$('.vezone > .venser').find('.lexot > .info > p').eq(4).text().replace('Type: ', ''),
        status: $$('.vezone > .venser').find('.lexot > .info > p').eq(5).text().replace('Status: ', ''),
        rating: $$('.vezone > .venser').find('.lexot > .info > p').eq(7).text().replace('Score: ', ''),
        duration: $$('.vezone > .venser').find('.lexot > .info > p').eq(8).text().replace('Duration: ', ''),
        release: $$('.vezone > .venser').find('.lexot > .info > p').eq(9).text().replace('Released on: ', ''),
        desc: $$('.vezone > .venser').find('p').eq(10).text(),
        url: randomUrl
      }
    })
  })
}

function otakuDesu(query) {
  return new Promise(async (resolve, reject) => {
    const optionsGet = {
      method: 'GET',
      headers: {
        'user-agent': 'Mozilla/5.0 (Linux; Android 9; Redmi 7A) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/80.0.3987.99 Mobile Safari/537.36'
      }
    }
    const getHtml = await fetch('https://otakudesu.moe/?s=' + query + '&post_type=anime', optionsGet).then(rsp => rsp.text())
    const $ = cheerio.load(getHtml)
    const url = []
    $('#venkonten > .vezone > .venser > .venutama > .page > ul.chivsrc > li').each(function() {
      url.push($(this).find('a').attr('href'))
    })
    const randomUrl = url[Math.floor(Math.random() * url.length)]
    const getHtml2 = await fetch(randomUrl, optionsGet).then(rsp => rsp.text())
    const $$ = cheerio.load(getHtml2)
    resolve({
      status: true,
      message: 'By DappaUhuy',
      result: {
        title: $$('.infozin > .infozingle > p > span').eq(0).text().replace(/Judul: /g, ''),
        japanese: $$('.infozin > .infozingle > p > span').eq(1).text().replace(/Japanese: /g, ''),
        score: $$('.infozin > .infozingle > p > span').eq(2).text().replace(/Skor: /g, ''),
        producer: $$('.infozin > .infozingle > p > span').eq(3).text().replace(/Produser: /g, ''),
        type: $$('.infozin > .infozingle > p > span').eq(4).text().replace(/Tipe: /g, ''),
        status: $$('.infozin > .infozingle > p > span').eq(5).text().replace(/Status: /g, ''),
        episode: $$('.infozin > .infozingle > p > span').eq(6).text().replace(/Total Episode: /g, ''),
        duration: $$('.infozin > .infozingle > p > span').eq(7).text().replace(/Durasi: /g, ''),
        release: $$('.infozin > .infozingle > p > span').eq(8).text().replace(/Tanggal Rilis: /g, ''),
        studio: $$('.infozin > .infozingle > p > span').eq(9).text().replace(/Studio: /g, ''),
        genre: $$('.infozin > .infozingle > p > span').eq(10).text().replace(/Genre: /g, ''),
        synopsis: $$('.sinopc > p').text(),
        url: randomUrl
      }
    })
  })
}

function otakuDesuOngoing() {
  return new Promise(async (resolve, reject) => {
    const optionsGet = {
      method: 'GET',
      headers: {
        'user-agent': 'Mozilla/5.0 (Linux; Android 9; Redmi 7A) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/80.0.3987.99 Mobile Safari/537.36'
      }
    }
    const getHtml = await fetch('https://otakudesu.moe/ongoing-anime', optionsGet).then(rsp => rsp.text())
    const $ = cheerio.load(getHtml)
    const result = []
    $('.venz > ul > li > .detpost').each(function() {
      result.push({
        title: $(this).find('h2.jdlflm').text(),
        thumb: $(this).find('.thumbz > img').attr('src'),
        episode: $(this).find('.epz').text().trim(),
        every: $(this).find('.epztipe').text().trim(),
        last_release: $(this).find('.newnime').text(),
        url: $(this).find('.thumb > a').attr('href')
      })
    })
    resolve({
      status: true,
      message: 'By DappaUhuy',
      result: result
    })
  })
}

function webToons(query) {
  return new Promise(async (resolve, reject) => {
    const bodyForm = new formData()
    bodyForm.append('searchType', 'ALL')
    bodyForm.append('keyword', query)
    const optionsPost = {
      method: 'POST',
      body: bodyForm,
      headers: {
        'user-agent': 'Mozilla/5.0 (Linux; Android 9; Redmi 7A) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/80.0.3987.99 Mobile Safari/537.36'
      }
    }
    const getHtml = await fetch('https://m.webtoons.com/id/search', optionsPost).then(rsp => rsp.text())
    const $ = cheerio.load(getHtml)
    const result = []
    $('ul.lst_type3.v3._searchResultList > li').each(function() {
      result.push({
        title: $(this).find('p.subj > span.ellipsis').text(),
        thumb: $(this).find('img').attr('src'),
        author: $(this).find('p.author').text(),
        like: $(this).find('em.grade_num').text(),
        url: $(this).find('a').attr('href')
      })
    })
    resolve({
      status: true,
      message: 'By DappaUhuy',
      result: result
    })
  })
}

function tebakGambar() {
  return new Promise(async (resolve, reject) => {
    const baseUrl = 'https://jawabantebakgambar.net'
    const optionsGet = {
      method: 'GET',
      headers: {
        'user-agent': 'Mozilla/5.0 (Linux; Android 9; Redmi 7A) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/80.0.3987.99 Mobile Safari/537.36'
      }
    }
    const getHtml = await fetch(baseUrl + '/all-answers/', optionsGet).then(rsp => rsp.text())
    const $ = cheerio.load(getHtml)
    const result = []
    $('ul.images > li > a').each(function() {
      result.push({
        image: baseUrl + $(this).find('img').attr('data-src'),
        answer: $(this).find('span').text()
      })
    })
    const random = result[Math.floor(Math.random() * result.length)]
    resolve({
      status: true,
      message: 'By DappaUhuy',
      result: random
    })
  })
}

function muiHalal(produk, page) {
  return new Promise(async (resolve, reject) => {
    const optionsGet = {
      method: 'GET',
      headers: {
        'user-agent': 'Mozilla/5.0 (Linux; Android 9; Redmi 7A) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/80.0.3987.99 Mobile Safari/537.36'
      }
    }
    const getHtml = await fetch('https://www.halalmui.org/mui14/searchproduk/search/?kategori=nama_produk&katakunci=' + produk + '&page=' + page, optionsGet).then(rsp => rsp.text())
    const $ = cheerio.load(getHtml)
    const url = []
    $('tbody > tr > td').get().map((rest) => {
      url.push($(rest).find('a').attr('href'))
    })
    const randomUrl = url[Math.floor(Math.random() * url.length)]
    const getHtml2 = await fetch(randomUrl, optionsGet).then(rsp => rsp.text())
    const $$ = cheerio.load(getHtml2)
    resolve({
      status: true,
      message: 'By DappaUhuy',
      result: {
        produk: $$('span').eq(0).text().replace('Nama Produk : ', ''),
        sertifikat: $$('span').eq(1).text().replace('Nomor Sertifikat :', ''),
        produsen: $$('span').eq(2).text().replace('Nama Produsen :', ''),
        expired: $$('span').eq(3).text().replace('Expired Date :', '')
      }
    })
  })
}

module.exports = {
  tiktokDown,
  igDownload,
  twitterDown,
  emojiScraper,
  wikiPedia,
  kusoNime,
  otakuDesu,
  otakuDesuOngoing,
  webToons,
  tebakGambar,
  muiHalal
}