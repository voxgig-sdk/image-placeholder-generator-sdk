# ImagePlaceholderGenerator SDK exists test

require "minitest/autorun"
require_relative "../ImagePlaceholderGenerator_sdk"

class ExistsTest < Minitest::Test
  def test_create_test_sdk
    testsdk = ImagePlaceholderGeneratorSDK.test(nil, nil)
    assert !testsdk.nil?
  end
end
