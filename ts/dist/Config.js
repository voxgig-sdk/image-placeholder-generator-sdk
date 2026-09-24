"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FEATURE_PLUGINS = exports.config = void 0;
const RatelimitFeature_1 = require("./feature/ratelimit/RatelimitFeature");
const RetryFeature_1 = require("./feature/retry/RetryFeature");
const TestFeature_1 = require("./feature/test/TestFeature");
const TimeoutFeature_1 = require("./feature/timeout/TimeoutFeature");
const FEATURE_CLASS = {
    ratelimit: RatelimitFeature_1.RatelimitFeature,
    retry: RetryFeature_1.RetryFeature,
    test: TestFeature_1.TestFeature,
    timeout: TimeoutFeature_1.TimeoutFeature,
};
const FEATURE_PLUGINS = {};
exports.FEATURE_PLUGINS = FEATURE_PLUGINS;
class Config {
    makeFeature(fn) {
        const fc = FEATURE_CLASS[fn];
        const fi = new fc();
        return fi;
    }
    // False for a feature added at runtime via options.extend (station's
    // adopt path) - the constructor uses this to skip makeFeature for names
    // no generated class backs.
    hasFeature(fn) {
        return null != FEATURE_CLASS[fn];
    }
    main = {
        name: 'ImagePlaceholderGenerator',
        slug: "image-placeholder-generator",
        version: "0.0.1",
        target: "ts",
    };
    feature = {
        ratelimit: {
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
        retry: {
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
        test: {
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
        timeout: {
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
    };
    options = {
        base: "https://bifindr.com/placeholder",
        headers: {
            "content-type": "application/json"
        },
        entity: {
            generate_custom_placeholder: {},
            generate_rectangular_placeholder: {},
            generate_square_placeholder: {},
        }
    };
    entity = {
        "generate_custom_placeholder": {
            "fields": [
                {
                    "name": "id",
                    "title": "Id",
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
                            "parts": [
                                "{width}",
                                "{height}",
                                "{background}",
                                "{text_color}"
                            ],
                            "rename": {},
                            "transform": {
                                "req": "`reqdata`",
                                "res": "`body`"
                            },
                            "args": {
                                "params": [
                                    {
                                        "name": "background",
                                        "orig": "background",
                                        "type": "`$STRING`",
                                        "kind": "param",
                                        "reqd": true,
                                        "example": "2C3E50"
                                    },
                                    {
                                        "name": "height",
                                        "orig": "height",
                                        "type": "`$INTEGER`",
                                        "kind": "param",
                                        "reqd": true,
                                        "example": 300
                                    },
                                    {
                                        "name": "text_color",
                                        "orig": "text_color",
                                        "type": "`$STRING`",
                                        "kind": "param",
                                        "reqd": true,
                                        "example": "ECF0F1"
                                    },
                                    {
                                        "name": "width",
                                        "orig": "width",
                                        "type": "`$INTEGER`",
                                        "kind": "param",
                                        "reqd": true,
                                        "example": 600
                                    }
                                ],
                                "query": [
                                    {
                                        "name": "text",
                                        "orig": "text",
                                        "type": "`$STRING`",
                                        "kind": "query",
                                        "example": "BiFindr+Placeholder+Image"
                                    }
                                ]
                            },
                            "select": {
                                "exist": [
                                    "background",
                                    "height",
                                    "text",
                                    "text_color",
                                    "width"
                                ]
                            }
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
                    "title": "Id",
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
                            "parts": [
                                "{width}",
                                "{height}"
                            ],
                            "rename": {},
                            "transform": {
                                "req": "`reqdata`",
                                "res": "`body`"
                            },
                            "args": {
                                "params": [
                                    {
                                        "name": "height",
                                        "orig": "height",
                                        "type": "`$INTEGER`",
                                        "kind": "param",
                                        "reqd": true,
                                        "example": 300
                                    },
                                    {
                                        "name": "width",
                                        "orig": "width",
                                        "type": "`$INTEGER`",
                                        "kind": "param",
                                        "reqd": true,
                                        "example": 600
                                    }
                                ],
                                "query": [
                                    {
                                        "name": "text",
                                        "orig": "text",
                                        "type": "`$STRING`",
                                        "kind": "query",
                                        "example": "BiFindr+Placeholder+Image"
                                    }
                                ]
                            },
                            "select": {
                                "exist": [
                                    "height",
                                    "text",
                                    "width"
                                ]
                            }
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
                    "title": "Id",
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
                            "kind": "http",
                            "method": "GET",
                            "orig": "/{width}",
                            "segments": [
                                {
                                    "var": "id"
                                }
                            ],
                            "parts": [
                                "{id}"
                            ],
                            "rename": {
                                "param": {
                                    "width": "id"
                                }
                            },
                            "transform": {
                                "req": "`reqdata`",
                                "res": "`body`"
                            },
                            "args": {
                                "params": [
                                    {
                                        "name": "id",
                                        "orig": "width",
                                        "type": "`$INTEGER`",
                                        "kind": "param",
                                        "reqd": true,
                                        "example": 400
                                    }
                                ],
                                "query": [
                                    {
                                        "name": "text",
                                        "orig": "text",
                                        "type": "`$STRING`",
                                        "kind": "query",
                                        "example": "BiFindr+Placeholder+Image"
                                    }
                                ]
                            },
                            "select": {
                                "exist": [
                                    "id",
                                    "text"
                                ]
                            }
                        }
                    ]
                }
            },
            "relations": {
                "ancestors": []
            }
        }
    };
}
const config = new Config();
exports.config = config;
//# sourceMappingURL=Config.js.map