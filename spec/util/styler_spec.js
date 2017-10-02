import {Styler} from '../../src/util/styler'

describe('Styler', function () {
  beforeEach(function () {
    var panel = { numberSize: 1 }
    this.box = { }
    this.subject = new Styler(panel)
  })

  describe('call', function () {
    it('assigns the style for the number', function () {
      this.subject.call(this.box)
      expect(this.box.numberStyle['font-weight']).toEqual('bold')
      expect(this.box.numberStyle['font-size']).toEqual(1)
    })
  })
})
