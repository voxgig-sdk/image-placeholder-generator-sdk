# ImagePlaceholderGenerator SDK feature factory

require_relative 'feature/base_feature'
require_relative 'feature/test_feature'


module ImagePlaceholderGeneratorFeatures
  def self.make_feature(name)
    case name
    when "base"
      ImagePlaceholderGeneratorBaseFeature.new
    when "test"
      ImagePlaceholderGeneratorTestFeature.new
    else
      ImagePlaceholderGeneratorBaseFeature.new
    end
  end
end
