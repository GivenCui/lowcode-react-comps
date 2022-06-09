import * as React from 'react';
import { createElement, useEffect } from 'react';
import ReactRenderer from '@alilc/lowcode-react-renderer';
import { event } from '@alilc/lowcode-engine';

export interface MyRenderSchemaProps {
  title?: 'string';
}

const MyRenderSchema: React.FC<MyRenderSchemaProps> = function MyRenderSchema({
  title
}) {
  const schema = {
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
    "children": [
      {
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
      },
      {
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
      }
    ]
  };

  useEffect(() => {
    event.on('componentsInitOk', (res) => {
      // 1233
      console.log(res);
    })
  }, [])
  return (
    <div>
      <div>schema 回显测试</div>
      {
        window._components && (
          <ReactRenderer
            schema={schema}
            components={window._components}
          />
        )
      }
    </div>
  );
};

export default MyRenderSchema;
