export class Styler {
  constructor (panel) {
    this.panel = panel
  }

  call (box, container, title, header, menu) {
    container.css('background-color', box.color)
    title.css('font-size', this.panel.titleSize)
    header.css('max-height', '27px')
    menu.css('font-size', '13px')

    box.numberStyle = this._numberStyle()
  }

  _numberStyle (box) {
    return { 'font-weight': 'bold', 'font-size': this.panel.numberSize }
  }
}
