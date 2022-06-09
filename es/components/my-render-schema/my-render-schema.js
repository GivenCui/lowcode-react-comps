import * as React from 'react';
import ReactRenderer from '@alilc/lowcode-react-renderer';

var MyRenderSchema = function MyRenderSchema(_ref) {
  var title = _ref.title;
  var schema = {
    "componentName": "Page",
    "id": "node_dockcviv8fo1",
    "props": {
      "ref": "outerView",
      "style": {
        "height": "100%"
      }
    },
    "fileName": "/",
    "dataSource": {
      "list": [{
        "type": "fetch",
        "isInit": true,
        "options": {
          "params": {},
          "method": "GET",
          "isCors": true,
          "timeout": 5000,
          "headers": {},
          "uri": "mock/info.json"
        },
        "id": "info",
        "shouldFetch": {
          "type": "JSFunction",
          "value": "function() { \n  console.log('should fetch.....');\n  return true; \n}"
        }
      }]
    },
    "state": {
      "text": {
        "type": "JSExpression",
        "value": "\"outer\""
      },
      "isShowDialog": {
        "type": "JSExpression",
        "value": "false"
      }
    },
    "css": "body {\n  font-size: 12px;\n}\n\n.button {\n  width: 100px;\n  color: #ff00ff\n}",
    "lifeCycles": {
      "componentDidMount": {
        "type": "JSFunction",
        "value": "function componentDidMount() {\n  console.log('did mount');\n}"
      },
      "componentWillUnmount": {
        "type": "JSFunction",
        "value": "function componentWillUnmount() {\n  console.log('will unmount');\n}"
      }
    },
    "methods": {
      "testFunc": {
        "type": "JSFunction",
        "value": "function testFunc() {\n  console.log('test func');\n}"
      },
      "onClick": {
        "type": "JSFunction",
        "value": "function onClick() {\n  this.setState({\n    isShowDialog: true\n  });\n}"
      },
      "closeDialog": {
        "type": "JSFunction",
        "value": "function closeDialog() {\n  this.setState({\n    isShowDialog: false\n  });\n}"
      }
    },
    "originCode": "class LowcodeComponent extends Component {\n  state = {\n    \"text\": \"outer\",\n    \"isShowDialog\": false\n  }\n  componentDidMount() {\n    console.log('did mount');\n  }\n  componentWillUnmount() {\n    console.log('will unmount');\n  }\n  testFunc() {\n    console.log('test func');\n  }\n  onClick() {\n    this.setState({\n      isShowDialog: true\n    })\n  }\n  closeDialog() {\n    this.setState({\n      isShowDialog: false\n    })\n  }\n}",
    "title": "",
    "isLocked": false,
    "condition": true,
    "conditionGroup": "",
    "children": [{
      "componentName": "NextPage",
      "id": "node_ockzs2vw431",
      "props": {
        "headerDivider": true,
        "minHeight": "100vh",
        "presetNav": true,
        "presetAside": true,
        "footer": false,
        "nav": false,
        "aside": false,
        "placeholderStyle": {
          "gridRowEnd": "span 1",
          "gridColumnEnd": "span 12"
        },
        "headerProps": {
          "background": "surface"
        },
        "header": {
          "type": "JSSlot",
          "value": [{
            "componentName": "NextPageHeader",
            "id": "node_ockzs2vw433",
            "props": {
              "style": {
                "background": "#ffffff",
                "padding": ""
              }
            },
            "title": "页面头部",
            "isLocked": false,
            "condition": true,
            "conditionGroup": "",
            "children": [{
              "componentName": "NextRowColContainer",
              "id": "node_ockzs2vw434",
              "props": {
                "rowGap": 20,
                "colGap": 20
              },
              "title": "行列容器",
              "isLocked": false,
              "condition": true,
              "conditionGroup": "",
              "children": [{
                "componentName": "NextRow",
                "id": "node_ockzs2vw435",
                "props": {},
                "title": "行",
                "isLocked": false,
                "condition": true,
                "conditionGroup": "",
                "children": [{
                  "componentName": "NextCol",
                  "id": "node_ockzs2vw436",
                  "props": {
                    "colSpan": 1
                  },
                  "title": "列",
                  "isLocked": false,
                  "condition": true,
                  "conditionGroup": "",
                  "children": [{
                    "componentName": "NextP",
                    "id": "node_ockzvfoetv17",
                    "props": {
                      "wrap": false,
                      "type": "body2",
                      "verAlign": "middle",
                      "textSpacing": true,
                      "align": "left"
                    },
                    "docId": "dockzvfoetv",
                    "title": "段落",
                    "isLocked": false,
                    "condition": true,
                    "conditionGroup": "",
                    "children": [{
                      "componentName": "NextText",
                      "id": "node_ockzvfoetv18",
                      "props": {
                        "type": "h5",
                        "children": {
                          "type": "JSExpression",
                          "value": "this.state.info?.info",
                          "mock": "标题标题"
                        },
                        "mark": false,
                        "code": false,
                        "delete": false,
                        "underline": false,
                        "strong": false
                      },
                      "docId": "dockzvfoetv",
                      "title": "",
                      "isLocked": false,
                      "condition": true,
                      "conditionGroup": ""
                    }]
                  }]
                }]
              }]
            }]
          }],
          "title": "header"
        },
        "isTab": false,
        "contentAlignCenter": false,
        "contentProps": {
          "style": {
            "background": "rgba(255,255,255,0)"
          }
        }
      },
      "title": "页面",
      "isLocked": false,
      "condition": true,
      "conditionGroup": "",
      "children": [{
        "componentName": "NextBlock",
        "id": "node_ockzs2vw437",
        "props": {
          "placeholderStyle": {
            "height": "100%"
          },
          "noPadding": false,
          "noBorder": false,
          "title": "区域标题",
          "rowGap": 20,
          "colGap": 20,
          "background": "surface",
          "layoutmode": "O",
          "strict": true,
          "colSpan": 12,
          "rowSpan": 1,
          "mode": "transparent",
          "childTotalColumns": 12
        },
        "title": "区域",
        "isLocked": false,
        "condition": true,
        "conditionGroup": "",
        "children": [{
          "componentName": "NextBlockCell",
          "id": "node_ockzs2vw438",
          "props": {
            "colSpan": 12,
            "rowSpan": 1,
            "mode": "procard",
            "isAutoContainer": true,
            "title": "区块标题",
            "hasDivider": true,
            "loading": false,
            "bodyPadding": "",
            "hasCollapse": false,
            "text": true,
            "visibleButtonCount": 3,
            "operationConfig": {
              "align": "center"
            },
            "operations": []
          },
          "title": "",
          "isLocked": false,
          "condition": true,
          "conditionGroup": "",
          "children": [{
            "componentName": "NextRowColContainer",
            "id": "node_ockzs2vw439",
            "props": {
              "rowGap": 20,
              "colGap": 20
            },
            "title": "行列容器",
            "isLocked": false,
            "condition": true,
            "conditionGroup": "",
            "children": [{
              "componentName": "NextRow",
              "id": "node_ockzs2vw43a",
              "props": {},
              "title": "行",
              "isLocked": false,
              "condition": true,
              "conditionGroup": "",
              "children": [{
                "componentName": "NextCol",
                "id": "node_ockzs2vw43b",
                "props": {
                  "colSpan": 1
                },
                "title": "列",
                "isLocked": false,
                "condition": true,
                "conditionGroup": "",
                "children": [{
                  "componentName": "NextP",
                  "id": "node_ocl45r6o3bl",
                  "props": {
                    "wrap": false,
                    "type": "body2",
                    "verAlign": "middle",
                    "textSpacing": true,
                    "align": "left"
                  },
                  "docId": "docl45r6o3b",
                  "title": "段落",
                  "isLocked": false,
                  "condition": true,
                  "conditionGroup": "",
                  "children": [{
                    "componentName": "Image",
                    "id": "node_ocl45r6zvl2",
                    "props": {
                      "src": "https://s.cn.bing.net/th?id=OHR.SweetheartAbbey_ZH-CN8325969067_1920x1080.jpg&rf=LaDigue_1920x1080.jpg&qlt=30",
                      "title": "苏格兰甜心修道院",
                      "alt": ""
                    },
                    "title": "图片",
                    "isLocked": false,
                    "condition": true,
                    "conditionGroup": ""
                  }]
                }]
              }]
            }]
          }]
        }, {
          "componentName": "NextBlockCell",
          "id": "node_ocl45r6zvl3",
          "props": {
            "colSpan": 6,
            "rowSpan": 1,
            "mode": "procard",
            "isAutoContainer": true,
            "title": "区块标题",
            "hasDivider": true,
            "loading": false,
            "bodyPadding": "",
            "hasCollapse": false,
            "text": true,
            "visibleButtonCount": 3,
            "operations": []
          },
          "title": "",
          "isLocked": false,
          "condition": true,
          "conditionGroup": "",
          "children": [{
            "componentName": "NextRowColContainer",
            "id": "node_ocl45r6zvl4",
            "props": {
              "rowGap": 20,
              "colGap": 20
            },
            "title": "行列容器",
            "isLocked": false,
            "condition": true,
            "conditionGroup": "",
            "children": [{
              "componentName": "NextRow",
              "id": "node_ocl45r6zvl5",
              "props": {},
              "title": "行",
              "isLocked": false,
              "condition": true,
              "conditionGroup": "",
              "children": [{
                "componentName": "NextCol",
                "id": "node_ocl45r6zvl6",
                "props": {
                  "colSpan": 1,
                  "justifyContent": "flex-start"
                },
                "title": "列",
                "isLocked": false,
                "condition": true,
                "conditionGroup": "",
                "children": [{
                  "componentName": "NextP",
                  "id": "node_ocl45r6zvl2s",
                  "props": {
                    "wrap": false,
                    "type": "body2",
                    "verAlign": "middle",
                    "textSpacing": true,
                    "align": "left"
                  },
                  "docId": "docl45r6zvl",
                  "title": "段落",
                  "isLocked": false,
                  "condition": true,
                  "conditionGroup": "",
                  "children": [{
                    "componentName": "NextText",
                    "id": "node_ocl45r6zvl2t",
                    "props": {
                      "type": "inherit",
                      "children": "content1",
                      "mark": false,
                      "code": false,
                      "delete": false,
                      "underline": false,
                      "strong": false
                    },
                    "docId": "docl45r6zvl",
                    "title": "",
                    "isLocked": false,
                    "condition": true,
                    "conditionGroup": ""
                  }]
                }]
              }]
            }]
          }]
        }, {
          "componentName": "NextBlockCell",
          "id": "node_ocl45r6zvl7",
          "props": {
            "colSpan": 6,
            "rowSpan": 1,
            "mode": "procard",
            "isAutoContainer": true,
            "title": "区块标题",
            "hasDivider": true,
            "loading": false,
            "bodyPadding": "",
            "hasCollapse": false,
            "text": true,
            "visibleButtonCount": 3,
            "operations": []
          },
          "title": "",
          "isLocked": false,
          "condition": true,
          "conditionGroup": "",
          "children": [{
            "componentName": "NextRowColContainer",
            "id": "node_ocl45r6zvl8",
            "props": {
              "rowGap": 20,
              "colGap": 20
            },
            "title": "行列容器",
            "isLocked": false,
            "condition": true,
            "conditionGroup": "",
            "children": [{
              "componentName": "NextRow",
              "id": "node_ocl45r6zvl9",
              "props": {},
              "title": "行",
              "isLocked": false,
              "condition": true,
              "conditionGroup": "",
              "children": [{
                "componentName": "NextCol",
                "id": "node_ocl45r6zvla",
                "props": {
                  "colSpan": 1,
                  "justifyContent": "flex-start"
                },
                "title": "列",
                "isLocked": false,
                "condition": true,
                "conditionGroup": "",
                "children": [{
                  "componentName": "NextP",
                  "id": "node_ocl45r6zvl4b",
                  "props": {
                    "wrap": false,
                    "type": "body2",
                    "verAlign": "middle",
                    "textSpacing": true,
                    "align": "left"
                  },
                  "docId": "docl45r6zvl",
                  "title": "段落",
                  "isLocked": false,
                  "condition": true,
                  "conditionGroup": "",
                  "children": [{
                    "componentName": "Icon",
                    "id": "node_ocl45r6zvl4c",
                    "props": {
                      "type": "smile"
                    },
                    "docId": "docl45r6zvl",
                    "title": "",
                    "isLocked": false,
                    "condition": true,
                    "conditionGroup": ""
                  }]
                }]
              }]
            }]
          }]
        }]
      }]
    }]
  };
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", null, "schema \u56DE\u663E\u6D4B\u8BD5"), window._components && /*#__PURE__*/React.createElement(ReactRenderer, {
    schema: schema
  }));
};

export default MyRenderSchema;