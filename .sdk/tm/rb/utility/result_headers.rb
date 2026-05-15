# ImagePlaceholderGenerator SDK utility: result_headers
module ImagePlaceholderGeneratorUtilities
  ResultHeaders = ->(ctx) {
    response = ctx.response
    result = ctx.result
    if result
      if response && response.headers.is_a?(Hash)
        result.headers = response.headers
      else
        result.headers = {}
      end
    end
    result
  }
end
