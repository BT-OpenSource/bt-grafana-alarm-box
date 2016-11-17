import {Builder} from '../../src/util/builder'

describe('Builder', function () {
  beforeEach(function () {
    this.subject = new Builder({})
  })

  describe('call', function () {
    it('builds a box summing all the series lengths', function () {
      var seriesList = [
        { target: 'a', datapoints: [[1, 'ts'], [2, 'ts']] },
        { target: 'b', datapoints: [[2, 'ts'], [3, 'ts']] }
      ]

      var expected = { number: 4 }
      expect(this.subject.call(seriesList)).toEqual(expected)
    })
  })
})
