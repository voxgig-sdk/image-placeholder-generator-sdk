package core

import (
	"sync"
)

// MakeConfig builds a fresh, fully materialised config map. Every call
// rebuilds the whole structure, so prefer SharedConfig unless you need a
// private copy you intend to mutate.
func MakeConfig() map[string]any {
	return map[string]any{
		"main": map[string]any{
			"name": "ImagePlaceholderGenerator",
			"slug": "image-placeholder-generator",
			"version": "0.0.1",
			"target": "go",
		},
		"feature": map[string]any{
			"test": map[string]any{
				"options": map[string]any{
					"active": false,
				},
				"transport": "base",
			},
		},
		"options": map[string]any{
			"base": "https://bifindr.com/placeholder",
			"headers": map[string]any{
				"content-type": "application/json",
			},
			"entity": map[string]any{
				"generate_custom_placeholder": map[string]any{},
				"generate_rectangular_placeholder": map[string]any{},
				"generate_square_placeholder": map[string]any{},
			},
		},
		"entity": map[string]any{
			"generate_custom_placeholder": map[string]any{
				"fields": []any{
					map[string]any{
						"name": "id",
						"type": "`$STRING`",
					},
				},
				"id": map[string]any{
					"field": "id",
					"name": "id",
					"parts": []any{
						"width",
						"height",
						"background",
						"text_color",
					},
					"sep": "/",
				},
				"name": "generate_custom_placeholder",
				"op": map[string]any{
					"load": map[string]any{
						"input": "data",
						"name": "load",
						"points": []any{
							map[string]any{
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"example": "2C3E50",
											"kind": "param",
											"name": "background",
											"orig": "background",
											"reqd": true,
											"type": "`$STRING`",
										},
										map[string]any{
											"example": 300,
											"kind": "param",
											"name": "height",
											"orig": "height",
											"reqd": true,
											"type": "`$INTEGER`",
										},
										map[string]any{
											"example": "ECF0F1",
											"kind": "param",
											"name": "text_color",
											"orig": "text_color",
											"reqd": true,
											"type": "`$STRING`",
										},
										map[string]any{
											"example": 600,
											"kind": "param",
											"name": "width",
											"orig": "width",
											"reqd": true,
											"type": "`$INTEGER`",
										},
									},
									"query": []any{
										map[string]any{
											"example": "BiFindr+Placeholder+Image",
											"kind": "query",
											"name": "text",
											"orig": "text",
											"type": "`$STRING`",
										},
									},
								},
								"kind": "http",
								"method": "GET",
								"orig": "/{width}/{height}/{background}/{text_color}",
								"segments": []any{
									map[string]any{
										"var": "width",
									},
									map[string]any{
										"var": "height",
									},
									map[string]any{
										"var": "background",
									},
									map[string]any{
										"var": "text_color",
									},
								},
								"select": map[string]any{
									"exist": []any{
										"background",
										"height",
										"text",
										"text_color",
										"width",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"parts": []any{
									"{width}",
									"{height}",
									"{background}",
									"{text_color}",
								},
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{},
				},
			},
			"generate_rectangular_placeholder": map[string]any{
				"fields": []any{
					map[string]any{
						"name": "id",
						"type": "`$STRING`",
					},
				},
				"id": map[string]any{
					"field": "id",
					"name": "id",
					"parts": []any{
						"width",
						"height",
					},
					"sep": "/",
				},
				"name": "generate_rectangular_placeholder",
				"op": map[string]any{
					"load": map[string]any{
						"input": "data",
						"name": "load",
						"points": []any{
							map[string]any{
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"example": 300,
											"kind": "param",
											"name": "height",
											"orig": "height",
											"reqd": true,
											"type": "`$INTEGER`",
										},
										map[string]any{
											"example": 600,
											"kind": "param",
											"name": "width",
											"orig": "width",
											"reqd": true,
											"type": "`$INTEGER`",
										},
									},
									"query": []any{
										map[string]any{
											"example": "BiFindr+Placeholder+Image",
											"kind": "query",
											"name": "text",
											"orig": "text",
											"type": "`$STRING`",
										},
									},
								},
								"kind": "http",
								"method": "GET",
								"orig": "/{width}/{height}",
								"segments": []any{
									map[string]any{
										"var": "width",
									},
									map[string]any{
										"var": "height",
									},
								},
								"select": map[string]any{
									"exist": []any{
										"height",
										"text",
										"width",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"parts": []any{
									"{width}",
									"{height}",
								},
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{},
				},
			},
			"generate_square_placeholder": map[string]any{
				"fields": []any{
					map[string]any{
						"name": "id",
						"type": "`$STRING`",
					},
				},
				"id": map[string]any{
					"field": "id",
					"name": "id",
				},
				"name": "generate_square_placeholder",
				"op": map[string]any{
					"load": map[string]any{
						"input": "data",
						"name": "load",
						"points": []any{
							map[string]any{
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"example": 400,
											"kind": "param",
											"name": "id",
											"orig": "width",
											"reqd": true,
											"type": "`$INTEGER`",
										},
									},
									"query": []any{
										map[string]any{
											"example": "BiFindr+Placeholder+Image",
											"kind": "query",
											"name": "text",
											"orig": "text",
											"type": "`$STRING`",
										},
									},
								},
								"kind": "http",
								"method": "GET",
								"orig": "/{width}",
								"rename": map[string]any{
									"param": map[string]any{
										"width": "id",
									},
								},
								"segments": []any{
									map[string]any{
										"var": "id",
									},
								},
								"select": map[string]any{
									"exist": []any{
										"id",
										"text",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"parts": []any{
									"{id}",
								},
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{},
				},
			},
		},
	}
}

// The plugin definitions the model selected per feature, as []any so a
// feature package can consume them without core naming its types. Empty
// when no active feature declares active plugin groups for this target.
var featurePlugins = map[string][]any{
}

// FeaturePlugins is the definitions list for one feature's chain.
func FeaturePlugins(name string) []any {
	return featurePlugins[name]
}

var (
	sharedConfigOnce sync.Once
	sharedConfigVal  map[string]any
)

// SharedConfig returns the process-wide config, built once on first use.
// The SDK reads the config on every request and never writes to it, so one
// instance is shared by every client rather than rebuilt per client.
//
// The returned map is shared: treat it as read-only. Callers that need to
// mutate should use MakeConfig, which always returns a fresh copy.
func SharedConfig() map[string]any {
	sharedConfigOnce.Do(func() {
		sharedConfigVal = MakeConfig()
	})
	return sharedConfigVal
}

func makeFeature(name string) Feature {
	switch name {
	case "test":
		if NewTestFeatureFunc != nil {
			return NewTestFeatureFunc()
		}
	default:
		if NewBaseFeatureFunc != nil {
			return NewBaseFeatureFunc()
		}
	}
	return nil
}
