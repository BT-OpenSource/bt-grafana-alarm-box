import {Builder} from '../../src/util/builder'

describe('Builder', () => {
  describe('call', () => {
    it('returns a box with evaluated expressions', () => {
      let subject = new Builder({
        mathScratchPad: 'foo = data[1].datapoints[1]',
        mathDisplayValue: 'foo',
        mathColorValue: 'foo + 1'
      })

      let expected = {
        scratchPad: 0, displayValue: 0, colorValue: 1
      }

      let seriesList = [{ datapoints: [0, 1, 2] }]
      expect(subject.call(seriesList)).toEqual(expected)
    })

    it('copes when the data are not plain objects', () => {
      let subject = new Builder({
        mathScratchPad: 'data.panel.mathScratchPad',
        mathDisplayValue: '1',
        mathColorValue: '1'
      })

      let expected = {
        scratchPad: 'data.panel.mathScratchPad',
        displayValue: 1,
        colorValue: 1
      }

      expect(subject.call(subject)).toEqual(expected)
    })
  })
})
