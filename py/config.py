# ImagePlaceholderGenerator SDK configuration


def make_config():
    return {
        "main": {
            "name": "ImagePlaceholderGenerator",
        },
        "feature": {
            "test": {
        "options": {
          "active": False,
        },
      },
        },
        "options": {
            "base": "https://bifindr.com/placeholder",
            "auth": {
                "prefix": "Bearer",
            },
            "headers": {
        "content-type": "application/json",
      },
            "entity": {
                "generate_custom_placeholder": {},
                "generate_rectangular_placeholder": {},
                "generate_square_placeholder": {},
            },
        },
        "entity": {
      "generate_custom_placeholder": {
        "fields": [],
        "name": "generate_custom_placeholder",
        "op": {
          "load": {
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
                      "reqd": True,
                      "type": "`$STRING`",
                      "active": True,
                    },
                    {
                      "example": 300,
                      "kind": "param",
                      "name": "height",
                      "orig": "height",
                      "reqd": True,
                      "type": "`$INTEGER`",
                      "active": True,
                    },
                    {
                      "example": "ECF0F1",
                      "kind": "param",
                      "name": "text_color",
                      "orig": "text_color",
                      "reqd": True,
                      "type": "`$STRING`",
                      "active": True,
                    },
                    {
                      "example": 600,
                      "kind": "param",
                      "name": "width",
                      "orig": "width",
                      "reqd": True,
                      "type": "`$INTEGER`",
                      "active": True,
                    },
                  ],
                  "query": [
                    {
                      "example": "BiFindr+Placeholder+Image",
                      "kind": "query",
                      "name": "text",
                      "orig": "text",
                      "reqd": False,
                      "type": "`$STRING`",
                      "active": True,
                    },
                  ],
                },
                "method": "GET",
                "orig": "/{width}/{height}/{background}/{text_color}",
                "parts": [
                  "{width}",
                  "{height}",
                  "{background}",
                  "{text_color}",
                ],
                "select": {
                  "exist": [
                    "background",
                    "height",
                    "text",
                    "text_color",
                    "width",
                  ],
                },
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body`",
                },
                "active": True,
                "index$": 0,
              },
            ],
            "input": "data",
            "key$": "load",
          },
        },
        "relations": {
          "ancestors": [],
        },
      },
      "generate_rectangular_placeholder": {
        "fields": [],
        "name": "generate_rectangular_placeholder",
        "op": {
          "load": {
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
                      "reqd": True,
                      "type": "`$INTEGER`",
                      "active": True,
                    },
                    {
                      "example": 600,
                      "kind": "param",
                      "name": "width",
                      "orig": "width",
                      "reqd": True,
                      "type": "`$INTEGER`",
                      "active": True,
                    },
                  ],
                  "query": [
                    {
                      "example": "BiFindr+Placeholder+Image",
                      "kind": "query",
                      "name": "text",
                      "orig": "text",
                      "reqd": False,
                      "type": "`$STRING`",
                      "active": True,
                    },
                  ],
                },
                "method": "GET",
                "orig": "/{width}/{height}",
                "parts": [
                  "{width}",
                  "{height}",
                ],
                "select": {
                  "exist": [
                    "height",
                    "text",
                    "width",
                  ],
                },
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body`",
                },
                "active": True,
                "index$": 0,
              },
            ],
            "input": "data",
            "key$": "load",
          },
        },
        "relations": {
          "ancestors": [],
        },
      },
      "generate_square_placeholder": {
        "fields": [],
        "name": "generate_square_placeholder",
        "op": {
          "load": {
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
                      "reqd": True,
                      "type": "`$INTEGER`",
                      "active": True,
                    },
                  ],
                  "query": [
                    {
                      "example": "BiFindr+Placeholder+Image",
                      "kind": "query",
                      "name": "text",
                      "orig": "text",
                      "reqd": False,
                      "type": "`$STRING`",
                      "active": True,
                    },
                  ],
                },
                "method": "GET",
                "orig": "/{width}",
                "parts": [
                  "{id}",
                ],
                "rename": {
                  "param": {
                    "width": "id",
                  },
                },
                "select": {
                  "exist": [
                    "id",
                    "text",
                  ],
                },
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body`",
                },
                "active": True,
                "index$": 0,
              },
            ],
            "input": "data",
            "key$": "load",
          },
        },
        "relations": {
          "ancestors": [],
        },
      },
    },
    }
