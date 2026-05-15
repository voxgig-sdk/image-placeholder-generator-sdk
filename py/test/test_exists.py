# ProjectName SDK exists test

import pytest
from imageplaceholdergenerator_sdk import ImagePlaceholderGeneratorSDK


class TestExists:

    def test_should_create_test_sdk(self):
        testsdk = ImagePlaceholderGeneratorSDK.test(None, None)
        assert testsdk is not None
