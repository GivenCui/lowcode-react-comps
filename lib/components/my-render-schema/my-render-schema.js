"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports["default"] = void 0;

var React = _interopRequireWildcard(require("react"));

var _lowcodeReactRenderer = _interopRequireDefault(require("@alilc/lowcode-react-renderer"));

var _lowcodeEngine = require("@alilc/lowcode-engine");

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

var MyRenderSchema = function MyRenderSchema(_ref) {
  var title = _ref.title;
  var schema = {
    "componentName": "Page",
    "id": "node_dockcviv8fo1",
    "props": {
      "ref": "outterView",
      "style": {
        "height": "100%"
      }
    },
    "docId": "docl46gap1e",
    "fileName": "lowcode",
    "dataSource": {
      "list": []
    },
    "state": {
      "text": "outter",
      "isShowDialog": false
    },
    "css": "body {font-size: 12px;} .botton{width:100px;color:#ff00ff}",
    "lifeCycles": {
      "componentDidMount": {
        "type": "JSFunction",
        "value": "function() {\n    console.log('did mount');\n  }"
      },
      "componentWillUnmount": {
        "type": "JSFunction",
        "value": "function() {\n    console.log('will umount');\n  }"
      }
    },
    "methods": {
      "testFunc": {
        "type": "JSFunction",
        "value": "function() {\n    console.log('test func');\n  }"
      },
      "onClick": {
        "type": "JSFunction",
        "value": "function() {\n    this.setState({\n      isShowDialog: true\n    })\n  }"
      },
      "closeDialog": {
        "type": "JSFunction",
        "value": "function() {\n    this.setState({\n      isShowDialog: false\n    })\n  }"
      }
    },
    "hidden": false,
    "title": "",
    "isLocked": false,
    "condition": true,
    "conditionGroup": "",
    "children": [{
      "componentName": "ColorfulInput",
      "id": "node_ocl46q7ohz3",
      "props": {
        "color": "string"
      },
      "hidden": false,
      "title": "",
      "isLocked": false,
      "condition": true,
      "conditionGroup": ""
    }, {
      "componentName": "ColorfulButton",
      "id": "node_ocl46q7ohz2",
      "props": {
        "type": "secondary",
        "color": "string"
      },
      "hidden": false,
      "title": "",
      "isLocked": false,
      "condition": true,
      "conditionGroup": ""
    }]
  };
  (0, React.useEffect)(function () {
    _lowcodeEngine.event.on('componentsInitOk', function (res) {
      // 1233
      console.log(res);
    });
  }, []);
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", null, "schema \u56DE\u663E\u6D4B\u8BD5"), window._components && /*#__PURE__*/React.createElement(_lowcodeReactRenderer["default"], {
    schema: schema,
    components: window._components
  }));
};

var _default = MyRenderSchema;
exports["default"] = _default;