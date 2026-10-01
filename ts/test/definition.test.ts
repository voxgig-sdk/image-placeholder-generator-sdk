import { describe, test } from 'node:test'
import { SDK } from '..'
import { runDefinitionPoint } from './definition-runner'
import { isControlSkipped } from './utility'


// Generated from the API definition, not from the model this SDK was built
// from: the route, the declared query parameters, the credential the security
// scheme names, and the definition's own response example.
const PLAN: any[] = [
  {
    "entity": "generate_custom_placeholder",
    "accessor": "GenerateCustomPlaceholder",
    "op": "load",
    "method": "GET",
    "path": "/{width}/{height}/{background}/{text_color}",
    "args": [
      {
        "name": "background",
        "wire": "background",
        "value": "2C3E50"
      },
      {
        "name": "height",
        "wire": "height",
        "value": 300
      },
      {
        "name": "text_color",
        "wire": "text_color",
        "value": "ECF0F1"
      },
      {
        "name": "width",
        "wire": "width",
        "value": 600
      }
    ],
    "select": {
      "text": "BiFindr+Placeholder+Image"
    },
    "headers": [],
    "query": [
      "text"
    ],
    "auth": null,
    "status": 200,
    "sample": null,
    "idField": "id"
  },
  {
    "entity": "generate_rectangular_placeholder",
    "accessor": "GenerateRectangularPlaceholder",
    "op": "load",
    "method": "GET",
    "path": "/{width}/{height}",
    "args": [
      {
        "name": "height",
        "wire": "height",
        "value": 300
      },
      {
        "name": "width",
        "wire": "width",
        "value": 600
      }
    ],
    "select": {
      "text": "BiFindr+Placeholder+Image"
    },
    "headers": [],
    "query": [
      "text"
    ],
    "auth": null,
    "status": 200,
    "sample": null,
    "idField": "id"
  },
  {
    "entity": "generate_square_placeholder",
    "accessor": "GenerateSquarePlaceholder",
    "op": "load",
    "method": "GET",
    "path": "/{width}",
    "args": [
      {
        "name": "id",
        "wire": "width",
        "value": 400
      }
    ],
    "select": {
      "text": "BiFindr+Placeholder+Image"
    },
    "headers": [],
    "query": [
      "text"
    ],
    "auth": null,
    "status": 200,
    "sample": null,
    "idField": "id"
  }
]


describe('definition', () => {
  for (const point of PLAN) {
    test(point.entity + '.' + point.op + ' ' + point.method + ' ' + point.path, async (t) => {
      const control = isControlSkipped('entityOp', point.entity + '.' + point.op, 'definition')
      if (control.skip) {
        t.skip(control.reason || 'skipped via sdk-test-control.json')
        return
      }
      await runDefinitionPoint(SDK, point)
    })
  }
})
