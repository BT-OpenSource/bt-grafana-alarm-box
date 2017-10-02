export class Styler {
  constructor (panel) {
    this.panel = panel
  }

  call (box) {
    box.numberStyle = { 'font-weight': 'bold', 'font-size': this.panel.numberSize }
  }
}
