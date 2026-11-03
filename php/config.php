<?php
declare(strict_types=1);

// ImagePlaceholderGenerator SDK configuration

class ImagePlaceholderGeneratorConfig
{
    /** @var array<string,mixed>|null */
    private static ?array $shared_config = null;

    /**
     * Return the process-wide config, built once on first use. The SDK reads
     * the config on every request and never writes to it, so one instance is
     * shared by every client rather than rebuilt per client.
     *
     * PHP arrays are copy-on-write, so callers that do mutate the result get
     * their own copy and cannot disturb the shared one.
     */
    public static function shared_config(): array
    {
        if (self::$shared_config === null) {
            self::$shared_config = self::make_config();
        }
        return self::$shared_config;
    }

    /**
     * Build a fresh, fully materialised config array. Every call rebuilds the
     * whole structure, so prefer shared_config unless you need a private copy.
     */
    public static function make_config(): array
    {
        return [
            "main" => [
                "name" => "ImagePlaceholderGenerator",
                "slug" => "image-placeholder-generator",
                "version" => "0.0.1",
                "target" => "php",
            ],
            "feature" => [
                "ratelimit" => [
          'options' => [
            'active' => false,
            'burst' => 5,
            'rate' => 5,
          ],
          'optspec' => [
            'now' => '`$FUNCTION`',
            'sleep' => '`$FUNCTION`',
          ],
          'strict' => false,
          'transport' => 'wrap',
        ],
                "retry" => [
          'options' => [
            'active' => false,
            'factor' => 2,
            'maxDelay' => 2000,
            'minDelay' => 50,
            'retries' => 2,
            'statuses' => [
              408,
              425,
              429,
              500,
              502,
              503,
              504,
            ],
          ],
          'optspec' => [
            'jitter' => '`$BOOLEAN`',
            'sleep' => '`$FUNCTION`',
          ],
          'strict' => false,
          'transport' => 'wrap',
        ],
                "test" => [
          'options' => [
            'active' => false,
          ],
          'optspec' => [
            'entity' => '`$MAP`',
            'net' => '`$MAP`',
          ],
          'strict' => false,
          'transport' => 'base',
        ],
                "timeout" => [
          'options' => [
            'active' => false,
            'ms' => 30000,
          ],
          'optspec' => [
            'clearTimer' => '`$FUNCTION`',
            'now' => '`$FUNCTION`',
            'setTimer' => '`$FUNCTION`',
          ],
          'strict' => false,
          'transport' => 'wrap',
        ],
            ],
            "options" => [
                "base" => "https://bifindr.com/placeholder",
                "headers" => [
          'content-type' => 'application/json',
        ],
                "entity" => [
                    "generate_custom_placeholder" => [],
                    "generate_rectangular_placeholder" => [],
                    "generate_square_placeholder" => [],
                ],
            ],
            "entity" => [
        'generate_custom_placeholder' => [
          'fields' => [
            [
              'name' => 'id',
              'title' => 'Id',
              'type' => '`$STRING`',
            ],
          ],
          'id' => [
            'field' => 'id',
            'name' => 'id',
            'parts' => [
              'width',
              'height',
              'background',
              'text_color',
            ],
            'sep' => '/',
          ],
          'name' => 'generate_custom_placeholder',
          'op' => [
            'load' => [
              'input' => 'data',
              'name' => 'load',
              'points' => [
                [
                  'kind' => 'http',
                  'method' => 'GET',
                  'orig' => '/{width}/{height}/{background}/{text_color}',
                  'segments' => [
                    [
                      'var' => 'width',
                    ],
                    [
                      'var' => 'height',
                    ],
                    [
                      'var' => 'background',
                    ],
                    [
                      'var' => 'text_color',
                    ],
                  ],
                  'parts' => [
                    '{width}',
                    '{height}',
                    '{background}',
                    '{text_color}',
                  ],
                  'rename' => [],
                  'transform' => [
                    'req' => '`reqdata`',
                    'res' => '`body`',
                  ],
                  'args' => [
                    'params' => [
                      [
                        'name' => 'background',
                        'orig' => 'background',
                        'type' => '`$STRING`',
                        'kind' => 'param',
                        'reqd' => true,
                        'example' => '2C3E50',
                      ],
                      [
                        'name' => 'height',
                        'orig' => 'height',
                        'type' => '`$INTEGER`',
                        'kind' => 'param',
                        'reqd' => true,
                        'example' => 300,
                      ],
                      [
                        'name' => 'text_color',
                        'orig' => 'text_color',
                        'type' => '`$STRING`',
                        'kind' => 'param',
                        'reqd' => true,
                        'example' => 'ECF0F1',
                      ],
                      [
                        'name' => 'width',
                        'orig' => 'width',
                        'type' => '`$INTEGER`',
                        'kind' => 'param',
                        'reqd' => true,
                        'example' => 600,
                      ],
                    ],
                    'query' => [
                      [
                        'name' => 'text',
                        'orig' => 'text',
                        'type' => '`$STRING`',
                        'kind' => 'query',
                        'example' => 'BiFindr+Placeholder+Image',
                      ],
                    ],
                  ],
                  'select' => [
                    'exist' => [
                      'background',
                      'height',
                      'text_color',
                      'width',
                    ],
                  ],
                  'response' => [
                    'binary' => true,
                    'kind' => 'raw',
                    'media' => 'image/svg+xml',
                  ],
                ],
              ],
            ],
          ],
          'relations' => [
            'ancestors' => [],
          ],
        ],
        'generate_rectangular_placeholder' => [
          'fields' => [
            [
              'name' => 'id',
              'title' => 'Id',
              'type' => '`$STRING`',
            ],
          ],
          'id' => [
            'field' => 'id',
            'name' => 'id',
            'parts' => [
              'width',
              'height',
            ],
            'sep' => '/',
          ],
          'name' => 'generate_rectangular_placeholder',
          'op' => [
            'load' => [
              'input' => 'data',
              'name' => 'load',
              'points' => [
                [
                  'kind' => 'http',
                  'method' => 'GET',
                  'orig' => '/{width}/{height}',
                  'segments' => [
                    [
                      'var' => 'width',
                    ],
                    [
                      'var' => 'height',
                    ],
                  ],
                  'parts' => [
                    '{width}',
                    '{height}',
                  ],
                  'rename' => [],
                  'transform' => [
                    'req' => '`reqdata`',
                    'res' => '`body`',
                  ],
                  'args' => [
                    'params' => [
                      [
                        'name' => 'height',
                        'orig' => 'height',
                        'type' => '`$INTEGER`',
                        'kind' => 'param',
                        'reqd' => true,
                        'example' => 300,
                      ],
                      [
                        'name' => 'width',
                        'orig' => 'width',
                        'type' => '`$INTEGER`',
                        'kind' => 'param',
                        'reqd' => true,
                        'example' => 600,
                      ],
                    ],
                    'query' => [
                      [
                        'name' => 'text',
                        'orig' => 'text',
                        'type' => '`$STRING`',
                        'kind' => 'query',
                        'example' => 'BiFindr+Placeholder+Image',
                      ],
                    ],
                  ],
                  'select' => [
                    'exist' => [
                      'height',
                      'width',
                    ],
                  ],
                  'response' => [
                    'binary' => true,
                    'kind' => 'raw',
                    'media' => 'image/svg+xml',
                  ],
                ],
              ],
            ],
          ],
          'relations' => [
            'ancestors' => [],
          ],
        ],
        'generate_square_placeholder' => [
          'fields' => [
            [
              'name' => 'id',
              'title' => 'Id',
              'type' => '`$STRING`',
            ],
          ],
          'id' => [
            'field' => 'id',
            'name' => 'id',
          ],
          'name' => 'generate_square_placeholder',
          'op' => [
            'load' => [
              'input' => 'data',
              'name' => 'load',
              'points' => [
                [
                  'kind' => 'http',
                  'method' => 'GET',
                  'orig' => '/{width}',
                  'segments' => [
                    [
                      'var' => 'id',
                    ],
                  ],
                  'parts' => [
                    '{id}',
                  ],
                  'rename' => [
                    'param' => [
                      'width' => 'id',
                    ],
                  ],
                  'transform' => [
                    'req' => '`reqdata`',
                    'res' => '`body`',
                  ],
                  'args' => [
                    'params' => [
                      [
                        'name' => 'id',
                        'orig' => 'width',
                        'type' => '`$INTEGER`',
                        'kind' => 'param',
                        'reqd' => true,
                        'example' => 400,
                      ],
                    ],
                    'query' => [
                      [
                        'name' => 'text',
                        'orig' => 'text',
                        'type' => '`$STRING`',
                        'kind' => 'query',
                        'example' => 'BiFindr+Placeholder+Image',
                      ],
                    ],
                  ],
                  'select' => [
                    'exist' => [
                      'id',
                    ],
                  ],
                  'response' => [
                    'binary' => true,
                    'kind' => 'raw',
                    'media' => 'image/svg+xml',
                  ],
                ],
              ],
            ],
          ],
          'relations' => [
            'ancestors' => [],
          ],
        ],
      ],
        ];
    }


    public static function make_feature(string $name)
    {
        require_once __DIR__ . '/features.php';
        return ImagePlaceholderGeneratorFeatures::make_feature($name);
    }
}
