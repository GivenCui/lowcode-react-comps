
import { ComponentMetadata, Snippet } from '@alilc/lowcode-types';

const MyRenderSchemaMeta: ComponentMetadata = {
  "componentName": "MyRenderSchema",
  "title": "MyRenderSchema",
  "docUrl": "",
  "screenshot": "",
  "devMode": "proCode",
  "npm": {
    "package": "react-comps-by-cui",
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
            "en-US": "title",
            "zh-CN": "title"
          }
        },
        "name": "title",
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
      }
    ],
    "supports": {
      "style": true
    },
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
