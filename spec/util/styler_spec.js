import {Styler} from '../../src/util/styler'

describe('Styler', function () {
  beforeEach(function () {
    var panel = { numberSize: 1, titleSize: 1 }
    this.box = { color: 'blue' }
    this.container = jasmine.createSpyObj('container', ['css'])
    this.title = jasmine.createSpyObj('title', ['css'])
    this.subject = new Styler(panel)
  })

  describe('call', function () {
    it('assigns the style for the number', function () {
      this.subject.call(this.box, this.container, this.title)
      expect(this.box.numberStyle['font-weight']).toEqual('bold')
      expect(this.box.numberStyle['font-size']).toEqual(1)
    })

    it('sets the style for the container', function () {
      this.subject.call(this.box, this.container, this.title)
      expect(this.container.css).toHaveBeenCalledWith('background-color', 'blue')
    })

    it('sets the style for the panel title', function () {
      this.subject.call(this.box, this.container, this.title)
      expect(this.title.css).toHaveBeenCalledWith('font-size', 1)
    })
  })
})
