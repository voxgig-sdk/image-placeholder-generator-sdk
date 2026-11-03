# ImagePlaceholderGenerator SDK utility: prepare_body
require_relative 'media'
module ImagePlaceholderGeneratorUtilities
  PrepareBody = ->(ctx) {
    return nil unless ctx.op.input == "data"
    return ImagePlaceholderGeneratorUtilities.raw_body(ctx.reqdata) if ImagePlaceholderGeneratorUtilities.raw_request?(ctx.point)
    ctx.utility.transform_request.call(ctx)
  }
end
