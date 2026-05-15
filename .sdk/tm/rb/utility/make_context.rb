# ImagePlaceholderGenerator SDK utility: make_context
require_relative '../core/context'
module ImagePlaceholderGeneratorUtilities
  MakeContext = ->(ctxmap, basectx) {
    ImagePlaceholderGeneratorContext.new(ctxmap, basectx)
  }
end
