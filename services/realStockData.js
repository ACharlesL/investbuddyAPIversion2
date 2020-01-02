const fetch = require('node-fetch')

class RealStock {
  constructor (title, price) {
    this.title = null
    this.price = price
  }

  async getStock () {
    await fetch('https://apidojo-yahoo-finance-v1.p.rapidapi.com/stock/v2/get-profile?symbol=AAPL', {
      'method': 'GET',
      'headers': {
        'x-rapidapi-host': 'apidojo-yahoo-finance-v1.p.rapidapi.com',
        'x-rapidapi-key': '833717da8emshdb6cce42afdd1e9p1b5b60jsn3566179e8af4'
      }
    })
      .then(response => {
        return response.json()
      })
      // .then(response => {
      //   return response.json()
      // })
      .then(data => {
        // // Work with JSON data here
        let testValue = ''
        console.log(data.price.shortName)
        testValue = data.price.shortName
        this.title = testValue

        this.price = data.price.regularMarketPreviousClose

        // UserStock.title = data.price.shortName
      })
      // eslint-disable-next-line handle-callback-err
      .catch(err => {
        console.log(err)
      })
  }
}

module.exports = RealStock
