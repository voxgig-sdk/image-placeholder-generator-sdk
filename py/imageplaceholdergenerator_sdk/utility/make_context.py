# ImagePlaceholderGenerator SDK utility: make_context

from imageplaceholdergenerator_sdk.core.context import ImagePlaceholderGeneratorContext


def make_context_util(ctxmap, basectx):
    return ImagePlaceholderGeneratorContext(ctxmap, basectx)
