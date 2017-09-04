'use strict';

System.register(['./module.css!', 'lodash', 'app/plugins/sdk', './util/builder', './util/presenter', './util/linker'], function (_export, _context) {
  "use strict";

  var _, MetricsPanelCtrl, Builder, Presenter, Linker, _createClass, panelDefaults, AlarmBoxCtrl;

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  function _possibleConstructorReturn(self, call) {
    if (!self) {
      throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }

    return call && (typeof call === "object" || typeof call === "function") ? call : self;
  }

  function _inherits(subClass, superClass) {
    if (typeof superClass !== "function" && superClass !== null) {
      throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
    }

    subClass.prototype = Object.create(superClass && superClass.prototype, {
      constructor: {
        value: subClass,
        enumerable: false,
        writable: true,
        configurable: true
      }
    });
    if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
  }

  return {
    setters: [function (_moduleCss) {}, function (_lodash) {
      _ = _lodash.default;
    }, function (_appPluginsSdk) {
      MetricsPanelCtrl = _appPluginsSdk.MetricsPanelCtrl;
    }, function (_utilBuilder) {
      Builder = _utilBuilder.Builder;
    }, function (_utilPresenter) {
      Presenter = _utilPresenter.Presenter;
    }, function (_utilLinker) {
      Linker = _utilLinker.Linker;
    }],
    execute: function () {
      _createClass = function () {
        function defineProperties(target, props) {
          for (var i = 0; i < props.length; i++) {
            var descriptor = props[i];
            descriptor.enumerable = descriptor.enumerable || false;
            descriptor.configurable = true;
            if ("value" in descriptor) descriptor.writable = true;
            Object.defineProperty(target, descriptor.key, descriptor);
          }
        }

        return function (Constructor, protoProps, staticProps) {
          if (protoProps) defineProperties(Constructor.prototype, protoProps);
          if (staticProps) defineProperties(Constructor, staticProps);
          return Constructor;
        };
      }();

      panelDefaults = {
        defaultColor: 'rgb(117, 117, 117)',
        numberSize: '32px',
        linkIndex: 0,
        thresholds: [],
        titleSize: '18px',
        mathScratchPad: 'count = sum(map(data, f(x) = size(x.datapoints)[1]))',
        mathDisplayValue: 'count',
        mathColorValue: 'count'
      };

      _export('PanelCtrl', _export('AlarmBoxCtrl', AlarmBoxCtrl = function (_MetricsPanelCtrl) {
        _inherits(AlarmBoxCtrl, _MetricsPanelCtrl);

        function AlarmBoxCtrl($scope, $injector, linkSrv) {
          _classCallCheck(this, AlarmBoxCtrl);

          var _this = _possibleConstructorReturn(this, (AlarmBoxCtrl.__proto__ || Object.getPrototypeOf(AlarmBoxCtrl)).call(this, $scope, $injector));

          _.defaults(_this.panel, panelDefaults);

          _this.events.on('init-edit-mode', _this.onInitEditMode.bind(_this));
          _this.events.on('data-received', _this.onDataReceived.bind(_this));
          _this.events.on('render', _this.onRender.bind(_this));

          _this.builder = new Builder(_this.panel);
          _this.presenter = new Presenter(_this.panel);
          _this.linker = new Linker(_this.panel, linkSrv);

          _this.box = {};
          return _this;
        }

        _createClass(AlarmBoxCtrl, [{
          key: 'onInitEditMode',
          value: function onInitEditMode() {
            this.addEditorTab('Options', 'public/plugins/btplc-alarm-box-panel/editor.html');
            this.addEditorTab('Values', 'public/plugins/btplc-alarm-box-panel/values.html');
          }
        }, {
          key: 'onDataReceived',
          value: function onDataReceived(seriesList) {
            this.seriesList = seriesList;
            this.render();
          }
        }, {
          key: 'onRender',
          value: function onRender() {
            this.box = this.builder.call(this.seriesList);
            this.presenter.call(this.box);
            this.linker.call(this.box);

            this.panelContainer.css('background-color', this.box.color);
            this.panelTitle.css('font-size', this.panel.titleSize);
          }
        }, {
          key: 'onEditorAddThreshold',
          value: function onEditorAddThreshold() {
            this.panel.thresholds.push({ value: 0, color: this.panel.defaultColor });
            this.render();
          }
        }, {
          key: 'onEditorRemoveThreshold',
          value: function onEditorRemoveThreshold(index) {
            this.panel.thresholds.splice(index, 1);
            this.render();
          }
        }, {
          key: 'link',
          value: function link(scope, elem, attrs, ctrl) {
            this.panelContainer = elem.find('.panel-container');
            this.panelTitle = elem.find('.panel-title');
          }
        }]);

        return AlarmBoxCtrl;
      }(MetricsPanelCtrl)));

      _export('AlarmBoxCtrl', AlarmBoxCtrl);

      AlarmBoxCtrl.templateUrl = 'module.html';

      _export('PanelCtrl', AlarmBoxCtrl);
    }
  };
});
//# sourceMappingURL=module.js.map
