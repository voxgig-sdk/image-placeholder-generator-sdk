# ImagePlaceholderGenerator SDK feature factory

require_relative 'feature/base_feature'
require_relative 'feature/ratelimit_feature'
require_relative 'feature/retry_feature'
require_relative 'feature/test_feature'
require_relative 'feature/timeout_feature'


module ImagePlaceholderGeneratorFeatures
  def self.make_feature(name)
    case name
    when "base"
      ImagePlaceholderGeneratorBaseFeature.new
    when "ratelimit"
      ImagePlaceholderGeneratorRatelimitFeature.new
    when "retry"
      ImagePlaceholderGeneratorRetryFeature.new
    when "test"
      ImagePlaceholderGeneratorTestFeature.new
    when "timeout"
      ImagePlaceholderGeneratorTimeoutFeature.new
    else
      ImagePlaceholderGeneratorBaseFeature.new
    end
  end
end
