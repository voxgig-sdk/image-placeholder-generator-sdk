# frozen_string_literal: true

# Typed models for the ImagePlaceholderGenerator SDK.
#
# GENERATED from the API model: main.kit.entity.<e>.fields[] and per-op
# params (op.<name>.points[].args.params[]). Member types come from the
# canonical type sentinels via @voxgig/sdkgen canonToType (source of truth:
# @voxgig/apidef VALID_CANON). Ruby types are unenforced; these YARD
# annotations document the shapes. Do not edit by hand.

# GenerateCustomPlaceholder entity data model.
class GenerateCustomPlaceholder
end

# Request payload for GenerateCustomPlaceholder#load.
#
# @!attribute [rw] background
#   @return [String]
#
# @!attribute [rw] height
#   @return [Integer]
#
# @!attribute [rw] text_color
#   @return [String]
#
# @!attribute [rw] width
#   @return [Integer]
GenerateCustomPlaceholderLoadMatch = Struct.new(
  :background,
  :height,
  :text_color,
  :width,
  keyword_init: true
)

# GenerateRectangularPlaceholder entity data model.
class GenerateRectangularPlaceholder
end

# Request payload for GenerateRectangularPlaceholder#load.
#
# @!attribute [rw] height
#   @return [Integer]
#
# @!attribute [rw] width
#   @return [Integer]
GenerateRectangularPlaceholderLoadMatch = Struct.new(
  :height,
  :width,
  keyword_init: true
)

# GenerateSquarePlaceholder entity data model.
class GenerateSquarePlaceholder
end

# Request payload for GenerateSquarePlaceholder#load.
#
# @!attribute [rw] id
#   @return [Integer]
GenerateSquarePlaceholderLoadMatch = Struct.new(
  :id,
  keyword_init: true
)

