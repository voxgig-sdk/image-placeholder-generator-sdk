<?php
declare(strict_types=1);

// Typed models for the ImagePlaceholderGenerator SDK.
//
// GENERATED from the API model: main.kit.entity.<e>.fields[] and per-op
// params (op.<name>.points[].args.params[]). Field/param types come from the
// canonical type sentinels via @voxgig/sdkgen canonToType (source of truth:
// @voxgig/apidef VALID_CANON). Do not edit by hand.
//
// These are documentation-grade value objects (PHP 8 typed properties),
// registered on the composer classmap autoload. The SDK boundary exchanges
// assoc-arrays; these classes name the shapes for tooling and typed callers.

/** GenerateCustomPlaceholder entity data model. */
class GenerateCustomPlaceholder
{
}

/** Request payload for GenerateCustomPlaceholder#load. */
class GenerateCustomPlaceholderLoadMatch
{
    public string $background;
    public int $height;
    public string $text_color;
    public int $width;
}

/** GenerateRectangularPlaceholder entity data model. */
class GenerateRectangularPlaceholder
{
}

/** Request payload for GenerateRectangularPlaceholder#load. */
class GenerateRectangularPlaceholderLoadMatch
{
    public int $height;
    public int $width;
}

/** GenerateSquarePlaceholder entity data model. */
class GenerateSquarePlaceholder
{
}

/** Request payload for GenerateSquarePlaceholder#load. */
class GenerateSquarePlaceholderLoadMatch
{
    public int $id;
}

