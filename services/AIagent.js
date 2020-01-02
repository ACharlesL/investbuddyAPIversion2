
const fetch = require('node-fetch')

class Ai {
  constructor (realStockPrice = 0, currentTwitSentiment = 0, title = '', price = '') {
    this.realStockPrice = realStockPrice
    this.currentTwitSentiment = currentTwitSentiment
    this.title = title
    this.price = price
    this.historicData = ['0']
  }

  sayHi () {
    // console.log(this.name)
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
        this.title = data.price.shortName
        this.price = data.price.regularMarketPreviousClose
        console.log(this.title)
        // UserStock.title = data.price.shortName
      })
      // eslint-disable-next-line handle-callback-err
      .catch(err => {
        console.log(err)
      })
  }

  getHistoricalData () {
    fetch('https://apidojo-yahoo-finance-v1.p.rapidapi.com/stock/v2/get-historical-data?frequency=1d&filter=history&period1=1546448400&period2=1562086800&symbol=AAPL', {
      'method': 'GET',
      'headers': {
        'x-rapidapi-host': 'apidojo-yahoo-finance-v1.p.rapidapi.com',
        'x-rapidapi-key': '833717da8emshdb6cce42afdd1e9p1b5b60jsn3566179e8af4'
      }
    })
      .then(response => {
        return response.json()
      })
      .then(data => {
        console.log('in here')
        // console.log(data.prices)
        this.historicData = data.prices
        // console.log('data array' + this.historicData)
      })
      .catch(err => {
        console.log(err)
      })
  }
  decision () {
    // if(sentiment<0){
    //   //prediction
    //
    //   //price will go down, sell
    // }

    console.log('data array' + this.historicData)
    // console.log(this.title)
  }
}

module.exports = Ai
