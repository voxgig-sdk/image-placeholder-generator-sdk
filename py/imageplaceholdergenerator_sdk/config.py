# ImagePlaceholderGenerator SDK configuration


_shared_config = None


def shared_config():
    """Return the process-wide config, built once on first use.

    The SDK reads the config on every request and never writes to it, so one
    instance is shared by every client rather than rebuilt per client.

    The returned dict is shared: treat it as read-only. Callers that need to
    mutate should use make_config, which always returns a fresh copy.
    """
    global _shared_config
    if _shared_config is None:
        _shared_config = make_config()
    return _shared_config


def make_config():
    """Build a fresh, fully materialised config dict.

    Every call rebuilds the whole structure, so prefer shared_config unless
    you need a private copy you intend to mutate.
    """
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
                      "reqd": True,
                      "type": "`$STRING`",
                    },
                    {
                      "example": 300,
                      "kind": "param",
                      "name": "height",
                      "orig": "height",
                      "reqd": True,
                      "type": "`$INTEGER`",
                    },
                    {
                      "example": "ECF0F1",
                      "kind": "param",
                      "name": "text_color",
                      "orig": "text_color",
                      "reqd": True,
                      "type": "`$STRING`",
                    },
                    {
                      "example": 600,
                      "kind": "param",
                      "name": "width",
                      "orig": "width",
                      "reqd": True,
                      "type": "`$INTEGER`",
                    },
                  ],
                  "query": [
                    {
                      "example": "BiFindr+Placeholder+Image",
                      "kind": "query",
                      "name": "text",
                      "orig": "text",
                      "type": "`$STRING`",
                    },
                  ],
                },
                "kind": "http",
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
              },
            ],
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
                      "reqd": True,
                      "type": "`$INTEGER`",
                    },
                    {
                      "example": 600,
                      "kind": "param",
                      "name": "width",
                      "orig": "width",
                      "reqd": True,
                      "type": "`$INTEGER`",
                    },
                  ],
                  "query": [
                    {
                      "example": "BiFindr+Placeholder+Image",
                      "kind": "query",
                      "name": "text",
                      "orig": "text",
                      "type": "`$STRING`",
                    },
                  ],
                },
                "kind": "http",
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
              },
            ],
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
                      "reqd": True,
                      "type": "`$INTEGER`",
                    },
                  ],
                  "query": [
                    {
                      "example": "BiFindr+Placeholder+Image",
                      "kind": "query",
                      "name": "text",
                      "orig": "text",
                      "type": "`$STRING`",
                    },
                  ],
                },
                "kind": "http",
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
              },
            ],
          },
        },
        "relations": {
          "ancestors": [],
        },
      },
    },
    }
