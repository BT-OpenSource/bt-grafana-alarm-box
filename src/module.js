import _ from 'lodash'
import {MetricsPanelCtrl} from 'app/plugins/sdk'
import {Builder} from './util/builder'
import {Presenter} from './util/presenter'
import {Linker} from './util/linker'

const panelDefaults = {
  defaultColor: 'rgb(117, 117, 117)',
  numberSize: '32px',
  linkIndex: '0',
  thresholds: [],
  titleSize: '18px',
  mathScratchPad: 'count = size(size(data)[1] == 0 ? [] : data[1].rows)[1]',
  mathDisplayValue: 'count',
  mathColorValue: 'count'
}

export class AlarmBoxCtrl extends MetricsPanelCtrl {
  constructor ($scope, $injector, linkSrv) {
    super($scope, $injector)
    _.defaults(this.panel, panelDefaults)

    this.events.on('init-edit-mode', this.onInitEditMode.bind(this))
    this.events.on('data-received', this.onDataReceived.bind(this))
    this.events.on('render', this.onRender.bind(this))

    this.builder = new Builder(this.panel)
    this.presenter = new Presenter(this.panel)
    this.linker = new Linker(this.panel, linkSrv)

    this.box = {}
  }

  onInitEditMode () {
    this.addEditorTab('Options', 'public/plugins/btplc-alarm-box-panel/editor.html')
    this.addEditorTab('Values', 'public/plugins/btplc-alarm-box-panel/values.html')
  }

  onDataReceived (seriesList) {
    this.seriesList = seriesList
    this.render()
  }

  onRender () {
    this.box = this.builder.call(this.seriesList)
    this.presenter.call(this.box)
    this.linker.call(this.box)

    this.panelContainer.css('background-color', this.box.color)
    this.panelTitle.css('font-size', this.panel.titleSize)
  }

  onEditorAddThreshold () {
    this.panel.thresholds.push({ value: 0, color: this.panel.defaultColor })
    this.render()
  }

  onEditorRemoveThreshold (index) {
    this.panel.thresholds.splice(index, 1)
    this.render()
  }

  link (scope, elem, attrs, ctrl) {
    this.panelContainer = elem.find('.panel-container')
    this.panelTitle = elem.find('.panel-title')
  }
}

AlarmBoxCtrl.templateUrl = 'module.html'
export { AlarmBoxCtrl as PanelCtrl }
