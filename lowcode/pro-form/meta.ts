
import { ComponentMetadata, Snippet } from '@alilc/lowcode-types';

const ProFormMeta: ComponentMetadata = {
  "componentName": "ProForm",
  "title": "ProForm",
  "docUrl": "",
  "screenshot": "",
  "devMode": "proCode",
  "npm": {
    "package": "react-comps-by-cui",
    "version": "0.1.0",
    "exportName": "ProForm",
    "main": "src/index.tsx",
    "destructuring": true,
    "subName": ""
  },
  "configure": {
    "props": [
      {
        "title": {
          "label": {
            "type": "i18n",
            "en-US": "prefix",
            "zh-CN": "样式前缀"
          },
          "tip": "prefix | 样式前缀"
        },
        "name": "prefix",
        "description": "样式前缀",
        "setter": {
          "componentName": "StringSetter",
          "isRequired": false,
          "initialValue": ""
        }
      },
      {
        "title": {
          "label": {
            "type": "i18n",
            "en-US": "inline",
            "zh-CN": "内联表单"
          },
          "tip": "inline | 内联表单"
        },
        "name": "inline",
        "description": "内联表单",
        "setter": {
          "componentName": "BoolSetter",
          "isRequired": false,
          "initialValue": false
        }
      },
      {
        "title": {
          "label": {
            "type": "i18n",
            "en-US": "fullWidth",
            "zh-CN": "fullWidth"
          }
        },
        "name": "fullWidth",
        "setter": {
          "componentName": "BoolSetter",
          "isRequired": false,
          "initialValue": false
        }
      },
      {
        "title": {
          "label": {
            "type": "i18n",
            "en-US": "colon",
            "zh-CN": "colon"
          }
        },
        "name": "colon",
        "setter": {
          "componentName": "BoolSetter",
          "isRequired": false,
          "initialValue": false
        }
      },
      {
        "title": {
          "label": {
            "type": "i18n",
            "en-US": "size",
            "zh-CN": "单个 Item 的 "
          },
          "tip": "size | 单个 Item 的 size 自定义，优先级高于 Form 的 size, 并且当组件与 Item 一起使用时，组件自身设置 size 属性无效。"
        },
        "name": "size",
        "description": "单个 Item 的 size 自定义，优先级高于 Form 的 size, 并且当组件与 Item 一起使用时，组件自身设置 size 属性无效。",
        "setter": {
          "componentName": "RadioGroupSetter",
          "props": {
            "dataSource": [
              {
                "label": "large",
                "value": "large"
              },
              {
                "label": "medium",
                "value": "medium"
              },
              {
                "label": "small",
                "value": "small"
              }
            ],
            "options": [
              {
                "label": "large",
                "value": "large"
              },
              {
                "label": "medium",
                "value": "medium"
              },
              {
                "label": "small",
                "value": "small"
              }
            ]
          },
          "initialValue": "large"
        }
      },
      {
        "title": {
          "label": {
            "type": "i18n",
            "en-US": "labelAlign",
            "zh-CN": "标签的位置"
          },
          "tip": "labelAlign | 标签的位置"
        },
        "name": "labelAlign",
        "description": "标签的位置",
        "setter": {
          "componentName": "RadioGroupSetter",
          "props": {
            "dataSource": [
              {
                "label": "top",
                "value": "top"
              },
              {
                "label": "left",
                "value": "left"
              },
              {
                "label": "inset",
                "value": "inset"
              }
            ],
            "options": [
              {
                "label": "top",
                "value": "top"
              },
              {
                "label": "left",
                "value": "left"
              },
              {
                "label": "inset",
                "value": "inset"
              }
            ]
          },
          "initialValue": "top"
        }
      },
      {
        "title": {
          "label": {
            "type": "i18n",
            "en-US": "labelTextAlign",
            "zh-CN": "标签的左右对齐方式"
          },
          "tip": "labelTextAlign | 标签的左右对齐方式"
        },
        "name": "labelTextAlign",
        "description": "标签的左右对齐方式",
        "setter": {
          "componentName": "RadioGroupSetter",
          "props": {
            "dataSource": [
              {
                "label": "left",
                "value": "left"
              },
              {
                "label": "right",
                "value": "right"
              }
            ],
            "options": [
              {
                "label": "left",
                "value": "left"
              },
              {
                "label": "right",
                "value": "right"
              }
            ]
          },
          "initialValue": "left"
        }
      },
      {
        "title": {
          "label": {
            "type": "i18n",
            "en-US": "field",
            "zh-CN": "经 `new Fie"
          },
          "tip": "field | 经 `new Field(this)` 初始化后，直接传给 Form 即可 用到表单校验则不可忽略此项"
        },
        "name": "field",
        "description": "经 `new Field(this)` 初始化后，直接传给 Form 即可 用到表单校验则不可忽略此项",
        "setter": {
          "componentName": "MixedSetter",
          "isRequired": false,
          "props": {}
        }
      },
      {
        "title": {
          "label": {
            "type": "i18n",
            "en-US": "saveField",
            "zh-CN": "保存 Form 自动"
          },
          "tip": "saveField | 保存 Form 自动生成的 field 对象"
        },
        "name": "saveField",
        "description": "保存 Form 自动生成的 field 对象",
        "setter": {
          "componentName": "FunctionSetter",
          "isRequired": false
        }
      },
      {
        "title": {
          "label": {
            "type": "i18n",
            "en-US": "labelCol",
            "zh-CN": "控制第一级 Item"
          },
          "tip": "labelCol | 控制第一级 Item 的 labelCol"
        },
        "name": "labelCol",
        "description": "控制第一级 Item 的 labelCol",
        "setter": {
          "componentName": "ObjectSetter",
          "props": {
            "config": {
              "items": [
                {
                  "title": {
                    "label": {
                      "type": "i18n",
                      "en-US": "span",
                      "zh-CN": "span"
                    }
                  },
                  "name": "span",
                  "setter": {
                    "componentName": "MixedSetter",
                    "props": {
                      "setters": [
                        {
                          "componentName": "StringSetter",
                          "isRequired": false,
                          "initialValue": ""
                        },
                        {
                          "componentName": "NumberSetter",
                          "isRequired": false,
                          "initialValue": 0
                        }
                      ]
                    }
                  }
                },
                {
                  "title": {
                    "label": {
                      "type": "i18n",
                      "en-US": "offset",
                      "zh-CN": "offset"
                    }
                  },
                  "name": "offset",
                  "setter": {
                    "componentName": "MixedSetter",
                    "props": {
                      "setters": [
                        {
                          "componentName": "StringSetter",
                          "isRequired": false,
                          "initialValue": ""
                        },
                        {
                          "componentName": "NumberSetter",
                          "isRequired": false,
                          "initialValue": 0
                        }
                      ]
                    }
                  }
                }
              ],
              "extraSetter": {
                "componentName": "MixedSetter",
                "isRequired": false,
                "props": {}
              }
            }
          }
        }
      },
      {
        "title": {
          "label": {
            "type": "i18n",
            "en-US": "wrapperCol",
            "zh-CN": "控制第一级 Item"
          },
          "tip": "wrapperCol | 控制第一级 Item 的 wrapperCol"
        },
        "name": "wrapperCol",
        "description": "控制第一级 Item 的 wrapperCol",
        "setter": {
          "componentName": "ObjectSetter",
          "props": {
            "config": {
              "items": [
                {
                  "title": {
                    "label": {
                      "type": "i18n",
                      "en-US": "span",
                      "zh-CN": "span"
                    }
                  },
                  "name": "span",
                  "setter": {
                    "componentName": "MixedSetter",
                    "props": {
                      "setters": [
                        {
                          "componentName": "StringSetter",
                          "isRequired": false,
                          "initialValue": ""
                        },
                        {
                          "componentName": "NumberSetter",
                          "isRequired": false,
                          "initialValue": 0
                        }
                      ]
                    }
                  }
                },
                {
                  "title": {
                    "label": {
                      "type": "i18n",
                      "en-US": "offset",
                      "zh-CN": "offset"
                    }
                  },
                  "name": "offset",
                  "setter": {
                    "componentName": "MixedSetter",
                    "props": {
                      "setters": [
                        {
                          "componentName": "StringSetter",
                          "isRequired": false,
                          "initialValue": ""
                        },
                        {
                          "componentName": "NumberSetter",
                          "isRequired": false,
                          "initialValue": 0
                        }
                      ]
                    }
                  }
                }
              ],
              "extraSetter": {
                "componentName": "MixedSetter",
                "isRequired": false,
                "props": {}
              }
            }
          }
        }
      },
      {
        "title": {
          "label": {
            "type": "i18n",
            "en-US": "children",
            "zh-CN": "子元素"
          },
          "tip": "children | 子元素"
        },
        "name": "children",
        "description": "子元素",
        "setter": {
          "componentName": "MixedSetter",
          "isRequired": false,
          "props": {}
        }
      },
      {
        "title": {
          "label": {
            "type": "i18n",
            "en-US": "disabled",
            "zh-CN": "是否禁用"
          },
          "tip": "disabled | 是否禁用"
        },
        "name": "disabled",
        "description": "是否禁用",
        "setter": {
          "componentName": "BoolSetter",
          "isRequired": false,
          "initialValue": false
        }
      },
      {
        "title": {
          "label": {
            "type": "i18n",
            "en-US": "value",
            "zh-CN": "表单数值"
          },
          "tip": "value | 表单数值"
        },
        "name": "value",
        "description": "表单数值",
        "setter": {
          "componentName": "MixedSetter",
          "isRequired": false,
          "props": {}
        }
      },
      {
        "title": {
          "label": {
            "type": "i18n",
            "en-US": "onChange",
            "zh-CN": "表单变化回调"
          },
          "tip": "onChange | 表单变化回调"
        },
        "name": "onChange",
        "description": "表单变化回调",
        "setter": {
          "componentName": "FunctionSetter"
        }
      },
      {
        "title": {
          "label": {
            "type": "i18n",
            "en-US": "component",
            "zh-CN": "设置标签类型"
          },
          "tip": "component | 设置标签类型"
        },
        "name": "component",
        "description": "设置标签类型",
        "setter": {
          "componentName": "MixedSetter",
          "props": {
            "setters": [
              {
                "componentName": "ObjectSetter",
                "props": {
                  "config": {
                    "extraSetter": {
                      "componentName": "MixedSetter",
                      "isRequired": false,
                      "props": {}
                    }
                  }
                },
                "isRequired": false,
                "initialValue": {}
              },
              {
                "componentName": "FunctionSetter"
              },
              {
                "componentName": "FunctionSetter"
              }
            ]
          }
        }
      },
      {
        "title": {
          "label": {
            "type": "i18n",
            "en-US": "responsive",
            "zh-CN": "是否开启内置的响应式"
          },
          "tip": "responsive | 是否开启内置的响应式布局 （使用ResponsiveGrid）"
        },
        "name": "responsive",
        "description": "是否开启内置的响应式布局 （使用ResponsiveGrid）",
        "setter": {
          "componentName": "BoolSetter",
          "isRequired": false,
          "initialValue": false
        }
      },
      {
        "title": {
          "label": {
            "type": "i18n",
            "en-US": "gap",
            "zh-CN": "gap"
          }
        },
        "name": "gap",
        "setter": {
          "componentName": "MixedSetter",
          "props": {
            "setters": [
              {
                "componentName": "NumberSetter",
                "isRequired": false,
                "initialValue": 0
              },
              {
                "componentName": "ArraySetter",
                "props": {
                  "itemSetter": {
                    "componentName": "NumberSetter",
                    "isRequired": false,
                    "initialValue": 0
                  }
                },
                "initialValue": []
              }
            ]
          }
        }
      },
      {
        "title": {
          "label": {
            "type": "i18n",
            "en-US": "isPreview",
            "zh-CN": "是否开启预览态"
          },
          "tip": "isPreview | 是否开启预览态"
        },
        "name": "isPreview",
        "description": "是否开启预览态",
        "setter": {
          "componentName": "BoolSetter",
          "isRequired": false,
          "initialValue": false
        }
      },
      {
        "title": {
          "label": {
            "type": "i18n",
            "en-US": "useLabelForErrorMessage",
            "zh-CN": "是否使用 label"
          },
          "tip": "useLabelForErrorMessage | 是否使用 label 替换校验信息的 name 字段"
        },
        "name": "useLabelForErrorMessage",
        "description": "是否使用 label 替换校验信息的 name 字段",
        "setter": {
          "componentName": "BoolSetter",
          "isRequired": false,
          "initialValue": false
        }
      },
      {
        "title": {
          "label": {
            "type": "i18n",
            "en-US": "type",
            "zh-CN": "按钮的类型"
          },
          "tip": "type | 按钮的类型"
        },
        "name": "type",
        "description": "按钮的类型",
        "setter": {
          "componentName": "RadioGroupSetter",
          "props": {
            "dataSource": [
              {
                "label": "primary",
                "value": "primary"
              },
              {
                "label": "secondary",
                "value": "secondary"
              },
              {
                "label": "normal",
                "value": "normal"
              }
            ],
            "options": [
              {
                "label": "primary",
                "value": "primary"
              },
              {
                "label": "secondary",
                "value": "secondary"
              },
              {
                "label": "normal",
                "value": "normal"
              }
            ]
          },
          "initialValue": "primary"
        }
      },
      {
        "title": {
          "label": {
            "type": "i18n",
            "en-US": "icons",
            "zh-CN": "按钮中 Icon 的"
          },
          "tip": "icons | 按钮中 Icon 的尺寸，用于替代 Icon 的默认大小"
        },
        "name": "icons",
        "description": "按钮中 Icon 的尺寸，用于替代 Icon 的默认大小",
        "setter": {
          "componentName": "ObjectSetter",
          "props": {
            "config": {
              "items": [
                {
                  "title": {
                    "label": {
                      "type": "i18n",
                      "en-US": "loading",
                      "zh-CN": "loading"
                    }
                  },
                  "name": "loading",
                  "setter": {
                    "componentName": "SlotSetter",
                    "props": {
                      "mode": "node"
                    },
                    "isRequired": false,
                    "initialValue": {
                      "type": "JSSlot",
                      "value": []
                    }
                  }
                }
              ],
              "extraSetter": {
                "componentName": "MixedSetter",
                "isRequired": false,
                "props": {}
              }
            }
          }
        }
      },
      {
        "title": {
          "label": {
            "type": "i18n",
            "en-US": "iconSize",
            "zh-CN": "按钮中 Icon 的"
          },
          "tip": "iconSize | 按钮中 Icon 的尺寸，用于替代 Icon 的默认大小"
        },
        "name": "iconSize",
        "description": "按钮中 Icon 的尺寸，用于替代 Icon 的默认大小",
        "setter": {
          "componentName": "MixedSetter",
          "props": {
            "setters": [
              {
                "componentName": "NumberSetter",
                "isRequired": false,
                "initialValue": 0
              },
              {
                "componentName": "SelectSetter",
                "props": {
                  "dataSource": [
                    {
                      "label": "large",
                      "value": "large"
                    },
                    {
                      "label": "medium",
                      "value": "medium"
                    },
                    {
                      "label": "small",
                      "value": "small"
                    },
                    {
                      "label": "xxs",
                      "value": "xxs"
                    },
                    {
                      "label": "xs",
                      "value": "xs"
                    },
                    {
                      "label": "xl",
                      "value": "xl"
                    },
                    {
                      "label": "xxl",
                      "value": "xxl"
                    },
                    {
                      "label": "xxxl",
                      "value": "xxxl"
                    },
                    {
                      "label": "inherit",
                      "value": "inherit"
                    }
                  ],
                  "options": [
                    {
                      "label": "large",
                      "value": "large"
                    },
                    {
                      "label": "medium",
                      "value": "medium"
                    },
                    {
                      "label": "small",
                      "value": "small"
                    },
                    {
                      "label": "xxs",
                      "value": "xxs"
                    },
                    {
                      "label": "xs",
                      "value": "xs"
                    },
                    {
                      "label": "xl",
                      "value": "xl"
                    },
                    {
                      "label": "xxl",
                      "value": "xxl"
                    },
                    {
                      "label": "xxxl",
                      "value": "xxxl"
                    },
                    {
                      "label": "inherit",
                      "value": "inherit"
                    }
                  ]
                },
                "initialValue": "large"
              }
            ]
          }
        }
      },
      {
        "title": {
          "label": {
            "type": "i18n",
            "en-US": "htmlType",
            "zh-CN": "当 componen"
          },
          "tip": "htmlType | 当 component = 'button' 时，设置 button 标签的 type 值"
        },
        "name": "htmlType",
        "description": "当 component = 'button' 时，设置 button 标签的 type 值",
        "setter": {
          "componentName": "RadioGroupSetter",
          "props": {
            "dataSource": [
              {
                "label": "submit",
                "value": "submit"
              },
              {
                "label": "reset",
                "value": "reset"
              },
              {
                "label": "button",
                "value": "button"
              }
            ],
            "options": [
              {
                "label": "submit",
                "value": "submit"
              },
              {
                "label": "reset",
                "value": "reset"
              },
              {
                "label": "button",
                "value": "button"
              }
            ]
          },
          "initialValue": "submit"
        }
      },
      {
        "title": {
          "label": {
            "type": "i18n",
            "en-US": "loading",
            "zh-CN": "设置按钮的载入状态"
          },
          "tip": "loading | 设置按钮的载入状态"
        },
        "name": "loading",
        "description": "设置按钮的载入状态",
        "setter": {
          "componentName": "BoolSetter",
          "isRequired": false,
          "initialValue": false
        }
      },
      {
        "title": {
          "label": {
            "type": "i18n",
            "en-US": "ghost",
            "zh-CN": "是否为幽灵按钮"
          },
          "tip": "ghost | 是否为幽灵按钮"
        },
        "name": "ghost",
        "description": "是否为幽灵按钮",
        "setter": {
          "componentName": "MixedSetter",
          "props": {
            "setters": [
              {
                "componentName": "BoolSetter",
                "isRequired": false,
                "initialValue": false
              },
              {
                "componentName": "RadioGroupSetter",
                "props": {
                  "dataSource": [
                    {
                      "label": "light",
                      "value": "light"
                    },
                    {
                      "label": "dark",
                      "value": "dark"
                    }
                  ],
                  "options": [
                    {
                      "label": "light",
                      "value": "light"
                    },
                    {
                      "label": "dark",
                      "value": "dark"
                    }
                  ]
                },
                "initialValue": "light"
              }
            ]
          }
        }
      },
      {
        "title": {
          "label": {
            "type": "i18n",
            "en-US": "text",
            "zh-CN": "是否为文本按钮"
          },
          "tip": "text | 是否为文本按钮"
        },
        "name": "text",
        "description": "是否为文本按钮",
        "setter": {
          "componentName": "BoolSetter",
          "isRequired": false,
          "initialValue": false
        }
      },
      {
        "title": {
          "label": {
            "type": "i18n",
            "en-US": "warning",
            "zh-CN": "是否为警告按钮"
          },
          "tip": "warning | 是否为警告按钮"
        },
        "name": "warning",
        "description": "是否为警告按钮",
        "setter": {
          "componentName": "BoolSetter",
          "isRequired": false,
          "initialValue": false
        }
      },
      {
        "title": {
          "label": {
            "type": "i18n",
            "en-US": "href",
            "zh-CN": "在Button组件使"
          },
          "tip": "href | 在Button组件使用component属性值为a时有效，代表链接页面的URL"
        },
        "name": "href",
        "description": "在Button组件使用component属性值为a时有效，代表链接页面的URL",
        "setter": {
          "componentName": "StringSetter",
          "isRequired": false,
          "initialValue": ""
        }
      },
      {
        "title": {
          "label": {
            "type": "i18n",
            "en-US": "target",
            "zh-CN": "在Button组件使"
          },
          "tip": "target | 在Button组件使用component属性值为a时有效，代表何处打开链接文档"
        },
        "name": "target",
        "description": "在Button组件使用component属性值为a时有效，代表何处打开链接文档",
        "setter": {
          "componentName": "StringSetter",
          "isRequired": false,
          "initialValue": ""
        }
      },
      {
        "title": {
          "label": {
            "type": "i18n",
            "en-US": "autoFocus",
            "zh-CN": "autoFocus"
          }
        },
        "name": "autoFocus",
        "setter": {
          "componentName": "BoolSetter",
          "isRequired": false,
          "initialValue": false
        }
      },
      {
        "title": {
          "label": {
            "type": "i18n",
            "en-US": "form",
            "zh-CN": "form"
          }
        },
        "name": "form",
        "setter": {
          "componentName": "StringSetter",
          "isRequired": false,
          "initialValue": ""
        }
      },
      {
        "title": {
          "label": {
            "type": "i18n",
            "en-US": "formAction",
            "zh-CN": "formAction"
          }
        },
        "name": "formAction",
        "setter": {
          "componentName": "StringSetter",
          "isRequired": false,
          "initialValue": ""
        }
      },
      {
        "title": {
          "label": {
            "type": "i18n",
            "en-US": "formEncType",
            "zh-CN": "formEncType"
          }
        },
        "name": "formEncType",
        "setter": {
          "componentName": "StringSetter",
          "isRequired": false,
          "initialValue": ""
        }
      },
      {
        "title": {
          "label": {
            "type": "i18n",
            "en-US": "formMethod",
            "zh-CN": "formMethod"
          }
        },
        "name": "formMethod",
        "setter": {
          "componentName": "StringSetter",
          "isRequired": false,
          "initialValue": ""
        }
      },
      {
        "title": {
          "label": {
            "type": "i18n",
            "en-US": "formNoValidate",
            "zh-CN": "formNoValidate"
          }
        },
        "name": "formNoValidate",
        "setter": {
          "componentName": "BoolSetter",
          "isRequired": false,
          "initialValue": false
        }
      },
      {
        "title": {
          "label": {
            "type": "i18n",
            "en-US": "formTarget",
            "zh-CN": "formTarget"
          }
        },
        "name": "formTarget",
        "setter": {
          "componentName": "StringSetter",
          "isRequired": false,
          "initialValue": ""
        }
      },
      {
        "title": {
          "label": {
            "type": "i18n",
            "en-US": "name",
            "zh-CN": "name"
          }
        },
        "name": "name",
        "setter": {
          "componentName": "StringSetter",
          "isRequired": false,
          "initialValue": ""
        }
      },
      {
        "title": {
          "label": {
            "type": "i18n",
            "en-US": "locale",
            "zh-CN": "国际化文案对象，属性"
          },
          "tip": "locale | 国际化文案对象，属性为组件的 displayName"
        },
        "name": "locale",
        "description": "国际化文案对象，属性为组件的 displayName",
        "setter": {
          "componentName": "MixedSetter",
          "isRequired": false,
          "props": {}
        }
      },
      {
        "title": {
          "label": {
            "type": "i18n",
            "en-US": "pure",
            "zh-CN": "是否开启 Pure "
          },
          "tip": "pure | 是否开启 Pure Render 模式，会提高性能，但是也会带来副作用"
        },
        "name": "pure",
        "description": "是否开启 Pure Render 模式，会提高性能，但是也会带来副作用",
        "setter": {
          "componentName": "BoolSetter",
          "isRequired": false,
          "initialValue": false
        }
      },
      {
        "title": {
          "label": {
            "type": "i18n",
            "en-US": "rtl",
            "zh-CN": "是否开启 rtl 模"
          },
          "tip": "rtl | 是否开启 rtl 模式"
        },
        "name": "rtl",
        "description": "是否开启 rtl 模式",
        "setter": {
          "componentName": "BoolSetter",
          "isRequired": false,
          "initialValue": false
        }
      },
      {
        "title": {
          "label": {
            "type": "i18n",
            "en-US": "rows",
            "zh-CN": "rows"
          }
        },
        "name": "rows",
        "setter": {
          "componentName": "MixedSetter",
          "props": {
            "setters": [
              {
                "componentName": "StringSetter",
                "isRequired": false,
                "initialValue": ""
              },
              {
                "componentName": "NumberSetter",
                "isRequired": false,
                "initialValue": 0
              }
            ]
          }
        }
      },
      {
        "title": {
          "label": {
            "type": "i18n",
            "en-US": "columns",
            "zh-CN": "columns"
          }
        },
        "name": "columns",
        "setter": {
          "componentName": "MixedSetter",
          "props": {
            "setters": [
              {
                "componentName": "StringSetter",
                "isRequired": false,
                "initialValue": ""
              },
              {
                "componentName": "NumberSetter",
                "isRequired": false,
                "initialValue": 0
              }
            ]
          }
        }
      },
      {
        "title": {
          "label": {
            "type": "i18n",
            "en-US": "device",
            "zh-CN": "device"
          }
        },
        "name": "device",
        "setter": {
          "componentName": "RadioGroupSetter",
          "props": {
            "dataSource": [
              {
                "label": "phone",
                "value": "phone"
              },
              {
                "label": "tablet",
                "value": "tablet"
              },
              {
                "label": "desktop",
                "value": "desktop"
              }
            ],
            "options": [
              {
                "label": "phone",
                "value": "phone"
              },
              {
                "label": "tablet",
                "value": "tablet"
              },
              {
                "label": "desktop",
                "value": "desktop"
              }
            ]
          },
          "initialValue": "phone"
        }
      },
      {
        "title": {
          "label": {
            "type": "i18n",
            "en-US": "spacing",
            "zh-CN": "spacing"
          }
        },
        "name": "spacing",
        "setter": {
          "componentName": "MixedSetter",
          "props": {
            "setters": [
              {
                "componentName": "NumberSetter",
                "isRequired": false,
                "initialValue": 0
              },
              {
                "componentName": "ArraySetter",
                "props": {
                  "itemSetter": {
                    "componentName": "NumberSetter",
                    "isRequired": false,
                    "initialValue": 0
                  }
                },
                "initialValue": []
              }
            ]
          },
          "isRequired": true
        }
      },
      {
        "title": {
          "label": {
            "type": "i18n",
            "en-US": "emptyContent",
            "zh-CN": "emptyContent"
          }
        },
        "name": "emptyContent",
        "setter": {
          "componentName": "StringSetter",
          "isRequired": true,
          "initialValue": ""
        }
      },
      {
        "title": {
          "label": {
            "type": "i18n",
            "en-US": "ref",
            "zh-CN": "ref"
          }
        },
        "name": "ref",
        "setter": {
          "componentName": "MixedSetter",
          "props": {
            "setters": [
              {
                "componentName": "FunctionSetter"
              },
              {
                "componentName": "ObjectSetter",
                "props": {
                  "config": {
                    "extraSetter": {
                      "componentName": "MixedSetter",
                      "isRequired": false,
                      "props": {}
                    }
                  }
                },
                "isRequired": false,
                "initialValue": {}
              }
            ]
          }
        }
      },
      {
        "title": {
          "label": {
            "type": "i18n",
            "en-US": "key",
            "zh-CN": "key"
          }
        },
        "name": "key",
        "setter": {
          "componentName": "MixedSetter",
          "props": {
            "setters": [
              {
                "componentName": "StringSetter",
                "isRequired": false,
                "initialValue": ""
              },
              {
                "componentName": "NumberSetter",
                "isRequired": false,
                "initialValue": 0
              }
            ]
          }
        }
      }
    ],
    "supports": {
      "events": [
        {
          "name": "onSubmit",
          "description": "form内有 `htmlType=\"submit\"` 的元素的时候会触发"
        },
        {
          "name": "onClick",
          "description": "点击按钮的回调"
        }
      ],
      "className": true,
      "style": true
    },
    "component": {
      "isContainer": true
    }
  }
};
const snippets: Snippet[] = [
  {
    "title": "ProForm",
    "screenshot": "",
    "schema": {
      "componentName": "ProForm",
      "props": {}
    }
  }
];

export default {
  ...ProFormMeta,
  snippets
};
