import _ from 'lodash'

export class Builder {
  constructor (options) {
    this.options = options
  }

  call (seriesList = []) {
    var sum = _.reduce(seriesList, (memo, series) => {
      return memo + series.datapoints.length
    }, 0)

    return { number: sum }
  }
}
