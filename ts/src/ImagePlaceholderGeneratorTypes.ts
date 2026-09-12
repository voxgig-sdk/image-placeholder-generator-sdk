// Typed models for the ImagePlaceholderGenerator SDK.
//
// GENERATED from the API model: main.kit.entity.<e>.fields[] and per-op
// params (op.<name>.points[].args.params[]). Field/param types come from the
// canonical type sentinels via @voxgig/sdkgen canonToType (source of truth:
// @voxgig/apidef VALID_CANON). Do not edit by hand.

export interface GenerateCustomPlaceholder {
  id?: string
}

export interface GenerateCustomPlaceholderLoadMatch {
  background: string
  height: number
  text_color: string
  width: number
  text?: string
}

export interface GenerateRectangularPlaceholder {
  id?: string
}

export interface GenerateRectangularPlaceholderLoadMatch {
  height: number
  width: number
  text?: string
}

export interface GenerateSquarePlaceholder {
  id?: string
}

export interface GenerateSquarePlaceholderLoadMatch {
  id: number
  text?: string
}

