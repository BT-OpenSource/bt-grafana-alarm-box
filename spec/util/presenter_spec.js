import {Presenter} from '../../src/util/presenter'

describe('Presenter', function () {
  beforeEach(function () {
    this.panel = {
      defaultColor: 'default', thresholds: []
    }

    this.subject = new Presenter(this.panel)
  })

  describe('call', function () {
    var box = { colorValue: 100 }

    describe('when there are no thresholds', function () {
      it('assigns the default color', function () {
        this.subject.call(box)
        expect(box.color).toEqual('default')
      })
    })

    describe('when the thresholds are too high', function () {
      it('assigns the default color', function () {
        this.panel.thresholds.push({ value: 101, color: 'color' })
        this.subject.call(box)
        expect(box.color).toEqual('default')
      })
    })

    describe('when a threshold value is reached', function () {
      it('assigns the threshold color', function () {
        this.panel.thresholds.push({ value: 100, color: 'color' })
        this.subject.call(box)
        expect(box.color).toEqual('color')
      })
    })

    describe('when several thresholds are reached', function () {
      it('uses the closest threshold color', function () {
        this.panel.thresholds.push({ value: 99, color: 'color1' })
        this.panel.thresholds.push({ value: 89, color: 'color2' })
        this.subject.call(box)
        expect(box.color).toEqual('color1')
      })
    })
  })
})
