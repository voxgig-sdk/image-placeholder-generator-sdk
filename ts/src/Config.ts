
import { BaseFeature } from './feature/base/BaseFeature'
import { RatelimitFeature } from './feature/ratelimit/RatelimitFeature'
import { RetryFeature } from './feature/retry/RetryFeature'
import { TestFeature } from './feature/test/TestFeature'
import { TimeoutFeature } from './feature/timeout/TimeoutFeature'



const FEATURE_CLASS: Record<string, typeof BaseFeature> = {
   ratelimit: RatelimitFeature,
 retry: RetryFeature,
 test: TestFeature,
 timeout: TimeoutFeature,

}


// Per-feature plugin DEFINITIONS (voxgig/plugin `Definition` values), from
// the model's active plugin groups. A feature that takes a `plugins` option
// (secrets over sekreto) reads its own entry; a feature with no plugins has
// none. Named imports above make each definition statically reachable, so
// an SDK carries exactly the plugin modules its model selects — the same
// leanness the old side-effect registry imports bought, without a registry.
const FEATURE_PLUGINS: Record<string, any[]> = {
  
}


class Config {

  makeFeature(this: any, fn: string) {
    const fc = FEATURE_CLASS[fn]
    const fi = new fc()
    // TODO: errors etc
    return fi
  }

  // False for a feature added at runtime via options.extend (station's
  // adopt path) - the constructor uses this to skip makeFeature for names
  // no generated class backs.
  hasFeature(this: any, fn: string) {
    return null != FEATURE_CLASS[fn]
  }


  main = {
    name: 'ImagePlaceholderGenerator',
        slug: "image-placeholder-generator",
    version: "0.0.1",
    target: "ts",

  }


  feature = {
     ratelimit:     {
      "options": {
        "active": false,
        "burst": 5,
        "rate": 5
      },
      "optspec": {
        "now": "`$FUNCTION`",
        "sleep": "`$FUNCTION`"
      },
      "strict": false,
      "transport": "wrap"
    },
 retry:     {
      "options": {
        "active": false,
        "factor": 2,
        "maxDelay": 2000,
        "minDelay": 50,
        "retries": 2,
        "statuses": [
          408,
          425,
          429,
          500,
          502,
          503,
          504
        ]
      },
      "optspec": {
        "jitter": "`$BOOLEAN`",
        "sleep": "`$FUNCTION`"
      },
      "strict": false,
      "transport": "wrap"
    },
 test:     {
      "options": {
        "active": false
      },
      "optspec": {
        "entity": "`$MAP`",
        "net": "`$MAP`"
      },
      "strict": false,
      "transport": "base"
    },
 timeout:     {
      "options": {
        "active": false,
        "ms": 30000
      },
      "optspec": {
        "clearTimer": "`$FUNCTION`",
        "setTimer": "`$FUNCTION`"
      },
      "strict": false,
      "transport": "wrap"
    },

  }


  options = {
    base: "https://bifindr.com/placeholder",

    headers: {
      "content-type": "application/json"
    },

    entity: {
      
        generate_custom_placeholder: {
        },
  
        generate_rectangular_placeholder: {
        },
  
        generate_square_placeholder: {
        },
  
    }
  }


  entity = {
    "generate_custom_placeholder": {
      "fields": [
        {
          "name": "id",
          "type": "`$STRING`"
        }
      ],
      "id": {
        "field": "id",
        "name": "id",
        "parts": [
          "width",
          "height",
          "background",
          "text_color"
        ],
        "sep": "/"
      },
      "name": "generate_custom_placeholder",
      "op": {
        "load": {
          "input": "data",
          "name": "load",
          "points": [
            {
              "args": {
                "params": [
                  {
                    "example": "2C3E50",
                    "kind": "param",
                    "name": "background",
                    "orig": "background",
                    "reqd": true,
                    "type": "`$STRING`"
                  },
                  {
                    "example": 300,
                    "kind": "param",
                    "name": "height",
                    "orig": "height",
                    "reqd": true,
                    "type": "`$INTEGER`"
                  },
                  {
                    "example": "ECF0F1",
                    "kind": "param",
                    "name": "text_color",
                    "orig": "text_color",
                    "reqd": true,
                    "type": "`$STRING`"
                  },
                  {
                    "example": 600,
                    "kind": "param",
                    "name": "width",
                    "orig": "width",
                    "reqd": true,
                    "type": "`$INTEGER`"
                  }
                ],
                "query": [
                  {
                    "example": "BiFindr+Placeholder+Image",
                    "kind": "query",
                    "name": "text",
                    "orig": "text",
                    "type": "`$STRING`"
                  }
                ]
              },
              "kind": "http",
              "method": "GET",
              "orig": "/{width}/{height}/{background}/{text_color}",
              "segments": [
                {
                  "var": "width"
                },
                {
                  "var": "height"
                },
                {
                  "var": "background"
                },
                {
                  "var": "text_color"
                }
              ],
              "select": {
                "exist": [
                  "background",
                  "height",
                  "text",
                  "text_color",
                  "width"
                ]
              },
              "transform": {
                "req": "`reqdata`",
                "res": "`body`"
              },
              "parts": [
                "{width}",
                "{height}",
                "{background}",
                "{text_color}"
              ]
            }
          ]
        }
      },
      "relations": {
        "ancestors": []
      }
    },
    "generate_rectangular_placeholder": {
      "fields": [
        {
          "name": "id",
          "type": "`$STRING`"
        }
      ],
      "id": {
        "field": "id",
        "name": "id",
        "parts": [
          "width",
          "height"
        ],
        "sep": "/"
      },
      "name": "generate_rectangular_placeholder",
      "op": {
        "load": {
          "input": "data",
          "name": "load",
          "points": [
            {
              "args": {
                "params": [
                  {
                    "example": 300,
                    "kind": "param",
                    "name": "height",
                    "orig": "height",
                    "reqd": true,
                    "type": "`$INTEGER`"
                  },
                  {
                    "example": 600,
                    "kind": "param",
                    "name": "width",
                    "orig": "width",
                    "reqd": true,
                    "type": "`$INTEGER`"
                  }
                ],
                "query": [
                  {
                    "example": "BiFindr+Placeholder+Image",
                    "kind": "query",
                    "name": "text",
                    "orig": "text",
                    "type": "`$STRING`"
                  }
                ]
              },
              "kind": "http",
              "method": "GET",
              "orig": "/{width}/{height}",
              "segments": [
                {
                  "var": "width"
                },
                {
                  "var": "height"
                }
              ],
              "select": {
                "exist": [
                  "height",
                  "text",
                  "width"
                ]
              },
              "transform": {
                "req": "`reqdata`",
                "res": "`body`"
              },
              "parts": [
                "{width}",
                "{height}"
              ]
            }
          ]
        }
      },
      "relations": {
        "ancestors": []
      }
    },
    "generate_square_placeholder": {
      "fields": [
        {
          "name": "id",
          "type": "`$STRING`"
        }
      ],
      "id": {
        "field": "id",
        "name": "id"
      },
      "name": "generate_square_placeholder",
      "op": {
        "load": {
          "input": "data",
          "name": "load",
          "points": [
            {
              "args": {
                "params": [
                  {
                    "example": 400,
                    "kind": "param",
                    "name": "id",
                    "orig": "width",
                    "reqd": true,
                    "type": "`$INTEGER`"
                  }
                ],
                "query": [
                  {
                    "example": "BiFindr+Placeholder+Image",
                    "kind": "query",
                    "name": "text",
                    "orig": "text",
                    "type": "`$STRING`"
                  }
                ]
              },
              "kind": "http",
              "method": "GET",
              "orig": "/{width}",
              "rename": {
                "param": {
                  "width": "id"
                }
              },
              "segments": [
                {
                  "var": "id"
                }
              ],
              "select": {
                "exist": [
                  "id",
                  "text"
                ]
              },
              "transform": {
                "req": "`reqdata`",
                "res": "`body`"
              },
              "parts": [
                "{id}"
              ]
            }
          ]
        }
      },
      "relations": {
        "ancestors": []
      }
    }
  }
}


const config = new Config()

export {
  config,
  FEATURE_PLUGINS,
}

