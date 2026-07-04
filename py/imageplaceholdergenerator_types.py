# Typed models for the ImagePlaceholderGenerator SDK.
#
# GENERATED from the API model: main.kit.entity.<e>.fields[] and per-op
# params (op.<name>.points[].args.params[]). Field/param types come from the
# canonical type sentinels via @voxgig/sdkgen canonToType (source of truth:
# @voxgig/apidef VALID_CANON). Do not edit by hand.

from __future__ import annotations

from dataclasses import dataclass
from typing import Optional, Any


@dataclass
class GenerateCustomPlaceholder:
    pass


@dataclass
class GenerateCustomPlaceholderLoadMatch:
    background: str
    height: int
    text_color: str
    width: int


@dataclass
class GenerateRectangularPlaceholder:
    pass


@dataclass
class GenerateRectangularPlaceholderLoadMatch:
    height: int
    width: int


@dataclass
class GenerateSquarePlaceholder:
    pass


@dataclass
class GenerateSquarePlaceholderLoadMatch:
    id: int

