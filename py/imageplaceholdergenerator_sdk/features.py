# ImagePlaceholderGenerator SDK feature factory

from imageplaceholdergenerator_sdk.feature.base_feature import ImagePlaceholderGeneratorBaseFeature
from imageplaceholdergenerator_sdk.feature.ratelimit_feature import ImagePlaceholderGeneratorRatelimitFeature
from imageplaceholdergenerator_sdk.feature.retry_feature import ImagePlaceholderGeneratorRetryFeature
from imageplaceholdergenerator_sdk.feature.test_feature import ImagePlaceholderGeneratorTestFeature
from imageplaceholdergenerator_sdk.feature.timeout_feature import ImagePlaceholderGeneratorTimeoutFeature


_FEATURES = {
    "base": lambda: ImagePlaceholderGeneratorBaseFeature(),
    "ratelimit": lambda: ImagePlaceholderGeneratorRatelimitFeature(),
    "retry": lambda: ImagePlaceholderGeneratorRetryFeature(),
    "test": lambda: ImagePlaceholderGeneratorTestFeature(),
    "timeout": lambda: ImagePlaceholderGeneratorTimeoutFeature(),
}


def _make_feature(name):
    factory = _FEATURES.get(name)
    if factory is not None:
        return factory()
    return _FEATURES["base"]()


# True when this SDK was generated with the named feature class - the
# constructor's tolerance for extend-carried features reads this (an
# active name with no generated class must not become a BaseFeature
# stray when an extend instance carries it).
def _has_feature(name):
    return name in _FEATURES
