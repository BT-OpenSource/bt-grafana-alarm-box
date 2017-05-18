import {Builder} from '../../src/util/builder'

describe('Builder', function () {
  beforeEach(function () {
    this.subject = new Builder({
      mathScratchPad: 'foo = data[1].datapoints[1]',
      mathDisplayValue: 'foo', mathColorValue: 'foo + 1'
    })
  })

  describe('call', function () {
    it('returns a box with evaluated expressions', function () {
      var seriesList = [{ datapoints: [0, 1, 2] }]

      var expected = {
        scratchPad: 0, displayValue: 0, colorValue: 1
      }

      expect(this.subject.call(seriesList)).toEqual(expected)
    })
  })
})
