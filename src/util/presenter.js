import _ from 'lodash'

export class Presenter {
  constructor (panel) {
    this.panel = panel
  }

  call (box) {
    box.color = this._color(box.colorValue)
  }

  _color (value) {
    var thresholds = _.sortBy(this.panel.thresholds, 'value')
    var threshold = _.find(_.reverse(thresholds), (t) => value >= t.value)
    return threshold ? threshold.color : this.panel.defaultColor
  }
}
