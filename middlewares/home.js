const superagent = require('superagent')
const cheerio = require('cheerio')

superagent.get('http://you.163.com/').end((err, res) => {
    if (err) {
        console.log(err)
    } else {
        let $ = cheerio.load(res.text)
        $('.js-slick .item.imgCenterBanner').each((i, el) => {
            console.log($(el).find('a').find(imag).attr('src'))
        })
    }
})