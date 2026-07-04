// Typed models for the ImagePlaceholderGenerator SDK.
//
// GENERATED from the API model: main.kit.entity.<e>.fields[] and per-op
// params (op.<name>.points[].args.params[]). Field/param types come from the
// canonical type sentinels via @voxgig/sdkgen canonToType (source of truth:
// @voxgig/apidef VALID_CANON). Do not edit by hand.
package entity

import "encoding/json"

// GenerateCustomPlaceholder is the typed data model for the generate_custom_placeholder entity.
type GenerateCustomPlaceholder struct {
}

// GenerateCustomPlaceholderLoadMatch is the typed request payload for GenerateCustomPlaceholder.LoadTyped.
type GenerateCustomPlaceholderLoadMatch struct {
	Background string `json:"background"`
	Height int `json:"height"`
	TextColor string `json:"text_color"`
	Width int `json:"width"`
}

// GenerateRectangularPlaceholder is the typed data model for the generate_rectangular_placeholder entity.
type GenerateRectangularPlaceholder struct {
}

// GenerateRectangularPlaceholderLoadMatch is the typed request payload for GenerateRectangularPlaceholder.LoadTyped.
type GenerateRectangularPlaceholderLoadMatch struct {
	Height int `json:"height"`
	Width int `json:"width"`
}

// GenerateSquarePlaceholder is the typed data model for the generate_square_placeholder entity.
type GenerateSquarePlaceholder struct {
}

// GenerateSquarePlaceholderLoadMatch is the typed request payload for GenerateSquarePlaceholder.LoadTyped.
type GenerateSquarePlaceholderLoadMatch struct {
	Id int `json:"id"`
}

// asMap turns a typed request/data struct into the map[string]any the
// runtime op pipeline consumes, honouring the json tags above.
func asMap(v any) map[string]any {
	out := map[string]any{}
	b, err := json.Marshal(v)
	if err != nil {
		return out
	}
	_ = json.Unmarshal(b, &out)
	return out
}

// typedFrom decodes a runtime value (a map[string]any produced by the op
// pipeline) into a typed model T via a JSON round-trip. On any error it
// returns the zero value of T; the op's own (value, error) tuple carries the
// real error.
func typedFrom[T any](v any) T {
	var out T
	if v == nil {
		return out
	}
	b, err := json.Marshal(v)
	if err != nil {
		return out
	}
	_ = json.Unmarshal(b, &out)
	return out
}

// typedSliceFrom decodes a runtime list value ([]any of maps) into a typed
// slice []T via a JSON round-trip, for list ops.
func typedSliceFrom[T any](v any) []T {
	var out []T
	if v == nil {
		return out
	}
	b, err := json.Marshal(v)
	if err != nil {
		return out
	}
	_ = json.Unmarshal(b, &out)
	return out
}
