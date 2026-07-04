// Typed models for the ImagePlaceholderGenerator SDK.
//
// GENERATED from the API model: main.kit.entity.<e>.fields[] and per-op
// params (op.<name>.points[].args.params[]). Field/param types come from the
// canonical type sentinels via @voxgig/sdkgen canonToType (source of truth:
// @voxgig/apidef VALID_CANON). Do not edit by hand.

export interface GenerateCustomPlaceholder {
}

export interface GenerateCustomPlaceholderLoadMatch {
  background: string
  height: number
  text_color: string
  width: number
}

export interface GenerateRectangularPlaceholder {
}

export interface GenerateRectangularPlaceholderLoadMatch {
  height: number
  width: number
}

export interface GenerateSquarePlaceholder {
}

export interface GenerateSquarePlaceholderLoadMatch {
  id: number
}

