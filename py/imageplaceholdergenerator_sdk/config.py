# ImagePlaceholderGenerator SDK configuration


# The sekreto plugin DEFINITIONS the model selected per feature, imported
# above by name from the modules the catalogue's active `plugin.def`
# entries declare. Handed to each feature (secrets builds its Sekreto
# with them): a provider kind not listed here is unknown to that SDK.
FEATURE_PLUGINS = {
}


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
            "slug": "image-placeholder-generator",
            "version": "0.0.1",
            "target": "py",
        },
        "feature": {
            "ratelimit": {
        "options": {
          "active": False,
          "burst": 5,
          "rate": 5,
        },
        "optspec": {
          "now": "`$FUNCTION`",
          "sleep": "`$FUNCTION`",
        },
        "strict": False,
        "transport": "wrap",
      },
            "retry": {
        "options": {
          "active": False,
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
            504,
          ],
        },
        "optspec": {
          "jitter": "`$BOOLEAN`",
          "sleep": "`$FUNCTION`",
        },
        "strict": False,
        "transport": "wrap",
      },
            "test": {
        "options": {
          "active": False,
        },
        "optspec": {
          "entity": "`$MAP`",
          "net": "`$MAP`",
        },
        "strict": False,
        "transport": "base",
      },
            "timeout": {
        "options": {
          "active": False,
          "ms": 30000,
        },
        "optspec": {
          "clearTimer": "`$FUNCTION`",
          "setTimer": "`$FUNCTION`",
        },
        "strict": False,
        "transport": "wrap",
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
        "fields": [
          {
            "name": "id",
            "type": "`$STRING`",
          },
        ],
        "id": {
          "field": "id",
          "name": "id",
          "parts": [
            "width",
            "height",
            "background",
            "text_color",
          ],
          "sep": "/",
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
                "segments": [
                  {
                    "var": "width",
                  },
                  {
                    "var": "height",
                  },
                  {
                    "var": "background",
                  },
                  {
                    "var": "text_color",
                  },
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
                "parts": [
                  "{width}",
                  "{height}",
                  "{background}",
                  "{text_color}",
                ],
              },
            ],
          },
        },
        "relations": {
          "ancestors": [],
        },
      },
      "generate_rectangular_placeholder": {
        "fields": [
          {
            "name": "id",
            "type": "`$STRING`",
          },
        ],
        "id": {
          "field": "id",
          "name": "id",
          "parts": [
            "width",
            "height",
          ],
          "sep": "/",
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
                "segments": [
                  {
                    "var": "width",
                  },
                  {
                    "var": "height",
                  },
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
                "parts": [
                  "{width}",
                  "{height}",
                ],
              },
            ],
          },
        },
        "relations": {
          "ancestors": [],
        },
      },
      "generate_square_placeholder": {
        "fields": [
          {
            "name": "id",
            "type": "`$STRING`",
          },
        ],
        "id": {
          "field": "id",
          "name": "id",
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
                "rename": {
                  "param": {
                    "width": "id",
                  },
                },
                "segments": [
                  {
                    "var": "id",
                  },
                ],
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
                "parts": [
                  "{id}",
                ],
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
