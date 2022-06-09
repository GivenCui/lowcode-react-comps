
import { ComponentMetadata, Snippet } from '@alilc/lowcode-types';

const MyRenderSchemaMeta: ComponentMetadata = {
  "componentName": "MyRenderSchema",
  "title": "MyRenderSchema",
  "docUrl": "",
  "screenshot": "",
  "devMode": "proCode",
  "npm": {
    "package": "react-comps",
    "version": "0.1.0",
    "exportName": "MyRenderSchema",
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
            "en-US": "color",
            "zh-CN": "color"
          }
        },
        "name": "color",
        "setter": {
          "componentName": "RadioGroupSetter",
          "props": {
            "dataSource": [
              {
                "label": "string",
                "value": "string"
              }
            ],
            "options": [
              {
                "label": "string",
                "value": "string"
              }
            ]
          },
          "initialValue": "string"
        }
      },
      {
        "title": {
          "label": {
            "type": "i18n",
            "en-US": "style",
            "zh-CN": "style"
          }
        },
        "name": "style",
        "setter": {
          "componentName": "RadioGroupSetter",
          "props": {
            "dataSource": [
              {
                "label": "object",
                "value": "object"
              }
            ],
            "options": [
              {
                "label": "object",
                "value": "object"
              }
            ]
          },
          "initialValue": "object"
        }
      }
    ],
    "supports": {},
    "component": {}
  }
};
const snippets: Snippet[] = [
  {
    "title": "MyRenderSchema",
    "screenshot": "",
    "schema": {
      "componentName": "MyRenderSchema",
      "props": {}
    }
  }
];

export default {
  ...MyRenderSchemaMeta,
  snippets
};
