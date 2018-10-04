import {Styler} from '../../src/util/styler'

describe('Styler', () => {
  let subject
  let container
  let header
  let menu
  let box
  let title

  beforeEach(() => {
    container = jasmine.createSpyObj('container', ['css'])
    title = jasmine.createSpyObj('title', ['css'])
    header = jasmine.createSpyObj('header', ['css'])
    menu = jasmine.createSpyObj('menu', ['css'])
    let panel = { numberSize: 1, titleSize: 1 }
    subject = new Styler(panel)
    box = { color: 'blue' }
  })

  describe('call', () => {
    it('assigns the style for the number', () => {
      subject.call(box, container, title, header, menu)
      expect(box.numberStyle['font-weight']).toEqual('bold')
      expect(box.numberStyle['font-size']).toEqual(1)
    })

    it('sets the style for the container', () => {
      subject.call(box, container, title, header, menu)
      expect(container.css).toHaveBeenCalledWith('background-color', 'blue')
    })

    it('sets the style for the panel title', () => {
      subject.call(box, container, title, header, menu)
      expect(title.css).toHaveBeenCalledWith('font-size', 1)
    })
  })
})
