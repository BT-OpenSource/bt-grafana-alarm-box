import {Builder} from '../../src/util/builder'

describe('Builder', function () {
  describe('call', function () {
    it('returns a box with evaluated expressions', function () {
      var subject = new Builder({
        mathScratchPad: 'foo = data[1].datapoints[1]',
        mathDisplayValue: 'foo',
        mathColorValue: 'foo + 1'
      })

      var expected = {
        scratchPad: 0, displayValue: 0, colorValue: 1
      }

      var seriesList = [{ datapoints: [0, 1, 2] }]
      expect(subject.call(seriesList)).toEqual(expected)
    })

    it('copes when the data are not plain objects', function () {
      var subject = new Builder({
        mathScratchPad: 'data.options.mathScratchPad',
        mathDisplayValue: '1',
        mathColorValue: '1'
      })

      var expected = {
        scratchPad: 'data.options.mathScratchPad',
        displayValue: 1,
        colorValue: 1
      }

      expect(subject.call(subject)).toEqual(expected)
    })
  })
})
