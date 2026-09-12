# Typed models for the ImagePlaceholderGenerator SDK.
#
# GENERATED from the API model: main.kit.entity.<e>.fields[] and per-op
# params (op.<name>.points[].args.params[]). Field/param types come from the
# canonical type sentinels via @voxgig/sdkgen canonToType (source of truth:
# @voxgig/apidef VALID_CANON). Do not edit by hand.
#
# These are TypedDicts, not dataclasses: the SDK ops return/accept plain dicts
# at runtime, and a TypedDict IS a dict shape, so the types match the runtime.
# Optional (req:false) keys are modelled as TypedDict key-optionality
# (total=False), split into a required base + total=False subclass when a type
# has both required and optional keys.

from __future__ import annotations

from typing import TypedDict, Any


class GenerateCustomPlaceholder(TypedDict, total=False):
    id: str


class GenerateCustomPlaceholderLoadMatchRequired(TypedDict):
    background: str
    height: int
    text_color: str
    width: int


class GenerateCustomPlaceholderLoadMatch(GenerateCustomPlaceholderLoadMatchRequired, total=False):
    text: str


class GenerateRectangularPlaceholder(TypedDict, total=False):
    id: str


class GenerateRectangularPlaceholderLoadMatchRequired(TypedDict):
    height: int
    width: int


class GenerateRectangularPlaceholderLoadMatch(GenerateRectangularPlaceholderLoadMatchRequired, total=False):
    text: str


class GenerateSquarePlaceholder(TypedDict, total=False):
    id: str


class GenerateSquarePlaceholderLoadMatchRequired(TypedDict):
    id: int


class GenerateSquarePlaceholderLoadMatch(GenerateSquarePlaceholderLoadMatchRequired, total=False):
    text: str
