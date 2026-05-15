# ImagePlaceholderGenerator SDK feature factory

from feature.base_feature import ImagePlaceholderGeneratorBaseFeature
from feature.test_feature import ImagePlaceholderGeneratorTestFeature


def _make_feature(name):
    features = {
        "base": lambda: ImagePlaceholderGeneratorBaseFeature(),
        "test": lambda: ImagePlaceholderGeneratorTestFeature(),
    }
    factory = features.get(name)
    if factory is not None:
        return factory()
    return features["base"]()
