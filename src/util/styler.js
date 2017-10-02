export class Styler {
  constructor (panel) {
    this.panel = panel
  }

  call (box, container, title) {
    container.css('background-color', box.color)
    title.css('font-size', this.panel.titleSize)
    box.numberStyle = this._numberStyle()
  }

  _numberStyle (box) {
    return { 'font-weight': 'bold', 'font-size': this.panel.numberSize }
  }
}
