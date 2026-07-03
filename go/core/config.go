package core

func MakeConfig() map[string]any {
	return map[string]any{
		"main": map[string]any{
			"name": "ImagePlaceholderGenerator",
		},
		"feature": map[string]any{
			"test": map[string]any{
				"options": map[string]any{
					"active": false,
				},
			},
		},
		"options": map[string]any{
			"base": "https://bifindr.com/placeholder",
			"auth": map[string]any{
				"prefix": "Bearer",
			},
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
				"fields": []any{},
				"name": "generate_custom_placeholder",
				"op": map[string]any{
					"load": map[string]any{
						"input": "data",
						"name": "load",
						"points": []any{
							map[string]any{
								"active": true,
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"active": true,
											"example": "2C3E50",
											"kind": "param",
											"name": "background",
											"orig": "background",
											"reqd": true,
											"type": "`$STRING`",
										},
										map[string]any{
											"active": true,
											"example": 300,
											"kind": "param",
											"name": "height",
											"orig": "height",
											"reqd": true,
											"type": "`$INTEGER`",
										},
										map[string]any{
											"active": true,
											"example": "ECF0F1",
											"kind": "param",
											"name": "text_color",
											"orig": "text_color",
											"reqd": true,
											"type": "`$STRING`",
										},
										map[string]any{
											"active": true,
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
											"active": true,
											"example": "BiFindr+Placeholder+Image",
											"kind": "query",
											"name": "text",
											"orig": "text",
											"reqd": false,
											"type": "`$STRING`",
										},
									},
								},
								"method": "GET",
								"orig": "/{width}/{height}/{background}/{text_color}",
								"parts": []any{
									"{width}",
									"{height}",
									"{background}",
									"{text_color}",
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
								"index$": 0,
							},
						},
						"key$": "load",
					},
				},
				"relations": map[string]any{
					"ancestors": []any{},
				},
			},
			"generate_rectangular_placeholder": map[string]any{
				"fields": []any{},
				"name": "generate_rectangular_placeholder",
				"op": map[string]any{
					"load": map[string]any{
						"input": "data",
						"name": "load",
						"points": []any{
							map[string]any{
								"active": true,
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"active": true,
											"example": 300,
											"kind": "param",
											"name": "height",
											"orig": "height",
											"reqd": true,
											"type": "`$INTEGER`",
										},
										map[string]any{
											"active": true,
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
											"active": true,
											"example": "BiFindr+Placeholder+Image",
											"kind": "query",
											"name": "text",
											"orig": "text",
											"reqd": false,
											"type": "`$STRING`",
										},
									},
								},
								"method": "GET",
								"orig": "/{width}/{height}",
								"parts": []any{
									"{width}",
									"{height}",
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
								"index$": 0,
							},
						},
						"key$": "load",
					},
				},
				"relations": map[string]any{
					"ancestors": []any{},
				},
			},
			"generate_square_placeholder": map[string]any{
				"fields": []any{},
				"name": "generate_square_placeholder",
				"op": map[string]any{
					"load": map[string]any{
						"input": "data",
						"name": "load",
						"points": []any{
							map[string]any{
								"active": true,
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"active": true,
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
											"active": true,
											"example": "BiFindr+Placeholder+Image",
											"kind": "query",
											"name": "text",
											"orig": "text",
											"reqd": false,
											"type": "`$STRING`",
										},
									},
								},
								"method": "GET",
								"orig": "/{width}",
								"parts": []any{
									"{id}",
								},
								"rename": map[string]any{
									"param": map[string]any{
										"width": "id",
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
								"index$": 0,
							},
						},
						"key$": "load",
					},
				},
				"relations": map[string]any{
					"ancestors": []any{},
				},
			},
		},
	}
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
