import * as math from '../external/math.min'

export class Builder {
  constructor (options) {
    this.options = options
  }

  call (seriesList = []) {
    var scratchPadExp = this.options.mathScratchPad
    var displayValueExp = this.options.mathDisplayValue
    var colorValueExp = this.options.mathColorValue
    var data = JSON.parse(JSON.stringify(seriesList))
    var scope = { data: data, now: Date.now() }

    return {
      scratchPad: math.eval(scratchPadExp, scope),
      displayValue: math.eval(displayValueExp, scope),
      colorValue: math.eval(colorValueExp, scope)
    }
  }
}
