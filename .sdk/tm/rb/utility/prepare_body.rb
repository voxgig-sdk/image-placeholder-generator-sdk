# ImagePlaceholderGenerator SDK utility: prepare_body
module ImagePlaceholderGeneratorUtilities
  PrepareBody = ->(ctx) {
    ctx.op.input == "data" ? ctx.utility.transform_request.call(ctx) : nil
  }
end
