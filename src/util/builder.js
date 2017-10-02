import * as math from '../external/math.min'

export class Builder {
  constructor (panel) {
    this.panel = panel
  }

  call (seriesList = []) {
    var scratchPadExp = this.panel.mathScratchPad
    var displayValueExp = this.panel.mathDisplayValue
    var colorValueExp = this.panel.mathColorValue
    var data = JSON.parse(JSON.stringify(seriesList))
    var scope = { data: data, now: Date.now() }

    return {
      scratchPad: math.eval(scratchPadExp, scope),
      displayValue: math.eval(displayValueExp, scope),
      colorValue: math.eval(colorValueExp, scope)
    }
  }
}
