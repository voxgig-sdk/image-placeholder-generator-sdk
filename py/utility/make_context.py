# ImagePlaceholderGenerator SDK utility: make_context

from core.context import ImagePlaceholderGeneratorContext


def make_context_util(ctxmap, basectx):
    return ImagePlaceholderGeneratorContext(ctxmap, basectx)
