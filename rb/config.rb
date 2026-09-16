# ImagePlaceholderGenerator SDK configuration

module ImagePlaceholderGeneratorConfig
  # Return the process-wide config, built once on first use. The SDK reads
  # the config on every request and never writes to it, so one instance is
  # shared by every client rather than rebuilt per client.
  #
  # The returned hash is shared: treat it as read-only. Callers that need to
  # mutate should use make_config, which always returns a fresh copy.
  def self.shared_config
    @shared_config ||= make_config
  end


  # Build a fresh, fully materialised config hash. Every call rebuilds the
  # whole structure, so prefer shared_config unless you need a private copy
  # you intend to mutate.
  def self.make_config
    {
      "main" => {
        "name" => "ImagePlaceholderGenerator",
        "slug" => "image-placeholder-generator",
        "version" => "0.0.1",
        "target" => "rb",
      },
      "feature" => {
        "ratelimit" => {
          "options" => {
            "active" => false,
            "burst" => 5,
            "rate" => 5,
          },
          "optspec" => {
            "now" => "`$FUNCTION`",
            "sleep" => "`$FUNCTION`",
          },
          "strict" => false,
          "transport" => "wrap",
        },
        "retry" => {
          "options" => {
            "active" => false,
            "factor" => 2,
            "maxDelay" => 2000,
            "minDelay" => 50,
            "retries" => 2,
            "statuses" => [
              408,
              425,
              429,
              500,
              502,
              503,
              504,
            ],
          },
          "optspec" => {
            "jitter" => "`$BOOLEAN`",
            "sleep" => "`$FUNCTION`",
          },
          "strict" => false,
          "transport" => "wrap",
        },
        "test" => {
          "options" => {
            "active" => false,
          },
          "optspec" => {
            "entity" => "`$MAP`",
            "net" => "`$MAP`",
          },
          "strict" => false,
          "transport" => "base",
        },
        "timeout" => {
          "options" => {
            "active" => false,
            "ms" => 30000,
          },
          "optspec" => {
            "clearTimer" => "`$FUNCTION`",
            "setTimer" => "`$FUNCTION`",
          },
          "strict" => false,
          "transport" => "wrap",
        },
      },
      "options" => {
        "base" => "https://bifindr.com/placeholder",
        "headers" => {
          "content-type" => "application/json",
        },
        "entity" => {
          "generate_custom_placeholder" => {},
          "generate_rectangular_placeholder" => {},
          "generate_square_placeholder" => {},
        },
      },
      "entity" => {
        "generate_custom_placeholder" => {
          "fields" => [
            {
              "name" => "id",
              "type" => "`$STRING`",
            },
          ],
          "id" => {
            "field" => "id",
            "name" => "id",
            "parts" => [
              "width",
              "height",
              "background",
              "text_color",
            ],
            "sep" => "/",
          },
          "name" => "generate_custom_placeholder",
          "op" => {
            "load" => {
              "input" => "data",
              "name" => "load",
              "points" => [
                {
                  "args" => {
                    "params" => [
                      {
                        "example" => "2C3E50",
                        "kind" => "param",
                        "name" => "background",
                        "orig" => "background",
                        "reqd" => true,
                        "type" => "`$STRING`",
                      },
                      {
                        "example" => 300,
                        "kind" => "param",
                        "name" => "height",
                        "orig" => "height",
                        "reqd" => true,
                        "type" => "`$INTEGER`",
                      },
                      {
                        "example" => "ECF0F1",
                        "kind" => "param",
                        "name" => "text_color",
                        "orig" => "text_color",
                        "reqd" => true,
                        "type" => "`$STRING`",
                      },
                      {
                        "example" => 600,
                        "kind" => "param",
                        "name" => "width",
                        "orig" => "width",
                        "reqd" => true,
                        "type" => "`$INTEGER`",
                      },
                    ],
                    "query" => [
                      {
                        "example" => "BiFindr+Placeholder+Image",
                        "kind" => "query",
                        "name" => "text",
                        "orig" => "text",
                        "type" => "`$STRING`",
                      },
                    ],
                  },
                  "kind" => "http",
                  "method" => "GET",
                  "orig" => "/{width}/{height}/{background}/{text_color}",
                  "segments" => [
                    {
                      "var" => "width",
                    },
                    {
                      "var" => "height",
                    },
                    {
                      "var" => "background",
                    },
                    {
                      "var" => "text_color",
                    },
                  ],
                  "select" => {
                    "exist" => [
                      "background",
                      "height",
                      "text",
                      "text_color",
                      "width",
                    ],
                  },
                  "transform" => {
                    "req" => "`reqdata`",
                    "res" => "`body`",
                  },
                  "parts" => [
                    "{width}",
                    "{height}",
                    "{background}",
                    "{text_color}",
                  ],
                },
              ],
            },
          },
          "relations" => {
            "ancestors" => [],
          },
        },
        "generate_rectangular_placeholder" => {
          "fields" => [
            {
              "name" => "id",
              "type" => "`$STRING`",
            },
          ],
          "id" => {
            "field" => "id",
            "name" => "id",
            "parts" => [
              "width",
              "height",
            ],
            "sep" => "/",
          },
          "name" => "generate_rectangular_placeholder",
          "op" => {
            "load" => {
              "input" => "data",
              "name" => "load",
              "points" => [
                {
                  "args" => {
                    "params" => [
                      {
                        "example" => 300,
                        "kind" => "param",
                        "name" => "height",
                        "orig" => "height",
                        "reqd" => true,
                        "type" => "`$INTEGER`",
                      },
                      {
                        "example" => 600,
                        "kind" => "param",
                        "name" => "width",
                        "orig" => "width",
                        "reqd" => true,
                        "type" => "`$INTEGER`",
                      },
                    ],
                    "query" => [
                      {
                        "example" => "BiFindr+Placeholder+Image",
                        "kind" => "query",
                        "name" => "text",
                        "orig" => "text",
                        "type" => "`$STRING`",
                      },
                    ],
                  },
                  "kind" => "http",
                  "method" => "GET",
                  "orig" => "/{width}/{height}",
                  "segments" => [
                    {
                      "var" => "width",
                    },
                    {
                      "var" => "height",
                    },
                  ],
                  "select" => {
                    "exist" => [
                      "height",
                      "text",
                      "width",
                    ],
                  },
                  "transform" => {
                    "req" => "`reqdata`",
                    "res" => "`body`",
                  },
                  "parts" => [
                    "{width}",
                    "{height}",
                  ],
                },
              ],
            },
          },
          "relations" => {
            "ancestors" => [],
          },
        },
        "generate_square_placeholder" => {
          "fields" => [
            {
              "name" => "id",
              "type" => "`$STRING`",
            },
          ],
          "id" => {
            "field" => "id",
            "name" => "id",
          },
          "name" => "generate_square_placeholder",
          "op" => {
            "load" => {
              "input" => "data",
              "name" => "load",
              "points" => [
                {
                  "args" => {
                    "params" => [
                      {
                        "example" => 400,
                        "kind" => "param",
                        "name" => "id",
                        "orig" => "width",
                        "reqd" => true,
                        "type" => "`$INTEGER`",
                      },
                    ],
                    "query" => [
                      {
                        "example" => "BiFindr+Placeholder+Image",
                        "kind" => "query",
                        "name" => "text",
                        "orig" => "text",
                        "type" => "`$STRING`",
                      },
                    ],
                  },
                  "kind" => "http",
                  "method" => "GET",
                  "orig" => "/{width}",
                  "rename" => {
                    "param" => {
                      "width" => "id",
                    },
                  },
                  "segments" => [
                    {
                      "var" => "id",
                    },
                  ],
                  "select" => {
                    "exist" => [
                      "id",
                      "text",
                    ],
                  },
                  "transform" => {
                    "req" => "`reqdata`",
                    "res" => "`body`",
                  },
                  "parts" => [
                    "{id}",
                  ],
                },
              ],
            },
          },
          "relations" => {
            "ancestors" => [],
          },
        },
      },
    }
  end


  def self.make_feature(name)
    require_relative 'features'
    ImagePlaceholderGeneratorFeatures.make_feature(name)
  end
end
