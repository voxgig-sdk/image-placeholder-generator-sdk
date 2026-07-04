-- Typed models for the ImagePlaceholderGenerator SDK (LuaLS annotations).
--
-- GENERATED from the API model: main.kit.entity.<e>.fields[] and per-op
-- params (op.<name>.points[].args.params[]). Field/param types come from the
-- canonical type sentinels via @voxgig/sdkgen canonToType (source of truth:
-- @voxgig/apidef VALID_CANON). Annotations only — no runtime effect. Do not
-- edit by hand.

---@class GenerateCustomPlaceholder

---@class GenerateCustomPlaceholderLoadMatch
---@field background string
---@field height number
---@field text_color string
---@field width number

---@class GenerateRectangularPlaceholder

---@class GenerateRectangularPlaceholderLoadMatch
---@field height number
---@field width number

---@class GenerateSquarePlaceholder

---@class GenerateSquarePlaceholderLoadMatch
---@field id number

local M = {}

return M
